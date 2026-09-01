import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Body from "./pages/Body";
import Protein from "./pages/Protein";
import Goal from "./pages/Goal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/body",
    element: <Body />,
  },
  {
    path: "/protein",
    element: <Protein />,
  },
  {
    path: "/goal",
    element: <Goal />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
