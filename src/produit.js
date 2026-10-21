
import 'bootstrap/dist/css/bootstrap.css';

export default function Produit(props) {
    const { produit } = props;

    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <div
                className="card h-100 border-0 rounded-4 overflow-hidden"
                style={{
                    background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
                    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
                }}
            >
                <img
                    src={produit.image}
                    alt={produit.titre}
                    className="card-img-top"
                    style={{
                        height: '200px',
                        objectFit: 'contain',
                        padding: '15px',
                    }}
                />

                <div className="card-body d-flex flex-column p-4">
                    <span className="badge bg-primary rounded-pill px-3 py-2 mb-3 align-self-start">
                        {produit.categorie}
                    </span>

                    <h5 className="card-title fw-bold mb-3">
                        {produit.titre}
                    </h5>

                    <div className="mt-auto">
                        <p className="text-muted mb-1">Prix</p>

                        <p className="fs-4 fw-bold text-dark mb-3">
                            {produit.prix} DH
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
