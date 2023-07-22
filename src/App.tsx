import {
  AiFillHeart,
  AiFillHome,
  AiFillMessage,
  AiOutlineUser,
} from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BiMessageMinus } from "react-icons/bi";
import { IoAddCircleOutline } from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";

import { useState } from "react";

// const videos = [
//   {
//     vide: "/example1.mp4",
//   },
// ];

const menuOptions = [
  {
    label: "Home",
    icon: <AiFillHome />,
  },
  {
    label: "Friends",
    icon: <LiaUserFriendsSolid />,
  },
  {
    icon: <IoAddCircleOutline className="text-4xl text-rose-500" />,
  },
  {
    label: "Inbox",
    icon: <BiMessageMinus />,
  },
  {
    label: "Profile",
    icon: <AiOutlineUser />,
  },
];

type MenuItemProps = {
  label?: string;
  icon: React.ReactNode;
};

const MenuItem = ({ label, icon }: MenuItemProps) => {
  return (
    <div className="flex h-10 flex-col items-center justify-between">
      <div className="text-2xl text-white">{icon}</div>
      {label && <div className="text-xs text-white">{label}</div>}
    </div>
  );
};

type TabType = "for-you" | "following" | "live";

const App = () => {
  const [tabSelected, setTabSelected] = useState<TabType>("for-you");
  return (
    <div className="fixed inset-0 flex h-full w-full select-none justify-center bg-gray-300">
      <div className="flex h-full w-full max-w-md flex-col justify-center shadow-md shadow-black">
        <div className="relative h-full w-full">
          <div className="pointer-events-none absolute inset-0 z-50 shadow-[inset_0_0_80px_rgba(0,0,0,1)]"></div>
          <div className="absolute inset-0">
            <video
              src="/example1.mp4"
              controls
              className="h-full w-full object-cover"
            ></video>
          </div>
          <div className="absolute left-0 right-0 z-50 flex justify-between px-8 py-4 text-white">
            <div className="cursor-pointer text-2xl">
              <PiTelevisionSimpleBold />
            </div>
            <div className="flex gap-2 font-black">
              <div
                onClick={() => setTabSelected("following")}
                className={`cursor-pointer ${
                  tabSelected !== "following"
                    ? "text-gray-300"
                    : "border-b-[3px] text-white"
                }`}
              >
                Following
              </div>
              <div
                onClick={() => setTabSelected("for-you")}
                className={`cursor-pointer ${
                  tabSelected !== "for-you"
                    ? "text-gray-300"
                    : "border-b-[3px] text-white"
                }`}
              >
                For You
              </div>
            </div>
            <div className="cursor-pointer text-2xl">
              <FiSearch />
            </div>
          </div>
          <div className="absolute bottom-10 right-0 z-50 flex flex-col justify-center gap-4 px-2">
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
        </div>
        <div className="flex h-20 w-full items-center justify-between bg-black px-8">
          {menuOptions.map((menuOption) => {
            return <MenuItem label={menuOption.label} icon={menuOption.icon} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
