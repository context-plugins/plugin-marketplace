import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Time bucket size for aggregated results. Smaller buckets yield more events per collection run.
 */
export const BucketWidth = {
  _1D: "1d",
  _1H: "1h",
  _1M: "1m",
} as const;
export type BucketWidth = (typeof BucketWidth)[keyof typeof BucketWidth] | (string & {});

export const bucketWidthSchema: EnumSchema<BucketWidth> = s.enumOf<BucketWidth>(BucketWidth);
