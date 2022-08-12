import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

import { useState } from "react";
import UserCardDetail from "../components/UserCardDetail";

function UserCard(props) {
  const { user } = props;
  const [detail, setDetail] = useState(false);
  return (
    <div className="border-bottom">
      {/* main section */}
      <div
        className="d-flex align-items-center p-3"
        onClick={() => (detail ? setDetail(false) : setDetail(true))}
      >
        <img src={user.image} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{user.name}</span>
        {detail ? <IconChevronUp /> : <IconChevronDown />}
      </div>

      {/* UserCardDetail is hidden */}
      {detail ? <UserCardDetail user={user} /> : ""}
    </div>
  );
}

export default UserCard;
