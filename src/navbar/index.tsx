import "./style.scss";
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="./images/logo.png" alt="Logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse overflow-hidden justify-content-lg-end"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav pe-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials">
                                Testimonials
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faq">
                                FAQ
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#lastestWork">
                                portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                contact
                            </a>
                        </li>
                    </ul>
                    <a href="tel:+201091907365" className="button-special rounded-pill mt-4 mt-lg-0">+0109190736<i className="fa-solid fa-phone icon"></i></a>
                </div>
            </div>
        </nav>
    );
}
