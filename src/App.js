import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import React, {Fragment, useEffect } from 'react'
import AboutMe from './AboutMe'
import Hero from './Hero'

export default App

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div>
            <Hero/>
            <AboutMe/>
        </div>
    )
}
