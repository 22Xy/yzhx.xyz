"use client";
import { ArrowLeft, Eye, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Particles from "../../components/particles";

type Props = {
  post: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
    author?: string;
  };

  views: number;
};
export const Header: React.FC<Props> = ({ post, views }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const links: { label: string; href: string }[] = [];
  if (post.repository) {
    links.push({
      label: "GitHub",
      href: `https://github.com/${post.repository}`,
    });
  }
  if (post.url) {
    links.push({
      label: "Website",
      href: post.url,
    });
  }
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={ref}
      className="relative isolate overflow-hidden bg-zinc-900/80"
    >
      <Particles className="absolute inset-0 animate-fade-in" quantity={53} />

      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <span
              title="View counter for this page"
              className={`duration-200 hover:font-medium flex items-center gap-1 ${
                isIntersecting
                  ? "text-zinc-300 hover:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-300"
              } `}
            >
              <Eye className="w-5 h-5" />{" "}
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                views
              )}
            </span>
            <Link target="_blank" href="https://twitter.com/yzhxxyz">
              <Twitter
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? "text-zinc-300 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-300"
                } `}
              />
            </Link>
            <Link target="_blank" href="https://github.com/yzhxxyz">
              <Github
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? "text-zinc-300 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-300"
                } `}
              />
            </Link>
          </div>

          <Link
            href="/posts"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? " text-zinc-300 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-300"
            } `}
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
      <div className="container mx-auto relative isolate overflow-hidden pt-28 pb-6 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {post.description}
            </p>
            <div className="flex justify-center flex-row mt-4 text-lg leading-8 text-zinc-300">
              <p className="mr-2.5">by</p>
              <p className="text-white font-bold underline underline-offset-4">
                {post.author}
              </p>
            </div>
          </div>

          <div className="mx-auto my-8 sm:mt-10 sm:mb-0 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white flex lg:gap-x-10">
              {links.map((link) => (
                <Link target="_blank" key={link.label} href={link.href}>
                  {link.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-0.5 animate-glow md:block animate-fade-in-infinite bg-gradient-to-r from-zinc-300/0 via-zinc-300/90 to-zinc-300/0" />
    </header>
  );
};
