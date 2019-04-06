import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Main = ({ children, i }) => {
  return (
    <div key={i}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Main
