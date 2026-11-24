import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paymentMethodUsBankAccountAccountTypeSchema,
  type PaymentMethodUsBankAccountAccountType,
} from "./payment-method-us-bank-account-account-type.js";

/** US bank account details (present when type is 'us_bank_account') */
export type PaymentMethodUsBankAccount = {
  bankName?: string;
  /** Last 4 digits of the account number */
  last4?: string;
  accountType?: PaymentMethodUsBankAccountAccountType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentMethodUsBankAccountSchema: Schema<PaymentMethodUsBankAccount> =
  s.object<PaymentMethodUsBankAccount>(
    {
      bankName: s.optional(s.string()),
      last4: s.optional(s.string()),
      accountType: s.optional(s.lazy(() => paymentMethodUsBankAccountAccountTypeSchema)),
    },
    { additionalProperties: s.json() },
  );
