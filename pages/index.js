import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

import axios from "axios";
import { useState } from "react";
import UserCard from "../components/UserCard";

export default function Home() {
  const [input, setInput] = useState(1);
  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (input < 1) {
      alert("Invalid number of user");
      return;
    }
    const resp = await axios.get(`https://randomuser.me/api/?results=${input}`);

    const newUsers = [];
    for (const i of resp.data.results) {
      newUsers.push({
        name: `${i.name.first}  ${i.name.last}`,
        email: i.email,
        address: `${i.location.city} ${i.location.state} ${i.location.country} ${i.location.postcode}`,
        image: i.picture.large,
      });
    }
    setUsers(newUsers);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {users.map((user) => (
        <UserCard user={user} />
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Phanthat Muenprap 640610652
      </p>
    </div>
  );
}
