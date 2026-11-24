import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditBenefitOutput = {
  id: string;
  creditsCurrencyId: string | null;
  amount: number;
  recipient: string;
  isInfiniteTotal: boolean;
  allocationCadence: string;
  creditGrantTiming?: string | null;
  overageUnitPrice?: number | null;
  rolloverAmount?: number | null;
  rolloverDuration?: number | null;
  rolloverDurationUnit?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditBenefitOutputSchema: Schema<CreditBenefitOutput> = s.object<CreditBenefitOutput>(
  {
    id: s.string(),
    creditsCurrencyId: s.nullable(s.string()),
    amount: s.float64(),
    recipient: s.string(),
    isInfiniteTotal: s.boolean(),
    allocationCadence: s.string(),
    creditGrantTiming: s.optionalNullable(s.string()),
    overageUnitPrice: s.optionalNullable(s.float64()),
    rolloverAmount: s.optionalNullable(s.float64()),
    rolloverDuration: s.optionalNullable(s.float64()),
    rolloverDurationUnit: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
