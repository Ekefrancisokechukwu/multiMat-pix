const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-300 bg-white">
      <div className="max-w-[80rem] mx-auto flex items-start justify-between ">
        <div>
          <p className="text-stone-700 ">Supported Formats</p>
          <div className="flex items-center gap-x-1.5 mt-3">
            <span className="bg-gray-100 px-2 py-1 rounded-3xl text-sm text-gray-500">
              JPG
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded-3xl text-sm text-gray-500">
              PNG
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded-3xl text-sm text-gray-500">
              WebP
            </span>
            <span className="bg-gray-100 px-2 py-1 rounded-3xl text-sm text-gray-500">
              AVIF
            </span>
          </div>
        </div>
        <div>
          <p className="text-stone-700">Privacy</p>
          <p className="text-sm text-neutral-500 mt-1">
            Your images are processed locally and never stored on our servers.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
