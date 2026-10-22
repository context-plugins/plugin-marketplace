import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cost bucket width. */
export const CostBucketWidth = {
  _1D: "1d",
} as const;
export type CostBucketWidth = (typeof CostBucketWidth)[keyof typeof CostBucketWidth] | (string & {});

export const costBucketWidthSchema: EnumSchema<CostBucketWidth> = s.enumOf<CostBucketWidth>(CostBucketWidth);
