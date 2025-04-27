"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <div className="w-40 h-40 sm:w-48 sm:h-48 relative overflow-hidden rounded-full border-4 border-yellow-400">
        <img
          src="https://i.imgur.com/iUTRSbw.png"
          alt="Bearisbug Avatar"
          className="object-cover w-full h-full"
        />
      </div>

      <a
        href="https://github.com/Bearisbug"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-yellow-500 text-2xl sm:text-3xl font-bold hover:underline"
      >
        Bearisbug
      </a>
    </div>
  );
}
