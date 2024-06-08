import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <NavLink to="/">
          <h1 className="font-bold">Auth App</h1>
        </NavLink>
        <ul className="flex gap-5">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="signin">
            <li>Sign In</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
