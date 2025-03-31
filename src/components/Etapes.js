import React from 'react';
import etape1 from '../img/etape1.jpg';
import etape2 from '../img/etape2.avif';
import etape3 from '../img/etape3.jpg';
import etape4 from '../img/etape4.jpg';
import './Etapes.css';

function Etapes() {
  const etapes = [
    {
      numero: 1,
      titre: "Recherche Personnalisée",
      image: etape1,
      description: "Notre équipe d'experts analyse vos besoins et recherche le véhicule qui correspond parfaitement à vos critères et votre budget."
    },
    {
      numero: 2,
      titre: "Négociation et Achat Sécurisé",
      image: etape2,
      description: "Nous négocions le meilleur prix pour votre véhicule et sécurisons la transaction avec des garanties optimales."
    },
    {
      numero: 3,
      titre: "Transport et Formalités",
      image: etape3,
      description: "Nous organisons le transport de votre véhicule et gérons toutes les formalités administratives nécessaires."
    },
    {
      numero: 4,
      titre: "Homologation et Immatriculation",
      image: etape4,
      description: "Nous nous occupons de l'homologation et des démarches d'immatriculation pour une mise en circulation rapide."
    }
  ];

  return (
    <section className="etapes">
      <h2 className="etapes-titre">Notre processus</h2>
      <div className="etapes-container">
        {etapes.map((etape) => (
          <div key={etape.numero} className="etape-card">
            <div className="etape-image-container">
              <img src={etape.image} alt={`Étape ${etape.numero}`} className="etape-image" />
              <div className="etape-numero">{etape.numero}</div>
            </div>
            <div className="etape-content">
              <h3>{etape.titre}</h3>
              <p>{etape.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Etapes;