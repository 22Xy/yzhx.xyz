import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "posts", href: "/posts" },
  { name: "contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-r from-zinc-900/5 via-zinc-900/70 to-zinc-900/5">
      {/* <div style={{ width: "100%" }}>
        <Image alt="room gif" src={room}></Image>
      </div> */}
      <nav className="z-10 mb-8 mt-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl duration-500 text-zinc-200 hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/90 to-zinc-300/0" />
      <Particles className="absolute inset-0 animate-fade-in" quantity={53} />

      <h1 className="z-10 text-8xl text-transparent duration-1000 cursor-default bg-white text-zinc-200 text-edge-outline animate-title font-display sm:text-9xl whitespace-nowrap bg-clip-text pb-4 font-bold">
        yzhX
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/90 to-zinc-300/0" />
      <div className="mt-8 mb-16 text-center animate-fade-in">
        <h2 className="text-xl text-zinc-200 ">just an engineer</h2>
      </div>
    </div>
  );
}
