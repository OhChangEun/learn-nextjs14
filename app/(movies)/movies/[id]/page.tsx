import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function MovieDetail({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h3>movie detail page</h3>
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
