import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home.jsx";
import Cart from "./features/cart/Cart.jsx";
import Menu, { loader as fetchMenu } from "./features/menu/Menu.jsx";
import CreateOrder, {
  action as createOrder,
} from "./features/order/CreateOrder.jsx";
import { action as updateOrderAction } from "./features/order/UpdateOrder.jsx";
import Order, { loader as orderLoader } from "./features/order/Order.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: fetchMenu,
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrder,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        action: updateOrderAction,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
