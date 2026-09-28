// Get Params in Server Components
export default async function ProductDetailPage({ params }: any) {
  const pageParams = await params;
  console.log(pageParams);
  return (
    <>
      <h1>Product Detail</h1>
    </>
  );
}