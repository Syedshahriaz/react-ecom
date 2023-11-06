import React, { ReactElement } from 'react'
import Footer from './Footer'
import Header from './header/Header'

interface Props {
    children: ReactElement
}

const RootLayout = ({children}: Props ) => {
  return (
    <>
        <Header/>
        {children}
        <Footer/>
    </>
  )
}

export default RootLayout