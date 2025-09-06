import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    clientType: '',
    numberOfPeople: '',
    specificNeed: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi du formulaire
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "06 72 38 55 82",
      description: "Du lundi au vendredi, 9h-18h"
    },
    {
      icon: Mail,
      title: "Email",
      content: "Benefilippi@hotmail.com",
      description: "Réponse sous 48h"
    },
    {
      icon: MapPin,
      title: "Localisation",
      content: "La Rivière-de-Corps",
      description: "Séances en présentiel et à distance"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "9h - 18h",
      description: "Lundi au vendredi"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#EC781D] to-[#d66a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-moi</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Prêt(e) à commencer votre parcours de bien-être ? 
              Discutons ensemble de vos besoins et objectifs.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Demande de contact
            </h2>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                <p className="text-gray-600">
                  Merci pour votre message. Je vous recontacterai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nom et Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC781D] focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC781D] focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                {/* Email et Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC781D] focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC781D] focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                {/* Type de client */}
                <div>
                  <label htmlFor="clientType" className="block text-sm font-medium text-gray-700 mb-2">
                    Vous êtes
                  </label>
                  <select
                    id="clientType"
                    name="clientType"
                    value={formData.clientType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC781D] focus:border-transparent transition-colors"
                  >
                    <option value="">Sélectionnez votre profil</option>
                    <option value="particulier">Particulier</option>
                    <option value="entreprise">Entreprise/Association</option>
                    <option value="artiste">Artiste</option>
                  </select>
                </div>

                {/* Nombre de personnes (conditionnel) */}
                {(formData.clientType === 'entreprise' || formData.clientType === 'artiste') && (
                  <div>
                    <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de personnes concernées
                    </label>
                    <input
                      type="number"
                      id="numberOfPeople"
                      name="numberOfPeople"
                      value={formData.numberOfPeople}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC781D] focus:border-transparent transition-colors"
                    />
                  </div>
                )}

                {/* Besoin spécifique */}
                <div>
                  <label htmlFor="specificNeed" className="block text-sm font-medium text-gray-700 mb-2">
                    Besoin spécifique
                  </label>
                  <input
                    type="text"
                    id="specificNeed"
                    name="specificNeed"
                    value={formData.specificNeed}
                    onChange={handleChange}
                    placeholder="Ex: gestion du stress, confiance en soi, troubles du sommeil..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC781D] focus:border-transparent transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande, vos objectifs ou vos questions..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EC781D] focus:border-transparent transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#EC781D] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#d66a0a] transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer ma demande</span>
                </button>

                <p className="text-sm text-gray-600 text-center">
                  Les champs marqués d'un * sont obligatoires
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de contact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="bg-[#EC781D] p-3 rounded-full mr-4">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      </div>
                      <p className="font-medium text-gray-900 mb-1">{info.content}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Premier contact gratuit
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Je vous propose un premier échange téléphonique gratuit de 15 minutes pour 
                mieux comprendre vos besoins et vous expliquer comment la sophrologie peut 
                vous accompagner.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#EC781D]" />
                  <span className="text-gray-700">Échange personnalisé</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#EC781D]" />
                  <span className="text-gray-700">Sans engagement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#EC781D]" />
                  <span className="text-gray-700">Conseils professionnels</span>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-[#EC781D] to-[#d66a0a] text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">
                Modalités de consultation
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Séances individuelles</h4>
                  <p className="opacity-90">En présentiel ou en visioconférence</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Ateliers de groupe</h4>
                  <p className="opacity-90">Pour particuliers, entreprises et artistes</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Programmes sur-mesure</h4>
                  <p className="opacity-90">Accompagnement personnalisé selon vos objectifs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;