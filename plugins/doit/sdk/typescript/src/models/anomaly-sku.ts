import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** SKU-level information contributing to an anomaly. */
export type AnomalySku = {
  cost?: number;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalySkuSchema: Schema<AnomalySku> = s.object<AnomalySku>(
  {
    cost: s.optional(s.float64()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
