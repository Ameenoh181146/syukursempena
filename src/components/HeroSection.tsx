import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const mainImage = "/images/55.jpg"; 

  return (
    // เปลี่ยนพื้นหลังหลักเป็นเทาเข้มเกือบดำ (Dark Moody Grey)
    <header ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
      
      {/* 1. พื้นหลังไล่เฉดสีเทา-ดำ เพื่อสร้างมิติ Moody */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-[#1a1a1a] to-black z-0" />
      
      {/* 2. โลโก้พื้นหลัง - ปรับความชัดให้จางลงเล็กน้อยเพื่อความขรึม */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center opacity-[0.05] blur-[1px] pointer-events-none z-0"
        animate={{ 
          rotate: 360,
          y: [0, -20, 0],
        }}
        transition={{ 
          rotate: { duration: 150, repeat: Infinity, ease: "linear" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      >
         <img 
          src="https://scontent-bkk1-1.xx.fbcdn.net/v/t39.30808-6/356419900_782635290320410_371248448507337584_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=as3y4nWotrwQ7kNvwFFdrjb&_nc_oc=AdkBj9TxSSlPbTW53MlBZp4J_66T5AzV5F76_0ln4WKSpnPZBE5z1thPvCU76ePDS_s&_nc_zt=23&_nc_ht=scontent-bkk1-1.xx&_nc_gid=6qnJ_8SXrik84j-LuaCWvA&oh=00_Afr81PuSVTSitgBbc5KYfBJtrw3RSXXpCQP51CF5S9J1BA&oe=696ED27B" 
          alt="School Logo Background" 
          className="w-[130vw] max-w-none"
        />
      </motion.div>

      {/* 3. เนื้อหาหลัก */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-3xl px-6">
        {/* การ์ดสีขาวโปร่งแสง (Glassmorphism) จะดูเด่นขึ้นมากบนพื้นหลังสีเทาเข้ม */}
        <div className="backdrop-blur-xl bg-white/60 border border-white/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
          
          {/* Badge ครบรอบ 10 ปี */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 border border-black/20 text-black mb-8"
          >
            <span className="text-sm font-medium tracking-wider uppercase flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-black" />
              Pulang kerana rindu
            </span>
          </motion.div>

          {/* กรอบรูปสีทอง */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative mb-10 group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-200 rounded-2xl blur opacity-30"></div>
            <div className="relative p-[3px] rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-100 to-amber-600 shadow-2xl">
               <div className="bg-[#fffdf7] rounded-[0.8rem] overflow-hidden aspect-square md:aspect-video flex items-center justify-center p-4"> 
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={mainImage} 
                    alt="School Anniversary Logo" 
                    className="w-full h-full object-contain" 
                  />
               </div>
            </div>
          </motion.div>

          {/* ชื่อและข้อความ */}
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
            <h2 className="text-xl md:text-2xl text-black/80 font-light mb-2">شكورسمفنا </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              معهد بندغستر الإسلامى
            </h1>
            <p className="text-black/60 text-lg">โรงเรียนบันนังสตาวิทยานุสรณ์</p>
          </motion.div>
        </div>
      </motion.div>

      {/* สัญลักษณ์แจ้งเตือนให้เลื่อนลง - ปรับสีให้ขาวขึ้นเพื่อให้เห็นชัดบนพื้นหลังมืด */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">เลื่อนลงเพื่อดูเพิ่มเติม</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>
    </header>
  );
};

export default HeroSection;