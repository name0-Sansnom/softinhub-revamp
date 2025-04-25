import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const heroImg = '/hero.jpg';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20 relative z-10">
      <div className="flex flex-col md:flex-row items-center">
        <AnimatedSection className="md:w-1/2 mb-10 md:mb-0" direction="left">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white">Software</span> and <span className="text-white">brand</span> <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">development</span>
          </motion.h1>
          <motion.p 
            className="text-[#CBD5E1] mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We are a passion-driven Full-Stack and Development Agency 
            that helps businesses innovate and grow in the 
            ever-changing digital world.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
  className="
    bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] hover:opacity-90 transition-transform hover:scale-105 py-3 px-6 rounded-md
  "
>
  Get Started
</Button>

            <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 py-3 px-6 rounded-md">
              Our Services
            </Button>
          </motion.div>
        </AnimatedSection>
        <AnimatedSection className="md:w-1/2 flex justify-center" direction="right" delay={0.3}>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20"></div>
            <motion.img 
              src={heroImg} 
              alt="Mobile app interface on smartphone" 
              className="relative rounded-xl shadow-2xl w-full max-w-sm"
              whileHover={{ 
                scale: 1.03,
                rotate: 1,
                transition: { duration: 0.3 } 
              }}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
