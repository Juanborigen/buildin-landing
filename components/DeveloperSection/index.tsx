import Image from "next/image";

export default function DeveloperSection() {
    return (
        <section id="desarrollistas" className="bg-gray-50 py-20 overflow-hidden relative min-h-[550px]">
            <Image src={"/assets/images/dev-bg.png"} alt="Workers Background" fill className="object-cover" />
            <div className="lg:hidden absolute top-0 left-0 w-full h-full bg-white/45" />
            <div className="max-w-7xl mx-auto px-6 relative z-20">
                <div className="flex flex-col lg:flex-row justify-end items-center gap-12">
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <h4 className="text-3xl lg:text-4xl font-extrabold text-brand-blue lg:leading-9">
                            Financiá tu desarrollo de forma{" "}
                            <span className="">más eficiente</span>
                        </h4>
                        <p className=" text-lg font-inter leading-5">
                            <strong className="font-semibold">Publicá tu proyecto en Buildin</strong> y conectá con inversores que buscan participar en desarrollos inmobiliarios reales.
                        </p>
                        <a
                            href="#contacto"
                            className="self-end border-2 border-blue-900 hover:text-blue-900 text-sm font-semibold px-6 py-3 rounded-full bg-brand-blue hover:bg-transparent text-white transition-colors duration-500"
                        >
                            Portal para desarrollistas
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
