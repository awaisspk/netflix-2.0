import { Banner } from '@/components/Banner';
import { Header } from '@/components/Header';
import { Row } from '@/components/Row';
import { Main, Meta } from '@/layout';
import { Movie } from '@/types/typing';
import requests from '@/utils/requests';

type Props = {
  topRated: Movie[];
  trendingNow: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  documentaries: Movie[];
  romanceMovies: Movie[];
  netflixOriginals: Movie[];
};

const Index = ({
  topRated,
  trendingNow,
  actionMovies,
  comedyMovies,
  horrorMovies,
  documentaries,
  romanceMovies,
  netflixOriginals,
}: Props) => {
  console.log({
    topRated,
    trendingNow,
    actionMovies,
    horrorMovies,
    documentaries,
    romanceMovies,
    netflixOriginals,
    comedyMovies,
  });
  return (
    <Main
      meta={
        <Meta
          title="Netflix 2.0"
          description="This  is Netflix clone build using Next.js, typescript and redux"
        />
      }
    >
      <div className="relative z-0 mx-0 min-h-screen w-full">
        <Header />
        <main className="relative">
          <Banner netflixOriginals={netflixOriginals} />
          <section className="pt-[100vh]">
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Trending Now" movies={trendingNow} />
            <Row title="Trending Now" movies={trendingNow} />
          </section>
        </main>
      </div>
    </Main>
  );
};

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

export default Index;
