import React from 'react';
import { Star, Quote, Building2, Music, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      category: 'Entreprises',
      icon: Building2,
      color: 'bg-[#2362B0]',
      testimonials: [
        {
          text: "Grâce à l'accompagnement de Bénédicte, notre équipe a vu une nette amélioration de la cohésion et de la gestion du stress. Les séances de sophrologie ont permis à chacun de mieux gérer les défis professionnels, ce qui a eu un impact positif sur notre productivité.",
          author: "Marie Dubois",
          position: "Directrice RH",
          company: "TechCorp Solutions",
          employees: "250 salariés",
          rating: 5
        }
      ]
    },
    {
      category: 'Artistes',
      icon: Music,
      color: 'bg-[#FFCA08]',
      testimonials: [
        {
          text: "Bénédicte m'a aidée à surmonter mon trac avant les concerts. Les techniques de respiration et de visualisation qu'elle m'a enseignées sont devenues des outils indispensables dans ma préparation. Je me sens plus confiante et sereine sur scène.",
          author: "Sophie Lemaire",
          position: "Violoniste professionnelle",
          company: "Orchestre Philharmonique",
          specialty: "Musique classique",
          rating: 5
        }
      ]
    },
    {
      category: 'Particuliers',
      icon: User,
      color: 'bg-[#43A3DB]',
      testimonials: [
        {
          text: "Après seulement quelques mois de séances avec Bénédicte, j'ai retrouvé un sommeil réparateur. Ses conseils et exercices de sophrologie m'ont permis de réduire mon anxiété et d'améliorer ma qualité de vie au quotidien.",
          author: "Claire Martin",
          age: "34 ans",
          issue: "Troubles du sommeil",
          duration: "3 mois d'accompagnement",
          rating: 5
        }
      ]
    }
  ];

  const stats = [
    { number: "0", label: "Personnes accompagnées", icon: User },
    { number: "0", label: "Entreprises partenaires", icon: Building2 },
    { number: "0", label: "Années d'expérience", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#EC781D] to-[#d66a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Témoignages</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-12">
            Découvrez les expériences de ceux qui ont fait confiance à la sophrologie 
            "En Vie de Sophro" pour transformer leur quotidien !
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white bg-opacity-20 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials by Category */}
      
      {testimonials.map((category, categoryIndex) => {
        const CategoryIcon = category.icon;
        return (
          <section key={categoryIndex} className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                  <div className={`${category.color} p-4 rounded-full mr-4`}>
                    <CategoryIcon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {category.category}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-8">
                      <div className={`${category.color} p-3 rounded-full`}>
                        <Quote className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex text-yellow-400 mb-4 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="border-t pt-6">
                      <div className="flex items-center mb-3">
                        <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                          <span className="text-white font-bold">
                            {testimonial.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">{testimonial.author}</p>
                          {'position' in testimonial && (
                            <p className="text-gray-600">{testimonial.position}</p>
                          )}
                        </div>
                      </div>
                      
                      {/* Category-specific details */}
                      <div className="text-sm text-gray-500 space-y-1">
                        {category.category === 'Entreprises' &&
                          'company' in testimonial && 'employees' in testimonial && (
                            <>
                              <p>{testimonial.company}</p>
                              <p>{testimonial.employees}</p>
                            </>
                          )}
                        {category.category === 'Artistes' &&
                          'company' in testimonial && 'specialty' in testimonial && (
                            <>
                              <p>{testimonial.company}</p>
                              <p>{testimonial.specialty}</p>
                            </>
                          )}
                        {category.category === 'Particuliers' &&
                          'age' in testimonial && 'issue' in testimonial && 'duration' in testimonial && (
                            <>
                              <p>{testimonial.age}</p>
                              <p>{testimonial.issue}</p>
                              <p>{testimonial.duration}</p>
                            </>
                          )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ils nous font confiance
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {['TechCorp Solutions'].map((company, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-xl">
                <div className="bg-gray-300 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-gray-600" />
                </div>
                <p className="font-semibold text-gray-700">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#EC781D] to-[#d66a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            À votre tour de témoigner ?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Rejoignez ceux qui ont déjà transformé leur quotidien grâce à la sophrologie. 
            Contactez-moi pour commencer votre parcours vers le bien-être.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center space-x-2 bg-white text-[#EC781D] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Commencer mon parcours</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;