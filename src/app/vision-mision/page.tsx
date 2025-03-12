import React from 'react'

const VisionMissionPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#8B4513] to-[#FFD700] py-30 flex-grow relative flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#726622] mb-8 text-center">
        Visi & Misi
      </h1>

      {/* Content Layout */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10">
        {/* Vision Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-[#9f8a10]">Visi</h2>
          <p className="text-lg text-gray-700 mt-4">
            Menjadi pemimpin inovatif dan terpercaya dalam industri kotak karton
            bergelombang, baik di pasar lokal maupun global. Kami bertekad untuk
            terus mengembangkan teknologi, meningkatkan efisiensi, dan
            memberikan solusi kemasan yang ramah lingkungan. Dengan berorientasi
            pada kepuasan pelanggan dan keberlanjutan, kami berkomitmen untuk
            menciptakan nilai tambah bagi seluruh pemangku kepentingan kami.
          </p>
        </div>

        {/* Mission Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-[#9f8a10]">Misi</h2>
          <p className="text-lg text-gray-700 mt-4">
            Kami berkomitmen untuk terus meningkatkan kualitas produk dan
            layanan dengan mengikuti perkembangan teknologi dan kebutuhan pasar.
            Fokus utama kami meliputi peningkatan efisiensi produksi agar harga
            tetap kompetitif, optimalisasi rantai pasokan untuk memastikan
            pengiriman yang tepat waktu, serta penerapan sistem manajemen mutu
            berbasis standar internasional. Kami juga berupaya untuk mengurangi
            dampak lingkungan melalui inovasi dan praktik produksi yang
            berkelanjutan, serta membangun hubungan jangka panjang yang saling
            menguntungkan dengan pelanggan dan mitra bisnis kami.
          </p>
        </div>
      </div>
    </div>
  )
}

export default VisionMissionPage
