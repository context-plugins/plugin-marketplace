import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsData = {
  vega?: number;
  theta?: number;
  gamma?: number;
  delta?: number;
  iv?: number;
  pop?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsDataSchema: Schema<AnalyticsData> = s.object<AnalyticsData>(
  {
    vega: s.optional(s.float64()),
    theta: s.optional(s.float64()),
    gamma: s.optional(s.float64()),
    delta: s.optional(s.float64()),
    iv: s.optional(s.float64()),
    pop: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
