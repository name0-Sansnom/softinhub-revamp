'use client'
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="container max-w-7xl mx-auto px-4 py-6 flex justify-between items-center relative z-10">
      <div className="flex items-center">
        <Link href="/" className="text-[hsl(var(--primary))] text-2xl font-extrabold flex items-center gap-3">
          <Image 
                src='/logo.svg'
                alt='logo'
                width={40}
                height={40}
                className="rounded-lg w-full h-auto"
              />
          Softin
        </Link>
      </div>
      
      <div className={`
        md:flex md:space-x-6 md:items-center md:static
        ${mobileMenuOpen 
          ? "flex flex-col absolute top-20 right-4 bg-darkgray p-4 rounded-md shadow-lg z-50 space-y-4" 
          : "hidden"}
      `}>
        <a href="#features" className="text-sm font-medium hover:text-[hsl(var(--primary))] transition-colors">Features</a>
        <a href="#services" className="text-sm font-medium hover:text-[hsl(var(--primary))] transition-colors">Services</a>
        <a href="#contact" className="text-sm font-medium hover:text-[hsl(var(--primary))] transition-colors">Contact</a>
      </div>
      
      <button className="md:hidden text-white" onClick={toggleMobileMenu}>
        <Menu className="h-6 w-6" />
      </button>
    </nav>
  );
}
