import Image from "next/image";
import React from "react";
import { BiMovie } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { IMovie } from "../interfaces/interface";

type Props = {
  movie: IMovie;
  // movie: IMovie | DocumentData;
};

const ThumbNail = ({ movie }: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currMovie, setCurrMovie] = useRecoilState(movieState);
  return (
    <div
      className="relative h-28 min-w-[10rem] px-2"
      onClick={() => {
        setCurrMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie?.backdrop_path || movie?.poster_path
        }`}
        alt={"movie name"}
        fill
        object-fit="cover"
        className="px-[3px] hover:scale-125 duration-500"
      />
    </div>
  );
};

export default ThumbNail;
