import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '5+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
  { number: '10+', label: 'Awards Won' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden gradient-border">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary to-accent/20 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-3/4 h-3/4 rounded-full border border-primary/30"
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-full rounded-full border border-accent/30 flex items-center justify-center"
                  >
                    <span className="text-6xl md:text-8xl font-display font-bold text-gradient">
                      {'</>'}
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute -top-4 -right-4 px-4 py-2 glass rounded-lg"
            >
              <span className="text-primary font-semibold">React</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, type: 'spring' }}
              className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-lg"
            >
              <span className="text-accent font-semibold">Three.js</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium mb-4 block"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Crafting Digital
              <span className="text-gradient"> Experiences</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg mb-6"
            >
              I'm a passionate full-stack developer and designer with a love for creating 
              immersive digital experiences. With expertise in modern web technologies, 
              3D graphics, and interactive animations, I bring ideas to life in ways that 
              captivate and engage.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-lg mb-10"
            >
              When I'm not coding, you'll find me exploring new design trends, 
              experimenting with creative coding, or contributing to open-source projects.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
