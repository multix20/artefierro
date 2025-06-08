import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer, Shield, Wrench, Users, Mail, Phone, Instagram, Facebook, MessageCircle, ChevronRight, Star } from 'lucide-react';

const ArtefierroLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop', category: 'Esculturas', title: 'Escultura Abstracta' },
    { id: 2, src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop', category: 'Mobiliario', title: 'Mesa Industrial' },
    { id: 3, src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop', category: 'Portones', title: 'Portón Artístico' },
    { id: 4, src: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=400&fit=crop', category: 'Decoración', title: 'Arte Mural' },
    { id: 5, src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop', category: 'Mobiliario', title: 'Estantería Rústica' },
    { id: 6, src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop', category: 'Esculturas', title: 'Obra Contemporánea' }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Arquitecta",
      text: "Artefierro transformó completamente mi proyecto. Su atención al detalle y calidad artística superaron mis expectativas.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      role: "Constructor",
      text: "Trabajo impecable y entregas puntuales. Son mi primera opción para proyectos que requieren fierro decorativo.",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      role: "Diseñadora de Interiores",
      text: "La creatividad y profesionalismo de Artefierro han elevado cada uno de mis diseños a otro nivel.",
      rating: 5
    }
  ];

  const services = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Diseños Personalizados",
      description: "Creamos piezas únicas adaptadas a tu visión y espacio específico."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Restauración de Piezas",
      description: "Devolvemos la vida a tus piezas de fierro con técnicas tradicionales."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Instalaciones Decorativas",
      description: "Montaje profesional garantizando durabilidad y acabado perfecto."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultoría en Decoración",
      description: "Asesoramiento experto para integrar fierro en tu proyecto arquitectónico."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-900/95 backdrop-blur-sm z-50 border-b border-amber-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-amber-500 tracking-wide">ARTEFIERRO</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#inicio" className="hover:text-amber-400 transition-colors px-3 py-2">Inicio</a>
                <a href="#galeria" className="hover:text-amber-400 transition-colors px-3 py-2">Galería</a>
                <a href="#servicios" className="hover:text-amber-400 transition-colors px-3 py-2">Servicios</a>
                <a href="#contacto" className="hover:text-amber-400 transition-colors px-3 py-2">Contacto</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-amber-50 hover:text-amber-400"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-800 border-t border-amber-600/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#inicio" className="block px-3 py-2 hover:text-amber-400 transition-colors">Inicio</a>
              <a href="#galeria" className="block px-3 py-2 hover:text-amber-400 transition-colors">Galería</a>
              <a href="#servicios" className="block px-3 py-2 hover:text-amber-400 transition-colors">Servicios</a>
              <a href="#contacto" className="block px-3 py-2 hover:text-amber-400 transition-colors">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop')"
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-amber-500 tracking-wider">
            ARTEFIERRO
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-amber-100 font-light italic">
            "El arte se forja en fuego. Diseño único en fierro."
          </p>
          <p className="text-lg mb-8 text-zinc-300 max-w-2xl mx-auto">
            Transformamos el fierro en obras de arte funcional que perduran en el tiempo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('galeria').scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-600 hover:bg-amber-700 text-zinc-900 font-bold py-4 px-8 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
            >
              Ver Trabajos
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-zinc-900 font-bold py-4 px-8 transition-all duration-300 hover:scale-105"
            >
              Solicita tu Diseño
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-amber-500 rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-nosotros" className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible['sobre-nosotros'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <h2 className="text-4xl font-bold mb-6 text-amber-500">Nuestra Historia</h2>
              <p className="text-lg mb-6 text-zinc-300 leading-relaxed">
                Desde hace más de una década, Artefierro ha sido sinónimo de excelencia en el arte del fierro. 
                Cada pieza que creamos nace de la pasión por transformar metal en obras que combinan funcionalidad y belleza.
              </p>
              <p className="text-lg mb-6 text-zinc-300 leading-relaxed">
                Nuestro taller es un espacio donde la tradición artesanal se encuentra con la innovación contemporánea, 
                creando piezas únicas que reflejan la personalidad de cada cliente y la maestría de nuestro oficio.
              </p>
              <div className="flex items-center space-x-4 text-amber-400">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Proyectos</div>
                </div>
                <div className="w-px h-12 bg-amber-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Años</div>
                </div>
                <div className="w-px h-12 bg-amber-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm">Satisfacción</div>
                </div>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-300 ${isVisible['sobre-nosotros'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=500&fit=crop" 
                alt="Taller de forjado"
                className="w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-500">Galería de Obras</h2>
            <p className="text-xl text-zinc-400">Cada pieza cuenta una historia única</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className={`group cursor-pointer transition-all duration-700 ${isVisible['galeria'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden bg-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-xs text-amber-400 font-semibold mb-1">{image.category}</div>
                      <div className="text-white font-bold">{image.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-500">Nuestros Servicios</h2>
            <p className="text-xl text-zinc-400">Soluciones integrales en arte del fierro</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-zinc-900 p-8 text-center hover:bg-zinc-700 transition-all duration-300 hover:scale-105 border border-amber-600/20 hover:border-amber-600/40 ${isVisible['servicios'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-amber-500 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-amber-100">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-500">Lo que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-zinc-400">Testimonios reales de proyectos exitosos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-zinc-800 p-8 border border-amber-600/20 hover:border-amber-600/40 transition-all duration-300 ${isVisible['testimonios'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-amber-100">{testimonial.name}</div>
                    <div className="text-sm text-amber-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-amber-500">Contáctanos</h2>
            <p className="text-xl text-zinc-400">Transformemos tu visión en realidad</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`transition-all duration-1000 ${isVisible['contacto'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="space-y-6">
                <div>
                  <label className="block text-amber-100 font-semibold mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-zinc-900 border border-amber-600/30 text-amber-50 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-amber-100 font-semibold mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-zinc-900 border border-amber-600/30 text-amber-50 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-amber-100 font-semibold mb-2">Mensaje</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-3 bg-zinc-900 border border-amber-600/30 text-amber-50 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                <button 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-zinc-900 font-bold py-4 px-8 transition-all duration-300 hover:scale-105 flex items-center justify-center group"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Enviar Consulta
                </button>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible['contacto'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-amber-500">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-amber-500 mr-4" />
                      <span className="text-zinc-300">+56 9 1234 5678</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-amber-500 mr-4" />
                      <span className="text-zinc-300">contacto@artefierro.cl</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-500">Contáctanos Directamente</h3>
                  <a 
                    href="https://wa.me/56912345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20trabajos%20en%20fierro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 transition-all duration-300 hover:scale-105 flex items-center justify-center group w-full"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Escríbenos por WhatsApp
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-amber-500">Síguenos</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
                      <Instagram className="w-8 h-8" />
                    </a>
                    <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
                      <Facebook className="w-8 h-8" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-amber-600/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-500 mb-4">ARTEFIERRO</div>
            <p className="text-zinc-400 mb-6 italic">"Hecho a fuego, pensado con arte."</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-amber-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-amber-400 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
            <div className="text-sm text-zinc-500">
              © 2025 Artefierro. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 text-center text-white">
              <div className="text-sm text-amber-400 font-semibold mb-1">{selectedImage.category}</div>
              <div className="text-xl font-bold">{selectedImage.title}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtefierroLanding;