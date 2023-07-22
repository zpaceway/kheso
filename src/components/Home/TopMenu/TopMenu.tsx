import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import TopMenuTab, { TopMenuTabType } from "./TopMenuTab";

type TopMenuTabAction = {
  tab: TopMenuTabType;
  label: string;
};

const topMenuTabActions: TopMenuTabAction[] = [
  {
    tab: "following",
    label: "Following",
  },
  {
    tab: "for-you",
    label: "For You",
  },
  {
    tab: "friends",
    label: "Friends",
  },
  {
    tab: "live",
    label: "Live",
  },
];

const TopMenu = () => {
  const [selectedTab, setSelectedTab] = useState<TopMenuTabType>("for-you");

  return (
    <div className="absolute left-0 right-0 z-50 flex h-16 items-center justify-between bg-black bg-opacity-40 px-8 text-white backdrop-blur-sm">
      <div className="flex items-center gap-3 font-black">
        {topMenuTabActions.map((topMenuTabAction) => (
          <TopMenuTab
            key={topMenuTabAction.tab}
            currentTab={topMenuTabAction.tab}
            selectedTab={selectedTab}
            onClick={() => setSelectedTab(topMenuTabAction.tab)}
          >
            {topMenuTabAction.label}
          </TopMenuTab>
        ))}
      </div>
      <div className="cursor-pointer text-2xl">
        <FiSearch />
      </div>
    </div>
  );
};

export default TopMenu;
