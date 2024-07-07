import ImageGallery from "./image-gallery";

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
        <ImageGallery />
      </main>
      <footer className="bg-slate-600 py-4 w-full"></footer>
    </>
  );
}
