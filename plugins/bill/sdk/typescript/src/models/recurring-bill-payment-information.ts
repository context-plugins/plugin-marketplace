import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Payment info for a recurring bill. */
export type RecurringBillPaymentInformation = {
  /** BILL-generated ID of the bank account used to pay each bill. The value begins with `bac`. */
  bankAccountId?: string;
  /** BILL-generated ID of the card account used to pay each bill. The value begins with `cat`. */
  cardAccountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recurringBillPaymentInformationSchema: Schema<RecurringBillPaymentInformation> =
  s.object<RecurringBillPaymentInformation>(
    {
      bankAccountId: s.optional(s.string()),
      cardAccountId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
