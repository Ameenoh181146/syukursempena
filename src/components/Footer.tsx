interface FooterProps {
  schoolName?: string;
  alumniGeneration?: string;
}

const Footer = ({ 
  schoolName = "[ชื่อโรงเรียน]", 
  alumniGeneration = "[ใส่รุ่นของคุณ]" 
}: FooterProps) => {
  return (
    <footer className="py-10 text-center bg-card">
      <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
        SYUKUR SEMPENA MA'HAD BENDANGSTA AI-ISLAMI
      </p>
      <p className="text-[9px] text-muted-foreground/60 mt-2 leading-relaxed">
        website dari  wakil Alumni  {alumniGeneration}
        <br />
      
      </p>
    </footer>
  );
};

export default Footer;
