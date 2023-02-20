import { Head } from '@/components/Head'
import { GlobalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head />
      <Component {...pageProps} />
    </>
  )
}
