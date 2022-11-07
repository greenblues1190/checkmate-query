import { QueryStatus } from "./types";

export const QUERY_STATUS: Record<string, QueryStatus> = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};

export const MUTATION_STATUS: Record<string, QueryStatus> = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};
