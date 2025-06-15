import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import styles from './contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Teléfono",
      info: "+1 (809) 555-0123",
      detail: "Lun - Vie: 8:00 AM - 6:00 PM"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "info@webtienda.com",
      detail: "Respuesta en 24 horas"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Dirección",
      info: "Av. Winston Churchill 1099",
      detail: "Santo Domingo, República Dominicana"
    },
    {
      icon: <FaClock />,
      title: "Horarios",
      info: "Lunes - Viernes: 8:00 - 18:00",
      detail: "Sábados: 9:00 - 14:00"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, name: "Facebook", url: "#" },
    { icon: <FaInstagram />, name: "Instagram", url: "#" },
    { icon: <FaTwitter />, name: "Twitter", url: "#" },
    { icon: <FaWhatsapp />, name: "WhatsApp", url: "#" }
  ];

  return (
    <div className={styles.contactContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Contáctanos
            </h1>
            <p className={styles.heroSubtitle}>
              Estamos aquí para ayudarte. Ponte en contacto con nosotros y te responderemos lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            
            {/* Contact Form */}
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Envíanos un mensaje</h2>
              <p className={styles.sectionSubtitle}>
                Completa el formulario y nos pondremos en contacto contigo pronto.
              </p>

              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.input}
                      required
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.input}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={styles.input}
                    required
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    required
                    placeholder="Escribe tu mensaje aquí..."
                    rows="6"
                  />
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                {submitStatus === 'success' && (
                  <div className={styles.successMessage}>
                    ✓ ¡Mensaje enviado exitosamente! Te responderemos pronto.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.infoSection}>
              <h2 className={styles.sectionTitle}>Información de contacto</h2>
              <p className={styles.sectionSubtitle}>
                También puedes contactarnos directamente a través de estos medios.
              </p>

              <div className={styles.contactCards}>
                {contactInfo.map((item, index) => (
                  <div key={index} className={styles.contactCard}>
                    <div className={styles.cardIcon}>
                      {item.icon}
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardInfo}>{item.info}</p>
                      <p className={styles.cardDetail}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>Síguenos en redes sociales</h3>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      className={styles.socialLink}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Nuestra ubicación</h2>
          <div className={styles.mapContainer}>
            <div className={styles.mapPlaceholder}>
              <FaMapMarkerAlt className={styles.mapIcon} />
              <p className={styles.mapText}>
                Av. Winston Churchill 1099<br />
                Santo Domingo, República Dominicana
              </p>
              <p className={styles.mapSubtext}>
                Mapa interactivo disponible próximamente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>¿Cuál es el tiempo de respuesta?</h3>
              <p className={styles.faqAnswer}>
                Respondemos todos los mensajes en un máximo de 24 horas durante días laborables.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>¿Tienen soporte telefónico?</h3>
              <p className={styles.faqAnswer}>
                Sí, nuestro equipo está disponible de lunes a viernes de 8:00 AM a 6:00 PM.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>¿Puedo visitar sus oficinas?</h3>
              <p className={styles.faqAnswer}>
                Por supuesto, estamos ubicados en Av. Winston Churchill 1099, Santo Domingo.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>¿Tienen atención en WhatsApp?</h3>
              <p className={styles.faqAnswer}>
                Sí, puedes contactarnos por WhatsApp para consultas rápidas y soporte inmediato.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;