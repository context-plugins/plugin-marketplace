import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countBucketSchema, type CountBucket } from "./count-bucket.js";

export type CountBucketsResult = {
  buckets: CountBucket[];
  totalCount: number;
  bucketIntervalMs: number;
};

export const countBucketsResultSchema: Schema<CountBucketsResult> = s.object<CountBucketsResult>({
  buckets: s.array(s.lazy(() => countBucketSchema)),
  totalCount: s.int(),
  bucketIntervalMs: s.int(),
});
