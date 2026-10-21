
import ordinateur from './assets/products/ordinateur.jpg';
import smartphone from './assets/products/smartphone.jpg';
import casque from './assets/products/casque.jpg';
import souris from './assets/products/souris.jpg';
import montre from './assets/products/montre.jpg';

import Header from './header';
import Footer from './footer';
import Produit from './produit';

export default function ListeProduit() {
    const produits = [
        {
            id: 1,
            titre: 'Ordinateur portable',
            prix: 6500,
            categorie: 'Informatique',
            image: ordinateur
        },
        {
            id: 2,
            titre: 'Smartphone',
            prix: 2500,
            categorie: 'Téléphonie',
            image: smartphone
        },
        {
            id: 3,
            titre: 'Casque Bluetooth',
            prix: 450,
            categorie: 'Audio',
            image: casque
        },
        {
            id: 4,
            titre: 'Souris sans fil',
            prix: 150,
            categorie: 'Accessoires informatiques',
            image: souris
        },
        {
            id: 5,
            titre: 'Montre connectée',
            prix: 800,
            categorie: 'Objets connectés',
            image: montre
        }
    ];

    return (
        <>
            <Header titre="Gestion de stock" nomBoutique="TechShop" />

            <div className="container my-4">
                <div className="row g-3">
                    {produits.map((pr) => (
                        <Produit key={pr.id} produit={pr} />
                    ))}
                </div>
            </div>

            <Footer annee="2026" />
        </>
    );
}
