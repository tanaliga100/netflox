import Image from "next/image";
import React from "react";
import { BiMovie } from "react-icons/bi";
import { IMovie } from "../interfaces/interface";

type Props = {
  movie: IMovie;
};

const ThumbNail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px]  transition duration-200 ease-out px-2">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie?.backdrop_path || movie?.poster_path
        } `}
        alt={movie.name}
        fill
        object-fit="cover"
        className="px-[3px]"
      />
    </div>
  );
};

export default ThumbNail;