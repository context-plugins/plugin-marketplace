import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Shuffle data written for the stage. */
export type StageShuffleWriteMetrics = {
  bytesWritten?: string;
  writeTimeNanos?: string;
  recordsWritten?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stageShuffleWriteMetricsSchema: Schema<StageShuffleWriteMetrics> =
  s.object<StageShuffleWriteMetrics>(
    {
      bytesWritten: s.optional(s.string()),
      writeTimeNanos: s.optional(s.string()),
      recordsWritten: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
