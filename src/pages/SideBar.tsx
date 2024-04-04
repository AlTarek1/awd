import { FaHome, FaSearch, FaBookmark } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
const icons = [
  { icon: FaHome, route: "/" },
  { icon: FaSearch, route: "/recipes" },
  { icon: FaBookmark, route: "/bookmark" },
  { icon: IoIosAddCircle, route: "/add" },
  { icon: FaCircleXmark, route: "/remove" },
];
const SideBar = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(0);
  return (
    <nav className="flex flex-col justify-between h-screen w-16  bg-black  border-r-[1px] border-dark-3 ">
      <div>
        <ul className="flex flex-col justify-center items-center gap-8 pt-6">
          {icons.map((item, index: number) => {
            const active = pathname == item.route;
            return (
              <li
                key={index}
                className={`${
                  active && "text-black bg-green-1"
                } duration-300 transition-all p-2 rounded-md text-white hover:text-black hover:bg-green-1 `}
              >
                <Link to={item.route} onClick={() => setActive(index)}>
                  <item.icon fontSize={25} color="inherit"></item.icon>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div></div>
    </nav>
  );
};

export default SideBar;
