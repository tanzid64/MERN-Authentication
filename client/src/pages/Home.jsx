import { useSelector } from "react-redux";

const Home = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div>
      {isAuthenticated && (
        <div>
          <h1>Welcome {user.username}</h1>
        </div>
      )}
    </div>
  );
};
export default Home;
