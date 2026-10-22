import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  checkoutSessionCardPaymentMethodSchema,
  type CheckoutSessionCardPaymentMethod,
} from "../checkout-session-card-payment-method.js";
import {
  checkoutSessionClickToPayPaymentMethodSchema,
  type CheckoutSessionClickToPayPaymentMethod,
} from "../checkout-session-click-to-pay-payment-method.js";
import {
  checkoutSessionIdPaymentMethodSchema,
  type CheckoutSessionIdPaymentMethod,
} from "../checkout-session-id-payment-method.js";

/** The details of the payment method to update. */
export type PaymentMethod =
  | (CheckoutSessionCardPaymentMethod & { method: "card" })
  | (CheckoutSessionClickToPayPaymentMethod & { method: "click-to-pay" })
  | (CheckoutSessionIdPaymentMethod & { method: "id" });

export const paymentMethodSchema: Schema<PaymentMethod> = s.discriminatedUnion<PaymentMethod>("method", {
  card: checkoutSessionCardPaymentMethodSchema,
  "click-to-pay": checkoutSessionClickToPayPaymentMethodSchema,
  id: checkoutSessionIdPaymentMethodSchema,
});
