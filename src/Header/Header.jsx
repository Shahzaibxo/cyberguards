import { IconButton } from '@mui/material';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-900 bg-opacity-90 backdrop-blur-md px-3 lg:px-6 py-2.5">
                <div className="flex font-black text-green-500 tracking-wide font-mono justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center  hover:text-black text-base sm:text-2xl">
                        Cyberguards
                    </Link>
                    <div className="flex items-center lg:order-2">
                     
                        <Link
                            to="/contact-us"
                            className="text-white bg-green-700 hover:bg-white hover:text-black focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-base scale-80 sm:scale-90 px-3 py-3 focus:outline-none"
                        >
                            Book a Demo
                        </Link>
                        <Dropdown backdrop="blur" className="bg-blue-400 bg-opacity-50 backdrop-blur-md">
                            <DropdownTrigger>
                                <IconButton>

                                    <MenuIcon className='text-white h-5 w-5'/>
                                </IconButton>

                            </DropdownTrigger>
                            <DropdownMenu variant="faded" aria-label="Static Actions" >
                                <DropdownItem key="Home-page">
                                    <NavLink
                                        to="/"
                                        className={() =>
                                            `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-600 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem key="about-page">
                                    <NavLink
                                    to="/about-us"
                                    className={() =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-600 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 pl-20 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>

                            </li>
                            <li>

                            </li><li>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

