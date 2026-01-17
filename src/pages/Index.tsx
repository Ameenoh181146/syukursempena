import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import TimelineSection from "@/components/TimelineSection";
import AlumniSection from "@/components/AlumniSection";
import GuestbookSection from "@/components/GuestbookSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

// ในไฟล์ Index.tsx
const Index = () => {
  return (
    <div className="max-w-md mx-auto shadow-2xl min-h-screen relative bg-card overflow-x-hidden">
      <HeroSection />
      <IntroSection />
      
      {/* ตรวจสอบว่า TimelineSection ในไฟล์ต้นทางชื่อ TimelineSection หรือไม่ */}
      <TimelineSection /> 
      
      <AlumniSection />
      
      {/* 🔻 แก้จุดนี้: ลบ guestbookUrl ออก เพราะ Component ไม่ได้รับค่านี้แล้ว */}
      <GuestbookSection /> 
      
      <Footer schoolName="โรงเรียนของคุณ" alumniGeneration="1" />
      <BackToTop />
    </div>
  );
};

export default Index;



