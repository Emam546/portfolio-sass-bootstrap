import "./style.scss";
export default function Contact() {
    return (
        <section id="contact" className="contact pt-5 pb-5">
            <div className="container">
                <h1 className="special-title fw-bold">Get Started</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Libero illum architecto modi.
                </p>
                <div className="boxes-row row">
                    <div className="col-lg-6 satisfaction bg-gradient text-white d-flex align-items-center">
                        <div>
                            <h1 className="fw-bold mt-4">
                                100% Satisfaction <br />
                                Guaranteed
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aperiam alias optio minima,
                                tempore architecto sint ipsam dolore tempora
                                facere laboriosam corrupti!
                            </p>
                            <h3>What will be the next step?</h3>
                            <ul className="correct-list list-unstyled pe-0 mb-4">
                                <li>We'll prepare the proposal.</li>
                                <li>We'll discuss it together.</li>
                                <li>let's start the discussion.</li>
                            </ul>
                        </div>
                    </div>
                    <form
                        action="#"
                        method="post"
                        className="col-lg-6 bg-white shadow-down"
                    >
                        <h5 className="text-gradient fw-bold m-auto m-md-0 pt-4">
                            Start Your Project
                        </h5>
                        <div className="row mt-4">
                            <div className="col-md-6 pe-md-3">
                                <input
                                    type="text"
                                    name="first-name"
                                    className="shadow-down"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="col-md-6 pt-3 pt-md-0">
                                <input
                                    type="text"
                                    name="second-name"
                                    className="shadow-down"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div className="mt-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="shadow-down"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="mt-3">
                                <textarea
                                    name="Message"
                                    placeholder="Message"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary d-block w-100 mt-3 mb-4 rounded-pill"
                        >
                            Send
                            <i className="fa-solid fa-paper-plane ms-2 me-2"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
