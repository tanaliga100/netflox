import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MyList from "../components/MyList";
import Row from "../components/Row";
import { IMovie } from "../interfaces/interface";
import requests from "../utils/requests";

interface Props {
  netflixOriginals: IMovie[];
  trendingNow: IMovie[];
  topRated: IMovie[];
  actionMovies: IMovie[];
  comedyMovies: IMovie[];
  horrorMovies: IMovie[];
  romanceMovies: IMovie[];
  documentaries: IMovie[];
}

const Home: NextPage<Props> = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {
  return (
    <div className="relative h-[100vh] bg-gradient-to-b from-gray-900/10">
      <Head>
        <title>Netflox - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner netflixOriginals={netflixOriginals} />
        <div className="flex flex-col justify-center">
          <MyList />
          <Row movies={trendingNow} title="Trending Now" />
          <Row movies={topRated} title="Top Rated" />
          <Row movies={actionMovies} title="Action Thrillers" />
          <Row movies={comedyMovies} title="Comedies" />
          <Row movies={horrorMovies} title="Horror Movies" />
          <Row movies={romanceMovies} title="Romance" />
          <Row movies={documentaries} title="Documentaries" />
        </div>
      </main>
      {/* Modal */}
    </div>
  );
};
export default Home;

// SSR FETCHING
export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
