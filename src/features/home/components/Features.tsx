import { motion } from "framer-motion";
import { featuresData } from "@/features/data/features";
import { AnimatedSection } from "@/components/ui/animated-section";
import Image from "next/image";

export default function Features() {
  return (
    <div id="features" className="relative z-10">
      {/* Feature Intro */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <AnimatedSection>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Innovative Individuals
          </motion.h2>
          <motion.p 
            className="text-[#CBD5E1] text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to start establishing your brand&apos;s online presence? We&apos;re a group
            of creative people with one objective in mind: to assist brands establish 
            a stronger presence on the digital shelves.
          </motion.p>
        </AnimatedSection>

        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <AnimatedSection className="md:w-1/2" direction="left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]  bg-clip-text text-transparent">{featuresData[0].title}</h3>
            <p className="text-[#CBD5E1] mb-6 text-xl">
              {featuresData[0].description}
            </p>
          </AnimatedSection>
          <AnimatedSection className="md:w-1/2" direction="right" delay={0.2}>
            <motion.div 
              className="bg-[#1E1E1E] rounded-lg p-4 border border-white/10 shadow-xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 30px -10px rgba(124, 58, 237, 0.3)",
                transition: { duration: 0.3 } 
              }}
            >
              <Image 
                src={featuresData[0].imageSrc}
                alt={featuresData[0].imageAlt}
                width={500}
                height={300}
                className="rounded-lg w-full h-auto"
                priority
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <AnimatedSection className="md:w-1/2 order-2 md:order-1" direction="left">
            <motion.div 
              className="bg-[#1E1E1E] rounded-lg p-4 border border-white/10 shadow-xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 30px -10px rgba(124, 58, 237, 0.3)",
                transition: { duration: 0.3 } 
              }}
            >
              <Image 
                src={featuresData[1].imageSrc}
                alt={featuresData[1].imageAlt}
                width={500}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </motion.div>
          </AnimatedSection>
          <AnimatedSection className="md:w-1/2 order-1 md:order-2" direction="right" delay={0.2}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">{featuresData[1].title}</h3>
            <p className="text-[#CBD5E1] mb-6 text-xl">
              {featuresData[1].description}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature 3 */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <AnimatedSection className="md:w-1/2" direction="left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]  bg-clip-text text-transparent">{featuresData[2].title}</h3>
            <p className="text-[#CBD5E1] mb-6 text-xl">
              {featuresData[2].description}
            </p>
          </AnimatedSection>
          <AnimatedSection className="md:w-1/2" direction="right" delay={0.2}>
            <motion.div 
              className="bg-[#1E1E1E] rounded-lg p-4 border border-white/10 shadow-xl"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 30px -10px rgba(124, 58, 237, 0.3)",
                transition: { duration: 0.3 } 
              }}
            >
              <Image 
                src={featuresData[2].imageSrc}
                alt={featuresData[2].imageAlt}
                width={500}
                height={300}
                className="rounded-lg w-full h-auto"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
