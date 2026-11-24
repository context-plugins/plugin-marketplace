import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TaxHistoryEvent = {
  /** Epoch milliseconds for the tax year. */
  time?: number;
  taxPaid?: number | null;
  /** Assessed value. */
  value?: number | null;
  valueIncreaseRate?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taxHistoryEventSchema: Schema<TaxHistoryEvent> = s.object<TaxHistoryEvent>(
  {
    time: s.optional(s.int()),
    taxPaid: s.optionalNullable(s.float64()),
    value: s.optionalNullable(s.float64()),
    valueIncreaseRate: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
