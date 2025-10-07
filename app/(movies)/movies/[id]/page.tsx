import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params }: IParams) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

// export default async function MovieDetail({ params, searchParams }: Props) {
//   const { id } = await params;
//   const query = await searchParams;

//   console.log("params", id);
//   console.log("searchParams:", query);

//   return <h1>Movie {id}</h1>;
// }
