import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
    <main>
        <Helmet>
            <html lang="en"/>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Gatsby Starter</title>
            <meta name="description" content=""/>
        </Helmet>

        <div className="container">
            <Header/>
            {children}
        </div>
        <Footer/>
    </main>
)