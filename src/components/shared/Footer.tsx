'use client'
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import Link from "next/link";
import Image from "next/image";
import { RiTwitterXFill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="container max-w-7xl mx-auto px-4 py-8 border-t border-white/10 relative z-10">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="flex items-center mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-primary text-lg font-bold flex items-center">
              <motion.div 
                className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-2"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 } 
                }}
              >
               <Image 
                src='/logo.svg'
                alt='logo'
                width={40}
                height={40}
                className="rounded-lg w-full h-auto"
              />
              </motion.div>
              Softin
            </Link>
          </motion.div>
          
          <motion.div 
            className="text-sm text-[#CBD5E1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            © {currentYear} Softin. All rights reserved.
          </motion.div>
          
          <motion.div 
            className="flex space-x-4 mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { icon: <RiTwitterXFill className="h-5 w-5" />, delay: 0 },
              { icon: <RiInstagramLine className="h-5 w-5" />, delay: 0.2 },
              { icon: <CiLinkedin className="h-5 w-5" />, delay: 0.1 }
            ].map((item, index) => (
              <motion.a 
                key={index}
                href="#" 
                className="text-[#CBD5E1] hover:text-primary transition-colors"
                whileHover={{ 
                  scale: 1.2,
                  y: -2,
                  transition: { duration: 0.2 } 
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + item.delay }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </footer>
  );
}

export default Footer