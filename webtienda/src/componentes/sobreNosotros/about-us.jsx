import styles from './AboutUs.module.css';

import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { FaShieldAlt, FaTruck, FaHeadset, FaLeaf, FaStar, FaUsers, FaGlobe, FaHeart } from 'react-icons/fa';

const AboutUs = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Configurar el video para que se reproduzca en loop
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: "Compra Segura",
      description: "Protección total en cada transacción con certificados SSL y encriptación de datos"
    },
    {
      icon: <FaTruck />,
      title: "Envío Rápido",
      description: "Entrega express en 24-48 horas a todo el país con seguimiento en tiempo real"
    },
    {
      icon: <FaHeadset />,
      title: "Soporte 24/7",
      description: "Atención al cliente especializada disponible todos los días del año"
    },
    {
      icon: <FaLeaf />,
      title: "Eco-Friendly",
      description: "Comprometidos con el medio ambiente, empaques biodegradables y carbono neutral"
    }
  ];

  const stats = [
    { number: "50K+", label: "Clientes Satisfechos" },
    { number: "15K+", label: "Productos Vendidos" },
    { number: "99%", label: "Satisfacción" },
    { number: "5", label: "Años de Experiencia" }
  ];

  const teamMembers = [
    {
      name: "María González",
      position: "CEO & Fundadora",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b11c?w=300&h=300&fit=crop&crop=face",
      description: "Visionaria emprendedora con 10 años en e-commerce"
    },
    {
      name: "Carlos Rodríguez",
      position: "Director Técnico",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Experto en tecnología y desarrollo web"
    },
    {
      name: "Ana López",
      position: "Directora de Marketing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Especialista en estrategias digitales y branding"
    }
  ];

  return (
    <div className={styles.aboutContainer}>
      {/* Hero Section con Video */}
      <section className={styles.heroSection}>
        <video 
          ref={videoRef}
          className={styles.videoBackground}
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://cdn.pixabay.com/vimeo/441008988/shopping-78540.mp4?width=1280&hash=c6c5e5f8e6b7bb7bb7b3b5b7b7b3b5b7b7b3b5b7" type="video/mp4" />
          {/* Fallback para navegadores que no soporten video */}
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Nuestra <span className={styles.highlight}>Historia</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Desde 2019, transformando la experiencia de compra online con pasión y dedicación
          </p>
          <div className={styles.heroStats}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2 className={styles.sectionTitle}>
                <FaHeart className={styles.titleIcon} />
                La Historia de Webtienda
              </h2>
              <div className={styles.storyText}>
                <p>
                  Todo comenzó en 2019 cuando María González, una joven emprendedora apasionada por la tecnología, 
                  identificó una oportunidad única en el mercado digital dominicano. Desde su pequeño apartamento 
                  en Santo Domingo, María tenía una visión clara: crear una plataforma de e-commerce que no solo 
                  vendiera productos, sino que brindara una experiencia de compra excepcional.
                </p>
                <p>
                  Con apenas $500 de inversión inicial y mucha determinación, María lanzó Webtienda desde su 
                  computadora personal. Los primeros meses fueron desafiantes: ella misma empacaba los productos, 
                  respondía emails hasta altas horas y gestionaba las redes sociales. Pero su dedicación y 
                  compromiso con la calidad pronto comenzaron a dar frutos.
                </p>
                <p>
                  En 2020, a pesar de los desafíos globales, Webtienda experimentó un crecimiento explosivo. 
                  La pandemia aceleró la adopción del comercio electrónico, y nuestra plataforma estaba 
                  perfectamente posicionada para satisfacer esta nueva demanda. Rápidamente expandimos nuestro 
                  catálogo y contratamos a nuestros primeros empleados.
                </p>
                <p>
                  Hoy, cinco años después, Webtienda se ha convertido en una de las tiendas online más confiables 
                  del país, con más de 50,000 clientes satisfechos y un equipo de 25 profesionales dedicados a 
                  hacer realidad la visión original de María: democratizar el acceso a productos de calidad 
                  a través de la tecnología.
                </p>
              </div>
            </div>
            <div className={styles.storyImage}>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" 
                alt="Equipo trabajando en oficina moderna"
                className={styles.storyImg}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayText}>
                  <FaGlobe className={styles.overlayIcon} />
                  <span>Conectando personas con productos excepcionales</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            <FaStar className={styles.titleIcon} />
            ¿Por Qué Elegir Webtienda?
          </h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  {benefit.icon}
                </div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            <FaUsers className={styles.titleIcon} />
            Nuestro Equipo
          </h2>
          <p className={styles.teamIntro}>
            Conoce a las personas apasionadas que hacen posible la magia de Webtienda cada día
          </p>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.memberImage}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberPosition}>{member.position}</p>
                  <p className={styles.memberDescription}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3 className={styles.missionTitle}>Nuestra Misión</h3>
              <p className={styles.missionText}>
                Facilitar el acceso a productos de calidad a través de una plataforma 
                tecnológica innovadora, brindando una experiencia de compra excepcional 
                que supere las expectativas de nuestros clientes, mientras contribuimos 
                al desarrollo del comercio electrónico en República Dominicana.
              </p>
            </div>
            <div className={styles.missionCard}>
              <h3 className={styles.missionTitle}>Nuestra Visión</h3>
              <p className={styles.missionText}>
                Ser la plataforma de e-commerce líder en el Caribe, reconocida por nuestra 
                excelencia en servicio al cliente, innovación tecnológica y compromiso 
                con la sostenibilidad, conectando a millones de personas con los productos 
                que necesitan para mejorar su calidad de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>¿Listo para formar parte de nuestra historia?</h2>
            <p className={styles.ctaText}>
              Únete a miles de clientes satisfechos y descubre por qué Webtienda es la elección preferida 
              para compras online en República Dominicana.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/productos" className={styles.ctaPrimary}>Explorar Productos</Link>
              <Link to="/contacto" className={styles.ctaSecondary}>Contáctanos</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;