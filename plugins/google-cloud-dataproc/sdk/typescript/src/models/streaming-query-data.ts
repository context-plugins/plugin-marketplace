import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Streaming */
export type StreamingQueryData = {
  endTimestamp?: string;
  streamingQueryId?: string;
  exception?: string;
  startTimestamp?: string;
  runId?: string;
  name?: string;
  isActive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamingQueryDataSchema: Schema<StreamingQueryData> = s.object<StreamingQueryData>(
  {
    endTimestamp: s.optional(s.string()),
    streamingQueryId: s.optional(s.string()),
    exception: s.optional(s.string()),
    startTimestamp: s.optional(s.string()),
    runId: s.optional(s.string()),
    name: s.optional(s.string()),
    isActive: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
