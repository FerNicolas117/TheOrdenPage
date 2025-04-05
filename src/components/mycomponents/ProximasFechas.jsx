"use client";
import Image from "next/image";
import agendaAbril2025 from "/public/agenda-abril-2025.jpg";
import { motion } from "framer-motion";

export default function ProximasFechas() {
  return (
    <div className="mt-18">
      <h2 className="text-white text-center text-4xl sm:text-5xl md:text-6xl font-bold">
        Próximas <span className="text-[#e6f74d]">Fechas</span>
      </h2>
      <motion.div
        className="flex justify-center items-center mt-4"
        whileHover={{ scale: 1.05 }} // Efecto zoom
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={agendaAbril2025}
          alt="Agenda Abril 2025"
          width={300}
          height={400}
          className="rounded-lg shadow-2xl mt-8 w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[600px] lg:h-[700px] xl:w-[600px] xl:h-[700px] 2xl:w-[600px] 2xl:h-[700px]"
        />
      </motion.div>
    </div>
  );
}
