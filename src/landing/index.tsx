import "./style.scss";
export default function Landing() {
    return (
        <section id="home" className="landing">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="text-container">
                            <h1 className="display-2 fw-bold mb-4">
                                Hey!, I'm Patrick
                            </h1>
                            <p className="fs-4">
                                this is a multi-purpose responsive layout
                                created with bootstrap v5. (here your can place
                                your description text)
                            </p>
                            <a
                                href="#"
                                className="button-special rounded-pill fs-5 mt-4 fw-medium"
                            >
                                Get In Touch{" "}
                                <i className="fa-solid fa-arrow-right icon"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 pt-3">
                        <div className="video-box">
                            <img
                                src="images/arts/intro-section-illustration.png"
                                className="w-100"
                                alt=""
                            />
                            <a href="#" className="glightbox video-click-box">
                                <i className="fa-solid fa-circle-play play-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="wavy-icon"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#fff"
                    fill-opacity="1"
                    d="M0,96L24,117.3C48,139,96,181,144,192C192,203,240,181,288,149.3C336,117,384,75,432,80C480,85,528,139,576,144C624,149,672,107,720,117.3C768,128,816,192,864,192C912,192,960,128,1008,112C1056,96,1104,128,1152,160C1200,192,1248,224,1296,245.3C1344,267,1392,277,1416,282.7L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
                    data-darkreader-inline-fill=""
                    // style="--darkreader-inline-fill:#2077b1;"
                ></path>
            </svg>
            
        </section>
    );
}
