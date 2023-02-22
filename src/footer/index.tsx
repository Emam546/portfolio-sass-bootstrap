import "./style.scss";
export default function Footer() {
    return (
        <footer id="footer" className="footer text-white">
            <div className="container">
                <div className="row contact-links pt-4 pb-4">
                    <div className="col-md-4">
                        <div className="d-flex flex-wrap gap-3 pt-2">
                            <div className="contact-icon">
                                <i className="fa-solid fa-phone-volume"></i>
                            </div>
                            <div>
                                <a
                                    href="tel:+201091907375"
                                    className="link-primary text-white d-block text-decoration-none"
                                >
                                    +20 1091907375
                                </a>
                                <span className="text-muted">
                                    Mon-Fri 9am-6pm
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-wrap gap-3 pt-2">
                            <div className="contact-icon">
                                <i className="fa-regular fa-envelope-open"></i>
                            </div>
                            <div>
                                <a
                                    href="tel:+201091907375"
                                    className="link-primary text-white d-block text-decoration-none"
                                >
                                    info@company.com
                                </a>
                                <span className="text-muted">
                                    Online support
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-wrap gap-3 pt-2">
                            <div className="contact-icon">
                                <i className="fa-solid fa-map-location-dot"></i>
                            </div>
                            <div>
                                <a
                                    href="tel:+201091907375"
                                    className="link-primary text-white d-block text-decoration-none"
                                >
                                    New York, USA
                                </a>
                                <span className="text-muted">NY 10012, US</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-media">
                <div className="container pt-3 pb-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex  justify-content-center align-items-center h-100">
                                <p className="m-0">
                                    Connect with us on social media
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 mt-2 mt-md-0">
                            <div className="d-flex justify-content-center flex-wrap align-items-center gap-3">
                                <a
                                    href=""
                                    className="link-primary text-decoration-none text-white fs-4"
                                >
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a
                                    href=""
                                    className="link-primary text-decoration-none text-white fs-4"
                                >
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a
                                    href=""
                                    className="link-primary text-decoration-none text-white fs-4"
                                >
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a
                                    href=""
                                    className="link-primary text-decoration-none text-white fs-4"
                                >
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a
                                    href=""
                                    className="link-primary text-decoration-none text-white fs-4"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-4 pb-4">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <h6 className="fw-bold m-0">Campany Name</h6>
                        <hr
                            className="bg-white d-inline-block mb-2"
                            style={{ width: "60px", height: "2px" }}
                        ></hr>
                        <p className="lh-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem ex obcaecati blanditiis reprehenderit
                            ab mollitia voluptatem consectetur?
                        </p>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 mb-3">
                        <h6 className="fw-bold m-0">Products</h6>
                        <hr
                            className="bg-white d-inline-block mb-2"
                            style={{ width: "60px", height: "2px" }}
                        ></hr>
                        <ul className="list-unstyled lh-lg">
                            <li>
                                <a
                                    href="#"
                                    className="link-primary text-white text-decoration-none"
                                >
                                    Lorem ipsum
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="link-primary text-white text-decoration-none"
                                >
                                    Lorem ipsum
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="link-primary text-white text-decoration-none"
                                >
                                    Lorem ipsum
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="link-primary text-white text-decoration-none"
                                >
                                    Lorem ipsum
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 mb-3">
                        <h6 className="fw-bold m-0">Useful Links</h6>
                        <hr
                            className="bg-white d-inline-block mb-2"
                            style={{ width: "60px", height: "2px" }}
                        ></hr>
                        <ul className="list-unstyled lh-lg">
                            <li>
                                <a
                                    href="#"
                                    className="link-primary text-white text-decoration-none"
                                >
                                    Your Account
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="link-primary text-white text-decoration-none"
                                >
                                    Become an Affiliate
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="link-primary text-white text-decoration-none"
                                >
                                    Create an account
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="link-primary text-white text-decoration-none"
                                >
                                    Help
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 col-md-2">
                        <h6 className="fw-bold m-0">Contact</h6>
                        <hr
                            className="bg-white d-inline-block mb-2"
                            style={{ width: "60px", height: "2px" }}
                        ></hr>
                        <ul className="list-unstyled lh-lg">
                            <li>
                                <a
                                    href="#"
                                    className="link-primary text-white text-decoration-none"
                                >
                                    Lorem ipsum
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="link-primary text-white text-decoration-none"
                                >
                                    Lorem ipsum
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="link-primary text-white text-decoration-none"
                                >
                                    Lorem ipsum
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="link-primary text-white text-decoration-none"
                                >
                                    Lorem ipsum
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-black text-center pt-5 pb-5">
                <div className="container">
                    <p className="text-white-50 m-0">
                        © Copyright 2021{" "}
                        <a
                            href=""
                            className="link-priamry text-white text-decoration-none"
                        >
                            {" "}
                            Company{" "}
                        </a>{" "}
                        | Created by
                        <a
                            href=""
                            className="link-priamry text-white text-decoration-none"
                        >
                            Muriungi
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
