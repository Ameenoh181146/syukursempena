// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ใช้รหัสจริงจากหน้าจอ Firebase ของคุณ
const firebaseConfig = {
  apiKey: "AIzaSyCFer0kcwMKP6qC0v6xXeBcPGAdFu5bLaI",
  authDomain: "syukursempena.firebaseapp.com",
  projectId: "syukursempena",
  storageBucket: "syukursempena.firebasestorage.app",
  messagingSenderId: "27990487204",
  appId: "1:27990487204:web:c4cf031470c3f9c65b631",
  measurementId: "G-CB0J6GLD4M"
};

// เริ่มต้นการทำงาน (ประกาศเพียงครั้งเดียว)
const app = initializeApp(firebaseConfig);

// ส่งออกตัวแปร db เพื่อให้ระบบดึงข้อมูลได้
export const db = getFirestore(app);