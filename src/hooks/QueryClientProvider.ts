import { useContext, createContext } from "react";
import type { QueryClient } from "../QueryClient";

const defaultContext = createContext<QueryClient | undefined>(undefined);

export const useQueryClient = () => {
  const queryClient = useContext(defaultContext);

  if (!queryClient) {
    throw new Error(
      "No query client were provided. Component should be wrapped with QueryClientProvider."
    );
  }

  return queryClient;
};

export const QueryClientProvider = defaultContext.Provider;
