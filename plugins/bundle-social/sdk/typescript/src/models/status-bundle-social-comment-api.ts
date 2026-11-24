import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusBundleSocialCommentApi = {
  Pending: "PENDING",
  Fetching: "FETCHING",
  Retrying: "RETRYING",
  Completed: "COMPLETED",
  Skipped: "SKIPPED",
  Failed: "FAILED",
  RateLimited: "RATE_LIMITED",
} as const;
export type StatusBundleSocialCommentApi =
  | (typeof StatusBundleSocialCommentApi)[keyof typeof StatusBundleSocialCommentApi]
  | (string & {});

export const statusBundleSocialCommentApiSchema: EnumSchema<StatusBundleSocialCommentApi> =
  s.enumOf<StatusBundleSocialCommentApi>(StatusBundleSocialCommentApi);
