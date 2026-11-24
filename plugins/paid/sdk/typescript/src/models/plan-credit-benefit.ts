import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  planCreditBenefitAllocationCadenceSchema,
  type PlanCreditBenefitAllocationCadence,
} from "./plan-credit-benefit-allocation-cadence.js";
import {
  planCreditBenefitCreditGrantTimingSchema,
  type PlanCreditBenefitCreditGrantTiming,
} from "./plan-credit-benefit-credit-grant-timing.js";
import {
  planCreditBenefitRecipientSchema,
  type PlanCreditBenefitRecipient,
} from "./plan-credit-benefit-recipient.js";
import {
  planCreditBenefitRolloverDurationUnitSchema,
  type PlanCreditBenefitRolloverDurationUnit,
} from "./plan-credit-benefit-rollover-duration-unit.js";

export type PlanCreditBenefit = {
  id: string;
  creditsCurrencyId?: string;
  recipient?: PlanCreditBenefitRecipient;
  amount: number;
  rolloverAmount?: number | null;
  rolloverDuration?: number | null;
  rolloverDurationUnit?: PlanCreditBenefitRolloverDurationUnit;
  allocationCadence?: PlanCreditBenefitAllocationCadence;
  creditGrantTiming?: PlanCreditBenefitCreditGrantTiming;
  isInfiniteTotal?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planCreditBenefitSchema: Schema<PlanCreditBenefit> = s.object<PlanCreditBenefit>(
  {
    id: s.string(),
    creditsCurrencyId: s.optional(s.string()),
    recipient: s.optional(s.lazy(() => planCreditBenefitRecipientSchema)),
    amount: s.float64(),
    rolloverAmount: s.optionalNullable(s.float64()),
    rolloverDuration: s.optionalNullable(s.float64()),
    rolloverDurationUnit: s.optional(s.lazy(() => planCreditBenefitRolloverDurationUnitSchema)),
    allocationCadence: s.optional(s.lazy(() => planCreditBenefitAllocationCadenceSchema)),
    creditGrantTiming: s.optional(s.lazy(() => planCreditBenefitCreditGrantTimingSchema)),
    isInfiniteTotal: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
