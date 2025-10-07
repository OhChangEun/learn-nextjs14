import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: String) {
  console.log(id);
  console.log(`Fetching videos: ${Date.now()}`);
  // throw new Error("something new error"); // 의도적으로 에러 발생

  //await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(`${API_URL}/${id}/videos`, {
    cache: "force-cache",
    // next: { revalidate: 60 }, // 60초 동안 캐시 유지  });
  });
  return response.json();
}

// 비디오만 렌더링하는 컴포넌트
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  console.log(videos);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
