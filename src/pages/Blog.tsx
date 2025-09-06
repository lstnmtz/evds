import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#EC781D] to-[#d66a0a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Actualités</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Conseils, techniques et actualités sur la sophrologie pour enrichir 
            votre parcours de bien-être
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contenu en préparation
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Je prépare avec soin du contenu de qualité pour vous accompagner dans votre 
              découverte et pratique de la sophrologie. Articles, conseils pratiques, 
              actualités et témoignages seront bientôt disponibles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-[#EC781D] text-white font-semibold py-4 px-8 rounded-full hover:bg-[#d66a0a] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contactez-moi
              </a>
              <a 
                href="/temoignages" 
                className="border-2 border-[#EC781D] text-[#EC781D] font-semibold py-4 px-8 rounded-full hover:bg-[#EC781D] hover:text-white transition-colors duration-300"
              >
                Voir les témoignages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Restez informé(e)
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Soyez le premier à découvrir nos nouveaux articles et actualités
          </p>
          
          <div className="bg-gray-50 p-8 rounded-2xl max-w-md mx-auto">
            <p className="text-gray-600 mb-6">
              Newsletter disponible prochainement. En attendant, n'hésitez pas à me contacter 
              directement pour toute question sur la sophrologie.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center space-x-2 bg-[#EC781D] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#d66a0a] transition-colors duration-300"
            >
              <span>Me contacter</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;