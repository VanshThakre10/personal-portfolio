
import React from 'react';
import { motion } from 'framer-motion';
import {
    Code, Layout, Terminal, Zap,
    Smartphone, Globe, Box, Database,
    GitBranch, Gauge, PenTool, CheckCircle,
    Server, Cpu
} from 'lucide-react';

const SkillCard = ({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="group relative p-6 bg-brand-surface/50 rounded-2xl border border-brand-border hover:border-brand-primary/50 transition-all duration-300 overflow-hidden"
    >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-brand-background border border-brand-border group-hover:border-brand-primary/30 transition-colors">
                    <skill.icon size={24} className="text-brand-secondary group-hover:text-brand-primary transition-colors" />
                </div>
                <div className="text-right">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{skill.category}</span>
                </div>
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                {skill.capability}
            </p>

            {/* Footer with Progress & Tooltip Trigger */}
            <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-brand-secondary">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 w-full bg-brand-background rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                        className="h-full bg-brand-primary rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    />
                </div>

                {/* Real-world usage (Tooltip-like detail) */}
                <div className="pt-4 mt-4 border-t border-brand-border/50 text-xs text-gray-500 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <CheckCircle size={12} className="text-brand-primary" />
                    <span>{skill.usage}</span>
                </div>
            </div>
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        { id: 'frontend', name: 'Frontend Engineering' },
        { id: 'uiux', name: 'UI/UX Design' },
        { id: 'tools', name: 'DevOps & Tools' },
        { id: 'performance', name: 'Performance' },
    ];

    const skills = [
        // Frontend
        {
            name: "React & Next.js",
            category: "Frontend",
            icon: Code,
            capability: "Building complex state-driven SPAs and SSR app architectures.",
            level: 95,
            usage: "Used in enterprise SaaS dashboards"
        },
        {
            name: "JavaScript",
            category: "Frontend",
            icon: Terminal,
            capability: "Strict typing for scalable, bug-resistant codebases.",
            level: 90,
            usage: "Standard for all production projects"
        },
        {
            name: "Tailwind CSS",
            category: "Frontend",
            icon: Layout,
            capability: "Rapid implementation of custom design systems.",
            level: 98,
            usage: "Created custom utility systems"
        },

        // UI/UX
        {
            name: "Figma",
            category: "UI/UX",
            icon: PenTool,
            capability: "High-fidelity prototyping and design system management.",
            level: 75,
            usage: "Designer-to-developer handoff"
        },
        {
            name: "Responsive Design",
            category: "UI/UX",
            icon: Smartphone,
            capability: "Fluid layouts ensuring consistency across all viewports.",
            level: 100,
            usage: "Mobile-first approach adoption"
        },

        // Tools
        {
            name: "Git & GitHub",
            category: "Tools",
            icon: GitBranch,
            capability: "Complex merge strategies and CI/CD workflow integration.",
            level: 92,
            usage: "Managed team release cycles"
        },
        {
            name: "Firebase",
            category: "Tools",
            icon: Database,
            capability: "Real-time databases and serverless backend integration.",
            level: 85,
            usage: "Auth & realtime chat features"
        },

        // Performance
        {
            name: "Web Performance",
            category: "Performance",
            icon: Gauge,
            capability: "Core Web Vitals optimization and bundle size reduction.",
            level: 88,
            usage: "Reduced LCP by 40% on main site"
        }
    ];

    return (
        <section className="py-24 bg-brand-background relative" id="skills">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:flex md:items-end justify-between"
                >
                    <div className="md:max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Technical <span className="text-brand-primary">Arsenal</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            I don't just use tools; I understand them. My stack is chosen for reliability, scalability, and developer experience.
                        </p>
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
