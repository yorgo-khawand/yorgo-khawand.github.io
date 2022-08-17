import '../styles/global.css'
import ReactGA from 'react-ga'
function MyApp({ Component, pageProps }) {
  ReactGA.initialize('G-50STDJJJBG')
  return <Component {...pageProps} />
}

export default MyApp