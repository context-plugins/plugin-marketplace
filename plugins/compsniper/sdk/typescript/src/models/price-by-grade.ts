import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PriceByGrade = {
  grade?: string;
  sales?: number;
  averagePrice?: number | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  latestPrice?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const priceByGradeSchema: Schema<PriceByGrade> = s.object<PriceByGrade>(
  {
    grade: s.optional(s.string()),
    sales: s.optional(s.int()),
    averagePrice: s.optionalNullable(s.float64()),
    minPrice: s.optionalNullable(s.float64()),
    maxPrice: s.optionalNullable(s.float64()),
    latestPrice: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
