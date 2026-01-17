import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        
        
        <h2 className="text-2xl font-bold text-foreground mb-4">
          SATU LANGKAH YANG HEBAT
        </h2>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
           Ma'had Bendangsta Alislami berdiri teguh di atas tanah wakaf yang penuh keberkatan, Menyemai benih ilmu duniawi dan ukhrawi demi melahirkan generasi yang berilmu dan beriman, Menjadi penyuluh cahaya buat masyarakat berlandaskan sebaik-baik manusia adalah yang memberi manfaat.  kami atas nama alumni ma'had ucap terimakasih kepada semua guru yang berjasa .
        </p>
        
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
