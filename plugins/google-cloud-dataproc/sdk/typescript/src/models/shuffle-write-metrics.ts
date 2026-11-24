import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Shuffle data written by task. */
export type ShuffleWriteMetrics = {
  writeTimeNanos?: string;
  bytesWritten?: string;
  recordsWritten?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shuffleWriteMetricsSchema: Schema<ShuffleWriteMetrics> = s.object<ShuffleWriteMetrics>(
  {
    writeTimeNanos: s.optional(s.string()),
    bytesWritten: s.optional(s.string()),
    recordsWritten: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
