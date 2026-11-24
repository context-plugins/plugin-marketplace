import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bucketWidthSchema, type BucketWidth } from "./bucket-width.js";
import { groupBySchema, type GroupBy } from "./group-by.js";
import { inferenceUsageBucketSchema, type InferenceUsageBucket } from "./inference-usage-bucket.js";

export type InferenceUsageAggregateResponse = {
  start: Date;
  end: Date;
  bucketWidth: BucketWidth;
  groupBy?: GroupBy[];
  totalRequests: number;
  totalCost: number;
  buckets: InferenceUsageBucket[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inferenceUsageAggregateResponseSchema: Schema<InferenceUsageAggregateResponse> =
  s.object<InferenceUsageAggregateResponse>(
    {
      start: s.dateTime(),
      end: s.dateTime(),
      bucketWidth: bucketWidthSchema,
      groupBy: s.optional(s.array(s.lazy(() => groupBySchema))),
      totalRequests: s.int(),
      totalCost: s.float64(),
      buckets: s.array(s.lazy(() => inferenceUsageBucketSchema)),
      _keysMap: {
        bucketWidth: "bucket_width",
        groupBy: "group_by",
        totalRequests: "total_requests",
        totalCost: "total_cost",
      },
    },
    { additionalProperties: s.json() },
  );
