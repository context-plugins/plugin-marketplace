import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StageShufflePushReadMetrics = {
  remoteMergedBlocksFetched?: string;
  mergedFetchFallbackCount?: string;
  remoteMergedChunksFetched?: string;
  remoteMergedReqsDuration?: string;
  remoteMergedBytesRead?: string;
  localMergedBytesRead?: string;
  localMergedChunksFetched?: string;
  corruptMergedBlockChunks?: string;
  localMergedBlocksFetched?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stageShufflePushReadMetricsSchema: Schema<StageShufflePushReadMetrics> =
  s.object<StageShufflePushReadMetrics>(
    {
      remoteMergedBlocksFetched: s.optional(s.string()),
      mergedFetchFallbackCount: s.optional(s.string()),
      remoteMergedChunksFetched: s.optional(s.string()),
      remoteMergedReqsDuration: s.optional(s.string()),
      remoteMergedBytesRead: s.optional(s.string()),
      localMergedBytesRead: s.optional(s.string()),
      localMergedChunksFetched: s.optional(s.string()),
      corruptMergedBlockChunks: s.optional(s.string()),
      localMergedBlocksFetched: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
