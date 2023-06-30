import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from 'react'
import AboutMe from './AboutMe'
import Hero from './Hero'
import Projects from './Projects';
import Contacts from './Contacts';

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
            <Projects/>
            <Contacts/>
        </div>
    )
}
