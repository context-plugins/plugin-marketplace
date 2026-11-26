import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Funding option. */
export type FundingOption = {
  /** This field is set as `true` if the funding account is available for vendor payments */
  available?: boolean;
  /** Vendor payment delivery date. The value is in the `yyyy-MM-dd` format. */
  deliveryDate?: string;
  /**
   * Vendor payment process date. The value is in the `yyyy-MM-dd` format. On this date, BILL starts
   * processing the payment and starts withdrawing funds from the sender's funding account.
   */
  processDate?: string;
  /** Reason why the funding account is not available for vendor payments */
  reason?: string;
  /** Additional information required for vendor payments with the funding account */
  conditions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingOptionSchema: Schema<FundingOption> = s.object<FundingOption>(
  {
    available: s.optional(s.boolean()),
    deliveryDate: s.optional(s.dateOnly()),
    processDate: s.optional(s.dateOnly()),
    reason: s.optional(s.string()),
    conditions: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
