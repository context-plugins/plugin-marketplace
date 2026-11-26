import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Guidance = {
  period?: string;
  revenue?: string | null;
  grossMargin?: string | null;
  operatingExpenses?: string | null;
  taxRate?: string | null;
  other?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const guidanceSchema: Schema<Guidance> = s.object<Guidance>(
  {
    period: s.optional(s.string()),
    revenue: s.optionalNullable(s.string()),
    grossMargin: s.optionalNullable(s.string()),
    operatingExpenses: s.optionalNullable(s.string()),
    taxRate: s.optionalNullable(s.string()),
    other: s.optional(s.array(s.string())),
    _keysMap: {
      grossMargin: "gross_margin",
      operatingExpenses: "operating_expenses",
      taxRate: "tax_rate",
    },
  },
  { additionalProperties: s.json() },
);
