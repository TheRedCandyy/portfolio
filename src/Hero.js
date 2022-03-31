import hero_background from './hero-background.png'
import flag_portugal from './portugal-flag.png'
import Navbar from './Navbar'

function Hero() {
    return (
        <div>
            <div className="bg-white lg:h-screen overflow-hidden">
                <div className="xl:max-w-7xl mx-auto">
                    <div
                        className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 xl:max-w-3xl xl:w-full xl:pb-32" data-aos="fade-right">
                        <svg
                            className="hidden xl:block absolute right-0 inset-y-0 h-screen text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"/>
                        </svg>

                        <Navbar></Navbar>
                        
                        <main
                            className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 xl:px-8 xl:mt-56">
                            <div className="sm:text-center xl:text-left">
                                <h1
                                    className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block z-40 relative md:mt-0 mt-10">Hello, my name is Alex</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-400 xl:inline z-40 relative">This is my portfolio</span>
                                </h1>
                                <p
                                    className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl xl:mx-0">
                                    I'm a web developer based in Portugal.
                                    <img alt="PT" className="ml-2 h-8 w-auto sm:h-10  inline-block pb-2" src={flag_portugal}/>
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div
                    className="xl:block hidden xl:absolute xl:inset-y-0 xl:right-0 xl:w-1/2" data-aos="fade-left">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 xl:w-full xl:h-full"
                        src={hero_background}
                        alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Hero;