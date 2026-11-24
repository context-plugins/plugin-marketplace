import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusBundleSocialPostImportApi = {
  Pending: "PENDING",
  FetchingPosts: "FETCHING_POSTS",
  FetchingAnalytics: "FETCHING_ANALYTICS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  RateLimited: "RATE_LIMITED",
} as const;
export type StatusBundleSocialPostImportApi =
  | (typeof StatusBundleSocialPostImportApi)[keyof typeof StatusBundleSocialPostImportApi]
  | (string & {});

export const statusBundleSocialPostImportApiSchema: EnumSchema<StatusBundleSocialPostImportApi> =
  s.enumOf<StatusBundleSocialPostImportApi>(StatusBundleSocialPostImportApi);
