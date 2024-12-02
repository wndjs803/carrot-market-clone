async function getProduct() {
  return await new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function ProductDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProduct();
  return <span>Proudct Detail {id}</span>;
}
