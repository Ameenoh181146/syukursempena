import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Yang jauh kita dekatkan, Yang dekat kita rapatkan, Yang rapat kita mesrakan",
    author: "KATA-KATA DARI ALUMNI ",
  },
 
];

const AlumniSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="bg-muted py-16 px-8 text-center border-t border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-bold text-foreground mb-6">
          เสียงจากศิษย์เก่า
        </h2>
        
        <div className="space-y-4">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-2xl shadow-sm border border-border relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
            >
              <Quote className="absolute top-4 left-4 w-4 h-4 text-primary/20" />
              <p className="italic text-muted-foreground text-sm leading-relaxed">
                "{item.quote}"
              </p>
              <div className="not-italic font-bold text-primary mt-3 text-xs">
                - {item.author} -
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AlumniSection;
