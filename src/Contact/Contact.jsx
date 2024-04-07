import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import assest6 from "/lap.png"

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_nhq2196', 'template_0fyfx2l', form.current, {
                publicKey: 'Vb0OM4_N3phyg5cwd',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className="bg-gray-900 relative">
            {/* Contact us part */}
            <div className="flex justify-center items-center pt-20 mb-10">
                <h1 className="text-5xl text-white">Contact Us</h1>
            </div>
            <img src={assest6} class="hidden lg:block absolute top-[55px] left-[180px] w-32 md:w-40 lg:w-48 z-0" alt="Background Image" />
            <section id="contact-us" className=" flex items-top justify-center min-h-[700px]">

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 mr-2 bg-gray-100 rounded-lg">
                                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                    Get in touch:
                                </h1>
                                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                    Fill in the form to get a free vulnerability scan.
                                </p>

                                <div className="flex items-center mt-8 text-gray-600">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
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

                                <div className="flex items-center mt-4 text-gray-600">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
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

                                <div className="flex items-center mt-2 text-gray-600">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
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

                            <form ref={form} onSubmit={sendEmail} className="p-6 flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label htmlFor="user_name" className="hidden">
                                        Full Name
                                    </label>
                                    <input
                                        type="name"
                                        name="user_name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="user_email" className="hidden">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="email"
                                        placeholder="Email"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="user_tel" className="hidden">
                                        Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="user_tel"
                                        id="tel"
                                        placeholder="Telephone Number"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                </div>

                                <button
                                    type="submit" value="Send"
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
    );
}
