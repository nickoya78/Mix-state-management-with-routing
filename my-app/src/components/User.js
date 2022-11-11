import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  const id = params.id;
  const users = useSelector((state) => state.users.value);

  const user = users.find((u) => u.id === id);

  return (
    <>
      {user && (
        <div className="home">
          <h1> Contact information</h1>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};
export default User;
