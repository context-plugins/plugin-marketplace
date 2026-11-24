import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ShufflePushReadMetrics = {
  remoteMergedChunksFetched?: string;
  remoteMergedBytesRead?: string;
  mergedFetchFallbackCount?: string;
  localMergedBytesRead?: string;
  corruptMergedBlockChunks?: string;
  localMergedBlocksFetched?: string;
  remoteMergedBlocksFetched?: string;
  localMergedChunksFetched?: string;
  remoteMergedReqsDuration?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shufflePushReadMetricsSchema: Schema<ShufflePushReadMetrics> = s.object<ShufflePushReadMetrics>(
  {
    remoteMergedChunksFetched: s.optional(s.string()),
    remoteMergedBytesRead: s.optional(s.string()),
    mergedFetchFallbackCount: s.optional(s.string()),
    localMergedBytesRead: s.optional(s.string()),
    corruptMergedBlockChunks: s.optional(s.string()),
    localMergedBlocksFetched: s.optional(s.string()),
    remoteMergedBlocksFetched: s.optional(s.string()),
    localMergedChunksFetched: s.optional(s.string()),
    remoteMergedReqsDuration: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
