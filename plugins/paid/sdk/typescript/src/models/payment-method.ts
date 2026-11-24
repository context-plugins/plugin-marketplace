import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentMethodCardSchema, type PaymentMethodCard } from "./payment-method-card.js";
import { paymentMethodTypeSchema, type PaymentMethodType } from "./payment-method-type.js";
import {
  paymentMethodUsBankAccountSchema,
  type PaymentMethodUsBankAccount,
} from "./payment-method-us-bank-account.js";

/** A customer's payment method */
export type PaymentMethod = {
  /** The payment method ID (typically from Stripe) */
  id?: string;
  /** The type of payment method */
  type?: PaymentMethodType;
  /** Card details (present when type is 'card') */
  card?: PaymentMethodCard;
  /** US bank account details (present when type is 'us_bank_account') */
  usBankAccount?: PaymentMethodUsBankAccount;
  /** Whether this is the customer's default payment method */
  isDefault?: boolean;
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentMethodSchema: Schema<PaymentMethod> = s.object<PaymentMethod>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => paymentMethodTypeSchema)),
    card: s.optional(s.lazy(() => paymentMethodCardSchema)),
    usBankAccount: s.optional(s.lazy(() => paymentMethodUsBankAccountSchema)),
    isDefault: s.optional(s.boolean()),
    createdAt: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
