import { createBrowserRouter } from "react-router-dom";

import SignIn from "../pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
]);

export default router;
