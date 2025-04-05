"use client";

import Image from "next/image";
import peopleLogo from "/public/people-logo.png";
import lettersLogo from "/public/letters-logo-fine.png";
import bgSigoDePie from "/public/bg-video-SigoDePie.png";

import { Ripple } from "@/components/magicui/ripple";
import { MorphingText } from "@/components/magicui/morphing-text";

import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Spotify } from "react-spotify-embed";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Button } from "@/components/ui/button";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import FacebookPosts from "@/components/mycomponents/FacebookPosts";

import { motion } from "framer-motion";
import ProximasFechas from "@/components/mycomponents/ProximasFechas";

export default function Home() {
  const texts = ["El Mejor Grupo", "Norteño Banda", "Para Ti"];

  return (
    <div className="w-full min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <div className="z-1">
            <motion.div
              className="flex justify-center items-center mt-4"
              whileHover={{ scale: 1.05 }} // Efecto zoom
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={lettersLogo}
                alt="Letters Logo"
                width={700}
                height={400}
                className="z-1"
              />
            </motion.div>
          </div>

          <a
            href="http://wa.me/527721330378"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShimmerButton className="shadow-2xl z-1">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Contactar a La Orden
              </span>
            </ShimmerButton>
          </a>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <VelocityScroll className={"text-white"}>
            {"¡Andamos a La Orden!"}
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>

        {/* Spotify Section */}
        <div className="mt-[100px]">
          <motion.div
            initial={{ opacity: 0, x: 30 }} // x: 30 hace que empiece 30px a la derecha
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-center text-4xl sm:text-5xl md:text-6xl font-bold">
              Síguenos en <span className="text-[#1ED760]">Spotify</span>
            </h2>
          </motion.div>
        </div>
        <div className="flex justify-center mt-8">
          <motion.div
            initial={{ opacity: 0, x: 30 }} // x: 30 hace que empiece 30px a la derecha
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            <Spotify link="https://open.spotify.com/intl-es/artist/21Zn1sfla8oRQhrbQNYYzg" />
          </motion.div>
        </div>

        {/* Redes Sociales */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="mt-[70px]">
            <h2 className="text-white text-center text-4xl sm:text-5xl md:text-6xl font-bold">
              Síguenos en todas nuestras{" "}
              <span className="text-purple-400">Redes Sociales</span>
            </h2>
            <div className="flex flex-col justify-center items-center mt-12">
              <a
                href="https://www.facebook.com/share/1Fh7id8jXL/?mibextid=wwXIfr"
                target="_blank"
                className=""
              >
                <motion.div
                  whileHover={{ scale: 1.05 }} // Efecto zoom
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    className={
                      "text-xl w-[250px] md:w-[300px] h-auto bg-black border-2 border-solid hover:text-black hover:bg-white cursor-pointer rounded-full"
                    }
                  >
                    <FaFacebook />
                    Facebook
                  </Button>
                </motion.div>
              </a>
              <a
                href="https://www.instagram.com/grupo.laorden?igsh=OTVpem1oZXYzbmh6"
                target="_blank"
                className="mt-3"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }} // Efecto zoom
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    className={
                      "text-xl w-[250px] md:w-[300px] h-auto bg-black border-2 border-solid hover:text-black hover:bg-white cursor-pointer rounded-full"
                    }
                  >
                    <FaInstagram />
                    Instagram
                  </Button>
                </motion.div>
              </a>
              <a
                href="https://www.tiktok.com/@la.orden89?_t=ZM-8vHpekkawdh&_r=1"
                target="_blank"
                className="mt-3"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }} // Efecto zoom
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    className={
                      "text-xl w-[250px] md:w-[300px] h-auto bg-black border-2 border-solid hover:text-black hover:bg-white cursor-pointer rounded-full"
                    }
                  >
                    <FaTiktok />
                    TikTok
                  </Button>
                </motion.div>
              </a>
              <a
                href="https://x.com/laorden522054?s=11"
                target="_blank"
                className="mt-3"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }} // Efecto zoom
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    className={
                      "text-xl w-[250px] md:w-[300px] h-auto bg-black border-2 border-solid hover:text-black hover:bg-white cursor-pointer rounded-full"
                    }
                  >
                    <FaXTwitter />
                    (Twitter)
                  </Button>
                </motion.div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Proximas Fechas */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <ProximasFechas />
        </motion.div>
      </div>
    </div>
  );
}
