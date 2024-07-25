import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";
import Image from "next/image";

export default async function ImageGallery() {
  const s3Client = new S3Client({
    region: "us-east-2",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
  });

  const objectListParams = new ListObjectsV2Command({
    Bucket: "s3-gallery-image",
  });

  const objectList = await s3Client.send(objectListParams);
  const imageList = objectList.Contents?.map((object) => object.Key);
  console.log(imageList);
  return (
    <>
      <h2 className="text-2xl font-bold text-slate-600 mb-4 mt-4">
        Galeria de Fotos
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {imageList?.map((image, index) => (
          <div
            key={index}
            className=" rounded-md overflow-hidden shadow-md bg-white w-[280px] h-[280px]"
          >
            <div className="w-[90%] h-[90%] mx-auto mt-[5%]">
              <Image
                className="w-full h-full object-cover"
                width={280}
                height={280}
                src={`https://s3-gallery-image.s3.us-east-2.amazonaws.com/${image}`}
                alt="Imagem de um cachorro"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
