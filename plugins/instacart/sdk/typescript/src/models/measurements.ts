import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Measurement details for the ingredient. */
export type Measurements = {
  /** The measurement amount. */
  amount?: number;
  /** The measurement unit. */
  unit?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const measurementsSchema: Schema<Measurements> = s.object<Measurements>(
  {
    amount: s.optional(s.float64()),
    unit: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
