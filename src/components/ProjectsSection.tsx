import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with real-time inventory, AI-powered recommendations, and seamless checkout experience.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'linear-gradient(135deg, hsl(185 100% 50% / 0.3), hsl(280 100% 65% / 0.3))',
    link: '#',
  },
  {
    id: 2,
    title: '3D Product Configurator',
    description: 'Interactive 3D product visualization tool allowing customers to customize and preview products in real-time.',
    tags: ['Three.js', 'React', 'WebGL', 'GSAP'],
    image: 'linear-gradient(135deg, hsl(280 100% 65% / 0.3), hsl(320 100% 50% / 0.3))',
    link: '#',
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    description: 'Comprehensive analytics dashboard with real-time data visualization, custom reporting, and team collaboration features.',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'Prisma'],
    image: 'linear-gradient(135deg, hsl(220 100% 50% / 0.3), hsl(185 100% 50% / 0.3))',
    link: '#',
  },
  {
    id: 4,
    title: 'AI Writing Assistant',
    description: 'Intelligent writing tool powered by GPT-4 with grammar checking, style suggestions, and content generation.',
    tags: ['React', 'OpenAI', 'Node.js', 'MongoDB'],
    image: 'linear-gradient(135deg, hsl(150 100% 40% / 0.3), hsl(185 100% 50% / 0.3))',
    link: '#',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl gradient-border hover-lift cursor-pointer"
    >
      {/* Image placeholder */}
      <div 
        className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-105"
        style={{ background: project.image }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="text-6xl opacity-50"
          >
            {'</>'}
          </motion.div>
        </div>
      </div>

      {/* Content overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1 } : { opacity: 0.9 }}
        className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col justify-end p-6"
      >
        <motion.h3
          animate={isHovered ? { y: -5 } : { y: 0 }}
          className="font-display text-2xl font-bold mb-2"
        >
          {project.title}
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 10 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-sm mb-4 line-clamp-2"
        >
          {project.description}
        </motion.p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0.7, scale: 0.95 }}
              transition={{ delay: 0.15 + tagIndex * 0.05 }}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* View project arrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.2 }}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center"
        >
          <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Featured Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating 
            exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-border font-semibold hover:bg-muted/50 transition-colors"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
