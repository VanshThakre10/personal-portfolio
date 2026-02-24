import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-brand-background border-t border-brand-border pt-20 pb-10 px-4 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand/Logo Section */}
                    <div className="col-span-1 md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6"
                        >
                            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
                                VANSH<span className="text-brand-primary">THAKRE</span>
                            </h2>
                            <p className="text-gray-400 max-w-sm leading-relaxed font-body">
                                Crafting high-performance, visually stunning, and user-centric web experiences with modern technologies.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex gap-4"
                        >
                            <SocialLink icon={<Github size={20} />} href="https://github.com/VanshThakre10" label="GitHub" />
                            <SocialLink icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/vansh-thakre-0ab773262" label="LinkedIn" />
                            <SocialLink icon={<Mail size={20} />} href="mailto:thakrevansh833@gmail.com" label="Email" />
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <motion.h4
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-white font-semibold mb-6 uppercase tracking-wider text-sm"
                        >
                            Navigation
                        </motion.h4>
                        <ul className="space-y-4">
                            <FooterLink href="#" label="Home" />
                            <FooterLink href="#about" label="About" />
                            <FooterLink href="#skills" label="Skills" />
                            <FooterLink href="#contact" label="Contact" />
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <motion.h4
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-white font-semibold mb-6 uppercase tracking-wider text-sm"
                        >
                            Get in Touch
                        </motion.h4>
                        <div className="space-y-4 text-gray-400 font-body">
                            <p className="hover:text-brand-primary transition-colors cursor-pointer flex items-center gap-2">
                                <Mail size={16} /> thakrevansh833@gmail.com
                            </p>
                            <p className="text-sm leading-relaxed">
                                Available for freelance projects and full-time opportunities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm font-mono">
                        &copy; {currentYear} Vansh Thakre. Built with React & Tailwind.
                    </p>

                    <motion.button
                        whileHover={{ y: -5 }}
                        onClick={scrollToTop}
                        className="p-3 bg-brand-surface border border-brand-border rounded-full text-gray-400 hover:text-white hover:border-brand-primary transition-all shadow-lg"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

const SocialLink = ({ icon, href, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-brand-surface border border-brand-border text-gray-400 hover:text-brand-primary hover:border-brand-primary transition-all"
        aria-label={label}
    >
        {icon}
    </motion.a>
);

const FooterLink = ({ href, label }) => (
    <li>
        <a
            href={href}
            className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block font-body"
        >
            {label}
        </a>
    </li>
);

export default Footer;
