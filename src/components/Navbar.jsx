import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, User, Mail, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#', icon: <Sparkles size={18} /> },
        { name: 'About', href: '#about', icon: <User size={18} /> },
        { name: 'Skills', href: '#skills', icon: <Code2 size={18} /> },
        { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
    ];

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full border border-brand-border transition-all duration-300 ${scrolled
                        ? 'bg-brand-background/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                        : 'bg-brand-surface/20 backdrop-blur-md'
                    } hover:bg-brand-surface/40 hover:border-brand-primary/50 group/nav`}
            >
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group/logo relative overflow-hidden">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    >
                        V
                    </motion.div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-tight text-white leading-tight">
                            VANSH<span className="text-brand-primary">.</span>
                        </span>
                        <span className="text-[10px] text-brand-secondary font-mono tracking-widest uppercase opacity-70">
                            Developer
                        </span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all overflow-hidden group/link"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <motion.div
                                className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"
                            />
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="ml-4 px-6 py-2 bg-brand-primary text-white text-sm font-semibold rounded-full hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all hover:scale-105 active:scale-95"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-gray-400 hover:text-white transition-colors relative z-50 bg-brand-surface/50 rounded-full border border-brand-border"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] md:hidden"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            className="fixed top-24 left-4 right-4 bg-brand-surface/95 border border-brand-border rounded-3xl p-8 z-50 md:hidden shadow-2xl backdrop-blur-2xl"
                        >
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-4 text-xl font-semibold text-gray-300 hover:text-brand-primary transition-all p-2 rounded-xl hover:bg-white/5"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-brand-background flex items-center justify-center border border-brand-border group-hover:border-brand-primary">
                                            {link.icon}
                                        </div>
                                        {link.name}
                                    </a>
                                ))}
                                <hr className="border-brand-border my-2" />
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-4 bg-brand-primary text-white text-center font-bold rounded-2xl shadow-lg shadow-brand-primary/20"
                                >
                                    Get In Touch
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
