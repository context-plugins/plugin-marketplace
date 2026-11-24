import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentMethodUsBankAccountAccountType = {
  Checking: "checking",
  Savings: "savings",
} as const;
export type PaymentMethodUsBankAccountAccountType =
  | (typeof PaymentMethodUsBankAccountAccountType)[keyof typeof PaymentMethodUsBankAccountAccountType]
  | (string & {});

export const paymentMethodUsBankAccountAccountTypeSchema: EnumSchema<PaymentMethodUsBankAccountAccountType> =
  s.enumOf<PaymentMethodUsBankAccountAccountType>(PaymentMethodUsBankAccountAccountType);
