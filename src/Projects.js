import sadEmoji from './sademoji.webp'
import { FaGithubSquare } from 'react-icons/fa'

function Projects () {
    return (
        <div id="projects" name="Projects" className="py-12 bg-white md:h-screen" data-aos="fade-right">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
            <hr className='lg:hidden mb-10'/>
                <div className="xl:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Projects</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Working on it...
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 xl:mx-auto">
                       Since most of my projects have been to people that do not allow me to share any information, I can't add anything here... <img src={sadEmoji} alt="" className='w-5 inline-block'/>
                    </p>
                    <p className="mt-24 max-w-2xl text-md text-gray-500 xl:mx-auto">
                        In the meantime, checkout my <a href='https://github.com/TheRedCandyy' className='text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-400 font-bold transition-all'>Github <button href='https://github.com/TheRedCandyy' className='bg-gradient-to-br from-purple-600 to-blue-400 rounded-md text-white hover:scale-110 transition-all'><FaGithubSquare/></button></a>, I might have added something new.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects