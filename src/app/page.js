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
import { FaXTwitter } from "react-icons/fa6";

import FacebookPosts from "@/components/mycomponents/FacebookPosts";

export default function Home() {
  const texts = ["El Mejor Grupo", "Norteño Banda", "Para Ti"];

  return (
    <div className="w-full min-h-screen p-4">
      <div className="max-w-6xl mx-auto">

        <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <InteractiveGridPattern
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
              ""
            )}
          />

          <div className="z-1">
            <Image
              src={lettersLogo}
              alt="Letters Logo"
              width={700}
              height={400}
              className="z-1"
            />
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
          <h2 className="text-white text-center text-4xl sm:text-5xl md:text-6xl font-bold">
            Síguenos en <span className="text-[#1ED760]">Spotify</span>
          </h2>
        </div>
        <div className="flex justify-center mt-8">
          <Spotify link="https://open.spotify.com/intl-es/artist/21Zn1sfla8oRQhrbQNYYzg" />
        </div>

        {/* Redes Sociales */}
        <div className="mt-[70px]">
          <h2 className="text-white text-center text-4xl sm:text-5xl md:text-6xl font-bold">
            Síguenos en todas nuestras <span className="text-purple-400">Redes Sociales</span>
          </h2>
          <div className="flex flex-col justify-center items-center mt-12">
            <a href="" target="_blank" className="">
              <Button className={"text-xl w-[250px] md:w-[300px] h-auto bg-black border-2 border-solid hover:text-black hover:bg-white cursor-pointer rounded-full"}>
                <FaFacebook />
                Facebook
              </Button>
            </a>
            <a href="" target="_blank" className="mt-3">
              <Button className={"text-xl w-[250px] md:w-[300px] h-auto bg-black border-2 border-solid hover:text-black hover:bg-white cursor-pointer rounded-full"}>
                <FaInstagram  />
                Instagram
              </Button>
            </a>
            <a href="" target="_blank" className="mt-3">
              <Button className={"text-xl w-[250px] md:w-[300px] h-auto bg-black border-2 border-solid hover:text-black hover:bg-white cursor-pointer rounded-full"}>
                <FaXTwitter   />
                (Twitter)
              </Button>
            </a>
          </div>
        </div>

        

      </div>
    </div>
  );
}
