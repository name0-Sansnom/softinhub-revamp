import { motion } from "framer-motion";
import { servicesData } from "@/features/data/services";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedCard } from "@/components/ui/animated-card";

export default function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-12 md:py-20 relative z-10">
      <AnimatedSection>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Give no boundaries to your<br/>brand or product
        </motion.h2>
        <motion.p 
          className="text-[#CBD5E1] text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We know what it takes to build an exceptional brand and product. Our tools 
          can be customized across boundaries to suit individual client&apos;s products. Our pricing plan gives you flexibility on
          requirements.
        </motion.p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <AnimatedCard key={index} index={index}>
            <div 
              className="bg-darkgray/50 p-6 rounded-xl border border-white/10 hover:border-[hsl(var(--primary)/0.5)] transition-all group h-full"
            >
              <motion.div 
                className="w-12 h-12 rounded-full bg-[hsl(var(--primary)/0.2)] flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--primary)/1)] transition-colors"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5 } 
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-[#CBD5E1]">{service.description}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
