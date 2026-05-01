import { createBrowserRouter } from "react-router-dom";
import Auth from "../Pages/Auth";
import Layout from "../Layout/inedx";
import Home from "../Pages/Home";
import Brand from "../Pages/Brand";
import CreateBrand from "../Pages/Brand/Create";
import GetAllBrand from "../Pages/Brand/GetAll";
import UpdateBrand from "../Pages/Brand/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "brand",
        element: <Brand />,
        children: [
          {
            index: true,
            element: <GetAllBrand />,
          },
          {
            path: "create",
            element: <CreateBrand />,
          },
          {
            path: "update/:id",
            element: <UpdateBrand />,
          },
        ],
      },
    ],
  },
  
]);

export default router;
