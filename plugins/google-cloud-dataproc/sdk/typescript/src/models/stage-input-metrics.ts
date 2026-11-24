import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metrics about the input read by the stage. */
export type StageInputMetrics = {
  bytesRead?: string;
  recordsRead?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stageInputMetricsSchema: Schema<StageInputMetrics> = s.object<StageInputMetrics>(
  {
    bytesRead: s.optional(s.string()),
    recordsRead: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
