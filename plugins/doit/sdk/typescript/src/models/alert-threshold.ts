import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A numeric or percentage threshold. */
export type AlertThreshold = {
  amount?: number;
  percentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const alertThresholdSchema: Schema<AlertThreshold> = s.object<AlertThreshold>(
  {
    amount: s.optional(s.float64()),
    percentage: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
