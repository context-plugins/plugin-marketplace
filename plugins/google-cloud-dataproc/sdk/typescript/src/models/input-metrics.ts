import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metrics about the input data read by the task. */
export type InputMetrics = {
  recordsRead?: string;
  bytesRead?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inputMetricsSchema: Schema<InputMetrics> = s.object<InputMetrics>(
  {
    recordsRead: s.optional(s.string()),
    bytesRead: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
