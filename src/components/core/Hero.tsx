import Image from 'next/image'
import React from 'react'
import { Carousel } from 'antd'

const Hero = () => {
    return (
        <div className=" bg-gradient-to-r from-[#8B4513] to-[#FFD700] py-30 flex-grow">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <Carousel autoplay>
                <div>
                    <Image
                    src="/LOGO_SGS.png"
                    alt="logo"
                    width={800}
                    height={500}
                    className=" rounded-lg"
                    />
                </div>
                <div>
                    <Image
                    src="/Fasilitas.jpg"
                    alt="Company Facility"
                    width={600}
                    height={800}
                    className="rounded-lg shadow-xl"
                    style={{ objectFit: 'contain' }}
                    />
                </div>
                </Carousel>
            </div>

            <div className="md:w-1/2 text-gray-800">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                PT. Satriagrama Sempurna
                </h1>
                <p className="text-xl mb-8">
                Your Trusted Business Partner Since 1995.
                </p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Hero
