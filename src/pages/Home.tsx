import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Music, User, Star, Users } from 'lucide-react';

const Home = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const segments = [
    {
      id: 'entreprises',
      title: 'Entreprises & Associations',
      description: 'Gestion du stress, cohésion d\'équipe et bien-être au travail pour améliorer la performance collective.',
      color: 'bg-[#2362B0]',
      hoverColor: 'hover:bg-[#1e5499]',
      icon: Building2,
      link: '/entreprises',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'artistes',
      title: 'Artistes',
      description: 'Concentration, mémoire, gestion du trac et affirmation de soi pour révéler votre créativité.',
      color: 'bg-[#FFCA08]',
      hoverColor: 'hover:bg-[#e6b607]',
      textColor: 'text-gray-800',
      icon: Music,
      link: '/artistes',
      image: 'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'particuliers',
      title: 'Particuliers',
      description: 'Sommeil, confiance en soi, gestion des émotions et bien-être au quotidien pour une vie épanouie.',
      color: 'bg-[#43A3DB]',
      hoverColor: 'hover:bg-[#3892c7]',
      icon: User,
      link: '/particuliers',
      image: 'https://images.pexels.com/photos/3984360/pexels-photo-3984360.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section>
        <div className="w-full">
          {/*
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              En Vie de <span className="text-[#EC781D]">Sophro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Accompagnement en sophrologie pour entreprises, artistes et particuliers
            </p>
            <p className="text-lg text-gray-500 mb-12">
              <strong>Bénédicte Lachapelle</strong>, sophrologue certifiée RNCP
              <br />
              Un parcours professionnel atypique au service de votre épanouissement
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2 text-[#EC781D]">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-semibold">Certifiée RNCP</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <span>15 ans d'expérience managériale</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-5 w-5" />
                <span>Approche personnalisée</span>
              </div>
            </div>
          </div>
          */}

          {/* Three Equal Sections */}
          <div
            className="flex overflow-hidden"
            style={{
              width: "calc(100vw - 21px)", // 6px * 2 (bordures gauche et droite extrêmes)
              height: "calc(100vh - 80px)", // 90px = hauteur du Header
              marginLeft: "6px",
              marginRight: "6px",
            }}
          >
            {segments.map((segment, idx) => {
              const IconComponent = segment.icon;
              const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;
              const isHovered = hoveredIdx === idx;
              // Récupère la couleur hex depuis segment.color (ex: bg-[#2362B0] => #2362B0)
              const borderColor = isHovered
                ? segment.color.match(/#([0-9A-Fa-f]{6})/)?.[0] || "#EC781D"
                : "transparent";
              // Bordure à gauche seulement pour la première, à droite seulement pour la dernière, sinon des deux côtés
              let borderLeft = idx === 0 ? "6px solid " + borderColor : "none";
              let borderRight = idx === segments.length - 1 ? "6px solid " + borderColor : "none";
              let border = idx !== 0 && idx !== segments.length - 1 ? `6px solid ${borderColor}` : undefined;
              return (
                <Link
                  key={segment.id}
                  to={segment.link}
                  className="group/link flex flex-col h-full w-full p-0 transition-all duration-300 relative"
                  style={{
                    flex: isHovered ? 2 : 1,
                    transition: "flex-grow 0.3s",
                    minWidth: 0,
                    background: "none",
                    border: `6px solid ${borderColor}`,
                    boxSizing: "border-box",
                    zIndex: isHovered ? 20 : 10,
                  }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div className="relative h-full w-full overflow-hidden transition-all duration-300">
                    <img
                      src={segment.image}
                      alt={segment.title}
                      className={`w-full h-full object-cover transition-all duration-300 ${isDimmed ? "brightness-50" : "brightness-100"} ${isHovered ? "scale-110" : ""}`}
                      style={{ height: "100%", width: "100%" }}
                    />
                    <div className="absolute top-4 right-4 bg-white bg-opacity-20 p-3">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    {/* Texte lié à l'image, affiché seulement au survol */}
                    <div className="absolute bottom-8 left-8 z-10">
                      <h2 className={`text-2xl font-bold mb-4 text-white drop-shadow-lg`}>
                        {segment.title}
                      </h2>
                      {isHovered && (
                        <p className={`text-lg mb-6 leading-relaxed text-white opacity-90 drop-shadow-lg`}>
                          {segment.description}
                        </p>
                      )}
                      <div className="flex items-center space-x-2 transition-transform duration-300 mt-auto">
                        <span className="font-semibold text-white drop-shadow-lg">
                          En savoir plus
                        </span>
                        <ArrowRight className="h-5 w-5 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mes Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement guidé par la bienveillance, l'authenticité et la recherche de l'excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'Gentillesse', description: 'Une force authentique' },
              { name: 'Autonomie', description: 'Vers l\'indépendance' },
              { name: 'Adaptabilité', description: 'Solutions sur-mesure' },
              { name: 'Accomplissement', description: 'Réalisation de soi' },
              { name: 'Bienveillance', description: 'Accompagnement humain' },
              { name: 'Succès', description: 'Résultats durables' }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{value.name}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#EC781D] to-[#d66a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt(e) à commencer votre parcours ?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Contactez-moi pour discuter de vos besoins et découvrir comment la sophrologie
            peut vous accompagner vers vos objectifs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-[#EC781D] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span>Contactez-moi</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;