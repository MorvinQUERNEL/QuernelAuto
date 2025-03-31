import React from 'react';
import logo from '../img/logo_quernel_auto.png';
import './Presentation.css';

function Presentation() {
  return (
    <div className="presentation">
      <div className="presentation-content">
        <div className="presentation-header">
          <img src={logo} alt="Logo Quernel Auto" className="presentation-logo" />
          <h2>Quernel Auto</h2>
        </div>
        
        <div className="presentation-text">
          <p>
            Bienvenue chez Quernel Auto, votre partenaire de confiance dans l'univers automobile. 
            Depuis plus de 15 ans, nous mettons notre expertise au service de votre passion pour 
            l'automobile. Notre équipe de professionnels qualifiés s'engage à vous offrir un 
            service personnalisé et des solutions adaptées à vos besoins.
          </p>
          <p>
            Que vous recherchiez un véhicule neuf ou d'occasion, notre sélection rigoureuse 
            et notre connaissance approfondie du marché vous garantissent une expérience d'achat 
            exceptionnelle.
          </p>
        </div>

        <button className="cta-button">
          Remplir un formulaire
        </button>
      </div>
    </div>
  );
}

export default Presentation;