import { formatToWon } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { formatToTimeAgo } from "../lib/utils";

interface ListProudctsProps {
  title: string;
  price: number;
  created_at: Date;
  photo: string;
  id: number;
}

export default function ListProducts({
  title,
  price,
  created_at,
  photo,
  id,
}: ListProudctsProps) {
  return (
    <Link href={`/products/${id}`} className="flex gap-5">
      <div className="relative size-28 rounded-md overflow-hidden">
        <Image fill src={photo} alt={title} />
      </div>
      <div className="flex flex-col gpa-1 *:text-white">
        <span className="text-lg">{title}</span>
        <span className="text-sm text-neutral-500">
          {formatToTimeAgo(created_at.toString())}
        </span>
        <span className="text-lg">{formatToWon(price)}원</span>
      </div>
    </Link>
  );
}
