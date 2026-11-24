import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single bucket in the trend series. */
export type CloudDiagramCostTrendBucket = {
  /** Inclusive start of this bucket. ISO date for `day` and `month`; week label for `week`. */
  bucketStart: string;
  /** Total cost for this bucket. */
  amount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramCostTrendBucketSchema: Schema<CloudDiagramCostTrendBucket> =
  s.object<CloudDiagramCostTrendBucket>(
    {
      bucketStart: s.string(),
      amount: s.float64(),
    },
    { additionalProperties: s.json() },
  );
