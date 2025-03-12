import React from 'react'
import Image from 'next/image'

const CompanyProfile = () => {
  const machines = [
    { name: 'Corrugator', image: '/CORR.jpg' },
    { name: 'Corrugator', image: '/OIP.jpeg' },
    { name: 'Flexo', image: '/flexo.jpg' },
    { name: 'Flexo', image: '/flexo2.jpg' },
    { name: 'Production Tool', image: '/produksi.jpg' },
    { name: 'Bursting Tool', image: '/lab_1.jpg' },
    { name: 'Edge Crush Tool', image: '/lab_2.jpg' },
    { name: 'Box Compression Tool', image: '/lab.jpg' },
  ]

  return (
    <div className="bg-gradient-to-r from-[#8B4513] to-[#FFD700] py-30 flex-grow">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl mx-auto border border-gold-500">
        <h2 className="text-3xl font-bold text-center text-brown-800 mb-6">
          Our Machines
        </h2>
        <p className="text-lg text-center text-brown-700 max-w-2xl mx-auto mb-6">
          Proses produksi kami didorong oleh mesin canggih, memastikan
          efisiensi, presisi, dan output berkualitas tinggi. Dari otomatisasi
          hingga pemantauan, setiap alat memainkan peran penting dalam
          memperlancar operasi dan mempertahankan standar terdepan di industri.
          Jelajahi peralatan canggih kami di bawah ini.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {machines.map((machine, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src={machine.image}
                alt={machine.name}
                width={800}
                height={800}
                className="w-full h-48 rounded-md mb-3 object-cover"
              />
              <h3 className="text-xl font-medium text-center text-brown-700">
                {machine.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompanyProfile
