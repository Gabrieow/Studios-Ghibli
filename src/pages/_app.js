import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa o CSS do AOS

import '../styles/globals.css'; // Outros arquivos CSS do seu projeto

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Inicializa o AOS quando o componente for montado
    AOS.init({
      duration: 1200, // Duração da animação em milissegundos
      once: true, // A animação vai acontecer apenas uma vez
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;