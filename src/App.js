import './App.css'
import 'animate.css'
import logo from './happyemoji.png'
import hero_background from './hero-background.png'
import flag_portugal from './portugal-flag.png'
import React, {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const navigation = [
    {
        name: 'About Me',
        href: '#'
    }, {
        name: 'Projects',
        href: '#'
    }, {
        name: 'Near Future',
        href: '#'
    }, {
        name: 'Contacts',
        href: '#'
    }
]

class Section extends React.Component {
    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
    }
}

export default App

function Hero() {
    return (
        <div>
            <div className="relative bg-white lg:h-screen overflow-hidden">
                <div className="lg:max-w-7xl mx-auto">
                    <div
                        className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32  animate__animated animate__bounceInLeft">
                        <svg
                            className="hidden lg:block absolute right-0 inset-y-0 h-screen text-white transform translate-x-1/2"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"/>
                        </svg>

                        <Popover>
                            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                                <nav
                                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                                    aria-label="Global">
                                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                                        <div className="flex items-center justify-between w-full md:w-auto">
                                            <a href="#">
                                                <span className="sr-only">Workflow</span>
                                                <img className="h-8 w-auto sm:h-10" src={logo} alt=""/>
                                            </a>
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button
                                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                                                    <span className="sr-only">Open main menu</span>
                                                    <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="font-medium text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </nav>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Popover.Panel
                                    focus
                                    className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                                    <div
                                        className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="px-5 pt-4 flex items-center justify-between">
                                            <div>
                                                <img className="h-8 w-auto sm:h-10" src={logo} alt=""/>
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button
                                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                                                    <span className="sr-only">Close main menu</span>
                                                    <XIcon className="h-6 w-6" aria-hidden="true"/>
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-2 pb-3 space-y-1">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <main
                            className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-56">
                            <div className="sm:text-center lg:text-left">
                                <h1
                                    className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block z-50 relative">Hello, my name is Alex</span>{' '}
                                    <span className="block text-purple-600 xl:inline">This is my portfolio</span>
                                </h1>
                                <p
                                    className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    I'm a web developer based in Portugal
                                    <img className="h-8 w-auto sm:h-10  inline-block pb-2" src={flag_portugal}/>
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div
                    className="lg:block hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 animate__animated animate__bounceInRight ">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src={hero_background}
                        alt=""/>
                </div>
            </div>
            <div className="absolute flex justify-center bottom-0">
                <Link activeClass="active" className="AboutMe" to="AboutMe" spy={true} smooth={true} duration={500}>
                    <section className="bg-white">
                        <span className="scroll__icon">
                            <span className="scroll-icon__dot"></span>
                        </span>
                    </section>
                </Link>
            </div>
        </div>
    )
}

function AboutMe() {
    return (
        <div name="AboutMe" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
                    <p
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A better way to send money
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
                        cupiditate veritatis in accusamus quisquam.
                    </p>
                </div>

                <div className="mt-10">
                    <dl
                        className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Competitive exchange rates</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">No hidden fees</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Transfers are instant</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Mobile notifications</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

function App() {
    return (
        <div>
            <Hero/>
            <AboutMe/>
        </div>
    )
}