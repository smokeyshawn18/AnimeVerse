"use client";

import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";

let page = 2;

export type AnimeCardType = JSX.Element; // Rename to avoid name collision

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCardType[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        // Check if the data returned from fetchAnime is a single JSX element
        // If so, wrap it in an array to ensure it is in the correct format.
        setData((prevData) => [
          ...prevData,
          ...(Array.isArray(res) ? res : [res]),
        ]);
        page++;
      });
    }
  }, [inView]); // Only depend on `inView`

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
