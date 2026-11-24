import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metrics about the data written by the task. */
export type OutputMetrics = {
  bytesWritten?: string;
  recordsWritten?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const outputMetricsSchema: Schema<OutputMetrics> = s.object<OutputMetrics>(
  {
    bytesWritten: s.optional(s.string()),
    recordsWritten: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
