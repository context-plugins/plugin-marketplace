import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The algorithm to use when performing HTTP retries */
export const RetryType = {
  None: "none",
  Backoff: "backoff",
  Static: "static",
} as const;
export type RetryType = (typeof RetryType)[keyof typeof RetryType] | (string & {});

export const retryTypeSchema: EnumSchema<RetryType> = s.enumOf<RetryType>(RetryType);
