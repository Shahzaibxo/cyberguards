import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import cyber from "/cyber.png"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import '../App.css'
import { Image } from "@nextui-org/react"
import React, { useState } from 'react'

export default function About() {
    const [counter, setCounter] = useState(false)
    AOS.init();

    return (
        <div className="py-16 bg-gray-900">
            <div className="container m-auto px-6 text-white md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <Image
                            isZoomed
                            isBlurred
                            src={cyber}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12  bg-opacity-60 px-5 ">
                        <h2 className="text-4xl sm:text-5xl text-green-500 hover:text-white font-bold">
                            Our Mission:
                        </h2>
                        <p className="mt-6 text-white">
                            Our mission at CyberGuards is to fortify the digital realm against evolving threats.<br /> <br /> Through innovative solutions and unwavering dedication, we safeguard the integrity of data and the trust of our clients. With a commitment to excellence, we pave the way for a safer, more secure digital future
                        </p>

                    </div>
                </div>
            </div>
            <section>
            <ScrollTrigger onEnter={() => { setCounter(true) }} onExit={() => { setCounter(false) }}>
                <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"  className="grid-container text-xl mt-10 py-5">
                    <div className="grid-item mx-auto flex flex-col items-center justify-center">
                        {counter&&<div style={{fontWeight:700, fontSize:"40px", color:"#6FCF97", marginBottom:"10px"}} >
                        +<CountUp  start={0} end={34} duration={2} delay={0}/>
                        </div>}
                        <span>Clients</span></div>
                    <div className="grid-item mx-auto flex flex-col items-center justify-center">{counter&&<div style={{fontWeight:700, fontSize:"40px", color:"#6FCF97", marginBottom:"10px"}}>
                        +<CountUp start={0} end={1230} duration={2} delay={0}/></div>}<span>Bugs Found</span></div>
                    <div className="grid-item mx-auto flex flex-col items-center justify-center">{counter&&<div style={{fontWeight:700, fontSize:"40px", color:"#6FCF97", marginBottom:"10px"}}>
                        +<CountUp start={0} end={350} duration={2} delay={0}/></div>}<span>Vulnerbilites detected</span></div>
                    <div className="grid-item mx-auto flex flex-col items-center justify-center">{counter&&<div style={{fontWeight:700, fontSize:"40px", color:"#6FCF97", marginBottom:"10px"}}>
                        +$<CountUp start={0} end={130} duration={2} delay={0}/>k</div>}<span>Saved from Cyber Attacks</span></div>
                </div>
            </ScrollTrigger>
            </section>
        </div>
    );
} 