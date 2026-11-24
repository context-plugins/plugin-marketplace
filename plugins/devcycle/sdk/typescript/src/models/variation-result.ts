import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VariationResult = {
  key: string;
  name: string;
  numerator: number;
  denominator: number;
  rate: number;
  avgValue?: number;
  totalValue?: number;
  stdev?: number;
  percentDifference: number | null;
  chanceToBeatControl: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const variationResultSchema: Schema<VariationResult> = s.object<VariationResult>(
  {
    key: s.string(),
    name: s.string(),
    numerator: s.float64(),
    denominator: s.float64(),
    rate: s.float64(),
    avgValue: s.optional(s.float64()),
    totalValue: s.optional(s.float64()),
    stdev: s.optional(s.float64()),
    percentDifference: s.nullable(s.float64()),
    chanceToBeatControl: s.nullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
