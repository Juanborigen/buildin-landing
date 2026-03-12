import Image from "next/image";

export default function MarketplaceSection() {
    return (
        <section id="inversores" className="bg-gray-50 py-20 overflow-hidden flex items-center relative min-h-[550px]">
            <Image src={"/assets/images/mktplacebg.webp"} alt="Marketplace" fill className="object-cover object-left md:object-center" />
            <div className="lg:hidden absolute top-0 left-0 w-full h-full bg-white/60" />
            <div className="max-w-7xl mx-auto px-6 relative z-20">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left: image placeholder - man with phone */}
                    <div className="w-full lg:w-2/5 flex justify-center"/>
                    {/* Right: text content */}
                    <div className="w-full lg:w-3/5 flex flex-col gap-6">
                        <h2 className="text-4xl leading-9 font-medium">
                            El marketplace abierto para<br/> <span className="font-semibold">invertir en obra real.</span>
                        </h2>
                        <p className="text-lg leading-5 w-11/12">
                            Accedé a oportunidades seleccionadas, seguí el avance de cada proyecto y mantené el control de tu inversión desde tu celular.
                        </p>
                        <a
                            href="#registro"
                            className="self-start bg-blue-accent text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-800 transition-colors duration-200 shadow-md"
                        >
                            Registrarme
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
