import Destaque from '../components/index/sessao-destaque';
import Header from '../components/common/header';
import SignificadoGhibli from '../components/index/significado-ghibli';
import SessaoInfo from '../components/index/sessao-info';

const Home = () => {
  return(
    <div>
      <section id='header'>
        <Header />
      </section>

      <section id='sessao-destaque'>
        <Destaque />
      </section>
      <section >
        <SignificadoGhibli />
      </section>
      <section>
        <SessaoInfo />
      </section>
    </div>
  )
}

export default Home;