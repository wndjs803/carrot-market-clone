import ListProduct from "@/components/list-product";
import db from "@/lib/db";

async function getProducts() {
  const products = db.product.findMany({
    select: {
      title: true,
      price: true,
      created_at: true,
      photo: true,
      id: true,
    },
  });

  return products;
}

export default async function Proudct() {
  const proudcts = await getProducts();
  return (
    <div className="p-5 flex flex-col gap-5">
      {proudcts.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
    </div>
  );
}
