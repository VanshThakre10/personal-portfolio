import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Award } from 'lucide-react';
import profileImage from '../../public/vansh.jpg';

const Trait = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-start gap-4 p-4 rounded-xl border border-brand-border bg-brand-surface/50 hover:bg-brand-surface transition-colors"
    >
        <div className="p-2 rounded-lg bg-brand-primary/10 text-brand-primary">
            <Icon size={24} />
        </div>
        <div>
            <h3 className="text-white font-semibold mb-1">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    </motion.div>
);

const TimelineItem = ({ year, title, description }) => (
    <div className="relative pl-8 pb-8 border-l border-brand-border last:pb-0">
        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-brand-primary" />
        <span className="text-sm text-brand-secondary font-mono mb-1 block">{year}</span>
        <h4 className="text-white font-semibold mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const About = () => {
    return (
        <section className="py-24 bg-brand-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Image & Stats relative to viewport or sticky if needed */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-brand-border group">
                            {/* Placeholder for Developer Photo */}
                            <div className="absolute inset-0 bg-brand-surface flex items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/20 via-brand-surface to-brand-background">
                                {/* <Users size={64} className="text-brand-border opacity-50" /> */}
                                <img src={profileImage} alt="vansh photo" width={"100%"} height={"100%"} />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-mono text-sm">based in</p>
                                <p className="text-2xl font-bold text-white">Akola, Maharashtra</p>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        {/* <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 p-6 bg-brand-surface border border-brand-border rounded-xl shadow-2xl hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-brand-cta/10 rounded-full text-brand-cta">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white">5+</p>
                                    <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">Years Experience</p>
                                </div>
                            </div>
                        </motion.div> */}
                    </motion.div>

                    {/* Right Column - Content */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                More than just <span className="text-brand-primary">code</span>.
                            </h2>
                            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    I started my journey hacking together MySpace layouts, eventually falling in love with the intersection of <span className="text-white">design and engineering</span>.
                                </p>
                                <p>
                                    Today, I obsess over <span className="text-brand-secondary">micro-interactions</span> and <span className="text-brand-secondary">performance optimization</span>. I believe that the best digital products feel inevitable – intuitive, fast, and delightful to use.
                                </p>
                                <p>
                                    My philosophy is simple: Build things that solve real problems, and make them look good doing it.
                                </p>
                            </div>
                        </motion.div>

                        {/* Traits Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Trait
                                icon={Zap}
                                title="Performance Obsessed"
                                description="60fps animations and sub-second load times are my baseline."
                                delay={0.2}
                            />
                            <Trait
                                icon={Code}
                                title="Clean Code"
                                description="Scalable, maintainable, and self-documenting architecture."
                                delay={0.3}
                            />
                        </div>

                        {/* Timeline */}
                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-brand-primary"></span>
                                Journey
                            </h3>
                            <div className="space-y-0">
                                <TimelineItem
                                    year="2024 - Present"
                                    title="Senior Frontend Engineer"
                                    description="Leading frontend architecture for enterprise-scale SaaS products."
                                />
                                <TimelineItem
                                    year="2021 - 2024"
                                    title="Frontend Developer"
                                    description="Built and shipped 10+ web applications for early-stage startups."
                                />
                                <TimelineItem
                                    year="2018 - 2021"
                                    title="UI/UX Designer & Dev"
                                    description="Bridged the gap between design systems and implementation."
                                />
                            </div>
                        </motion.div> */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
