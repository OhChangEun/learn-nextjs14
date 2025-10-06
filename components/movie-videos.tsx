import { API_URL } from "../app/(home)/page";

async function getVideos(id: String) {
  console.log(`Fetching videos: ${Date.now()}`);
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
  return <h6>{JSON.stringify(videos)}</h6>;
}
