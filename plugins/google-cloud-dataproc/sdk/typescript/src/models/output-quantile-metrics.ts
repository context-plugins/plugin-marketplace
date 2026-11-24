import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { quantilesSchema, type Quantiles } from "./quantiles.js";

export type OutputQuantileMetrics = {
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  recordsWritten?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  bytesWritten?: Quantiles;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const outputQuantileMetricsSchema: Schema<OutputQuantileMetrics> = s.object<OutputQuantileMetrics>(
  {
    recordsWritten: s.optional(s.lazy(() => quantilesSchema)),
    bytesWritten: s.optional(s.lazy(() => quantilesSchema)),
  },
  { additionalProperties: s.json() },
);
