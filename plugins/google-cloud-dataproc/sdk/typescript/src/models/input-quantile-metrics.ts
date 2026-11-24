import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { quantilesSchema, type Quantiles } from "./quantiles.js";

export type InputQuantileMetrics = {
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  bytesRead?: Quantiles;
  /**
   * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc
   * depending on the message type.
   */
  recordsRead?: Quantiles;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inputQuantileMetricsSchema: Schema<InputQuantileMetrics> = s.object<InputQuantileMetrics>(
  {
    bytesRead: s.optional(s.lazy(() => quantilesSchema)),
    recordsRead: s.optional(s.lazy(() => quantilesSchema)),
  },
  { additionalProperties: s.json() },
);
