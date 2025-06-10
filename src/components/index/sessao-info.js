import '../../styles/globals.css';
import '../../styles/common.css';
import '../../styles/animations.css';
import '../../styles/themes.css';
import SliderGhibli from '../common/sliderGhibli';

const SessaoInfo = () => {

    return(
        <div className='sessao-info' data-aos="slide-up" data-aos-duration="750">
            <div className='sessao-info-esquerda'>
                <h3 className='titulo-topico'>Sobre</h3>
                <p className='paragrafo-texto'>
                O Studio Ghibli é um estúdio de animação japonês, sediado em <a className='link' href='https://en.wikipedia.org/wiki/Koganei,_Tokyo' target="_blank">Koganei, Tóquio</a>. 
                Fundado em 1985, o estúdio já produziu 24 longas de animação, sendo o primeiro O Castelo no Céu (1986) e
                o mais recente As Memórias de Marnie (2014).
                </p>
                <p className='paragrafo-texto'>
                O Studio Ghibli foi fundado em 1985 por <a className='link' target="_blank" href='https://pt.wikipedia.org/wiki/Hayao_Miyazaki'>Hayao Miyazaki</a>, <a className='link' target="_blank" href='https://pt.wikipedia.org/wiki/Isao_Takahata'>Isao Takahata</a>, <a className='link' target="_blank" href='https://pt.wikipedia.org/wiki/Toshio_Suzuki_(produtor)'>Toshio Suzuki</a> e
                <a className='link' target="_blank" href='https://www.imdb.com/pt/name/nm0865807/'> Yasuyoshi Tokuma</a>, logo após o sucesso de Nausicaä do Vale do Vento, no ano anterior. O
                estúdio lançou seu primeiro filme, O Castelo no Céu, no ano seguinte. O logotipo da empresa é o
                Totoro, o personagem do filme Meu Amigo Totoro, lançado em 1988. Com exceção de sete
                produções, todos os filmes do estúdio foram dirigidos por Hayao Miyazaki e Isao Takahata.
                Toshio Suzuki, por sua vez, é o produtor da maioria deles.
                </p>
                <p className='paragrafo-texto'>
                    Em 2001, o Studio Ghibli inaugurou o seu próprio Museu em Mitaka, Tóquio, proporcionando uma
                    experiência única para os fãs, com exibições interativas e exclusivas. Em 2023, o estúdio iniciou
                    uma nova fase ao se tornar uma subsidiária da Nippon Television, enquanto continuava a manter
                    sua essência criativa. A sua influência cultural e artística é indiscutível, com legiões de fãs ao
                    redor do mundo, e muitos de seus filmes são considerados verdadeiras obras-primas da animação.
                </p>
                <p className='paragrafo-texto'>
                    O Studio Ghibli também é conhecido por sua influência no cinema e animação global, com filmes
                    que abordam temas como a natureza, a guerra e a sociedade. Seu estilo de animação é
                    caracterizado pela atenção meticulosa aos detalhes e pela criação de mundos mágicos e imersivos.
                    A filosofia do estúdio, muitas vezes expressa através dos filmes de Miyazaki, enfatiza a importância
                    do respeito pela natureza e a luta contra a destruição ambiental.
                </p>
                
            </div>
            <div className='sessao-info-direita'>
                <div id='imagem-info-direita'></div>
            </div>
        </div>
    )
};

export default SessaoInfo;