import Image from "next/image";

const features = [
    {
        icon: (
            <Image src={"/assets/images/svg/map.svg"} alt="Map Icon" fill className="object-contain" />
        ),
        title: "Información clara y transparente",
    },
    {
        icon: (
            <Image src={"/assets/images/svg/layer.svg"} alt="Layer Icon" fill className="object-contain" />

        ),
        title: "Seguimiento de avance de proyecto",
    },
    {
        icon: (
            <Image src={"/assets/images/svg/cursor.svg"} alt="Cursor Icon" fill className="object-contain" />

        ),
        title: "Inversión 100% digital",
    },
    {
        icon: (
            <Image src={"/assets/images/svg/tag.svg"} alt="Tag Icon" fill className="object-contain" />

        ),
        title: "Cubierto desde hace más de USD 1M",
    },
];

export default function FeaturesSection() {
    return (
        <section id="acerca" className="flex flex-col items-center relative py-12 bg-linear-to-b to-[#dce1e3] via-70% from-[#eef7fa]">
                <Image src={"/assets/images/featured/featuredp-bg.png"} alt="Features Background" fill className="object-cover hidden lg:block" />
                <div className="md:min-w-7xl max-w-9xl mx-auto px-6 relative z-20">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left: text + features */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-8">
                            <h2 className="text-3xl lg:text-4xl font-medium font-manrope lg:leading-9">
                                Hacer crecer tu capital{" "}
                                <span className=" font-black">nunca fue tan sencillo.</span>
                            </h2>
                            <p className="text-lg font-inter leading-5">
                                Buildin te propone un nuevo ambiente de inversión, en real estate accesible, confiable y transparente para todos.
                            </p>

                            <div className="grid grid-cols-2 gap-6 max-w-[450px]">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex flex-col items-center gap-3 ">
                                        <div className="w-16 h-16 relative rounded-xl flex items-center justify-center">
                                            {feature.icon}
                                        </div>
                                        <p className="font-inter w-3/4 text-center">
                                            {feature.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}
