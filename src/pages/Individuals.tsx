import React from 'react';
import { Link } from 'react-router-dom';
import { User, Moon, Brain, Shield, Smile, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Individuals = () => {
  const needs = [
    {
      icon: Moon,
      title: "Troubles du sommeil",
      description: "Retrouver un sommeil réparateur et des nuits paisibles"
    },
    {
      title: "Confiance en soi",
      description: "Renforcer l'estime de soi et la confiance en ses capacités"
    },
    {
      icon: Brain,
      title: "Gestion des émotions",
      description: "Apprendre à accueillir et réguler ses émotions"
    },
    {
      icon: Shield,
      title: "Gestion du stress",
      description: "Techniques pour faire face aux situations stressantes du quotidien"
    },
    {
      icon: Smile,
      title: "Troubles alimentaires",
      description: "Accompagnement dans la réconciliation avec l'alimentation"
    },
    {
      icon: User,
      title: "Développement personnel",
      description: "Chemin vers l'épanouissement et la réalisation de soi"
    }
  ];

  const approaches = [
    {
      title: "Séances individuelles",
      description: "Accompagnement personnalisé adapté à vos besoins spécifiques",
      duration: "1h",
      format: "En présentiel ou en visio",
      benefits: ["Programme sur-mesure", "Confidentialité", "Rythme adapté"]
    },
    {
      title: "Ateliers de groupe",
      description: "Sessions collectives pour partager l'expérience avec d'autres participants",
      duration: "1h30",
      format: "Groupes de 6 à 8 personnes",
      benefits: ["Dynamique de groupe", "Échange d'expériences", "Tarif avantageux"]
    },
    {
      title: "Programme intensif",
      description: "Accompagnement renforcé sur une période déterminée",
      duration: "4 à 8 semaines",
      format: "Suivi hebdomadaire",
      benefits: ["Résultats rapides", "Suivi personnalisé", "Outils pratiques"]
    }
  ];

  const testimonials = [
    {
      text: "Grâce à Bénédicte, j'ai retrouvé des nuits complètes après des années d'insomnie. Les techniques sont simples et vraiment efficaces.",
      author: "Claire Martin",
      age: "34 ans",
      issue: "Troubles du sommeil"
    },
    {
      text: "L'accompagnement m'a aidée à reprendre confiance en moi après une période difficile. Je me sens plus forte et sereine au quotidien.",
      author: "Marie Dupont",
      age: "42 ans", 
      issue: "Confiance en soi"
    },
    {
      text: "Les séances m'ont donné des outils concrets pour gérer mon stress au travail. Je recommande vivement !",
      author: "Thomas Leblanc",
      age: "38 ans",
      issue: "Gestion du stress"
    }
  ];

  const faq = [
    {
      question: "Combien de séances sont nécessaires ?",
      answer: "Le nombre de séances varie selon vos objectifs. En général, 8 à 12 séances permettent d'observer des changements durables."
    },
    {
      question: "La sophrologie remplace-t-elle un suivi médical ?",
      answer: "Non, la sophrologie est un accompagnement complémentaire. Elle ne se substitue pas à un traitement médical."
    },
    {
      question: "Peut-on faire de la sophrologie à distance ?",
      answer: "Oui, les séances en visioconférence sont tout aussi efficaces que les séances en présentiel."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#43A3DB] to-[#3892c7] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <User className="h-12 w-12 text-white mr-4" />
                <span className="text-lg font-semibold">Particuliers</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sophrologie pour Particuliers
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Retrouvez l'équilibre, gérez vos émotions et cultivez votre bien-être au quotidien 
                grâce à un accompagnement sophrologique personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-[#43A3DB] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                >
                  Prendre rendez-vous
                </Link>
                <a 
                  href="#besoins" 
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-[#43A3DB] transition-colors duration-300 text-center"
                >
                  Découvrir les accompagnements
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3984360/pexels-photo-3984360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Personne en méditation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-600">Bien-être</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Needs Section */}
      <section id="besoins" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vos besoins, mes solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La sophrologie vous accompagne dans tous les aspects de votre vie quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {needs.map((need, index) => {
              return (
                <div key={index} className="text-center group">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{need.title}</h3>
                  <p className="text-gray-600">{need.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approaches Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Formules d'accompagnement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez la formule qui correspond le mieux à vos besoins et à votre rythme de vie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#43A3DB] mb-4">{approach.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{approach.description}</p>
                
                <div className="mb-6 space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-[#43A3DB]" />
                    <span className="text-gray-600">{approach.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-[#43A3DB]" />
                    <span className="text-gray-600">{approach.format}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Avantages :</h4>
                  {approach.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-[#43A3DB]" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Témoignages clients
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez comment la sophrologie a transformé leur quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <p className="text-lg text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="bg-[#43A3DB] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.age} - {testimonial.issue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
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
              Comment ça se passe ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Premier contact",
                description: "Échange téléphonique gratuit pour définir vos besoins"
              },
              {
                step: "2",
                title: "Première séance",
                description: "Bilan personnalisé et découverte des techniques de base"
              },
              {
                step: "3",
                title: "Suivi régulier",
                description: "Séances adaptées à votre progression et vos objectifs"
              },
              {
                step: "4",
                title: "Autonomie",
                description: "Maîtrise des outils pour une pratique autonome"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#43A3DB] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#43A3DB] to-[#3892c7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt(e) à prendre soin de vous ?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Contactez-moi pour un premier échange gratuit et découvrir comment la sophrologie 
            peut vous aider à atteindre vos objectifs de bien-être.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center space-x-2 bg-white text-[#43A3DB] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Prendre rendez-vous</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Individuals;