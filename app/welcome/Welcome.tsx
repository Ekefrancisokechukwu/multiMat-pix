import { ArrowDownToLine, Upload } from "lucide-react";
import { useCallback, useState } from "react";

const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

const Welcome = () => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
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
  }, []);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed.");
        return;
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        alert("Image must be less than 10MB.");
        return;
      }

      // Valid file: handle it here
      console.log("Valid file selected:", file);
    },
    []
  );

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
          className={`max-w-[45rem] px-8 py-[3rem] border-2 rounded-lg mx-auto border-dashed transition-all  ${isDragOver ? "border-[#FFCD76] bg-[#FAF4E9]" : "hover:border-gray-400 border-gray-300 bg-white "}`}
        >
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

      <div className="mt-[8rem] max-w-[75rem] mx-auto pb-10">
        <h5 className="font-semibold text-stone-700 text-xl">
          Converted Formats
        </h5>
        <div className="mt-5 flex items-center gap-4">
          {/* WebP */}
          <div className="p-3 bg-white w-max  border border-gray-300 rounded-xl">
            <div className="flex items-center justify-between">
              {" "}
              <span className="bg-gray-100 p-2 rounded-3xl text-sm">WebP</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ArrowDownToLine size={18} />
              </button>
            </div>
            <div className="h-[10rem] w-[15rem] bg-gray-100 mt-3 rounded-lg"></div>
          </div>

          {/* Jpeg */}
          <div className="p-3 bg-white w-max  border border-gray-300 rounded-xl">
            <div className="flex items-center justify-between">
              {" "}
              <span className="bg-gray-100 p-2 rounded-3xl text-sm">Jpeg</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ArrowDownToLine size={18} />
              </button>
            </div>
            <div className="h-[10rem] w-[15rem] bg-gray-100 mt-3 rounded-lg"></div>
          </div>
          {/* png */}
          <div className="p-3 bg-white w-max  border border-gray-300 rounded-xl">
            <div className="flex items-center justify-between">
              {" "}
              <span className="bg-gray-100 p-2 rounded-3xl text-sm">png</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ArrowDownToLine size={18} />
              </button>
            </div>
            <div className="h-[10rem] w-[15rem] bg-gray-100 mt-3 rounded-lg"></div>
          </div>
          {/* avif */}
          <div className="p-3 bg-white w-max  border border-gray-300 rounded-xl">
            <div className="flex items-center justify-between">
              {" "}
              <span className="bg-gray-100 p-2 rounded-3xl text-sm">avif</span>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <ArrowDownToLine size={18} />
              </button>
            </div>
            <div className="h-[10rem] w-[15rem] bg-gray-100 mt-3 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
