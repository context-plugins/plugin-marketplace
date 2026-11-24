import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current lifecycle status of the operation. */
export const Status1DoiTReportsApi = {
  Pending: "pending",
  Running: "running",
  Succeeded: "succeeded",
  Failed: "failed",
  Canceled: "canceled",
  DryRun: "dry_run",
} as const;
export type Status1DoiTReportsApi =
  | (typeof Status1DoiTReportsApi)[keyof typeof Status1DoiTReportsApi]
  | (string & {});

export const status1DoiTReportsApiSchema: EnumSchema<Status1DoiTReportsApi> =
  s.enumOf<Status1DoiTReportsApi>(Status1DoiTReportsApi);
