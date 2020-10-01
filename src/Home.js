import React, { useEffect } from 'react'
import "./home.css"
import Products from "./Products"

function Home() {
    useEffect(() => {
        document.title = "Amazon Clone"
    }, [])

    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="home banner" />
            <div className="home__row">
                <Products id="123"
                    title="Digitek DTR 550LW Lightweight Tripod (Maximum Load up to 5 kg), 5.57 Feet Tall for Digital SLR & Video Cameras, Made Aluminium Material (DTR 550LW)"
                    price={1677}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51l9waeXrgL._SL1001_.jpg" />
                <Products id="1234"
                    title="Quantum QHM6633 4 Port Hi-Speed USB Hub (Multicolor)"
                    price={130}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51K68XtkF5L._SL1000_.jpg" />

            </div>
            <div className="home__row">
                <Products id="12345"
                    title="Redmi Note 9 Pro Max (Aurora Blue, 6GB RAM, 128GB Storage) - 64MP Quad Camera & Latest 8nm Snapdragon 720G"
                    price={18499}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81DvimWN5xL._SL1500_.jpg" />
                <Products id="1235"
                    title="TULMAN 9.5 mm Universal Caddy for HDD/SDD for CD DVD-ROM Drive Slot 2nd Bay Hard Drive Caddy for PC/Laptop"
                    price={449}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/71EWzxyKPcL._SL1500_.jpg" />
                <Products id="1236"
                    title="Western Digital WD Green 240 GB 2.5 inch SATA III Internal Solid State Drive (WDS240G2G0A)"
                    price={2557}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51lA7br9YrL._SL1000_.jpg" />
            </div>
            <div className="home__row">
                <Products id="1237"
                    title="Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)"
                    price={9699}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg" />

            </div>
        </div>
    )
}

export default Home
