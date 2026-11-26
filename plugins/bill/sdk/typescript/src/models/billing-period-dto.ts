import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** BillingPeriod response Dto. */
export type BillingPeriodDto = {
  /** Billing period start date */
  startDate?: string;
  /** Billing period end date */
  endDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billingPeriodDtoSchema: Schema<BillingPeriodDto> = s.object<BillingPeriodDto>(
  {
    startDate: s.optional(s.dateOnly()),
    endDate: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
