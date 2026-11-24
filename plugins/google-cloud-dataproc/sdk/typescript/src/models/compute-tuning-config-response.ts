import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for ComputeTuningConfig RPC. */
export type ComputeTuningConfigResponse = {
  /** Recommended Spark properties for the query (e.g., {"spark.sql.shuffle.partitions": "500"}). */
  recommendedProperties?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const computeTuningConfigResponseSchema: Schema<ComputeTuningConfigResponse> =
  s.object<ComputeTuningConfigResponse>(
    {
      recommendedProperties: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
