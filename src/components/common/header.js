import { useState, useEffect } from "react";
import '../../styles/globals.css';
import '../../styles/common.css';
import '../../styles/animations.css';
import '../../styles/themes.css';
import Destaque from '../index/sessao-destaque.js';  // Certifique-se de importar o componente Destaque

const temas = ["chihiro", "vagalumes", "totoro", "kaguya"];
const imagens = {
    chihiro: "imgs/backgrounds/chihiro.jpg",
    vagalumes: "imgs/backgrounds/vagalumes.png",
    totoro: "imgs/backgrounds/totoro.png",
    kaguya: "imgs/backgrounds/kaguya.jpg",
};

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [temaAtual, setTemaAtual] = useState("chihiro");
    const [headerClass, setHeaderClass] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50 && currentScrollY > lastScrollY) {
                setScrolled(true);
            } else if (currentScrollY < lastScrollY) {
                setScrolled(false);
            }

            setHeaderClass(currentScrollY > 50 ? "scrolled" : "");
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Função para aplicar tema

    return (
        <>
            <header id="header" className={`${scrolled ? "hidden" : ""} ${headerClass}`}>
                <nav id='header-nav'>
                    <div id='header-esquerdo'>
                        <h1 id='studioghibli-logo'>STUDIO GHIBLI</h1>
                    </div>

                    <div id='header-meio'>
                        <ul>
                            <li><a>STUDIO GHIBLI</a></li>
                            <li><a>FILMES</a></li>
                            <li><a>PERSONAGENS</a></li>
                            <li><a>LOCAIS</a></li>
                        </ul>
                    </div>

                    <div id='header-direita'>
                        <button>
                            <img src="imgs/icons/favorito.png" alt="Favoritos" id="header-favorito" />
                        </button>
                        <button id="hamburguer-menu">
                            <svg width="30" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" id="rect-hamburguer-menu">
                                <rect id="rect1" x="0" y="0" width="50" height="5" rx="1" fill="white" />
                                <rect id="rect2" x="0" y="17" width="50" height="5" rx="1" fill="white" />
                                <rect id="rect3" x="0" y="34" width="35" height="5" rx="1" fill="white" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            
        </>
    );
};

export default Header;
