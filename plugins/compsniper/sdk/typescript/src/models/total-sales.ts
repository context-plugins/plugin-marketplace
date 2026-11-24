import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TotalSales = {
  amount?: string;
  currency?: string;
  display?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const totalSalesSchema: Schema<TotalSales> = s.object<TotalSales>(
  {
    amount: s.optional(s.string()),
    currency: s.optional(s.string()),
    display: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
