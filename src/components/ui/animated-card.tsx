'use client'
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
};

export function AnimatedCard({
  children,
  className = '',
  index = 0,
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<HTMLElement>);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`relative ${className}`}
    >
      <motion.div
        whileHover={{ 
          y: -5, 
          boxShadow: "0 10px 30px -10px rgba(124, 58, 237, 0.2)"
        }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}