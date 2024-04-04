import "./globals.css";
import {
  AddRecipe,
  BookMarks,
  Home,
  Login,
  Logout,
  RemoveRecipe,
  SideBar,
} from "./pages";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="h-screen bg-dark-1 flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default App;
