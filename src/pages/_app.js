import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import '../styles/globals.css'; 

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Inicializa o AOS
    AOS.init({
      duration: 1200, // Duração da animação em milissegundos
      once: true, // A animação vai acontecer apenas uma vez
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;