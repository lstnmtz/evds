import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Mic, Camera, Paintbrush, Star, Target, Brain, ArrowRight } from 'lucide-react';

const Artists = () => {
  const artistTypes = [
    { icon: Music, name: "Musiciens", color: "bg-yellow-500" },
    { icon: Mic, name: "Comédiens", color: "bg-orange-500" },
    { icon: Camera, name: "Réalisateurs", color: "bg-purple-500" },
    { icon: Paintbrush, name: "Artistes visuels", color: "bg-pink-500" }
  ];

  const challenges = [
    {
      icon: Target,
      title: "Gestion du trac",
      description: "Apprendre à transformer le stress de la performance en énergie positive"
    },
    {
      icon: Brain,
      title: "Concentration & Mémoire",
      description: "Développer la focus et la mémorisation pour des performances optimales"
    },
    {
      title: "Affirmation de soi",
      description: "Renforcer la confiance en soi et l'authenticité artistique"
    },
    {
      icon: Star,
      title: "Créativité",
      description: "Libérer le potentiel créatif et l'expression artistique"
    }
  ];

  const techniques = [
    {
      title: "Respiration scénique",
      description: "Techniques respiratoires spécifiques pour maîtriser le trac avant et pendant la performance",
      benefits: ["Calme le système nerveux", "Améliore la présence scénique", "Gestion de l'émotion"]
    },
    {
      title: "Visualisation positive", 
      description: "Préparation mentale par la visualisation de performances réussies",
      benefits: ["Confiance en soi", "Anticipation positive", "Mémorisation gestuelle"]
    },
    {
      title: "Ancrage corporel",
      description: "Techniques pour être pleinement présent dans son corps et sa créativité",
      benefits: ["Présence authentique", "Libération créative", "Gestion du stress physique"]
    },
    {
      title: "Récupération active",
      description: "Méthodes pour récupérer après l'effort créatif et maintenir l'inspiration",
      benefits: ["Prévention burn-out", "Régénération créative", "Équilibre vie-art"]
    }
  ];

  const testimonials = [
    {
      text: "Grâce à Bénédicte, j'ai appris à transformer mon trac en énergie créative. Mes concerts sont maintenant des moments de pur bonheur.",
      author: "Sophie Lemaire",
      profession: "Violoniste professionnelle"
    },
    {
      text: "Les techniques de sophrologie m'ont permis de retrouver ma spontanéité sur scène. Je me sens plus libre et authentique dans mon jeu.",
      author: "Marc Dubois",
      profession: "Comédien"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFCA08] to-[#e6b607] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Music className="h-12 w-12 text-gray-800 mr-4" />
                <span className="text-lg font-semibold text-gray-800">Artistes</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Sophrologie pour Artistes
              </h1>
              <p className="text-xl mb-8 text-gray-800">
                Libérez votre créativité, maîtrisez le trac et révélez votre plein potentiel 
                artistique grâce à la sophrologie adaptée aux métiers de l'art.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-gray-900 text-white font-semibold py-4 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                >
                  Prendre rendez-vous
                </Link>
                <a 
                  href="#techniques" 
                  className="border-2 border-gray-900 text-gray-900 font-semibold py-4 px-8 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300 text-center"
                >
                  Découvrir les techniques
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Artiste en performance"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#FFCA08] p-3 rounded-full">
                    <Star className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">95%</p>
                    <p className="text-sm text-gray-600">Confiance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pour tous les artistes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quel que soit votre domaine artistique, la sophrologie vous accompagne vers l'excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {artistTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`${type.color} p-6 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-12 w-12 text-white mx-auto" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{type.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Les défis de l'artiste
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La sophrologie vous aide à surmonter les obstacles qui peuvent freiner votre expression artistique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => {
              return (
                <div key={index} className="text-center group">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section id="techniques" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Techniques adaptées aux artistes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des méthodes spécifiquement conçues pour répondre aux besoins des professionnels de l'art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techniques.map((technique, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#FFCA08] mb-4">{technique.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{technique.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Bénéfices :</h4>
                  {technique.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#FFCA08] rounded-full"></div>
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Témoignages d'artistes
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez comment la sophrologie a transformé leur pratique artistique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="mb-6">
                  <div className="flex text-[#FFCA08] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 italic">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#FFCA08] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-800 font-bold">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.profession}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mon accompagnement personnalisé
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Bilan artistique",
                description: "Évaluation de vos défis spécifiques et de vos objectifs créatifs"
              },
              {
                step: "2",
                title: "Programme adapté",
                description: "Création d'un programme personnalisé selon votre discipline artistique"
              },
              {
                step: "3",
                title: "Suivi régulier",
                description: "Accompagnement continu avec ajustement des techniques selon vos progrès"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#FFCA08] text-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FFCA08] to-[#e6b607]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt(e) à révéler votre potentiel artistique ?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Contactez-moi pour découvrir comment la sophrologie peut transformer votre pratique artistique 
            et vous aider à atteindre l'excellence créative.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center space-x-2 bg-gray-900 text-white font-semibold py-4 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Prendre rendez-vous</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Artists;