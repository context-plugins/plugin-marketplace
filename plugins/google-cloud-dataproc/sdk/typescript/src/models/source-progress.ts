import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SourceProgress = {
  description?: string;
  metrics?: Record<string, string>;
  numInputRows?: string;
  processedRowsPerSecond?: number;
  startOffset?: string;
  endOffset?: string;
  inputRowsPerSecond?: number;
  latestOffset?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceProgressSchema: Schema<SourceProgress> = s.object<SourceProgress>(
  {
    description: s.optional(s.string()),
    metrics: s.optional(s.record(s.string(), s.string())),
    numInputRows: s.optional(s.string()),
    processedRowsPerSecond: s.optional(s.float64()),
    startOffset: s.optional(s.string()),
    endOffset: s.optional(s.string()),
    inputRowsPerSecond: s.optional(s.float64()),
    latestOffset: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
