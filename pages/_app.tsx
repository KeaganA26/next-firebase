import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />

}
