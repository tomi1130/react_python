import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserProfile } from "../type/userProfile";
import { User } from "../type/users";

const ApiFetch = () => {
  const [posts, setPosts] = useState<Array<UserProfile>>([]);
  useEffect(() => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `{user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`,
        }));
        setPosts(data);
      });
  }, []);
  return (
    <div>
      <ul>
        {posts.map((e) => (
          <li key={e.id}>{e.address}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiFetch;
