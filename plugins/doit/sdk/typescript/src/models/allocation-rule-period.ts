import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A date range when a rule applies. startDate and endDate are both inclusive, so a handover between
 * two rules needs a one-day gap: the first rule's endDate the day before, the second rule's
 * startDate the handover day. Only the first period in the list may omit startDate, and only the
 * last may omit endDate.
 */
export type AllocationRulePeriod = {
  /** Start date (YYYY-MM-DD, UTC), inclusive. Absent means no lower bound. */
  startDate?: string | null;
  /** End date (YYYY-MM-DD, UTC), inclusive. Absent means no upper bound. */
  endDate?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allocationRulePeriodSchema: Schema<AllocationRulePeriod> = s.object<AllocationRulePeriod>(
  {
    startDate: s.optionalNullable(s.string()),
    endDate: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
