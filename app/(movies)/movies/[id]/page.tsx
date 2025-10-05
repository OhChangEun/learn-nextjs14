type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function MovieDetail({ params, searchParams }: Props) {
  const { id } = await params;
  const query = await searchParams;

  console.log("params", id);
  console.log("searchParams:", query);

  return <h1>Movie {id}</h1>;
}
