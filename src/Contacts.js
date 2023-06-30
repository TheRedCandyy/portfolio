import { FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import phone from "./phone.png"

function Contacts() {
    return (
        <div id="contacts" name="Contacts" className="py-12 bg-white md:h-screen" data-aos="fade-right">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
            <hr className='lg:hidden mb-10'/>
                <div className="xl:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Contacts</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Hit me up!
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 xl:mx-auto">
                       Drop me a message in any of the contacts bellow and I will answer as fast as possible! <img src={phone} alt="Phone" className="w-5 inline-block"/>
                    </p>
                </div>
                <div className="my-10 xl:m-0 mx-auto">
                    <dl
                        className="space-y-10 md:space-y-0 grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-2 md:gap-y-10">
                        <a href="https://www.linkedin.com/in/alexandre-tavares-15082a194/">
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-600 to-white text-white">
                                        <FaLinkedin></FaLinkedin>
                                    </div>
                                    <p className="ml-16 text-lg leading-10 font-medium text-gray-900">Alexandre Tavares</p>
                                </dt>
                            </div>
                        </a>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                                    <FaDiscord></FaDiscord>
                                </div>
                                <p className="ml-16 text-lg leading-10 font-medium text-gray-900">xandito</p>
                            </dt>
                        </div>

                        <a href="https://www.instagram.com/alxtavares/">
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-pink-600 to-yellow-300 text-white">
                                        <FaInstagram></FaInstagram>
                                    </div>
                                    <p className="ml-16 text-lg leading-10 font-medium text-gray-900">@alxtavares</p>
                                </dt>
                            </div>
                        </a>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-red-200 to-red-600 text-white">
                                    <MdEmail></MdEmail>
                                </div>
                                <p className="ml-16 text-lg leading-10 font-medium text-gray-900">alexandrecandeias@live.com.pt</p>
                            </dt>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Contacts