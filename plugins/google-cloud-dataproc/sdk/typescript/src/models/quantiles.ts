import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending
 * on the message type.
 */
export type Quantiles = {
  sum?: string;
  maximum?: string;
  percentile25?: string;
  minimum?: string;
  percentile50?: string;
  count?: string;
  percentile75?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const quantilesSchema: Schema<Quantiles> = s.object<Quantiles>(
  {
    sum: s.optional(s.string()),
    maximum: s.optional(s.string()),
    percentile25: s.optional(s.string()),
    minimum: s.optional(s.string()),
    percentile50: s.optional(s.string()),
    count: s.optional(s.string()),
    percentile75: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
