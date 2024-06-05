import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview.jsx";
import Header from "./Header.jsx";
import Loader from "./Loader.jsx";

export default function AppLayout() {
  const { state: isLoading } = useNavigation();

  return (
    <div className="layout grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading === "loading" && <Loader />}

      <Header />
      <div>
        <main className="mx-auto max-w-6xl  ">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
