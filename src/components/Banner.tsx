import { IconHelp, IconPlayerPlay } from '@tabler/icons';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { baseUrl } from '@/constants/movie';
import { Movie } from '@/types/typing';

type Props = {
  netflixOriginals: Movie[];
};

export const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]!);
  }, [netflixOriginals]);

  return (
    <div className="absolute inset-0 h-[95vh] w-full">
      <Image
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        alt=""
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
      />
      <div className="relative z-10 mt-[150px] space-y-3 px-3 md:space-y-4 md:px-10">
        <h1 className="max-w-2xl text-3xl leading-none text-white text-shadow-md md:text-4xl lg:text-5xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xs text-xs text-shadow-md md:max-w-xl md:text-lg lg:max-w-2xl">
          {movie?.overview}
        </p>
        <div className="flex space-x-2">
          <button className="flex w-[100px] justify-center space-x-2 rounded-lg bg-white py-2 hover:bg-white/80 active:bg-white/90">
            <IconPlayerPlay className="fill-black stroke-black" />
            <span className="font-semibold text-black">Play</span>
          </button>
          <button className="flex items-center space-x-1 rounded-lg bg-gray-700 p-2 hover:bg-gray-700/80 active:bg-gray-700/90">
            <span>More Info</span>
            <IconHelp className="stroke-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
