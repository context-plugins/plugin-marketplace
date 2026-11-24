import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metadata contains information like metrics, dimenstions etc of the AsyncQuery. */
export type GoogleCloudApigeeV1QueryMetadata3 = {
  /** Dimensions of the AsyncQuery. */
  dimensions?: string[];
  /** End timestamp of the query range. */
  endTimestamp?: string;
  /** Query GroupBy time unit. */
  timeUnit?: string;
  /** Start timestamp of the query range. */
  startTimestamp?: string;
  /** Output format. */
  outputFormat?: string;
  /** Metrics of the AsyncQuery. Example: ["name:message_count,func:sum,alias:sum_message_count"] */
  metrics?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1QueryMetadata3Schema: Schema<GoogleCloudApigeeV1QueryMetadata3> =
  s.object<GoogleCloudApigeeV1QueryMetadata3>(
    {
      dimensions: s.optional(s.array(s.string())),
      endTimestamp: s.optional(s.string()),
      timeUnit: s.optional(s.string()),
      startTimestamp: s.optional(s.string()),
      outputFormat: s.optional(s.string()),
      metrics: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
