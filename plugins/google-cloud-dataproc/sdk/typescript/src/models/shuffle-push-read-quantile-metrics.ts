import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { quantilesSchema, type Quantiles } from "./quantiles.js";

export type ShufflePushReadQuantileMetrics = {
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  corruptMergedBlockChunks?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  localMergedBlocksFetched?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  localMergedBytesRead?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  localMergedChunksFetched?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  remoteMergedReqsDuration?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  remoteMergedChunksFetched?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  remoteMergedBytesRead?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  mergedFetchFallbackCount?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  remoteMergedBlocksFetched?: Quantiles;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shufflePushReadQuantileMetricsSchema: Schema<ShufflePushReadQuantileMetrics> =
  s.object<ShufflePushReadQuantileMetrics>(
    {
      corruptMergedBlockChunks: s.optional(s.lazy(() => quantilesSchema)),
      localMergedBlocksFetched: s.optional(s.lazy(() => quantilesSchema)),
      localMergedBytesRead: s.optional(s.lazy(() => quantilesSchema)),
      localMergedChunksFetched: s.optional(s.lazy(() => quantilesSchema)),
      remoteMergedReqsDuration: s.optional(s.lazy(() => quantilesSchema)),
      remoteMergedChunksFetched: s.optional(s.lazy(() => quantilesSchema)),
      remoteMergedBytesRead: s.optional(s.lazy(() => quantilesSchema)),
      mergedFetchFallbackCount: s.optional(s.lazy(() => quantilesSchema)),
      remoteMergedBlocksFetched: s.optional(s.lazy(() => quantilesSchema)),
    },
    { additionalProperties: s.json() },
  );
