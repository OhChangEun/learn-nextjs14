import { API_URL } from "../app/(home)/page";

async function getMovie(id: String) {
  console.log(`Fetching movies: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "force-cache",
    // next: { revalidate: 60 }, // 60초 동안 캐시 유지
  });
  return response.json();
}

// 영화 정보 렌더링하는 컴포넌트
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
