import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
};

function CreateSellNftCard({ image, title, description }: Props) {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={60}
        height={60}
        className="mx-auto"
      />
      <h1 className="mt-8 mb-2 text-center text-lg text-blue-950 font-bold">
        {title}
      </h1>
      <p className="text-sm text-black text-center text-opacity-60">
        {description}
      </p>
    </div>
  );
}

export default CreateSellNftCard;
