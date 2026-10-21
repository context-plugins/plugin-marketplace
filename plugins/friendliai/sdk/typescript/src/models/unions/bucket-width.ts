import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { costBucketWidthSchema, type CostBucketWidth } from "../cost-bucket-width.js";

/** Width of each time bucket in response. Currently only `1d` is supported, default to `1d`. */
export type BucketWidth = CostBucketWidth;

export const bucketWidthSchema: Schema<BucketWidth> = s.of<BucketWidth>(
  s.union([s.lazy(() => costBucketWidthSchema)]),
);
