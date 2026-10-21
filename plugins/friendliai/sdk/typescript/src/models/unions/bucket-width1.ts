import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { usageBucketWidthSchema, type UsageBucketWidth } from "../usage-bucket-width.js";

/**
 * Width of each time bucket. Must be selected based on the query duration (end_time - start_time)
 * and must not exceed the query duration.
 */
export type BucketWidth1 = UsageBucketWidth;

export const bucketWidth1Schema: Schema<BucketWidth1> = s.of<BucketWidth1>(
  s.union([s.lazy(() => usageBucketWidthSchema)]),
);
