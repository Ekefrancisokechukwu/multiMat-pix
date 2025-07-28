import { ArrowDownToLine, Upload } from "lucide-react";

const Welcome = () => {
  return (
    <div className="mt-[7rem]">
      <div className="text-center">
        <h1 className="font-bold text-4xl text-stone-700">
          Convert and Edit Your Images
        </h1>
        <p className="text-gray-600 mt-2">
          Upload your image to convert it into multiple formats
        </p>
      </div>

      <div className="mt-5">
        <div className="max-w-[45rem] px-8 py-[3rem] bg-white border-2 rounded-lg mx-auto border-dashed transition-all hover:border-gray-400 border-gray-300">
          <div className="text-center grid place-items-center">
            {/* <Upload className="text-gray-500 " /> */}
            <p className="mt-3 text-lg text-stone-700 font-semibold">
              Drag and drop your image here
            </p>
            <p className="text-stone-600">or click to browse files</p>
            <button className="bg-stone-700 text-white mt-3.5 hover:bg-stone-800 text-sm font-medium px-3 py-1.5 rounded-lg inline-flex items-center">
              Browse files
            </button>
            <p className="text-xs text-stone-500 mt-5">
              Supports JPG, PNG, GIF, BMP up to 10MB
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
