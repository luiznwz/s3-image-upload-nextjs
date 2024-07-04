import Image from "next/image";
import dogImage from "./dog.jpg";

export default function Home() {
  return (
    <>
      <main className="flex-1 max-w-[900px] mx-auto px-4 py-8 text-center">
        <header>
          <h1 className="text-3xl font-black text-slate-600 mb-2">
            Upload Image
          </h1>
          <p className="text-gray-500 mb-8 font-light">
            Gallery image on S3 AWS
          </p>
        </header>

        {/* Dropdown arquivos*/}

        {/* Galeria de Fotos */}

        <hr />
        <h2 className="text-2xl font-bold text-slate-600 mb-4 mt-4">
          Galeria de Fotos
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className=" rounded-md overflow-hidden shadow-md bg-white w-[280px] h-[280px]"
            >
              <div className="w-[90%] h-[90%] mx-auto mt-[5%]">
                <Image
                  className="w-full h-full object-cover"
                  width={280}
                  height={280}
                  src={dogImage}
                  alt="Imagem de um cachorro"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-slate-600 py-4 w-full"></footer>
    </>
  );
}
