import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the type of retry to perform. */
export const RetryType = {
  RetryAllBuilds: "RETRY_ALL_BUILDS",
  RetryFailedBuilds: "RETRY_FAILED_BUILDS",
} as const;
export type RetryType = (typeof RetryType)[keyof typeof RetryType] | (string & {});

export const retryTypeSchema: EnumSchema<RetryType> = s.enumOf<RetryType>(RetryType);
