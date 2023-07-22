import { AiFillHome, AiFillPlusCircle, AiOutlineUser } from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BiMessageMinus } from "react-icons/bi";

const navBarOptions = [
  {
    icon: <AiFillHome />,
  },
  {
    icon: <LiaUserFriendsSolid />,
  },
  {
    icon: <AiFillPlusCircle className="text-yellow-500" />,
  },
  {
    icon: <BiMessageMinus />,
  },
  {
    icon: <AiOutlineUser />,
  },
];

type NavBarItemProps = {
  icon: React.ReactNode;
};

const NavBarItem = ({ icon }: NavBarItemProps) => {
  return (
    <div className="flex h-10 flex-col items-center justify-between">
      <div className="text-4xl text-white">{icon}</div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between border-t border-t-zinc-800 bg-zinc-900 px-8">
      {navBarOptions.map((menuOption) => {
        return <NavBarItem icon={menuOption.icon} />;
      })}
    </div>
  );
};

export default NavBar;
