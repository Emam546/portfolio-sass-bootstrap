import "./style.scss";
export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="testimonials text-white bg-gradient"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#fff"
                    fill-opacity="1"
                    d="M0,0L48,32C96,64,192,128,288,181.3C384,235,480,277,576,250.7C672,224,768,128,864,122.7C960,117,1056,203,1152,245.3C1248,288,1344,288,1392,288L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>
            <div className="container">
                <h2 className="special-title display-4 text-center m-0 p-0 m-auto fw-bold">
                    Testimonials
                </h2>
                <p className="text-center mt-3 fs-6 fw-light">
                    what our clients are saying
                </p>
                <div
                    id="testimonialsCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="box">
                                <div className="text-container">
                                    <p>
                                        <i className="fa-solid fa-quote-left icon"></i>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Placeat aut
                                        consequatur illo animi optio
                                        exercitationem doloribus eligendi iusto
                                        atque repudiandae. Distinctio.
                                        <i className="fa-solid fa-quote-right icon"></i>
                                    </p>
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="img-container">
                                        <img
                                            src="./images/testimonials/client-1.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="text-center pt-3">
                                    <h3>Patrick Muriungi</h3>
                                    <p className="fs-6 fw-light">
                                        CEO & Founder
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="box">
                                <div className="text-container">
                                    <p>
                                        <i className="fa-solid fa-quote-left icon"></i>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Placeat aut
                                        consequatur illo animi optio
                                        exercitationem doloribus eligendi iusto
                                        atque repudiandae. Distinctio.
                                        <i className="fa-solid fa-quote-right icon"></i>
                                    </p>
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="img-container">
                                        <img
                                            src="./images/testimonials/client-2.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="text-center pt-3">
                                    <h3>ClaireBelle Zawadi</h3>
                                    <p className="fs-6 fw-light">
                                        Global Brand Manager
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="box">
                                <div className="text-container">
                                    <p>
                                        <i className="fa-solid fa-quote-left icon"></i>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Placeat aut
                                        consequatur illo animi optio
                                        exercitationem doloribus eligendi iusto
                                        atque repudiandae. Distinctio.
                                        <i className="fa-solid fa-quote-right icon"></i>
                                    </p>
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="img-container">
                                        <img
                                            src="./images/testimonials/client-3.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="text-center pt-3">
                                    <h3>Joy Marete</h3>
                                    <p className="fs-6 fw-light">
                                    Finance Manager
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="box">
                                <div className="text-container">
                                    <p>
                                        <i className="fa-solid fa-quote-left icon"></i>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Placeat aut
                                        consequatur illo animi optio
                                        exercitationem doloribus eligendi iusto
                                        atque repudiandae. Distinctio.
                                        <i className="fa-solid fa-quote-right icon"></i>
                                    </p>
                                    <div className="stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="img-container">
                                        <img
                                            src="./images/testimonials/client-4.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="text-center pt-3">
                                    <h3>Uhuru Kenyatta</h3>
                                    <p className="fs-6 fw-light">
                                        CEO & Founder
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons-container">
                        <button
                            type="button"
                            data-bs-target="#testimonialsCarousel"
                            data-bs-slide="prev"
                        >
                            <i className="fa-solid fa-arrow-left-long"></i>
                        </button>
                        <button
                            type="button"
                            data-bs-target="#testimonialsCarousel"
                            data-bs-slide="next"
                        >
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#fff"
                    fill-opacity="1"
                    d="M0,0L48,32C96,64,192,128,288,181.3C384,235,480,277,576,250.7C672,224,768,128,864,122.7C960,117,1056,203,1152,245.3C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            
        </section>
    );
}
