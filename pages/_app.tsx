import '../styles/global.css'
import ReactGA from 'react-ga'
function MyApp({ Component, pageProps }) {
  ReactGA.initialize('UA-131075056-2')
  return <Component {...pageProps} />
}

export default MyApp