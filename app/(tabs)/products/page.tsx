import db from "@/lib/db";
import Loading from "./loading";

async function getProducts() {
  //   db.product.findMany();
  await new Promise((resolve) => setTimeout(resolve, 5000));
}

export default async function Proudct() {
  const proudct = await getProducts();
  return (
    <div>
      <h1 className="text-white text-4xl">Product!</h1>
    </div>
  );
}
