import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sinkProgressSchema, type SinkProgress } from "./sink-progress.js";
import { sourceProgressSchema, type SourceProgress } from "./source-progress.js";
import { stateOperatorProgressSchema, type StateOperatorProgress } from "./state-operator-progress.js";

export type StreamingQueryProgress = {
  name?: string;
  observedMetrics?: Record<string, string>;
  durationMillis?: Record<string, string>;
  timestamp?: string;
  batchDuration?: string;
  sink?: SinkProgress;
  streamingQueryProgressId?: string;
  batchId?: string;
  stateOperators?: StateOperatorProgress[];
  eventTime?: Record<string, string>;
  runId?: string;
  sources?: SourceProgress[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamingQueryProgressSchema: Schema<StreamingQueryProgress> = s.object<StreamingQueryProgress>(
  {
    name: s.optional(s.string()),
    observedMetrics: s.optional(s.record(s.string(), s.string())),
    durationMillis: s.optional(s.record(s.string(), s.string())),
    timestamp: s.optional(s.string()),
    batchDuration: s.optional(s.string()),
    sink: s.optional(s.lazy(() => sinkProgressSchema)),
    streamingQueryProgressId: s.optional(s.string()),
    batchId: s.optional(s.string()),
    stateOperators: s.optional(s.array(s.lazy(() => stateOperatorProgressSchema))),
    eventTime: s.optional(s.record(s.string(), s.string())),
    runId: s.optional(s.string()),
    sources: s.optional(s.array(s.lazy(() => sourceProgressSchema))),
  },
  { additionalProperties: s.json() },
);
