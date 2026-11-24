import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  stageShufflePushReadMetricsSchema,
  type StageShufflePushReadMetrics,
} from "./stage-shuffle-push-read-metrics.js";

/** Shuffle data read for the stage. */
export type StageShuffleReadMetrics = {
  recordsRead?: string;
  remoteReqsDuration?: string;
  remoteBlocksFetched?: string;
  fetchWaitTimeMillis?: string;
  localBytesRead?: string;
  bytesRead?: string;
  remoteBytesReadToDisk?: string;
  localBlocksFetched?: string;
  remoteBytesRead?: string;
  stageShufflePushReadMetrics?: StageShufflePushReadMetrics;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stageShuffleReadMetricsSchema: Schema<StageShuffleReadMetrics> =
  s.object<StageShuffleReadMetrics>(
    {
      recordsRead: s.optional(s.string()),
      remoteReqsDuration: s.optional(s.string()),
      remoteBlocksFetched: s.optional(s.string()),
      fetchWaitTimeMillis: s.optional(s.string()),
      localBytesRead: s.optional(s.string()),
      bytesRead: s.optional(s.string()),
      remoteBytesReadToDisk: s.optional(s.string()),
      localBlocksFetched: s.optional(s.string()),
      remoteBytesRead: s.optional(s.string()),
      stageShufflePushReadMetrics: s.optional(s.lazy(() => stageShufflePushReadMetricsSchema)),
    },
    { additionalProperties: s.json() },
  );
