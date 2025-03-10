import { useState, useEffect } from "react";
import '../../styles/globals.css';
import '../../styles/common.css';
import '../../styles/animations.css';
import '../../styles/themes.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [headerClass, setHeaderClass] = useState("");


    // script pra fazer o header encolher qnd rolar p baixo
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50 && currentScrollY > lastScrollY) {
                setScrolled(true);
            } else if (currentScrollY < lastScrollY) {
                setScrolled(false);
            }

            setHeaderClass(currentScrollY > 50 ? "abaixado" : "");
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("abaixado", handleScroll);
    }, [lastScrollY]);


    return (
        <>
            <header id="header" className={`${scrolled ? "escondido" : ""} ${headerClass}`}>
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
                        <svg width="100" height="100" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="header-favorito">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                        </button>
                        <button id="hamburguer-menu">
                            <svg width="30" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" id="rect-hamburguer-menu">
                                <rect id="rect1" x="0" y="0" width="50" height="5" rx="1" />
                                <rect id="rect2" x="0" y="17" width="50" height="5" rx="1"/>
                                <rect id="rect3" x="0" y="34" width="35" height="5" rx="1"/>
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            
        </>
    );
};

export default Header;
