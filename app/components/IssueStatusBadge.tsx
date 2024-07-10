import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

// When we are using prisma we don't need to define interface cause it's pre-defined in the model
// interface Props {
//   status: Status;
// }

//record is on of the utility type in typescript that allow us to define key and value pairs where key and the value have a particular type
const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" } //when we define the color property we can't set it to any string it need a certain values
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
