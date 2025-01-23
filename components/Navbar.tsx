"use client";

import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-hero bg-cover text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-4xl font-bold text-[#FF6347] hover:text-[#FF4500]"
          >
            AnimeVerse
          </Link>
          {/* <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-lg hover:text-[#FF6347]">
              Home
            </Link>
            <Link
              href="/anime-catalog"
              className="text-lg hover:text-[#FF6347]"
            >
              Anime Catalog
            </Link>
            <Link href="/manga" className="text-lg hover:text-[#FF6347]">
              Manga
            </Link>
            <Link href="/about" className="text-lg hover:text-[#FF6347]">
              About
            </Link>
            <Link href="/contact" className="text-lg hover:text-[#FF6347]">
              Contact
            </Link>
          </div> */}
        </div>

        {/* Mobile Menu Toggle */}
        {/* <div className="md:hidden">
          <button
            type="button"
            className="text-white"
            aria-label="Toggle mobile menu"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu?.classList.toggle("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div> */}
      </div>

      {/* Mobile Menu */}
      {/* <div
        id="mobile-menu"
        className="md:hidden hidden bg-[#1D1D1D] text-white space-y-4 py-4"
      >
        <Link
          href="/"
          className="block text-lg text-center hover:text-[#FF6347]"
        >
          Home
        </Link>
        <Link
          href="/anime-catalog"
          className="block text-lg text-center hover:text-[#FF6347]"
        >
          Anime Catalog
        </Link>
        <Link
          href="/manga"
          className="block text-lg text-center hover:text-[#FF6347]"
        >
          Manga
        </Link>
        <Link
          href="/about"
          className="block text-lg text-center hover:text-[#FF6347]"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block text-lg text-center hover:text-[#FF6347]"
        >
          Contact
        </Link>
      </div> */}
    </nav>
  );
}

export default Navbar;
