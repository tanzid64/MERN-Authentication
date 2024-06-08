import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignIn, SignUp, About, Profile, Home } from "./pages";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h1>404</h1>,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/about",
      element: <About />,
    }
  ]);
  return <RouterProvider router={router} />;
};
export default App;
