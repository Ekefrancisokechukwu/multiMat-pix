import { uploadImage } from "lib/format";
import { ArrowDownToLine, Upload } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { Link } from "react-router";

const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export type FileType = {
  path: string;
  sizeInBytes: number;
};

const BASE_URL = "https://multimat-pix-server.onrender.com";

const Welcome = () => {
  const [isPending, setIspending] = useState(false);
  const [results, setResults] = useState<null | {
    original: string;
    formats: { [key: string]: FileType };
  }>(null);

  const [isDragOver, setIsDragOver] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const file = e.dataTransfer.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed.");
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      alert("Image must be less than 10MB.");
      return;
    }
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    setIspending(true);
    try {
      const data = await uploadImage(file);
      setResults(data);
    } catch (err) {
      console.error("Upload failed", err);
      alert("Upload failed");
    } finally {
      setIspending(false);
    }
  }, []);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !containerRef) return;

    if (!file.type.startsWith("image/")) {
      alert("Only image files are allowed.");
      return;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      alert("Image must be less than 10MB.");
      return;
    }

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });

    setIspending(true);
    try {
      const data = await uploadImage(file);
      setResults(data);
    } catch (err) {
      console.error("Upload failed", err);
      alert("Upload failed");
    } finally {
      setIspending(false);
    }
  };

  return (
    <div className="mt-[7rem]">
      <div className="text-center">
        <h1 className="font-bold text-4xl text-stone-700">
          Convert Your Images
        </h1>
        <p className="text-gray-600 mt-2">
          Upload your image to convert it into multiple formats
        </p>
      </div>

      <div className="mt-5">
        {/* file upload */}
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`max-w-[45rem] px-8 relative py-[3rem] border-2 rounded-lg mx-auto border-dashed transition-all  ${isDragOver ? "border-[#FFCD76] bg-[#FAF4E9]" : "hover:border-gray-400 border-gray-300 bg-white "}`}
        >
          {isPending && <div className="absolute inset-0 bg-white/70 z-20" />}
          <div className="text-center grid place-items-center">
            {/* <Upload className="text-gray-500 " /> */}
            <p className="mt-3 text-lg text-stone-700 font-semibold">
              Drag and drop your image here
            </p>
            <p className="text-stone-600">or click to browse files</p>
            <label
              htmlFor="image-upload"
              tabIndex={0}
              className="bg-stone-700 cursor-pointer text-white mt-3.5 hover:bg-stone-800 text-sm font-medium px-3 py-1.5 rounded-lg inline-flex items-center"
            >
              Browse files
              <input
                onChange={handleFileChange}
                type="file"
                accept="image/*"
                name="upload-images"
                id="image-upload"
                className="sr-only"
              />
            </label>
            <p className="text-xs text-stone-500 mt-5">
              Supports JPG, PNG up to 10MB
            </p>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="mt-[8rem] max-w-[75rem] mx-auto pb-10">
        <h5 className="font-semibold text-stone-700 text-xl">
          {isPending
            ? "Processing..."
            : results !== null && "Converted Formats"}
        </h5>
        {isPending ? (
          <div className="h-[13rem] grid place-items-center">
            <div className="size-[8rem] border-5 animate-spin !ease-out rounded-full border-r-gray-400 border-gray-200" />
          </div>
        ) : (
          results !== null && (
            <div className="mt-5 flex items-center gap-4">
              {/* WebP */}
              <div className="p-3 bg-white w-max  border border-gray-300 rounded-xl">
                <div className="flex items-center justify-between">
                  {" "}
                  <span className="bg-gray-100 p-2 rounded-3xl text-sm">
                    WebP
                  </span>
                  <a
                    href={`${BASE_URL}/download/${results.formats.webp.path.split("/").pop()}`}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ArrowDownToLine size={18} />
                  </a>
                </div>
                <div className="h-[10rem] w-[15rem] bg-gray-100 mt-3 rounded-lg">
                  <img
                    src={`${BASE_URL}${results.formats.webp.path}`}
                    alt=""
                    className="w-full object-cover h-full"
                  />
                </div>
                <p className="mt-3 text-gray-600 text-sm">
                  size:{" "}
                  {results.formats.webp.sizeInBytes > 1024 * 1024
                    ? `${(results.formats.webp.sizeInBytes / (1024 * 1024)).toFixed(2)} MB`
                    : `${(results.formats.webp.sizeInBytes / 1024).toFixed(2)} KB`}
                </p>
              </div>

              {/* Jpeg */}
              <div className="p-3 bg-white w-max  border border-gray-300 rounded-xl">
                <div className="flex items-center justify-between">
                  {" "}
                  <span className="bg-gray-100 p-2 rounded-3xl text-sm">
                    Jpeg
                  </span>
                  <a
                    href={`${BASE_URL}/download/${results.formats.jpeg.path.split("/").pop()}`}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ArrowDownToLine size={18} />
                  </a>
                </div>
                <div className="h-[10rem] w-[15rem] bg-gray-100 mt-3 rounded-lg">
                  <img
                    src={`${BASE_URL}${results.formats.jpeg.path}`}
                    alt=""
                    className="w-full object-cover h-full"
                  />
                </div>
                <p className="mt-3 text-gray-600 text-sm">
                  size:{" "}
                  {results.formats.jpeg.sizeInBytes > 1024 * 1024
                    ? `${(results.formats.jpeg.sizeInBytes / (1024 * 1024)).toFixed(2)} MB`
                    : `${(results.formats.jpeg.sizeInBytes / 1024).toFixed(2)} KB`}
                </p>
              </div>
              {/* png */}
              <div className="p-3 bg-white w-max  border border-gray-300 rounded-xl">
                <div className="flex items-center justify-between">
                  {" "}
                  <span className="bg-gray-100 p-2 rounded-3xl text-sm">
                    png
                  </span>
                  <a
                    href={`${BASE_URL}/download/${results.formats.png.path.split("/").pop()}`}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ArrowDownToLine size={18} />
                  </a>
                </div>
                <div className="h-[10rem] w-[15rem] bg-gray-100 mt-3 rounded-lg">
                  <img
                    src={`${BASE_URL}${results.formats.png.path}`}
                    alt=""
                    className="w-full object-cover h-full"
                  />
                </div>
                <p className="mt-3 text-gray-600 text-sm">
                  size:{" "}
                  {results.formats.png.sizeInBytes > 1024 * 1024
                    ? `${(results.formats.png.sizeInBytes / (1024 * 1024)).toFixed(2)} MB`
                    : `${(results.formats.png.sizeInBytes / 1024).toFixed(2)} KB`}
                </p>
              </div>
              {/* avif */}
              <div className="p-3 bg-white w-max  border border-gray-300 rounded-xl">
                <div className="flex items-center justify-between">
                  {" "}
                  <span className="bg-gray-100 p-2 rounded-3xl text-sm">
                    avif
                  </span>
                  <a
                    href={`${BASE_URL}/download/${results.formats.avif.path.split("/").pop()}`}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ArrowDownToLine size={18} />
                  </a>
                </div>
                <div className="h-[10rem] w-[15rem] bg-gray-100 mt-3 rounded-lg">
                  <img
                    src={`${BASE_URL}${results.formats.avif.path}`}
                    alt=""
                    className="w-full object-cover h-full"
                  />
                </div>
                <p className="mt-3 text-gray-600 text-sm">
                  size:{" "}
                  {results.formats.avif.sizeInBytes > 1024 * 1024
                    ? `${(results.formats.avif.sizeInBytes / (1024 * 1024)).toFixed(2)} MB`
                    : `${(results.formats.avif.sizeInBytes / 1024).toFixed(2)} KB`}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default Welcome;
