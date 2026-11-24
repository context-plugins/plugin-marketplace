import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Details about the proration calculation for an attribute */
export type ProrationDetail = {
  oldAttributeId?: string;
  newAttributeId?: string;
  creditLineId?: string;
  oldPrice?: number;
  newPrice?: number;
  /** The credit amount applied for the unused portion */
  creditAmount?: number;
  /** Number of days remaining in the current billing cycle */
  remainingDays?: number;
  /** Total number of days in the billing cycle */
  totalDaysInCycle?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const prorationDetailSchema: Schema<ProrationDetail> = s.object<ProrationDetail>(
  {
    oldAttributeId: s.optional(s.string()),
    newAttributeId: s.optional(s.string()),
    creditLineId: s.optional(s.string()),
    oldPrice: s.optional(s.float64()),
    newPrice: s.optional(s.float64()),
    creditAmount: s.optional(s.float64()),
    remainingDays: s.optional(s.int()),
    totalDaysInCycle: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
