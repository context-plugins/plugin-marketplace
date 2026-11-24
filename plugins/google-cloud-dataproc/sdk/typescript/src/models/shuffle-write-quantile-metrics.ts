import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { quantilesSchema, type Quantiles } from "./quantiles.js";

export type ShuffleWriteQuantileMetrics = {
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  writeTimeNanos?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  writeRecords?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  writeBytes?: Quantiles;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shuffleWriteQuantileMetricsSchema: Schema<ShuffleWriteQuantileMetrics> =
  s.object<ShuffleWriteQuantileMetrics>(
    {
      writeTimeNanos: s.optional(s.lazy(() => quantilesSchema)),
      writeRecords: s.optional(s.lazy(() => quantilesSchema)),
      writeBytes: s.optional(s.lazy(() => quantilesSchema)),
    },
    { additionalProperties: s.json() },
  );
