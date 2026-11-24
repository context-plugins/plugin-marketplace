import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ByMonth = {
  /** `YYYY-MM`. */
  month: string;
  reviews: number;
  averageRating: number | null;
  replied: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const byMonthSchema: Schema<ByMonth> = s.object<ByMonth>(
  {
    month: s.string(),
    reviews: s.int(),
    averageRating: s.nullable(s.float64()),
    replied: s.int(),
    _keysMap: {
      averageRating: "average_rating",
    },
  },
  { additionalProperties: s.json() },
);
