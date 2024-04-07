import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import { Image } from "@nextui-org/react"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import assest6 from "/lap.png"
import styled, { keyframes, css } from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import assest8 from "/laptop-security.webp"
import assest9 from "/warning.png"
import assest1 from "/lock-image.svg"
import assest5 from "/shield.png"
import assest3 from "/ASS.png"
import search from "/search.png"
import bug from "/bugpng.jpg"
import server from "/server.png"
import ok from "/3m.svg"
import notok from "/macys.svg"
import ok2 from "/menshealth.svg"
import ok3 from "/budweiser.svg"
import ok4 from "/buzzfeed.svg"
import ok5 from "/barstool-store.svg"

import hacker from "/hacker.png"
import React, {useState} from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import '../App.css'
import Header from '../Header/Header';

export default function Home() {
    const [counter, setCounter] = useState(false)

    AOS.init();



    return (
        <div className=" bg-gray-900">

            {/* Top Section */}

            <div className="mx-auto w-full max-w-7xl">
                <div id="home" class="  text-white relative py-60 sm:py-40 h-auto bg-cover bg-center">
                    <img src={assest1} class="absolute bottom-11 right-40 w-32 md:w-40 lg:w-48 z-0" alt="Background Image" />
                    <img src={assest3} class="absolute top-3 left-0 w-32 md:w-40 lg:w-48 z-0" alt="Background Image" />
                    <img src={assest9} class="absolute top-0 left-40 w-32 md:w-40 lg:w-48 z-0" alt="Background Image" />

                    <div class="container mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Your Trusted <span style={{ color: "#00FF00", ":hover": { color: "white" } }} >Cybersecurity Partner</span>.</h1>
                        <p class="text-lg md:text-xl mb-8 text-center max-w-lg">Empowering you with the tools and knowledge to <span className='text-green-500 hover:text-white'>safeguard your online presence.</span></p>
                        <div class="flex flex-row items-center justify-center gap-4">
                            <a href="#services" class="bg-green-700 hover:bg-green-500 text-white py-2 px-4 rounded-md text-lg font-semibold shadow-md transition duration-300 ease-in-out">Learn More</a>
                            <a href="#contact-us" class="border-2 border-green-500 hover:bg-green-600 text-white focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 py-2 px-4 rounded-xl text-lg font-semibold shadow-md transition duration-300 ease-in-out"><i class="fa-regular fa-envelope"></i>Contact Us</a>
                        </div>
                    </div>
                </div>


                <section data-aos="fade-up" data-aos-anchor-placement="center-bottom" id="services" className="py-16 bg-gray-900">

                    <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div className="md:5/12 lg:w-5/12">
                                <Image
                                    src={assest8}
                                    alt="image"
                                    isZoomed
                                    isBlurred
                                />
                            </div>
                            <div className="md:7/12 lg:w-6/12 bg-slate-500 bg-opacity-60 py-10 px-5 rounded-xl">
                                <h2 style={{ textShadow: " 2px 2px 4px rgba(0, 0, 0, 0.5)" }} className="text-2xl text-white font-medium text-shadow-lg md:text-4xl">
                                    Protecting What <span style={{color:"#00FF00"}}>Matters Most.</span>
                                </h2>
                                <p className="mt-6 text-white">
                                    ✔ From Targeted Phishing Attempts to Complex Network Intrusions, We Equip You with Battle-Tested Strategies and State-of-the-Art Solutions. <br /> <br /> ✔ Stay Ahead, Stay Secure, With Us by Your Side.
                                </p>
                                <p className="mt-4 text-white">
                                    ✔ We Offer Resolute Defense Against Data Breaches, Ransomware, and Malicious Intrusions. Safeguard Your Future Today. <br /> <br />

                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div className="flex justify-center items-center">
                        <h1 className="text-5xl text-white">Our Clients</h1>
                    </div>
                    <div className="logos bg-gray-900">
                        <div className="logos-slide">
                            <img src={ok} />
                            <img src={notok} />
                            <img src={ok2} />
                            <img src={ok3} />
                            <img src={ok4} />
                            <img src={ok5} />
                            <img src={ok} />
                            <img src={notok} />
                            <img src={ok2} />
                            <img src={ok3} />
                            <img src={ok4} />
                            <img src={ok5} />
                            <img src={ok} />
                            <img src={notok} />
                            <img src={ok2} />
                            <img src={ok3} />
                            <img src={ok4} />
                            <img src={ok5} />
                            <img src={ok} />
                            <img src={notok} />
                            <img src={ok2} />
                            <img src={ok3} />
                            <img src={ok4} />
                            <img src={ok5} />
                        </div>
                    </div>
                </section>

                <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className="flex justify-center items-center mb-10">
                        <h1 className="text-5xl text-white">Exciting Numbers</h1>
                    </div>
            <ScrollTrigger onEnter={() => { setCounter(true) }} onExit={() => { setCounter(false) }}>
                <div   className="grid-container text-xl mt-10 py-5">
                    <div className="grid-item mx-auto flex flex-col items-center justify-center">
                        {counter&&<div style={{fontWeight:700, fontSize:"40px", color:"#00FF00", marginBottom:"10px"}} >
                        +<CountUp  start={0} end={34} duration={2} delay={0}/>
                        </div>}
                        <span>Clients</span></div>
                    <div className="grid-item mx-auto flex flex-col items-center justify-center">{counter&&<div style={{fontWeight:700, fontSize:"40px", color:"#00FF00", marginBottom:"10px"}}>
                        +<CountUp start={0} end={1230} duration={2} delay={0}/></div>}<span>Bugs Found</span></div>
                    <div className="grid-item mx-auto flex flex-col items-center justify-center">{counter&&<div style={{fontWeight:700, fontSize:"40px", color:"#00FF00", marginBottom:"10px"}}>
                        +<CountUp start={0} end={350} duration={2} delay={0}/></div>}<span>Vulnerbilites detected</span></div>
                    <div className="grid-item mx-auto flex flex-col items-center justify-center">{counter&&<div style={{fontWeight:700, fontSize:"40px", color:"#00FF00", marginBottom:"10px"}}>
                        +$<CountUp start={0} end={130} duration={2} delay={0}/>k</div>}<span>Saved from Cyber Attacks</span></div>
                </div>
            </ScrollTrigger>
            </section>

                <section data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="grid  place-items-center sm:mt-20">
                    <div className="flex justify-center items-center mb-10">
                        <h1 className="text-5xl text-white">Services We Offer</h1>
                    </div>
                    <Swiper
                        cssMode={true}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div style={{ display: "flex", flexDirection: "column", width: "80vw", borderRadius: "15px", alignItems: "center" }} className="bg-gray-900 bg-opacity-900 border-3 hover:border-green-400 border-white transition duration-300 ease-in-out">
                                <img src={hacker} alt="" style={{ width: "100px", height: "100px", borderRadius: "50px", border: "1px solid lightblue", paddingLeft: "2px", marginTop: "30px", background: "#232934" }} />
                                <h1 className="text-3xl mt-10">Protection From CSRF Attacks!</h1>
                                <div className="mt-10 mb-10 text-lg">Empower your cybersecurity strategy with comprehensive insights into your domain's infrastructure.<br /><br />
                                    Our advanced scanning technology identifies vulnerabilities, misconfigurations, and unauthorized accesses, ensuring DNS integrity and fortifying your defenses against evolving cyber threats.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div style={{ display: "flex", flexDirection: "column", width: "80vw", borderRadius: "15px", alignItems: "center" }} className="bg-gray-900 bg-opacity-900 border-3 hover:border-green-400 border-white transition duration-300 ease-in-out">
                                <img src={search} alt="" style={{ width: "100px", height: "100px", borderRadius: "50px", border: "1px solid lightblue", paddingLeft: "2px", marginTop: "30px", background: "#232934" }} />
                                <h1 className="text-3xl mt-10">DNS record lookup!</h1>
                                <div className="mt-10 mb-10 text-lg">Empower your cybersecurity strategy with comprehensive insights into your domain's infrastructure.<br /><br />
                                    Our advanced scanning technology identifies vulnerabilities, misconfigurations, and unauthorized accesses, ensuring DNS integrity and fortifying your defenses against evolving cyber threats.<br /><br />
                                    Elevate your security posture with confidence!
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ display: "flex", flexDirection: "column", width: "80vw", borderRadius: "15px", alignItems: "center" }} className="bg-gray-900 bg-opacity-900 border-3 hover:border-green-400 border-white transition duration-300 ease-in-out">
                                <img src={server} alt="" style={{ width: "100px", height: "100px", borderRadius: "50px", border: "1px solid lightblue", paddingLeft: "2px", marginTop: "30px", background: "#232934" }} />
                                <h1 className="text-3xl mt-10">360° Security Server Scan!</h1>
                                <div style={{ width: "90%" }} className="mt-10 mb-10 text-lg">Our 360-Degree Server Protection Scan Leaves No Stone Unturned, Identifying Vulnerabilities and Fortifying Your Digital Fortress Against Threats.<br /><br /> From Endpoints to Infrastructure, We Conduct Thorough Assessments, Implementing Robust Security Measures to Safeguard Your Assets.
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div style={{ display: "flex", flexDirection: "column", width: "80vw", borderRadius: "15px", alignItems: "center" }} className="bg-gray-900 bg-opacity-900 border-3 hover:border-green-400 border-white transition duration-300 ease-in-out">
                                <img src={bug} alt="" style={{ width: "100px", height: "100px", borderRadius: "50px", border: "1px solid lightblue", marginTop: "30px", background: "#232934" }} />
                                <h1 className="text-3xl mt-10">Anti-virus Protection!</h1>
                                <div className="mt-10 mb-10 text-lg">We Go Beyond Reactive Measures, Embracing Proactive Bug Protection Practices to Thwart Potential Exploits Before They Manifest. <br /> <br /> Through Rigorous Code Reviews, Vulnerability Assessments, and Patch Management, We Shore Up Weak Points in Your System, Ensuring a Resilient Defense Against Malicious Intrusions. With Us, Your Digital Landscape Remains Fortified and Secure.
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </section>

                {/* Contact us part */}

                
                    {/* Contact us part */}
                    <section id="contact-us" className=" flex mt-20 items-top justify-center">

                        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="p-6 mr-2 ml-2 bg-gray-100 rounded-lg">
                                        <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                            Get in touch:
                                        </h1>
                                        <p className="text-normal text-lg sm:text-xl font-medium text-black mt-2">
                                            Fill in the form to get a free vulnerability scan.
                                        </p>

                                        <div className="flex items-center mt-8 text-gray-900">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                className="w-8 h-8 text-gray-900"
                                            >
                                                <path
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                                Sans street, 41 avenue, Georgia.
                                            </div>
                                        </div>

                                        <div className="flex items-center mt-4 text-gray-900">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                className="w-8 h-8 text-gray-900"
                                            >
                                                <path
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                />
                                            </svg>
                                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                                +44 1234567890
                                            </div>
                                        </div>

                                        <div className="flex items-center mt-2 text-gray-900">
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                className="w-8 h-8 text-gray-900"
                                            >
                                                <path
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                                info@cyberguards.info
                                            </div>
                                        </div>
                                    </div>

                                    <form className="p-6 flex flex-col justify-center">
                                        <div className="flex flex-col">
                                            <label htmlFor="name" className="hidden">
                                                Full Name
                                            </label>
                                            <input
                                                type="name"
                                                name="name"
                                                id="name"
                                                placeholder="Full Name"
                                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-gray-400 text-black font-semibold border-2 focus:border-green-500 focus:outline-none"
                                            />
                                        </div>

                                        <div className="flex flex-col mt-2">
                                            <label htmlFor="email" className="hidden">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border-gray-400 text-gray-800 font-semibold border-2 focus:border-green-500 focus:outline-none"
                                            />
                                        </div>

                                        <div className="flex flex-col mt-2">
                                            <label htmlFor="tel" className="hidden">
                                                Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="tel"
                                                id="tel"
                                                placeholder="Telephone Number"
                                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-gray-400 text-gray-800 font-semibold border-2 focus:border-green-500 focus:outline-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="md:w-32 bg-cyan-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                                        >
                                            Submit
                                        </button>
                                    </form>
                    
                                </div>
                            </div>
                            
                        </div>
                    </section>

                </div>

                <div className="flex items-center justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.3060291184975!2d-84.39139910181535!3d33.75275694504925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f503812f4eb583%3A0x465d2930ed32543f!2sFive%20Points%2C%20Atlanta%2C%20GA%2030303%2C%20USA!5e0!3m2!1sen!2s!4v1712521347022!5m2!1sen!2s"  height="300" style={{border:"0px", marginTop:"30px", marginBottom:"30px",width:"90vw"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
      
    );
}
