import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

function UserCardDetail(props) {
  const { user } = props;
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {user.email}
      </p>
      <p>
        <IconMapPins /> {user.address}
      </p>
    </div>
  );
}

export default UserCardDetail;
