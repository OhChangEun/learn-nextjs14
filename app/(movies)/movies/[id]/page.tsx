import { API_URL } from "../../../(home)/page";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function getMovie(id: String) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: String) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail({ params }: Props) {
  const { id } = await params;

  console.log("start fetching");
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end fetching");

  return <h1>{movie.title}</h1>;
}

// export default async function MovieDetail({ params, searchParams }: Props) {
//   const { id } = await params;
//   const query = await searchParams;

//   console.log("params", id);
//   console.log("searchParams:", query);

//   return <h1>Movie {id}</h1>;
// }
