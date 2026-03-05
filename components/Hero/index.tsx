import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex items-center justify-center h-screen relative">
            <div className="absolute left-0 top-0 w-full h-full bg-linear-to-r from-[#2d488c37] to-[#2d488c62] z-10" />
            <Image src={"/assets/images/herobg.webp"} alt="Hero" fill className="object-cover" />
            <div className="max-w-8xl mx-auto px-6 z-20">
                <div className="flex flex-col lg:flex-row items-center min-h-[600px]">
                    {/* Left: decorative circle with phone mockup */}
                    <div className="relative w-full lg:w-1/2 flex items-center justify-center py-12 lg:py-0">
                        <Image src={"/assets/images/svg/rueda.svg"} alt="Mockup celular" fill className="object-contain z-10" />
                        <Image src={"/assets/images/hero/mock-celular.png"} alt="Mockup celular" width={550} height={600} className=" relative z-20" />
                    </div>

                    {/* Right: text content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 py-12 lg:py-0 lg:pl-12">
                        <h1 className="text-4xl font-manrope font-extrabold">
                            Invertí y desarrollá proyectos inmobiliarios en un solo lugar
                        </h1>
                        <p className="font-inter text-xl leading-5">
                            Buildin conecta a desarrolladores con inversores a través de un marketplace transparente, accesible y 100% digital.
                        </p>
                        <a
                            href="#inversores"
                            className="bg-blue-accent text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition-colors duration-200 shadow-md"
                        >
                            Registrarme ahora
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 bg-[#2f415724] w-full h-40 backdrop-blur-md rounded-[40px] z-20"  />
        </section>
    );
}

/*bg-linear-to-r from-[#2d488c37] to-[#2D488C] */
