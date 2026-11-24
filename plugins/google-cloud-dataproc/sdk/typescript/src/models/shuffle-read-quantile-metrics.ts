import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { quantilesSchema, type Quantiles } from "./quantiles.js";
import {
  shufflePushReadQuantileMetricsSchema,
  type ShufflePushReadQuantileMetrics,
} from "./shuffle-push-read-quantile-metrics.js";

export type ShuffleReadQuantileMetrics = {
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  remoteReqsDuration?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  readBytes?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  remoteBytesRead?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  remoteBytesReadToDisk?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  remoteBlocksFetched?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  fetchWaitTimeMillis?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  readRecords?: Quantiles;
  shufflePushReadMetrics?: ShufflePushReadQuantileMetrics;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  localBlocksFetched?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  totalBlocksFetched?: Quantiles;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shuffleReadQuantileMetricsSchema: Schema<ShuffleReadQuantileMetrics> =
  s.object<ShuffleReadQuantileMetrics>(
    {
      remoteReqsDuration: s.optional(s.lazy(() => quantilesSchema)),
      readBytes: s.optional(s.lazy(() => quantilesSchema)),
      remoteBytesRead: s.optional(s.lazy(() => quantilesSchema)),
      remoteBytesReadToDisk: s.optional(s.lazy(() => quantilesSchema)),
      remoteBlocksFetched: s.optional(s.lazy(() => quantilesSchema)),
      fetchWaitTimeMillis: s.optional(s.lazy(() => quantilesSchema)),
      readRecords: s.optional(s.lazy(() => quantilesSchema)),
      shufflePushReadMetrics: s.optional(s.lazy(() => shufflePushReadQuantileMetricsSchema)),
      localBlocksFetched: s.optional(s.lazy(() => quantilesSchema)),
      totalBlocksFetched: s.optional(s.lazy(() => quantilesSchema)),
    },
    { additionalProperties: s.json() },
  );
