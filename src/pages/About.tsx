import React from 'react';
import { GraduationCap, Briefcase, Award, Users, Target } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      period: "15 ans",
      company: "Grande distribution",
      role: "Salariée",
      description: "Développement des compétences en relation client et gestion d'équipe",
      icon: Users
    },
    {
      period: "15 ans", 
      company: "Service automobile",
      role: "Cheffe d'entreprise",
      description: "Direction d'équipe, gestion d'entreprise et développement commercial",
      icon: Briefcase
    },
    {
      period: "Aujourd'hui",
      company: "En Vie de Sophro",
      role: "Sophrologue certifiée RNCP",
      description: "Accompagnement en sophrologie pour entreprises, artistes et particuliers",
    }
  ];

  const certifications = [
    {
      title: "Certification RNCP",
      description: "Sophrologie reconnue par l'État français",
      icon: Award
    },
    {
      title: "15 ans Management",
      description: "Expérience managériale chez Carrefour",
      icon: Users
    },
    {
      title: "15 ans Entrepreneuriat",
      description: "Direction d'entreprise chez Feu Vert",
      icon: Target
    },
    {
      title: "Formation Continue",
      description: "Perfectionnement permanent des techniques",
      icon: GraduationCap
    }
  ];

  const values = [
    {
      name: "Gentillesse",
      description: "Une force authentique qui crée un environnement de confiance et de respect mutuel"
    },
    {
      name: "Autonomie", 
      description: "Accompagner vers l'indépendance pour que chacun devienne acteur de son mieux-être"
    },
    {
      name: "Adaptabilité",
      description: "Solutions personnalisées selon les besoins spécifiques de chaque client"
    },
    {
      name: "Accomplissement",
      description: "Soutenir la réalisation de soi et l'épanouissement personnel et professionnel"
    },
    {
      name: "Bienveillance",
      description: "Un accompagnement humain, sans jugement, dans le respect de chaque individualité"
    },
    {
      name: "Succès",
      description: "Viser des résultats concrets et durables pour tous mes clients"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#EC781D] to-[#d66a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bénédicte Lachapelle</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Sophrologue certifiée RNCP
            </p>
          </div>
          
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 max-w-4xl mx-auto">            
            <p className="text-lg leading-relaxed opacity-90 text-center max-w-3xl mx-auto">
              Après 30 années d'expérience professionnelle en entreprise, j'ai choisi de me reconvertir 
              en sophrologie pour accompagner chacun vers son épanouissement. Mon parcours atypique me 
              permet de comprendre les enjeux du monde professionnel tout en apportant les outils de 
              bien-être nécessaires à l'équilibre personnel.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mon Parcours</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              30 ans d'expérience professionnelle qui enrichissent ma pratique de la sophrologie
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => {
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold text-[#EC781D] mb-2">{milestone.period}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{milestone.company}</h3>
                      <p className="text-lg font-semibold text-gray-600">{milestone.role}</p>
                    </div>
                    <p className="text-gray-600 text-center">{milestone.description}</p>
                  </div>
                  
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-0.5 bg-[#EC781D]"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Certifications & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une formation rigoureuse et une expérience professionnelle solide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-2xl mb-4 group-hover:from-[#EC781D] group-hover:to-[#d66a0a] transition-all duration-300">
                    <IconComponent className="h-12 w-12 text-[#EC781D] group-hover:text-white mx-auto" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mes Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident mon accompagnement en sophrologie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{value.name}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#EC781D] to-[#d66a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt(e) à découvrir la sophrologie ?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Mon expérience et mon approche personnalisée sont à votre service pour vous accompagner 
            vers vos objectifs de bien-être et de performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-[#EC781D] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contactez-moi
            </a>
            <a 
              href="/temoignages" 
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-[#EC781D] transition-colors duration-300"
            >
              Voir les témoignages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;