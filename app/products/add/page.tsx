"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { uploadProduct } from "./actions";
import { useFormState } from "react-dom";

export default function AddProduct() {
  const [preview, setPreview] = useState("");
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) {
      return;
    }
    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
  };
  const [state, action] = useFormState(uploadProduct, null);
  return (
    <div>
      <form action={action} className="p-5 flex flex-col gap-5">
        <label
          htmlFor="photo"
          className="border-2 aspect-square flex justify-center items-center flex-col
        text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer
        bg-center bg-cover"
          style={{
            backgroundImage: `url(${preview})`,
          }}
        >
          {preview === "" ? (
            <>
              <PhotoIcon className="w-20" />
              <div className="text-neural-400 text-sm">
                사진을 추가해주세요.
                {state?.fieldErrors.photo}
              </div>
            </>
          ) : null}
        </label>
        <input onChange={onImageChange} type="file" id="photo" name="photo" />
        <Input
          name="title"
          required
          placeholder="제목"
          type="text"
          errors={state?.fieldErrors.title}
        />
        <Input
          name="price"
          required
          placeholder="가격"
          type="number"
          errors={state?.fieldErrors.price}
        />
        <Input
          name="description"
          required
          placeholder="자세한 설명"
          type="text"
          errors={state?.fieldErrors.description}
        />
        <Button text="작성완료" />
      </form>
    </div>
  );
}
