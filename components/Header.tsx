import { Images, Upload } from "lucide-react";

const Header = () => {
  return (
    <header className="py-3 px-5 border-b border-gray-400 border-dashed fixed top-0 left-0 z-50  bg-gray-50 w-full ">
      <div className="flex items-center justify-between mx-auto max-w-[80rem]">
        <div className="flex items-center gap-x-2">
          <Images />
          <span className="font-bold text-gray-700"> Multimat Pix</span>
        </div>
        <div></div>
        <div>
          <button className="bg-stone-700 text-white text-sm font-medium px-3 py-1.5 rounded-lg inline-flex items-center">
            <Upload size={18} className="mr-1.5" />
            Upload
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
