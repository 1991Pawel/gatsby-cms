import React from 'react'
import { Helmet } from "react-helmet"
import Navigation from './Navigation'
import Footer from './Footer'
import 'normalize.css'
import './Layout.scss'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const Layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content="photography" />
        <title>Michał Wroceński</title>
        <link rel="canonical" href="https://wrocenski.pl/" />
        <meta name="Description" content="Michał Wroceński portfolio, fotograf z Białegostoku ,portrety, sesje biznesowe, ślubne, rodzinne"></meta>
        <html lang="pl-PL" />
      </Helmet>
      <Navigation />
      {children}
      <Footer />
    </QueryClientProvider>
  )
}

export default Layout;