import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Heart } from 'lucide-react';
import { useState } from 'react';

/**
 * Design Philosophy: Sophisticated Elegance
 * - Dark & Pink theme with elegant minimalism
 * - Poppins typography for refined hierarchy
 * - Generous whitespace and subtle animations
 * - Focus on portfolio images as main content
 */

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Portfolio images from user's ibb.co links
  const portfolioImages = [
    'https://ibb.co/nMJX08Zj',
    'https://ibb.co/ymB9YJsM',
    'https://ibb.co/qMDv18Dd',
    'https://ibb.co/Xkyh7mHt',
    'https://ibb.co/8LccdG6N',
    'https://ibb.co/6cRWP72k',
    'https://ibb.co/bjmkwmGb',
    'https://ibb.co/x824r0pk',
    'https://ibb.co/gLbV3trc',
    'https://ibb.co/Csh7LdjR',
    'https://ibb.co/JFsFyfKB',
    'https://ibb.co/xqXkQ7Yy',
  ];

  const whatsappNumber = '5519981880903';
  const whatsappMessage = encodeURIComponent('Olá Aline! Gostaria de saber mais sobre seus serviços.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Aline Ferraz
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Contato</span>
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  Aline
                  <span className="block text-accent">Ferraz</span>
                </motion.h1>
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-2 text-muted-foreground text-lg"
                >
                  <MapPin size={20} className="text-accent" />
                  <span>Campinas, SP • 25 anos</span>
                </motion.div>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed max-w-md"
              >
                Bem-vindo ao meu espaço exclusivo. Aqui você encontra elegância, sofisticação e momentos inesquecíveis. Descubra por que sou a escolha preferida.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <MessageCircle size={20} />
                  Entrar em Contato
                </a>
                <button className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300">
                  Conhecer Mais
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 pt-8 border-t border-border"
              >
                <div>
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Discrição</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">5★</div>
                  <div className="text-sm text-muted-foreground">Avaliação</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">24h</div>
                  <div className="text-sm text-muted-foreground">Disponível</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image Placeholder */}
            <motion.div
              variants={itemVariants}
              className="relative h-96 sm:h-full min-h-96 rounded-2xl overflow-hidden border-2 border-accent/30 hover:border-accent transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <Heart size={64} className="text-accent/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">Galeria em destaque</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* Portfolio Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Galeria
              <span className="block text-accent">Exclusiva</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore meu portfólio e descubra por que sou diferente. Cada foto conta uma história de elegância e sofisticação.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioImages.map((_, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
                className="group relative h-80 rounded-xl overflow-hidden border-2 border-accent/30 hover:border-accent transition-all duration-300 cursor-pointer"
              >
                {/* Placeholder with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5 flex items-center justify-center">
                  <div className="text-center">
                    <Heart
                      size={48}
                      className={`mx-auto mb-2 transition-all duration-300 ${
                        hoveredImage === index ? 'text-accent scale-110' : 'text-accent/30'
                      }`}
                    />
                    <p className="text-muted-foreground text-sm">Foto {index + 1}</p>
                  </div>
                </div>

                {/* Hover overlay */}
                {hoveredImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-accent/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <button className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:scale-110 transition-transform">
                      Ver Mais
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Sobre
                <span className="block text-accent">Mim</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-accent">Quem Sou</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sou Aline Ferraz, uma profissional dedicada a proporcionar experiências memoráveis e de qualidade. Com 25 anos, combino beleza, inteligência e sofisticação em cada encontro.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold text-accent">Meus Valores</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Discrição absoluta em todos os encontros
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Profissionalismo e respeito mútuo
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Experiências personalizadas e exclusivas
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Pronto para um
              <span className="block text-accent">Encontro Inesquecível?</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Entre em contato comigo agora mesmo via WhatsApp. Respondo rapidamente e com discrição.
            </p>
          </div>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300"
            viewport={{ once: true }}
          >
            <MessageCircle size={24} />
            Chamar no WhatsApp
          </motion.a>

          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground">
              📱 <span className="font-semibold text-foreground">(19) 98188-0903</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Disponível 24h • Resposta rápida • Máxima discrição
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-border py-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Aline Ferraz
          </div>
          <p className="text-muted-foreground">
            Campinas, SP • Disponível 24h
          </p>
          <p className="text-sm text-muted-foreground">
            © 2026 Aline Ferraz. Todos os direitos reservados.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
