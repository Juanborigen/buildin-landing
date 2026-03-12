"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
    const [form, setForm] = useState({
        nombre: "",
        telefono: "",
        empresa: "",
        mensaje: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: handle submission
    };

    return (
        <section id="contacto" className="bg-white py-20 relative">
            <div className="relative max-w-[1350px] mx-auto">
                <Image src={"/assets/images/svg/rueda.svg"} alt="Mockup celular" width={850} height={600} className=" absolute md:-left-[14%] -left-[35%] -top-[40%] w-3/4 lg:w-3/5 lg:-top-[85%] z-20" />
                <div className="absolute left-0 bottom-0 w-72 h-72 lg:w-96 lg:h-96 -translate-x-1/3 translate-y-1/3">
                    <div className="w-full h-full rounded-full border-40 border-white/10" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-16">
                        <div className="w-full lg:w-2/5 flex flex-col gap-4 lg:pt-4 pt-16 relative">
                            {/* <Image src={"/assets/images/svg/rueda.svg"} alt="Mockup celular" fill className="object-cover" /> */}
                            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                ¿Hablamos?
                            </h2>
                            <p className="text-blue-200 text-base leading-relaxed max-w-xs">
                                ¿Tenés dudas sobre cómo invertir? ¿Necesitás ayuda para publicar un proyecto?
                            </p>
                            <p className="text-blue-300 text-base font-medium">
                                Nuestro equipo puede acompañarte.
                            </p>
                        </div>
                        <div className="w-full lg:w-2/4">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <input
                                        type="text"
                                        name="nombre"
                                        placeholder="Nombre"
                                        value={form.nombre}
                                        onChange={handleChange}
                                        className="flex-1 bg-white/10 text-brand-blue placeholder-brand-blue border border-brand-blue rounded-2xl px-4 py-4 text-sm outline-none focus:border-gray-500/50 transition-colors"
                                    />
                                    <input
                                        type="tel"
                                        name="telefono"
                                        placeholder="Teléfono"
                                        value={form.telefono}
                                        onChange={handleChange}
                                        className="flex-1 bg-white/10 text-brand-blue placeholder-brand-blue border border-brand-blue rounded-2xl px-4 py-4 text-sm outline-none focus:border-gray-500/50 transition-colors"
                                    />
                                </div>

                                <input
                                    type="text"
                                    name="empresa"
                                    placeholder="Nombre de la empresa *Opcional"
                                    value={form.empresa}
                                    onChange={handleChange}
                                    className="w-full bg-white/10 text-brand-blue placeholder-brand-blue border border-brand-blue rounded-2xl px-4 py-4 text-sm outline-none focus:border-gray-500/50 transition-colors"
                                />

                                <textarea
                                    name="mensaje"
                                    placeholder="Mensaje"
                                    rows={5}
                                    value={form.mensaje}
                                    onChange={handleChange}
                                    className="w-full bg-white/10 text-brand-blue placeholder-brand-blue border border-brand-blue rounded-2xl px-4 py-4 text-sm outline-none focus:border-gray-500/50 transition-colors resize-none"
                                />

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors duration-200 shadow-lg"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
