import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, Eye, X } from "lucide-react";

const TimelineItem = ({ year, title, description, images = [], isStart }: any) => {
  const MY_PASSWORD = "PAK-ALUMNI"; 

  const [inputPass, setInputPass] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const handleUnlock = () => {
    if (inputPass === MY_PASSWORD) {
      setIsUnlocked(true);
    } else {
      alert("รหัสผ่านไม่ถูกต้องจ้า ลองใหม่อีกทีนะ! ❌");
      setInputPass("");
    }
  };

  const displayLimit = 6;
  const visibleImages = showAll ? images : images.slice(0, displayLimit);

  return (
    <div className="relative pl-10 pb-12 border-l-2 border-slate-700 ml-4 text-left">
      {/* จุดวงกลมบนเส้น Timeline */}
      <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full border-4 border-[#1a1a1a] shadow-sm z-10 ${isStart ? 'bg-amber-500' : 'bg-blue-600'}`}></div>

      {/* 🌙 เปลี่ยนพื้นหลังตรงนี้: จาก bg-white เป็น bg-slate-900 */}
      <div className="bg-slate-900 p-5 rounded-2xl shadow-2xl border border-slate-800 -mt-2 relative overflow-hidden">
        <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full uppercase">{year}</span>
        
        {/* เปลี่ยนสีหัวข้อเป็นสีสว่าง */}
        <h3 className="text-lg font-bold mt-2 text-slate-100">{title}</h3>
        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{description}</p>

        <div className="mt-6">
          {!isUnlocked ? (
            // 🔒 หน้ากากล็อกรหัสผ่าน (โทนเข้ม)
            <div className="bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center">
              <Lock className="w-10 h-10 text-slate-600 mb-3" />
              <p className="text-xs text-slate-400 mb-4 font-bold">ใส่รหัสผ่านเพื่อดูรูปภาพความทรงจำ</p>
              <div className="flex gap-2 w-full max-w-[200px]">
                <input 
                  type="password"
                  value={inputPass}
                  onChange={(e) => setInputPass(e.target.value)}
                  placeholder="รหัสผ่าน..."
                  className="flex-1 p-2 text-xs rounded-lg border border-slate-700 bg-slate-900 text-white focus:ring-1 focus:ring-amber-500 outline-none"
                />
                <button onClick={handleUnlock} className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors">ตกลง</button>
              </div>
            </div>
          ) : (
            // 🔓 เมื่อรหัสถูก
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-center gap-2 mb-3 text-amber-500 text-[10px] font-bold uppercase">
                <Unlock size={12} /> ยินดีต้อนรับกลับสู่ความทรงจำ
              </div>
              
              {/* สโลแกนที่คุณชอบ แอบใส่ไว้ตรงนี้ได้ครับ */}
              <p className="text-[9px] text-slate-500 mb-3 italic">"Yang jauh kita dekatkan, Yang rapat kita mesrakan"</p>

              <div className="grid grid-cols-3 gap-2">
                {visibleImages.map((img: string, idx: number) => (
                  <div key={idx} onClick={() => setSelectedImg(img)} className="aspect-square rounded-lg overflow-hidden bg-slate-800 cursor-pointer hover:opacity-80 transition-opacity">
                    <img src={img} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              {images.length > displayLimit && (
                <button onClick={() => setShowAll(!showAll)} className="mt-4 w-full py-2 border border-slate-800 rounded-xl text-xs font-bold text-slate-500 hover:text-slate-300 transition-colors">
                  {showAll ? "▲ ซ่อนรูปภาพ" : `▼ ดูภาพทั้งหมด (${images.length} รูป)`}
                </button>
              )}
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Lightbox สำหรับดูรูปใหญ่ */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md" onClick={() => setSelectedImg(null)}>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-slate-900 p-2 rounded-2xl max-w-full max-h-[80vh] overflow-hidden border border-slate-800" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImg} className="w-full h-full object-contain rounded-xl" />
            </motion.div>
            <button className="absolute top-10 right-10 text-white" onClick={() => setSelectedImg(null)}><X /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimelineItem;