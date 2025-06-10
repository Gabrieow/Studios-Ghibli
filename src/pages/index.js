import Destaque from '../components/index/sessao-destaque';
import Header from '../components/common/header';
import SignificadoGhibli from '../components/index/significado-ghibli';
import SessaoInfo from '../components/index/sessao-info';
import MenuOffScreen from '../components/common/menuOffscreen';
import { useState } from 'react';

const Home = () => {
  const [aberto, setAberto] = useState(false);

  return(
    <div id='div-mae'>

      <div id='div-filha' style={{ position: 'relative', transform: aberto ? 'scale(0.80)' : '', left: aberto ? '-14%' : '0', height: aberto ? '100vh' : '100%', overflow: aberto ? 'hidden' : 'visible', transition: 'left 1s ease;'}}>
      
        <section id='header'>
          <Header setAberto={setAberto}/>
        </section>
        <section id='sessao-destaque'>
          <Destaque />
        </section>
        <section id='sessao-significado'>
          <SignificadoGhibli />
        </section>
        <section id='sessao-informacao'>
          <SessaoInfo />
        </section>
      </div>
      <MenuOffScreen aberto={aberto} handleMenu={() => setAberto(prev => !prev)} />
    </div>
  )
}

export default Home;