import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/zero.ico" />
        <title>Zero</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
