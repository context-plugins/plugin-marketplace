import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Bank Funding option. */
export type BankFundingOption = {
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
  /** BILL-generated ID of the bank account. The value begins with `bac`. */
  id?: string;
  /** Bank name */
  name?: string;
  /** Estimated bank fees */
  fee?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bankFundingOptionSchema: Schema<BankFundingOption> = s.object<BankFundingOption>(
  {
    available: s.optional(s.boolean()),
    deliveryDate: s.optional(s.dateOnly()),
    processDate: s.optional(s.dateOnly()),
    reason: s.optional(s.string()),
    conditions: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    fee: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
