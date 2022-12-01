import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { IMovie } from "../interfaces/interface";
import ThumbNail from "./ThumbNail";

type Props = {
  title: string;
  movies: IMovie[];
};

const Row = ({ title, movies }: Props) => {
  return (
    <section className="h-44 space-y-.5 md: space-x-2">
      <h1 className="cursor-pointer w-56 text-sm font-bold tracking-tighter font-sans text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl px-2 py-2">
        {title}
      </h1>
      <div className="group relative md:-ml-2">
        <BiLeftArrow className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 " />
        <div className="flex items-center  scrollbar-hide overflow-x-scroll">
          {movies.map((movie) => (
            <ThumbNail key={movie.id} movie={movie} />
          ))}
        </div>
        <BiRightArrow className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
      </div>
    </section>
  );
};

export default Row;