import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SinkProgress = {
  numOutputRows?: string;
  description?: string;
  metrics?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sinkProgressSchema: Schema<SinkProgress> = s.object<SinkProgress>(
  {
    numOutputRows: s.optional(s.string()),
    description: s.optional(s.string()),
    metrics: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
