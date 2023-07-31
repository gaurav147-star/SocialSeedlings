import { Provider } from "react-redux";
import "../styles/globals.css";
import store from "../store";
import Layout from '../components/Layout';
import { DarkModeProvider } from "../context/DarkModeContext";

function MyApp({ Component, pageProps }) {
  return  <DarkModeProvider>
    <Layout>
      <Provider  store={store}>

    <Component {...pageProps} />
      </Provider>
    </Layout>
  </DarkModeProvider>
    
}

export default MyApp;
