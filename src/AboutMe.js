import { FaHtml5, FaJs, FaCss3Alt, FaPhp, FaLaravel, FaReact, FaSalesforce } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si'

function AboutMe() {
    return (
        <div id="aboutme" name="AboutMe" className="py-12 bg-white md:mb-36" data-aos="fade-right">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
            <hr className='lg:hidden mb-10'/>
                <div className="xl:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Me</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Young talent and a big passion.
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 xl:mx-auto">
                       I wrote my first line of code at <span className="font-bold text-blue-600">14 years old</span> and since then I just love how the things I build have an impact on other people's life and businesses. 
                    </p>
                </div>
                <hr className="hidden xl:block xl:my-10"/>
                <div className="my-10 xl:m-0 mx-auto">
                    <h2 className="xl:text-center mb-10 text-xl text-indigo-600 font-semibold tracking-wide">Some of the technologies I use</h2>
                    <dl
                        className="space-y-10 md:space-y-0 grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-2 md:gap-y-10">
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-orange-700 to-orange-300 text-white">
                                    <FaHtml5></FaHtml5>
                                </div>
                                <p className="ml-16 text-lg leading-10 font-medium text-gray-900">HTML</p>
                            </dt>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-600 text-white">
                                    <FaJs></FaJs>
                                </div>
                                <p className="ml-16 text-lg leading-10 font-medium text-gray-900">Javascript</p>
                            </dt>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-800 to-blue-300 text-white">
                                    <FaCss3Alt></FaCss3Alt>
                                </div>
                                <p className="ml-16 text-lg leading-10 font-medium text-gray-900">CSS</p>
                            </dt>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-indigo-500 to-blue-400 text-white">
                                    <FaPhp></FaPhp>
                                </div>
                                <p className="ml-16 text-lg leading-10 font-medium text-gray-900">PHP</p>
                            </dt>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                                    <FaLaravel></FaLaravel>
                                </div>
                                <p className="ml-16 text-lg leading-10 font-medium text-gray-900">Laravel</p>
                            </dt>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-sky-300 to-sky-500 text-white">
                                    <FaReact></FaReact>
                                </div>
                                <p className="ml-16 text-lg leading-10 font-medium text-gray-900">React</p>
                            </dt>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-sky-500 to-emerald-300 text-white">
                                    <SiTailwindcss></SiTailwindcss>
                                </div>
                                <p className="ml-16 text-lg leading-10 font-medium text-gray-900">TailwindCSS</p>
                            </dt>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-indigo-500 to-indigo-800 text-white">
                                    <FaSalesforce></FaSalesforce>
                                </div>
                                <p className="ml-16 text-lg leading-10 font-medium text-gray-900">SFCC</p>
                            </dt>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;