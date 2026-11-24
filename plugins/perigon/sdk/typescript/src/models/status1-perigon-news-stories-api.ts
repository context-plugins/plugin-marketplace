import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1PerigonNewsStoriesApi = {
  Pending: "PENDING",
  Processing: "PROCESSING",
  Completed: "COMPLETED",
} as const;
export type Status1PerigonNewsStoriesApi =
  | (typeof Status1PerigonNewsStoriesApi)[keyof typeof Status1PerigonNewsStoriesApi]
  | (string & {});

export const status1PerigonNewsStoriesApiSchema: EnumSchema<Status1PerigonNewsStoriesApi> =
  s.enumOf<Status1PerigonNewsStoriesApi>(Status1PerigonNewsStoriesApi);
