import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// configure sizing of font awesome: https://stackoverflow.com/questions/66539699/fontawesome-icons-not-working-properly-in-react-next-app
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
