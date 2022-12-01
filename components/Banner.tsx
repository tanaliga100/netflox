import Image from "next/image";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrCircleInformation } from "react-icons/gr";
import { baseUrl } from "../constants/movie";
import { IMovie } from "../interfaces/interface";

type Props = {
  netflixOriginals: IMovie[];
};

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = React.useState<IMovie | null>(null);

  React.useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, []);
  return (
    <div className="flex flex-col space-y-2 py-16 justify-center md:space-y-4 lg:justify-end lg:pb-12 w-full  duration-1000 h-[80vh]	bg-gradient-to-r   from-black  to-transparent ">
      <section className="absolute top-0 left-0 h-[80vh] w-full z-[-50]  ">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          // width={1000}
          // height={800}
          object-fit="cover"
          alt="movie_poster"
        />
      </section>
      <section className="pt-12 px-10 ">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
          {movie?.title}
        </h1>
        <p className="max-w-sm text-xs pt-5 tracking-wider font-thin grayscale md:max-w-lg md:text-sm lg:max-w-2xl lg:text-xl">
          {movie?.overview.slice(0, 200).concat("...")}
        </p>
        <div className="flex space-x-3 pt-4">
          <button className="bg-white text-black bannerButton">
            <BsFillPlayFill className="h-5 w-6 text-black md:h-7 md:w-7" />
            Play
          </button>
          <button className="bannerButton  bg-[gray]/80 file:">
            <GrCircleInformation /> Overview
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
