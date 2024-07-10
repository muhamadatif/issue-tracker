import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren, ReactNode } from "react";

// we use the PropsWithChildren instead of the interface
// interface Props {
//   children: ReactNode;
// }

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
};

export default ErrorMessage;
