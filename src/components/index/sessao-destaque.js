import { useState, useEffect } from "react";
import '../../styles/globals.css';
import '../../styles/common.css';
import '../../styles/animations.css';
import '../../styles/themes.css';

const temas = ["chihiro", "vagalumes", "totoro", "kaguya"];
const imagens = {
    chihiro: "imgs/backgrounds/chihiro.jpg",
    vagalumes: "imgs/backgrounds/vagalumes.jpg",
    totoro: "imgs/backgrounds/totoro.jpg",
    kaguya: "imgs/backgrounds/kaguya.jpg",
};

const Destaque = () => {
    const [temaAtual, setTemaAtual] = useState("chihiro");
    const [imagemAtual, setImagemAtual] = useState("chihiro");
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        document.body.classList.add(temaAtual);  // Aplica o tema inicial
    }, [temaAtual]);

    // Função para aplicar o tema e trocar a imagem
    const aplicarTema = () => {

        if (isAnimating) return;

        setIsAnimating(true);

        const novoTema = temas[(temas.indexOf(temaAtual) + 1) % temas.length];
        
        document.body.classList.remove(...temas);
        document.body.classList.add(novoTema);
        setTemaAtual(novoTema);
        
        // Adiciona a animação de fade-out à imagem atual
        const imagem = document.getElementById('imagem-principal');
        imagem.classList.add('fade-out');
        
        // Espera a animação de 1,5 segundos terminar antes de mudar a imagem
        setTimeout(() => {
            // Remove a animação de fade-out
            imagem.classList.remove('fade-out');

            // Agora troca a imagem para a próxima
            const novaImagem = temas[(temas.indexOf(imagemAtual) + 1) % temas.length];
            setImagemAtual(novaImagem);

            // Atualiza o fundo da imagem com a nova imagem
            imagem.style.backgroundImage = `url(${imagens[novaImagem]})`;

            // Adiciona a animação de fade-in na nova imagem
            imagem.classList.add('fade-in');

            // Remove a animação de fade-in após a animação ser concluída
            setTimeout(() => {
                imagem.classList.remove('fade-in');
                setIsAnimating(false);
            }, 500); // O tempo da animação
        }, 500);  // Tempo para a animação de fade-out
    };

    return (
        <div className="principal">
            {/* Definindo a imagem de fundo baseada em imagemAtual */}
            <div id="imagem-principal" style={{ backgroundImage: `url(${imagens[imagemAtual]})` }}></div>
            <div id='imagem-principal-overlay'>
                <button id='theme-changer' onClick={aplicarTema}>
                    <h1 className='titulo-sessao-destaque' id='studioghibli-h1'>
                        <span id='studioghibli-span'>
                            <span className='studio-letra'>S</span>
                            <span className='studio-letra'>T</span>
                            <span className='studio-letra'>U</span>
                            <span className='studio-letra'>D</span>
                            <span className='studio-letra'>I</span>
                            <span className='studio-letra'>O</span>
                        </span>
                        <span id='studioghibli-span'>
                            <span className='studio-letra'>G</span>
                            <span className='studio-letra'>H</span>
                            <span className='studio-letra'>I</span>
                            <span className='studio-letra'>B</span>
                            <span className='studio-letra'>L</span>
                            <span className='studio-letra'>I</span>
                        </span>
                    </h1>
                </button>
                <h2 className='subtitulo-sessao-destaque' id='studioghibli-h2'>
                    Estúdio de animação japonês,<br />
                    sediado em Koganei, Tóquio, em<br />
                    atividade desde 1985.
                </h2>
                <a href='#proxsessao' id='studioghibli-proxima-sessao'>
                    <svg className="setinha-ver-mais" id="studioghibli-setinha" width="40px" height="68px" viewBox="0 0 40 50">
                        <path stroke="#ffffff" strokeWidth="2" fill="none" d="M 20 0 L 20 51"></path>
                        <polyline stroke="#ffffff" strokeWidth="2" fill="none" points="12, 44 20, 52 28, 44"></polyline>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Destaque;
