import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-8 text-center flex flex-col gap-8 flex-1 justify-center items-center text-white">
      <h1 className="text-5xl  flex flex-col justify-center items-center gap-8">
        Welcome to My Recipe Website <br />
        <span className="text-green-1 border-2 border-green-1 py-2 px-4 rounded-md hover:bg-green-1 hover:text-dark-1 transition-all duration-300 cursor-pointer">
          TRecipe
        </span>
      </h1>
      <p className="text-2xl">
        Where You can Add , Remove And bookmark your Recipes <br />
        Start Now !
      </p>
      <div className="flex flex-col gap-8 ">
        <Link
          to="/add"
          className="py-2 px-4 text-2xl border-2 rounded-lg hover:bg-green-800 transition-all duration-300 "
        >
          Add
        </Link>
        <Link
          to="/remove"
          className="py-2 px-4 text-2xl border-2 rounded-lg hover:bg-red-800 transition-all duration-300 "
        >
          Remove
        </Link>
        <Link
          to="recipes"
          className="py-2 px-4 text-2xl border-2 rounded-lg hover:bg-dark-2 transition-all duration-300 "
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Home;
