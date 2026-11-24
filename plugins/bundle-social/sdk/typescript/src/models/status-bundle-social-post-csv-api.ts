import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusBundleSocialPostCsvApi = {
  Pending: "PENDING",
  Processing: "PROCESSING",
  Completed: "COMPLETED",
  CompletedWithErrors: "COMPLETED_WITH_ERRORS",
  Failed: "FAILED",
  RateLimited: "RATE_LIMITED",
} as const;
export type StatusBundleSocialPostCsvApi =
  | (typeof StatusBundleSocialPostCsvApi)[keyof typeof StatusBundleSocialPostCsvApi]
  | (string & {});

export const statusBundleSocialPostCsvApiSchema: EnumSchema<StatusBundleSocialPostCsvApi> =
  s.enumOf<StatusBundleSocialPostCsvApi>(StatusBundleSocialPostCsvApi);
