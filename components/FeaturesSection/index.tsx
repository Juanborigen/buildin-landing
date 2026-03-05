import Image from "next/image";

const features = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-blue-900" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
            </svg>
        ),
        title: "Información clara y transparente",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-blue-900" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        ),
        title: "Seguimiento de avance de proyecto",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-blue-900" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
        ),
        title: "Inversión 100% digital",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-blue-900" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: "Cubierto desde hace más de USD 1M",
    },
];

export default function FeaturesSection() {
    return (
        <section className="py-32  flex items-center relative min-h-[550px]">
            <Image src={"/assets/images/featuresbg.png"} alt="Features Background" fill className="object-cover" />
            <div className="max-w-7xl mx-auto px-6 relative z-20">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: text + features */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <h2 className="text-3xl lg:text-4xl font-medium lg:leading-9">
                            Hacer crecer tu capital{" "}
                            <span className=" font-semibold">nunca fue tan sencillo.</span>
                        </h2>
                        <p className="text-lg font-inter leading-5">
                            Buildin te propone un nuevo ambiente de inversión, en real estate accesible, confiable y transparente para todos.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex flex-col gap-3">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <p className="text-gray-700 text-sm font-medium leading-snug">
                                        {feature.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: app UI mockup placeholder */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image src={"/assets/images/featuresproyects.webp"} alt="" width={600} height={600} className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
