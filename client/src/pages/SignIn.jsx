import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignInMutation } from "../redux/apiSlices/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signIn, { isLoading }] = useSignInMutation();
  const [formData, setFormData] = useState({});
  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await signIn(formData);
      dispatch(setUser(res.data.user));
      navigate("/");
    } catch (error) {
      console.log(error?.response?.data);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
        <input
          type="email"
          placeholder="email"
          id="email"
          name="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleOnChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleOnChange}
        />
        <button
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {isLoading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="mt-5">
        <p className="">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="text-blue-500 hover:text-blue-700">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;
