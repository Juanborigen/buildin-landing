import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex items-center justify-center md:min-h-screen py-12 md:py-0 relative">
            <div className="absolute left-0 top-0 w-full h-full bg-linear-to-r from-[#2d488c37] to-[#2d488c62] z-10" />
            <div className="absolute md:hidden left-0 top-0 w-full h-full bg-white/40 backdrop-blur-xs z-20" />
            <Image src={"/assets/images/herobg.webp"} alt="Hero" fill className="object-cover" />
            <div className="relative w-screen">
                <div className="flex flex-col-reverse max-w-8xl mx-auto px-6 lg:flex-row items-center lg:min-h-[600px]">
                    {/* Left: decorative circle with phone mockup */}
                    <div className="relative w-3/4 lg:w-1/2 md:flex items-center justify-center">
                        <Image src={"/assets/images/svg/rueda.svg"} alt="Mockup celular" fill className="object-contain z-10" />
                        <Image src={"/assets/images/hero/mock-celular.png"} alt="Mockup celular" width={550} height={600} className=" relative z-30" />
                    </div>

                    {/* Right: text content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 pt-20 pb-12 lg:py-0 lg:pl-12">
                        <h1 className="text-4xl leading-9 font-manrope font-extrabold">
                            Invertí y desarrollá proyectos<br /> inmobiliarios en un solo lugar
                        </h1>
                        <p className="font-inter text-xl leading-5">
                            Buildin conecta a desarrolladores con inversores a través de<br /> un marketplace transparente, accesible y 100% digital.
                        </p>
                        <a
                            href="#inversores"
                            className="bg-blue-accent text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition-colors duration-200 shadow-md"
                        >
                            Registrarme ahora
                        </a>
                    </div>
                </div>
                <div className="absolute block bottom-0 bg-[#2f415724] w-screen h-20 lg:h-[35vh] backdrop-blur-xs lg:-bottom-32 2xl:-bottom-52 lg:rounded-3xl z-20"  />
            </div>
        </section>
    );
}

/*bg-linear-to-r from-[#2d488c37] to-[#2D488C] */
