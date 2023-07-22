import { AiFillHome, AiFillPlusCircle, AiOutlineUser } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { BiMessageMinus } from "react-icons/bi";

const navBarOptions = [
  {
    path: "/home",
    icon: <AiFillHome />,
  },
  {
    path: "/discover",
    icon: <TfiWorld />,
  },
  {
    path: "/new",
    icon: <AiFillPlusCircle className="text-blue-400" />,
  },
  {
    path: "/inbox",
    icon: <BiMessageMinus />,
  },
  {
    path: "/profile",
    icon: <AiOutlineUser />,
  },
];

type NavBarItemProps = {
  icon: React.ReactNode;
};

const NavBarItem = ({ icon }: NavBarItemProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-3xl text-white">{icon}</div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between bg-zinc-900 px-8">
      {navBarOptions.map((menuOption) => {
        return <NavBarItem key={menuOption.path} icon={menuOption.icon} />;
      })}
    </div>
  );
};

export default NavBar;
