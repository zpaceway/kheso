import Home from "./components/Home";
import NavBar from "./components/NavBar";

type AppWrapperProps = {
  children: React.ReactNode;
};

const AppWrapper = ({ children }: AppWrapperProps) => {
  return (
    <div className="fixed inset-0 flex h-full w-full select-none justify-center bg-gray-300">
      <div className="flex h-full w-full max-w-md flex-col justify-center shadow-xl shadow-black">
        {children}
        <NavBar />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
};

export default App;
