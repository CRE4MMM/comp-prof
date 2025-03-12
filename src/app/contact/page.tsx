import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <div className="min-h-screen flex  items-center py-30 justify-center bg-gradient-to-r from-[#8B4513] to-[#FFD700] to-brown-400 ">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl border border-gold-500">
        <h2 className="text-3xl font-bold text-center text-brown-800 mb-6">
          Contact Us
        </h2>
        <p className="text-brown-700 text-center mb-6">
          Wed love to hear from you. Please fill out the form below or reach out
          via our contact details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-brown-700">Our Office</h3>
            <p className="text-brown-600">
              Jl. Raya Surabaya - Krian Km. 26/27 Desa Keboharan, Kecamatan
              krian
            </p>
            <p className="text-brown-600">Kabupaten Sidoarjo, Jawa Timur, Indonesia</p>
            <p className="text-brown-600">satriagraha.sempurna@gmail.com</p>
            <p className="text-brown-600">+62 31-8971975 - 77</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-brown-700">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="text-gold-500 hover:text-gold-700 flex items-center space-x-2"
              >
                <FaFacebook /> <span>Facebook</span>
              </a>
              <a
                href="#"
                className="text-gold-500 hover:text-gold-700 flex items-center space-x-2"
              >
                <FaTwitter /> <span>Twitter</span>
              </a>
              <a
                href="#"
                className="text-gold-500 hover:text-gold-700 flex items-center space-x-2"
              >
                <FaInstagram /> <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-brown-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gold-500 rounded-lg bg-brown-50"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-brown-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gold-500 rounded-lg bg-brown-50"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-brown-700">Message</label>
            <textarea
              className="w-full p-2 border border-gold-500 rounded-lg bg-brown-50"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-gold-500 to-gold-700 text-black py-2 rounded-lg hover:opacity-90 transition-transform transform hover:scale-105 shadow-md">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
