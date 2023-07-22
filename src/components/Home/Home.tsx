import { AiFillHeart, AiFillMessage } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import TopMenu from "./TopMenu";
import { KhesoMediaType } from "../../types";

type KhesoMediaProps = {
  videoUrl: string;
};

const KhesoMedia = ({ videoUrl }: KhesoMediaProps) => {
  return (
    <div className="absolute inset-0">
      <video
        src={videoUrl}
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

const RightMenu = ({ khesoMedia }: { khesoMedia: KhesoMediaType }) => {
  return (
    <div className="absolute bottom-0 right-0 top-16 z-50 flex flex-col justify-center gap-4 px-2">
      <div className="flex cursor-pointer flex-col items-center justify-center text-white">
        <div className="text-3xl">
          <AiFillHeart />
        </div>
        <div className="text-xs font-medium">{khesoMedia.likes}</div>
      </div>
      <div className="flex cursor-pointer flex-col items-center justify-center text-white">
        <div className="text-3xl">
          <AiFillMessage />
        </div>
        <div className="text-xs font-medium">{khesoMedia.comments}</div>
      </div>
      <div className="flex cursor-pointer flex-col items-center justify-center text-white">
        <div className="text-3xl">
          <BsFillBookmarkFill />
        </div>
        <div className="text-xs font-medium">{khesoMedia.bookmarks}</div>
      </div>
      <div className="flex cursor-pointer flex-col items-center justify-center text-white">
        <div className="text-3xl">
          <FaShare />
        </div>
        <div className="text-xs font-medium">{khesoMedia.shares}</div>
      </div>
      <div className="h-10 w-10 cursor-pointer">
        <img
          src={khesoMedia.profile.pictureUrl}
          className="h-full w-full rounded-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

const Home = ({ khesoMedia }: { khesoMedia: KhesoMediaType }) => {
  return (
    <div className="relative h-full w-full">
      <InnerShadow />
      <KhesoMedia videoUrl={khesoMedia.videoUrl} />
      <TopMenu />
      <RightMenu khesoMedia={khesoMedia} />
    </div>
  );
};

export default Home;
