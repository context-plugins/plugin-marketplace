import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  CreditBenefitInputAllocationCadence,
  creditBenefitInputAllocationCadenceSchema,
} from "./credit-benefit-input-allocation-cadence.js";
import {
  creditBenefitInputCreditGrantTimingSchema,
  type CreditBenefitInputCreditGrantTiming,
} from "./credit-benefit-input-credit-grant-timing.js";
import {
  CreditBenefitInputRecipient,
  creditBenefitInputRecipientSchema,
} from "./credit-benefit-input-recipient.js";

export type CreditBenefitInput = {
  creditsCurrencyId: string;
  amount: number;
  /** @default CreditBenefitInputRecipient.Organization */
  recipient?: CreditBenefitInputRecipient;
  /** @default false */
  isInfiniteTotal?: boolean;
  /** @default CreditBenefitInputAllocationCadence.Upfront */
  allocationCadence?: CreditBenefitInputAllocationCadence;
  creditGrantTiming?: CreditBenefitInputCreditGrantTiming;
  overageUnitPrice?: number | null;
  rolloverAmount?: number | null;
  rolloverDuration?: number | null;
  rolloverDurationUnit?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditBenefitInputSchema: Schema<CreditBenefitInput> = s.object<CreditBenefitInput>(
  {
    creditsCurrencyId: s.string(),
    amount: s.float64(),
    recipient: s.defaulted(creditBenefitInputRecipientSchema, CreditBenefitInputRecipient.Organization),
    isInfiniteTotal: s.defaulted(s.boolean(), false),
    allocationCadence: s.defaulted(
      creditBenefitInputAllocationCadenceSchema,
      CreditBenefitInputAllocationCadence.Upfront,
    ),
    creditGrantTiming: s.optional(s.lazy(() => creditBenefitInputCreditGrantTimingSchema)),
    overageUnitPrice: s.optionalNullable(s.float64()),
    rolloverAmount: s.optionalNullable(s.float64()),
    rolloverDuration: s.optionalNullable(s.float64()),
    rolloverDurationUnit: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
