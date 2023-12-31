import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/types";
import List from "./List";
import UserItem from "./UserItem";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          user={user}
          key={user.id}
          onClick={() => navigate("/users/" + user.id)}
        />
      )}
    />
  );
};

export default UserPage;
