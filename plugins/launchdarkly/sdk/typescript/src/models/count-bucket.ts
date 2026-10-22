import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CountBucket = {
  timestamp: number;
  count: number;
};

export const countBucketSchema: Schema<CountBucket> = s.object<CountBucket>({
  timestamp: s.int(),
  count: s.int(),
});
