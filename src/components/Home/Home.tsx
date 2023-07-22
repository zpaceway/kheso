import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import TopMenu from "./TopMenu";

const KhesoMedia = () => {
  return (
    <div className="absolute inset-0">
      <video
        src="/example1.mp4"
        controls
        className="h-full w-full object-cover"
      ></video>
    </div>
  );
};

const InnerShadow = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-50 shadow-[inset_0_0_80px_rgba(0,0,0,1)]"></div>
  );
};

const RightMenu = () => {
  return (
    <div className="absolute bottom-0 right-0 top-16 z-50 flex flex-col justify-center gap-4 px-2">
      <div className="flex cursor-pointer flex-col items-center justify-center text-white">
        <div className="text-3xl">
          <AiFillHeart />
        </div>
        <div className="text-xs font-medium">2.7M</div>
      </div>
      <div className="flex cursor-pointer flex-col items-center justify-center text-white">
        <div className="text-3xl">
          <AiFillMessage />
        </div>
        <div className="text-xs font-medium">7834</div>
      </div>
      <div className="flex cursor-pointer flex-col items-center justify-center text-white">
        <div className="text-3xl">
          <BsFillBookmarkFill />
        </div>
        <div className="text-xs font-medium">126.2K</div>
      </div>
      <div className="flex cursor-pointer flex-col items-center justify-center text-white">
        <div className="text-3xl">
          <FaShare />
        </div>
        <div className="text-xs font-medium">133.7K</div>
      </div>
      <div className="h-10 w-10 cursor-pointer">
        <img
          src="/example1.png"
          className="h-full w-full rounded-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative h-full w-full">
      <InnerShadow />
      <KhesoMedia />
      <TopMenu />
      <RightMenu />
    </div>
  );
};

export default Home;
