import { AiFillHome, AiFillPlusCircle, AiOutlineUser } from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BiMessageMinus } from "react-icons/bi";

const navBarOptions = [
  {
    label: "Home",
    icon: <AiFillHome />,
  },
  {
    label: "Friends",
    icon: <LiaUserFriendsSolid />,
  },
  {
    icon: <AiFillPlusCircle className="text-4xl text-rose-500" />,
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

type NavBarItemProps = {
  label?: string;
  icon: React.ReactNode;
};

const NavBarItem = ({ label, icon }: NavBarItemProps) => {
  return (
    <div className="flex h-10 flex-col items-center justify-between">
      <div className="text-3xl text-white">{icon}</div>
      {label && <div className="text-xs text-white">{label}</div>}
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between border-t border-t-zinc-900 bg-black px-8">
      {navBarOptions.map((menuOption) => {
        return <NavBarItem label={menuOption.label} icon={menuOption.icon} />;
      })}
    </div>
  );
};

export default NavBar;
