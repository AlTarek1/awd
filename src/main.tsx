import { createRoot } from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import {
  AddRecipe,
  BookMarks,
  Home,
  Login,
  Logout,
  Recipes,
  RemoveRecipe,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bookmark", element: <BookMarks /> },
      { path: "/logout", element: <Logout /> },
      { path: "/login", element: <Login /> },
      { path: "/recipes", element: <Recipes /> },
      { path: "/add", element: <AddRecipe /> },
      { path: "/remove", element: <RemoveRecipe /> },
    ],
  },
]);
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<RouterProvider router={router}></RouterProvider>);
