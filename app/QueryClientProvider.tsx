// React query is using context api and context api is used in client component
"use client";

import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryCleitn = new QueryClient();

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryClientProvider client={queryCleitn}>
      {children}
    </ReactQueryClientProvider>
  );
};

export default QueryClientProvider;
