import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-5">
        <p className="">
          Have an account?{" "}
          <Link to="/signin">
            <span className="text-blue-500 hover:text-blue-700">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
