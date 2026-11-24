import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Breakdown = {
  setupFee?: number;
  monthlyFee?: number;
  total?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const breakdownSchema: Schema<Breakdown> = s.object<Breakdown>(
  {
    setupFee: s.optional(s.float64()),
    monthlyFee: s.optional(s.float64()),
    total: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
