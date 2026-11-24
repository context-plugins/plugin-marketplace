import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentHistorySimple = {
  /** Unique name / number to identify the specific customer account */
  uniqueAccountIdentifier?: string;
  /** Whether the customer has paid before or not */
  paidBeforeFlag?: boolean;
  /** ISO 8601 date e.g. 2018-10-17 */
  dateOfLastPaidPurchase: string;
  /** ISO 8601 date e.g. 2018-10-17 */
  dateOfFirstPaidPurchase: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentHistorySimpleSchema: Schema<PaymentHistorySimple> = s.object<PaymentHistorySimple>(
  {
    uniqueAccountIdentifier: s.optional(s.string()),
    paidBeforeFlag: s.optional(s.boolean()),
    dateOfLastPaidPurchase: s.dateOnly(),
    dateOfFirstPaidPurchase: s.dateOnly(),
    _keysMap: {
      uniqueAccountIdentifier: "unique_account_identifier",
      paidBeforeFlag: "paid_before_flag",
      dateOfLastPaidPurchase: "date_of_last_paid_purchase",
      dateOfFirstPaidPurchase: "date_of_first_paid_purchase",
    },
  },
  { additionalProperties: s.json() },
);
