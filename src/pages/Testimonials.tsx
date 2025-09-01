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
          text: "Grâce aux ateliers de Bénédicte, l'ambiance de travail dans notre équipe s'est considérablement améliorée. Nos collaborateurs sont plus sereins et plus efficaces. L'absentéisme a diminué de 30% depuis la mise en place des séances de sophrologie.",
          author: "Marie Dubois",
          position: "Directrice RH",
          company: "TechCorp Solutions",
          employees: "250 salariés",
          rating: 5
        },
        {
          text: "Les techniques de sophrologie nous ont aidés à mieux gérer la pression des projets. Nos équipes créatives sont moins stressées et plus innovantes. Un investissement qui s'est rapidement révélé rentable.",
          author: "Jean-Luc Martin",
          position: "Directeur Général",
          company: "Agence Créative Plus",
          employees: "45 salariés",
          rating: 5
        },
        {
          text: "L'approche de Bénédicte, enrichie par son expérience en entreprise, nous a permis de créer un programme de bien-être sur-mesure. Nos managers ont maintenant des outils concrets pour accompagner leurs équipes.",
          author: "Sophie Leroy",
          position: "Responsable Formation",
          company: "Industries Modernes",
          employees: "180 salariés", 
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
          text: "Avant de rencontrer Bénédicte, je souffrais d'un trac paralysant avant chaque concert. Aujourd'hui, j'ai appris à transformer cette énergie en créativité. Mes concerts sont maintenant des moments de pur bonheur et ma technique s'est nettement améliorée.",
          author: "Sophie Lemaire",
          position: "Violoniste professionnelle",
          company: "Orchestre Philharmonique",
          specialty: "Musique classique",
          rating: 5
        },
        {
          text: "Les techniques de sophrologie m'ont permis de retrouver ma spontanéité sur scène. Je me sens plus libre et authentique dans mon jeu. Ma mémoire s'est renforcée et je gère beaucoup mieux les imprévus pendant les représentations.",
          author: "Marc Dubois",
          position: "Comédien",
          company: "Théâtre National",
          specialty: "Théâtre contemporain",
          rating: 5
        },
        {
          text: "Grâce à l'accompagnement de Bénédicte, j'ai développé une meilleure conscience de mon corps et de ma respiration. Cela m'a permis d'améliorer ma présence scénique et de gérer efficacement les tournées stressantes.",
          author: "Luna Silva",
          position: "Chanteuse",
          company: "Artiste indépendante",
          specialty: "Pop/Folk",
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
          text: "Après des années d'insomnie, j'ai enfin retrouvé des nuits complètes grâce aux techniques de Bénédicte. Les exercices sont simples à reproduire chez soi et vraiment efficaces. Ma qualité de vie s'est transformée.",
          author: "Claire Martin",
          age: "34 ans",
          issue: "Troubles du sommeil",
          duration: "3 mois d'accompagnement",
          rating: 5
        },
        {
          text: "L'accompagnement m'a aidée à reprendre confiance en moi après une période difficile. Je me sens plus forte et sereine au quotidien. Les outils que j'ai appris me servent encore aujourd'hui, 2 ans après.",
          author: "Marie Dupont",
          age: "42 ans",
          issue: "Confiance en soi",
          duration: "6 mois d'accompagnement",
          rating: 5
        },
        {
          text: "Les séances m'ont donné des outils concrets pour gérer mon stress au travail et dans ma vie personnelle. Bénédicte a une approche très humaine et professionnelle. Je recommande vivement !",
          author: "Thomas Leblanc",
          age: "38 ans",
          issue: "Gestion du stress",
          duration: "4 mois d'accompagnement",
          rating: 5
        },
        {
          text: "Grâce à la sophrologie, j'ai développé une relation plus saine avec la nourriture et avec moi-même. L'accompagnement bienveillant de Bénédicte m'a permis de retrouver l'équilibre après des années de troubles alimentaires.",
          author: "Émilie Rousseau",
          age: "29 ans",
          issue: "Troubles alimentaires",
          duration: "8 mois d'accompagnement",
          rating: 5
        }
      ]
    }
  ];

  const stats = [
    { number: "200+", label: "Personnes accompagnées", icon: User },
    { number: "15", label: "Entreprises partenaires", icon: Building2 },
    { number: "5", label: "Années d'expérience", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#EC781D] to-[#d66a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Témoignages</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-12">
            Découvrez les expériences de ceux qui ont fait confiance à la sophrologie 
            "En Vie de Sophro" pour transformer leur quotidien
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
            {['TechCorp Solutions', 'Agence Créative Plus', 'Industries Modernes', 'Théâtre National'].map((company, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-xl">
                <div className="bg-gray-300 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-gray-600" />
                </div>
                <p className="font-semibold text-gray-700">{company}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              "L'authenticité de ces témoignages reflète mon engagement envers chaque personne que j'accompagne. 
              Chaque parcours est unique et mérite une attention particulière."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div>
                <p className="font-bold text-gray-900 text-lg">Bénédicte Lachapelle</p>
                <p className="text-gray-600">Sophrologue certifiée RNCP</p>
              </div>
            </div>
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