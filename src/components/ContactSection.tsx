import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/FaizAhmad0" },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/mdfaizahmad/",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    url: "https://x.com/MdFaizA20470687",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formState.name.trim() ||
      !formState.email.trim() ||
      !formState.message.trim()
    ) {
      return;
    }

    const to = "mdfaizahmad1020@gmail.com";
    const subject = `Portfolio Contact — ${formState.name} (${formState.email})`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to,
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-x-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl" />
      </div>

      <div
        className="container mx-auto relative z-10 px-4 sm:px-6 w-full max-w-full overflow-x-hidden"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or a role opportunity? Send me a message and
            let's build something impactful.
          </p>
        </motion.div>

        {/* ✅ Center + prevent overflow */}
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 max-w-5xl mx-auto w-full max-w-full justify-items-center min-w-0">
          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 w-full max-w-[520px] mx-auto min-w-0"
          >
            <div className="min-w-0">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full max-w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div className="min-w-0">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full max-w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full max-w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                placeholder="Tell me about your project / requirement..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold glow-primary hover:bg-primary/90 transition-colors"
            >
              Send Message
            </motion.button>

            <p className="text-xs text-muted-foreground text-center">
              This will open Gmail with your message pre-filled.
            </p>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8 w-full max-w-[520px] mx-auto min-w-0"
          >
            <div className="glass rounded-2xl p-8 min-w-0">
              <h3 className="font-display text-xl font-semibold mb-4">
                Contact Info
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/20 flex items-center justify-center text-xl">
                    📧
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a
                      href="mailto:mdfaizahmad1020@gmail.com"
                      className="font-medium hover:text-primary transition-colors break-words"
                    >
                      mdfaizahmad1020@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/20 flex items-center justify-center text-xl">
                    📞
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <a
                      href="tel:+918409669330"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      +91 8409669330
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/20 flex items-center justify-center text-xl">
                    📍
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">
                      Location
                    </div>
                    <div className="font-medium">Jaipur, Rajasthan (India)</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/20 flex items-center justify-center text-xl">
                    ⏰
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">
                      Availability
                    </div>
                    <div className="font-medium">Open for opportunities</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 min-w-0">
              <h3 className="font-display text-xl font-semibold mb-4">
                Follow Me
              </h3>

              <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.08, y: -5 }}
                      className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/15 border border-border/60 transition-colors"
                      title={social.name}
                      aria-label={social.name}
                    >
                      <Icon className="text-xl text-foreground/90" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
