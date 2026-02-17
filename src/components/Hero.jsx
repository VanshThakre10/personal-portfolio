import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';

const CodeSnippet = ({ code, className, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.2, y: -20 }}
        transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: delay,
            ease: "easeInOut"
        }}
        className={`absolute hidden lg:block p-4 rounded-lg bg-brand-surface border border-brand-border font-mono text-xs text-gray-400 pointer-events-none select-none ${className}`}
    >
        <pre>{code}</pre>
    </motion.div>
);

const Hero = () => {
    const typingText = "I build fast, scalable and beautiful web experiences.";

    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-brand-background">
            {/* Background Grid & Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            <div className="absolute top-0 w-full h-[500px] bg-brand-primary/10 blur-[100px] rounded-full opacity-30" />

            {/* Floating Code Snippets */}
            <CodeSnippet
                code={`const developer = {\n  stack: ['React', 'Next.js'],\n  love: 'Clean Code'\n};`}
                className="top-20 left-10 md:left-20"
                delay={0}
            />
            <CodeSnippet
                code={`<Hero \n  title="Frontend Wizard"\n  animate={true}\n/>`}
                className="bottom-32 right-10 md:right-20"
                delay={2}
            />
            <CodeSnippet
                code={`useEffect(() => {\n  createMagic();\n}, []);`}
                className="top-40 right-10 md:right-32"
                delay={1}
            />

            {/* Main Content */}
            <div className="z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-brand-secondary font-mono tracking-wider mb-4"
                >
                    HELLO, I'M A FRONTEND DEVELOPER
                </motion.p>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                    <span className="text-white">
                        {typingText.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body"
                >
                    Translating complex designs into pixel-perfect, interactive, and performant web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button className="group relative px-8 py-3 bg-brand-cta text-white font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects <ArrowRight size={20} />
                        </span>
                        <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <button className="px-8 py-3 border border-brand-border text-white font-semibold rounded-lg hover:bg-brand-surface transition-all hover:border-brand-primary flex items-center gap-2">
                        Contact Me <Mail size={20} />
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="absolute bottom-10 animate-bounce text-gray-500"
            >
                <ChevronDown size={24} />
            </motion.div>
        </div>
    );
};

export default Hero;
