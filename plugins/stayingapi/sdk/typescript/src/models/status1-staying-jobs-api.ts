import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1StayingJobsApi = {
  Pending: "pending",
  Running: "running",
} as const;
export type Status1StayingJobsApi =
  | (typeof Status1StayingJobsApi)[keyof typeof Status1StayingJobsApi]
  | (string & {});

export const status1StayingJobsApiSchema: EnumSchema<Status1StayingJobsApi> =
  s.enumOf<Status1StayingJobsApi>(Status1StayingJobsApi);
