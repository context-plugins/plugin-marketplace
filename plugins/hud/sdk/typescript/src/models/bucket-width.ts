import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BucketWidth = {
  _1H: "1h",
  _1D: "1d",
} as const;
export type BucketWidth = (typeof BucketWidth)[keyof typeof BucketWidth] | (string & {});

export const bucketWidthSchema: EnumSchema<BucketWidth> = s.enumOf<BucketWidth>(BucketWidth);
