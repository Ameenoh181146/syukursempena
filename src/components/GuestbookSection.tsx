import { useState, useEffect } from "react";
import { Send, User, Hash, Trash2, Pencil, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, addDoc, query, orderBy, 
  onSnapshot, serverTimestamp, doc, deleteDoc, updateDoc 
} from "firebase/firestore";

// --- นำค่าจาก Firebase ของคุณมาวางตรงนี้ ---
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456..."
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const GuestbookSection = () => {
  const [notes, setNotes] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [studentId, setStudentId] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    // ตรวจสอบความยาวรหัสนักเรียน (ต้องไม่ว่างและ >= 5 ตัว)
    if (!studentId.trim() || studentId.trim().length < 5) {
      alert("รหัสนักเรียนต้องมีอย่างน้อย 5 ตัวนะจ๊ะ! 🧐");
      return;
    }

    if (!message.trim()) {
      alert("เอ่ะะะะะ ลืมพิมพ์ความในใจแน่เลย TOT");
      return;
    }

    try {
      await addDoc(collection(db, "guestbook"), {
        text: message,
        studentId: studentId.trim(),
        createdAt: serverTimestamp(),
      });
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("คุณต้องการลบข้อความนี้ใช่หรือไม่?")) {
      try {
        await deleteDoc(doc(db, "guestbook", id));
      } catch (error) {
        alert("ไม่สามารถลบได้ กรุณาลองใหม่");
      }
    }
  };

  const startEditing = (note: any) => {
    setEditingId(note.id);
    setEditValue(note.text);
  };

  const handleUpdate = async (id: string) => {
    try {
      await updateDoc(doc(db, "guestbook", id), {
        text: editValue,
        updatedAt: serverTimestamp()
      });
      setEditingId(null);
    } catch (error) {
      alert("ไม่สามารถแก้ไขได้");
    }
  };

  return (
    <section className="p-6 bg-primary text-white rounded-t-[2.5rem] shadow-inner">
      <h2 className="text-xl font-bold mb-6 text-center">Cerita masa lalu & Rindu</h2>
      
      <div className="bg-white/10 p-4 rounded-2xl border border-white/20 mb-8 backdrop-blur-sm">
        <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 mb-1 shadow-inner">
          <Hash className="text-gray-400 w-4 h-4" />
          <input 
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            placeholder="รหัสนักเรียน "
            className="flex-1 text-black text-sm focus:outline-none"
          />
        </div>
        
        {/* Helper Text บอกจำนวนตัวอักษร */}
        <p className={`text-[10px] mb-3 ml-1 ${studentId.length >= 5 ? "text-green-300" : "text-orange-300"}`}>
          {studentId.length < 5 
            ? `* ขาดอีก ${5 - studentId.length} ตัวจะครบเงื่อนไข` 
            : "✓ รหัสพร้อมใช้งานแล้ว"}
        </p>

        <div className="flex gap-2">
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="พิมพ์ความในใจของคุณ..."
            rows={2}
            className="flex-1 p-3 rounded-xl text-black text-sm focus:outline-none shadow-inner resize-none"
          />
          <button 
            onClick={handleSend} 
            className={`px-4 rounded-xl shadow-lg transition-all ${
              studentId.trim().length >= 5 
                ? "bg-orange-500 active:scale-95" 
                : "bg-gray-400 cursor-not-allowed opacity-50"
            }`}
          >
            <Send size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
        <AnimatePresence>
          {notes.map(note => {
            const isOwner = studentId.trim() !== "" && note.studentId === studentId;

            return (
              <motion.div 
                key={note.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-white text-gray-800 rounded-2xl rounded-tl-none shadow-md relative border-l-4 border-orange-400"
              >
                {editingId === note.id ? (
                  <div className="space-y-2">
                    <textarea 
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="w-full p-2 border rounded-lg text-sm focus:ring-1 focus:ring-blue-400 outline-none"
                    />
                    <div className="flex justify-end gap-2">
                      <button onClick={() => setEditingId(null)} className="p-1.5 text-gray-400 hover:text-gray-600"><X size={18}/></button>
                      <button onClick={() => handleUpdate(note.id)} className="p-1.5 text-green-500 hover:text-green-600"><Check size={18}/></button>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="text-sm leading-relaxed mb-3 pr-8">{note.text}</p>
                    {isOwner && (
                      <div className="absolute top-2 right-2 flex gap-1">
                        <button onClick={() => startEditing(note)} className="p-1.5 text-blue-400 hover:bg-blue-50 rounded-full transition-colors">
                          <Pencil size={14} />
                        </button>
                        <button onClick={() => handleDelete(note.id)} className="p-1.5 text-red-400 hover:bg-red-50 rounded-full transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    )}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                      <div className="flex items-center gap-1.5 text-blue-600 font-bold">
                        <User className="w-3.5 h-3.5" />
                        <span className="text-[11px]">ID: {note.studentId}</span>
                      </div>
                      <span className="text-[9px] text-gray-400 italic">
                        {note.updatedAt ? '(แก้ไขแล้ว) ' : ''}
                        {note.createdAt?.toDate() ? new Date(note.createdAt.toDate()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'เมื่อสักครู่'}
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GuestbookSection;