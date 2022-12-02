import MuiModal from "@mui/material/Modal";
import axios, { AxiosResponse } from "axios";
import React from "react";
import { AiFillAlipaySquare, AiOutlineClose } from "react-icons/ai";
import { BsPlayBtn } from "react-icons/bs";
import { RiAddBoxLine } from "react-icons/ri";
import ReactPlayer from "react-player/lazy";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { IElement, IGenre, IMovie } from "../interfaces/interface";

type Props = {};

const Modal = (props: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [res, setRes] = React.useState<IMovie | null>();
  const [trailer, setTrailer] = React.useState("");
  const [genres, setGenres] = React.useState<IGenre[]>([]);
  const [muted, setMuted] = React.useState(false);
  const handleClose = () => {
    setShowModal(false);
  };
  //fetchMovie depending on the ID
  const fetchMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/${
        movie?.media_type === "tv" ? "tv" : "movie"
      }/${movie?.id}?api_key=${
        process.env.NEXT_PUBLIC_API_KEY
      }&language=en-US&append_to_response=videos`
    )
      .then((res) => res.json())
      .catch((error) => console.log(error.messagee));
    setRes(data);

    if (data.videos) {
      const index = data.videos.results.findIndex(
        (element: IElement) => element.type === "Trailer"
      );
      setTrailer(data.videos.results[index]?.key);
    }
    if (data.genres) {
      setGenres(data.genres);
    }
  };
  React.useEffect(() => {
    if (!movie) return;
    fetchMovie();
  }, [movie]);
  console.log("res", res);

  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="z-50 mx-auto rounded-lg w-full"
    >
      <>
        <button className="absolute top-20 right-20 !z-40 modalButton">
          <AiOutlineClose onClick={handleClose} className="h-5 w-5 " />
        </button>
        <div className="relative pt-[30%] m-36">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
            muted={muted}
          />
          <div className="absolute w-screen items-center justify-between">
            <div className="flex space-x-2  bg-black">
              <button className="flex items-center h-10 gap-x-2 bg-black  text-red text-xl font-bold transition duration-500 hover:bg-red-800 px-10">
                <BsPlayBtn className="h-4 w-7" /> Play
              </button>
              <button className="flex items-center h-10  gap-x-2  bg-black text-white  px-10  duration-500 transition   hover:bg-red-900">
                <RiAddBoxLine className="h-4 w-7" /> Add to My List
              </button>
            </div>
          </div>
        </div>
      </>
    </MuiModal>
  );
};

export default Modal;
