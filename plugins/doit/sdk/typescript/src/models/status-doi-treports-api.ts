import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current lifecycle status of the operation. */
export const StatusDoiTReportsApi = {
  Pending: "pending",
  Running: "running",
  Succeeded: "succeeded",
  Failed: "failed",
  Canceled: "canceled",
} as const;
export type StatusDoiTReportsApi =
  | (typeof StatusDoiTReportsApi)[keyof typeof StatusDoiTReportsApi]
  | (string & {});

export const statusDoiTReportsApiSchema: EnumSchema<StatusDoiTReportsApi> =
  s.enumOf<StatusDoiTReportsApi>(StatusDoiTReportsApi);
