import React from 'react'
import "./home.css"
import Products from "./Products"

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="home banner" />
            <div className="home__row">
                <Products id="123"
                    title="Ani"
                    price={222}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51HfbNSrA6L._AC_SR250,230_.jpg" />
                <Products id="123"
                    title="Ani"
                    price={222}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51HfbNSrA6L._AC_SR250,230_.jpg" />

            </div>
            <div className="home__row">
                <Products id="123"
                    title="Ani"
                    price={222}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51HfbNSrA6L._AC_SR250,230_.jpg" />
                <Products id="123"
                    title="Ani"
                    price={222}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51HfbNSrA6L._AC_SR250,230_.jpg" />
                <Products id="123"
                    title="Ani"
                    price={222}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51HfbNSrA6L._AC_SR250,230_.jpg" />
            </div>
            <div className="home__row">
                <Products id="123"
                    title="Ani"
                    price={222}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51HfbNSrA6L._AC_SR250,230_.jpg" />

            </div>
        </div>
    )
}

export default Home
