import React from 'react'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-6">
            <div className="max-w-5xl bg-white shadow-lg rounded-xl p-10 border border-gray-200">
            {/* Judul Halaman */}
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
                Tentang{' '}
                <span className="text-[#9f8a10]">PT. Satriagraha Sempurna</span>
            </h1>

            {/* Seksi Deskripsi */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                PT. Satriagraha Sempurna (SGS) adalah perusahaan terdepan dalam
                industri kemasan karton bergelombang, dengan pengalaman lebih dari{' '}
                <span className="font-semibold">30 tahun</span> dalam memberikan
                solusi kemasan berkualitas tinggi.
            </p>

            {/* Timeline Sejarah */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Sejarah Perusahaan
                </h2>
                <div className="space-y-6 border-l-4 border-green-600 pl-6">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" /> 1991 -
                    Pendirian Perusahaan
                    </h3>
                    <p className="text-gray-700">
                    Perusahaan didirikan di{' '}
                    <span className="font-semibold">Krian, Sidoarjo</span>, dengan
                    lahan seluas <span className="font-semibold">4 hektar</span>.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" /> 1998 -
                    Akuisisi oleh Manajemen Baru
                    </h3>
                    <p className="text-gray-700">
                    Perusahaan diambil alih oleh{' '}
                    <span className="font-semibold">manajemen baru</span> yang
                    membawa inovasi dalam proses produksi.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" /> 2002 -
                    Ekspansi Kapasitas Produksi
                    </h3>
                    <p className="text-gray-700">
                    Menambahkan mesin{' '}
                    <span className="font-semibold">Bergelombang</span> baru,
                    meningkatkan kapasitas hingga{' '}
                    <span className="font-semibold">10.000 ton/bulan</span>.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" /> 2005 -
                    Sertifikasi ISO 9001
                    </h3>
                    <p className="text-gray-700">
                    Menerima sertifikasi{' '}
                    <span className="text-blue-600 font-semibold">ISO 9001</span>{' '}
                    sebagai bukti standar kualitas tinggi dalam produksi.
                    </p>
                </div>
                </div>
            </div>

            {/* Gambar ISO 9001 */}
            <div className="flex justify-center my-8">
                <Image
                src="/ISO-9001.webp"
                height={250}
                width={500}
                alt="ISO 9001 Certification"
                className="rounded-lg shadow-md"
                />
            </div>

            {/* Komitmen Perusahaan */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Komitmen Kami
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Saat ini, dengan{' '}
                <span className="font-semibold">
                    2 Mesin Bergelombang, 7 Mesin Flexo, dan Mesin Avr
                </span>
                , serta <span className="font-semibold">500 karyawan</span>, kami
                terus berkomitmen untuk memberikan kualitas terbaik dalam setiap
                produk.
                </p>
            </div>
            </div>
        </div>
    )
}

export default AboutPage
