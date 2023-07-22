export type TopMenuTabType = "for-you" | "following" | "live" | "friends";

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

export default TopMenuTab;
