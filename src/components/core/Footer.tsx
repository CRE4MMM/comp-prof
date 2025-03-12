import React from 'react'
import Link from 'next/link'
import {
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Informasi Perusahaan */}
            <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-white">
                PT. Satriagrama Sempurna
            </h2>
            </div>
            
            <div className="md:flex md:justify-end">
            <div>
                <h2 className="text-xl font-bold text-white">Follow Us</h2>
                <div className="mt-4 flex justify-center md:justify-end space-x-5">
                <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    className="text-gray-400 hover:text-pink-500 transition duration-300 text-2xl"
                >
                    <FaInstagram />
                </Link>
                <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl"
                >
                    <FaLinkedin />
                </Link>
                <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    className="text-gray-400 hover:text-blue-700 transition duration-300 text-2xl"
                >
                    <FaFacebook />
                </Link>
                </div>
            </div>
            </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 text-gray-500 text-sm border-t border-gray-700 pt-5">
            © 2024 PT. Satriagrama Sempurna. All rights reserved.
        </div>
        </footer>
    )
}

export default Footer
