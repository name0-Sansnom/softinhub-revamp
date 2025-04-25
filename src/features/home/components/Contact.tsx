import { motion } from "framer-motion";
import { contactInfoData } from "@/features/data/contact";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-12 md:py-20 relative z-10">
      <AnimatedSection direction="up">
        <motion.div 
          className="bg-gradient-to-br from-[hsl(var(--primary)/0.2)] to-[hsl(var(--secondary)/0.2)] p-8 md:p-12 rounded-2xl relative overflow-hidden"
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.25)",
            transition: { duration: 0.5 } 
          }}
        >
          <div className="absolute inset-0 wave-footer opacity-50"></div>
          <div className="relative z-10">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Email us Today
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our dedicated support team is here to<br/>
              help with any form of request
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                {contactInfoData.slice(0, 4).map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ 
                      x: 5, 
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <div className="text-sm text-[#CBD5E1] mb-1">{info.category}</div>
                    <div className="font-medium">{info.value}</div>
                  </motion.div>
                ))}
              </div>
              
              <div>
                {contactInfoData.slice(4, 7).map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ 
                      x: 5, 
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <div className="text-sm text-[#CBD5E1] mb-1">{info.category}</div>
                    <div className="font-medium">{info.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}
