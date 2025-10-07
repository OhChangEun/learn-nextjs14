import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

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
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poster} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.hompage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
