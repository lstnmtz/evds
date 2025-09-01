import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Users, TrendingUp, Shield, Clock, Target, CheckCircle, ArrowRight } from 'lucide-react';

const Enterprises = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Performance collective",
      description: "Améliorer la productivité et l'efficacité des équipes grâce à la gestion du stress"
    },
    {
      icon: Users,
      title: "Cohésion d'équipe",
      description: "Renforcer les liens entre collaborateurs et créer un esprit d'équipe solide"
    },
    {
      icon: Shield,
      title: "Bien-être au travail",
      description: "Créer un environnement de travail sain et épanouissant pour tous"
    },
    {
      icon: Clock,
      title: "Réduction de l'absentéisme",
      description: "Diminuer le stress et les arrêts maladie liés aux risques psychosociaux"
    }
  ];

  const services = [
    {
      title: "Ateliers de gestion du stress",
      description: "Sessions collectives pour apprendre à identifier et gérer le stress au quotidien",
      duration: "1h30 à 2h",
      participants: "8 à 15 personnes"
    },
    {
      title: "Séances de cohésion d'équipe", 
      description: "Exercices de sophrologie pour renforcer la communication et la collaboration",
      duration: "2h à demi-journée",
      participants: "Équipe complète"
    },
    {
      title: "Accompagnement individuel",
      description: "Suivi personnalisé pour les collaborateurs en situation de stress intense",
      duration: "45 min à 1h",
      participants: "Individuel"
    },
    {
      title: "Formation management bienveillant",
      description: "Outils pour les managers pour créer un climat de travail positif",
      duration: "Demi-journée à journée complète",
      participants: "Équipe management"
    }
  ];

  const testimonials = [
    {
      text: "Grâce aux ateliers de Bénédicte, nos équipes sont plus sereines et plus efficaces. L'ambiance de travail s'est considérablement améliorée.",
      author: "Marie Dubois",
      position: "DRH",
      company: "TechCorp Solutions"
    },
    {
      text: "Les techniques de sophrologie nous ont aidés à mieux gérer la pression des projets. Nos collaborateurs sont moins stressés et plus créatifs.",
      author: "Jean-Luc Martin",
      position: "Directeur",
      company: "Agence Créative Plus"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2362B0] to-[#1e5499] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Building2 className="h-12 w-12 text-white mr-4" />
                <span className="text-lg font-semibold">Entreprises & Associations</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sophrologie en Entreprise
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Améliorez la performance collective, renforcez la cohésion d'équipe et créez un 
                environnement de travail épanouissant grâce à la sophrologie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-[#2362B0] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                >
                  Demander un devis
                </Link>
                <a 
                  href="#services" 
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-[#2362B0] transition-colors duration-300 text-center"
                >
                  Découvrir nos services
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Équipe en entreprise"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#2362B0] p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">+35%</p>
                    <p className="text-sm text-gray-600">Productivité</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pourquoi la sophrologie en entreprise ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mon expérience de 30 ans en entreprise me permet de comprendre vos enjeux et 
              d'adapter les techniques de sophrologie à votre environnement professionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-[#2362B0] p-6 rounded-2xl mb-6 group-hover:bg-[#1e5499] transition-colors duration-300">
                    <IconComponent className="h-12 w-12 text-white mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions sur-mesure adaptées à vos besoins et à la taille de votre structure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#2362B0] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-[#2362B0]" />
                    <span className="text-gray-600">{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-[#2362B0]" />
                    <span className="text-gray-600">{service.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Approche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement personnalisé en 4 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Analyse des besoins",
                description: "Évaluation des enjeux spécifiques de votre entreprise"
              },
              {
                step: "2", 
                title: "Programme sur-mesure",
                description: "Création d'un programme adapté à vos objectifs"
              },
              {
                step: "3",
                title: "Mise en œuvre",
                description: "Animation des séances et suivi des participants"
              },
              {
                step: "4",
                title: "Évaluation",
                description: "Bilan et ajustements pour optimiser les résultats"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#2362B0] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Témoignages Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="bg-[#2362B0] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.position} - {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2362B0] to-[#1e5499]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé 
            pour votre programme de sophrologie en entreprise.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center space-x-2 bg-white text-[#2362B0] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Demander un devis gratuit</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Enterprises;