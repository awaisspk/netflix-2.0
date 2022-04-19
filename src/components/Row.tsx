import { Movie } from '@/types/typing';

type Props = {
  title: string;
  movies: Movie[];
};

export const Row = ({ title, movies }: Props) => {
  return (
    <div>
      <section>
        <h2>{title}</h2>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <p>{movie.name}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};
