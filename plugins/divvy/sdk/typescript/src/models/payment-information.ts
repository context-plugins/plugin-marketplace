import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentInformation = {
  /** BILL-generated ID of the bank account used to pay each bill. The value begins with `bac`. */
  bankAccountId?: string;
  /** BILL-generated ID of the card account used to pay each bill. The value begins with `cat`. */
  cardAccountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentInformationSchema: Schema<PaymentInformation> = s.object<PaymentInformation>(
  {
    bankAccountId: s.optional(s.string()),
    cardAccountId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
