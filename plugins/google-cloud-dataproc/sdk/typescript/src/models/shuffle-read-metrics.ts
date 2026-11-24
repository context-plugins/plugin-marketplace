import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { shufflePushReadMetricsSchema, type ShufflePushReadMetrics } from "./shuffle-push-read-metrics.js";

/** Shuffle data read by the task. */
export type ShuffleReadMetrics = {
  shufflePushReadMetrics?: ShufflePushReadMetrics;
  localBytesRead?: string;
  localBlocksFetched?: string;
  remoteReqsDuration?: string;
  recordsRead?: string;
  remoteBytesRead?: string;
  remoteBlocksFetched?: string;
  fetchWaitTimeMillis?: string;
  remoteBytesReadToDisk?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shuffleReadMetricsSchema: Schema<ShuffleReadMetrics> = s.object<ShuffleReadMetrics>(
  {
    shufflePushReadMetrics: s.optional(s.lazy(() => shufflePushReadMetricsSchema)),
    localBytesRead: s.optional(s.string()),
    localBlocksFetched: s.optional(s.string()),
    remoteReqsDuration: s.optional(s.string()),
    recordsRead: s.optional(s.string()),
    remoteBytesRead: s.optional(s.string()),
    remoteBlocksFetched: s.optional(s.string()),
    fetchWaitTimeMillis: s.optional(s.string()),
    remoteBytesReadToDisk: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
