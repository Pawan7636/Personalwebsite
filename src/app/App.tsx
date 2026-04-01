import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, Code2, Palette, Rocket, ArrowDown, ExternalLink } from 'lucide-react';

export default function App() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '50%']);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "AI Portfolio Generator",
      description: "An intelligent tool that creates stunning portfolios using machine learning",
      tech: ["React", "TypeScript", "TensorFlow"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Dashboard",
      description: "Real-time analytics platform with beautiful data visualizations",
      tech: ["Next.js", "D3.js", "Node.js"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Design System Pro",
      description: "Component library with 100+ customizable UI elements",
      tech: ["React", "Tailwind", "Storybook"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const skills = [
    { icon: Code2, name: "Development", desc: "Full-stack web applications" },
    { icon: Palette, name: "Design", desc: "UI/UX & visual design" },
    { icon: Rocket, name: "Innovation", desc: "Creative problem solving" }
  ];

  return (
    <div className="size-full overflow-y-auto bg-black text-white">
      {/* Animated background gradient */}
      <motion.div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500" />
      </motion.div>

      {/* Mouse follower effect */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(59,130,246,0.3) 50%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.3s ease-out'
        }}
      />

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex flex-col items-center justify-center px-6"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 inline-block"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-5xl">
                ✨
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Creative Developer
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building beautiful digital experiences with code & creativity
          </motion.p>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ArrowDown className="w-8 h-8 text-gray-500" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500 transition-all"
              >
                <skill.icon className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-2xl mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-xl text-gray-300 mt-16 text-center max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            I'm a passionate developer and designer who loves creating immersive digital experiences.
            With expertise in modern web technologies and a keen eye for aesthetics,
            I transform ideas into reality.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl mb-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500 transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />

                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl">{project.title}</h3>
                    <ExternalLink className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-gray-400 mb-6 text-lg">{project.description}</p>

                  <div className="flex gap-3 flex-wrap">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-4 py-2 rounded-full bg-white/10 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-6xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Create Together
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have an exciting project in mind? Let's collaborate and build something amazing.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Get In Touch
          </motion.button>
        </div>

        <motion.div
          className="text-center mt-32 text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2026 Creative Developer. All rights reserved.
        </motion.div>
      </section>
    </div>
  );
}