
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Facebook, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Mock submission delay
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com/VanshThakre10", color: "hover:text-white" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/vansh-thakre-0ab773262", color: "hover:text-[#0077B5]" },
    ];

    return (
        <section className="py-24 bg-brand-background relative overflow-hidden" id="contact">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                            Have a project in mind?<br />
                            <span className="text-brand-primary italic">Let's build it.</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            I'm currently available for freelance projects and full-time opportunities.
                            If you have an idea you'd like to bring to life, feel free to reach out.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-white font-semibold mb-4 uppercase tracking-widest text-sm">Connect with me</h3>
                                <div className="flex gap-6">
                                    {socialLinks.map((social, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            whileHover={{ y: -4 }}
                                            className={`text-gray-500 transition-colors ${social.color}`}
                                        >
                                            <social.icon size={28} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-brand-border inline-block">
                                <p className="text-gray-500 font-mono text-sm mb-2">Drop me a line at</p>
                                <a href="mailto:thakrevansh833@gmail.com" className="text-xl font-bold text-white hover:text-brand-primary transition-colors">
                                    thakrevansh833@gmail.com
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-brand-surface/30 backdrop-blur-xl border border-brand-border p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        className="h-[400px] flex flex-col items-center justify-center text-center"
                                    >
                                        <div className="w-20 h-20 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 size={48} className="text-[#10B981]" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-400">I'll get back to you within 24 hours.</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="mt-8 text-sm text-brand-primary hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 1 }}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-brand-background/50 border border-brand-border rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-gray-600"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full bg-brand-background/50 border border-brand-border rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-gray-600"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-400 ml-1">Project Description</label>
                                            <textarea
                                                required
                                                rows={4}
                                                placeholder="Tell me about your project..."
                                                className="w-full bg-brand-background/50 border border-brand-border rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-gray-600 resize-none"
                                            />
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold py-5 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#10B981]/20 disabled:opacity-70"
                                        >
                                            {status === 'sending' ? (
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <Send size={18} />
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
