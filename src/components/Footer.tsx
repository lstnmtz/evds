import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#EC781D]">En Vie de Sophro</h3>
                <p className="text-sm text-gray-400">Bénédicte Lachapelle</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm max-w-md">
              Sophrologie certifiée RNCP pour accompagner entreprises, artistes et particuliers 
              vers le bien-être et la performance.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/entreprises" className="text-gray-300 hover:text-[#EC781D] transition-colors">Entreprises & Associations</a></li>
              <li><a href="/artistes" className="text-gray-300 hover:text-[#EC781D] transition-colors">Artistes</a></li>
              <li><a href="/particuliers" className="text-gray-300 hover:text-[#EC781D] transition-colors">Particuliers</a></li>
              <li><a href="/temoignages" className="text-gray-300 hover:text-[#EC781D] transition-colors">Témoignages</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Phone className="h-4 w-4 text-[#EC781D]" />
                <span className="text-gray-300">06 72 38 55 82</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Mail className="h-4 w-4 text-[#EC781D]" />
                <span className="text-gray-300">Benefilippi@hotmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <MapPin className="h-4 w-4 text-[#EC781D]" />
                <span className="text-gray-300">La Rivière-de-Corps</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 En Vie de Sophro - Bénédicte Lachapelle. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Sophrologie certifiée RNCP - Accompagnement professionnel et personnel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;