import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metrics about the output written by the stage. */
export type StageOutputMetrics = {
  bytesWritten?: string;
  recordsWritten?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stageOutputMetricsSchema: Schema<StageOutputMetrics> = s.object<StageOutputMetrics>(
  {
    bytesWritten: s.optional(s.string()),
    recordsWritten: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
