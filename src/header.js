
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <a className="navbar-brand fw-bold" href="/">
                Gestion de stock
            </a>

            <div className="ms-auto">
                <ul className="navbar-nav flex-row align-items-center gap-3">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            Accueil
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/produits">
                            Produits
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/categories">
                            Catégories
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/ventes">
                            Ventes
                        </a>
                    </li>

                    <li className="nav-item">
                        <button type="button" className="btn btn-warning">
                         Panier
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
