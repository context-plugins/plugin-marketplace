import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status4BundleSocialPostCsvApi = {
  Success: "SUCCESS",
  Failed: "FAILED",
} as const;
export type Status4BundleSocialPostCsvApi =
  | (typeof Status4BundleSocialPostCsvApi)[keyof typeof Status4BundleSocialPostCsvApi]
  | (string & {});

export const status4BundleSocialPostCsvApiSchema: EnumSchema<Status4BundleSocialPostCsvApi> =
  s.enumOf<Status4BundleSocialPostCsvApi>(Status4BundleSocialPostCsvApi);
