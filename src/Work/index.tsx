import { useState } from "react";
import "./style.scss";
import { faker } from "@faker-js/faker";
const ALL = "All";
const categories = ["Websites", "Design", "Mockup"];
const Options = [ALL, ...categories];
function SliderOptions({
    options,
    state,
    setState,
}: {
    options: string[];
    state: string;
    setState: Function;
}) {
    return (
        <ul className="slider-options">
            {options.map((curOp, i) => {
                return (
                    <li
                        className={`${
                            state == curOp && "active"
                        } btn btn-outline-primary`}
                        key={i}
                        onClick={() => setState(curOp)}
                    >
                        {curOp}
                    </li>
                );
            })}
        </ul>
    );
}
const Data = [
    {
        category: categories[Math.floor(Math.random() * categories.length)],
        projectName: faker.commerce.productName(),
        img: "./images/portfolio/portfolio-1.jpg",
    },
    {
        category: categories[Math.floor(Math.random() * categories.length)],
        projectName: faker.commerce.productName(),
        img: "./images/portfolio/portfolio-2.jpg",
    },
    {
        category: categories[Math.floor(Math.random() * categories.length)],
        projectName: faker.commerce.productName(),
        img: "./images/portfolio/portfolio-3.jpg",
    },
    {
        category: categories[Math.floor(Math.random() * categories.length)],
        projectName: faker.commerce.productName(),
        img: "./images/portfolio/portfolio-4.jpg",
    },
    {
        category: categories[Math.floor(Math.random() * categories.length)],
        projectName: faker.commerce.productName(),
        img: "./images/portfolio/portfolio-5.jpg",
    },
    {
        category: categories[Math.floor(Math.random() * categories.length)],
        projectName: faker.commerce.productName(),
        img: "./images/portfolio/portfolio-6.jpg",
    },
    {
        category: categories[Math.floor(Math.random() * categories.length)],
        projectName: faker.commerce.productName(),
        img: "./images/portfolio/portfolio-7.jpg",
    },
    {
        category: categories[Math.floor(Math.random() * categories.length)],
        projectName: faker.commerce.productName(),
        img: "./images/portfolio/portfolio-8.jpg",
    },
    {
        category: categories[Math.floor(Math.random() * categories.length)],
        projectName: faker.commerce.productName(),
        img: "./images/portfolio/portfolio-9.jpg",
    },
];
function ImageGallery({ data, state }: { data: typeof Data; state: string }) {
    return (
        <div className="slider-images row">
            {data.map(({ category, img, projectName }, i) => {
                return (
                    <div
                        className={`col-md-6 col-lg-4 ${
                            (category == state || state == ALL) && "active"
                        }`}
                    >
                        <div className="box border-primary border-3">
                            <img src={img} alt={projectName} />
                            <div className="img-overlay text-capitalize text-center p-2">
                                <h2>{projectName}</h2>
                                <h3>GOES HERE {i + 1}</h3>
                                <p>{category}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default function LastestWork() {
    const [state, setState] = useState(ALL);
    return (
        <section id="lastestWork" className="lastestWork pt-5 pb-5">
            <div className="container">
                <h2 className="special-title fw-bold display-4 mb-4">
                    Latest Work
                </h2>
                <p className="text-center fw-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint porro temporibus distinctio.
                </p>
                <div className="slider-container">
                    <SliderOptions
                        options={Options}
                        state={state}
                        setState={setState}
                    />
                    <ImageGallery data={Data} state={state} />
                </div>
            </div>
        </section>
    );
}
