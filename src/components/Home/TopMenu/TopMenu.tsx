import { FiSearch } from "react-icons/fi";

import { useState } from "react";

type TopMenuTabType = "for-you" | "following" | "live" | "friends";

type TopMenuTabProps = {
  onClick: () => void;
  selectedTab: TopMenuTabType;
  currentTab: TopMenuTabType;
  children: React.ReactNode;
};

const TopMenuTab = ({
  onClick,
  selectedTab,
  currentTab,
  children,
}: TopMenuTabProps) => {
  return (
    <div
      onClick={onClick}
      className={`h-7 cursor-pointer ${
        selectedTab === currentTab
          ? "border-b-[3px] text-white"
          : "text-gray-300"
      }`}
    >
      {children}
    </div>
  );
};

const TopMenu = () => {
  const [selectedTab, setSelectedTab] = useState<TopMenuTabType>("for-you");

  return (
    <div className="absolute left-0 right-0 z-50 flex h-16 items-center justify-between bg-black bg-opacity-40 px-8 text-white backdrop-blur-sm">
      <div className="flex items-center gap-3 font-black">
        <TopMenuTab
          currentTab="following"
          selectedTab={selectedTab}
          onClick={() => setSelectedTab("following")}
        >
          Following
        </TopMenuTab>

        <TopMenuTab
          currentTab="for-you"
          selectedTab={selectedTab}
          onClick={() => setSelectedTab("for-you")}
        >
          For You
        </TopMenuTab>

        <TopMenuTab
          currentTab="friends"
          selectedTab={selectedTab}
          onClick={() => setSelectedTab("friends")}
        >
          Friends
        </TopMenuTab>

        <TopMenuTab
          currentTab="live"
          selectedTab={selectedTab}
          onClick={() => setSelectedTab("live")}
        >
          Live
        </TopMenuTab>
      </div>
      <div className="cursor-pointer text-2xl">
        <FiSearch />
      </div>
    </div>
  );
};

export default TopMenu;
