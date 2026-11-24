import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusPerigonNewsStoriesApi = {
  Pending: "PENDING",
  Completed: "COMPLETED",
  Error: "ERROR",
} as const;
export type StatusPerigonNewsStoriesApi =
  | (typeof StatusPerigonNewsStoriesApi)[keyof typeof StatusPerigonNewsStoriesApi]
  | (string & {});

export const statusPerigonNewsStoriesApiSchema: EnumSchema<StatusPerigonNewsStoriesApi> =
  s.enumOf<StatusPerigonNewsStoriesApi>(StatusPerigonNewsStoriesApi);
