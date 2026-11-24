import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the job step */
export const StatusConnectJobsApi = {
  Pending: "pending",
  InProgress: "in-progress",
  Success: "success",
  Failed: "failed",
} as const;
export type StatusConnectJobsApi =
  | (typeof StatusConnectJobsApi)[keyof typeof StatusConnectJobsApi]
  | (string & {});

export const statusConnectJobsApiSchema: EnumSchema<StatusConnectJobsApi> =
  s.enumOf<StatusConnectJobsApi>(StatusConnectJobsApi);
