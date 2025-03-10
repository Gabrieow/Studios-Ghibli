import { useState } from "react";

const imagens = [
    "imgs/Miyazaki.png",
    "imgs/museu-studio-ghibli.avif",
    "imgs/miyazaki-desenhando.webp",
    ];

const SliderGhibli = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % imagens.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
    };

    return (
        <div className="slider">
            <img src={imagens[index]} alt="Slide" className="slide-imagem" />
            <button className='botao-slider' onClick={prevSlide}>&lt;</button>
            <button className='botao-slider' onClick={nextSlide}>&gt;</button>
        </div>
    );
};

export default SliderGhibli;