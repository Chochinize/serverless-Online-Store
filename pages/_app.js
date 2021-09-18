// import './../styles/styles.css'
import 'tailwindcss/tailwind.css'
import Layout from '../Components/Layout'
import {AppContextProvider} from '../Context/state'


function MyApp({ Component, pageProps }) {
  return (
 
     <Layout>

    <AppContextProvider>

    <Component {...pageProps} />

    </AppContextProvider>
     </Layout>
    

  )
}

export default MyApp
