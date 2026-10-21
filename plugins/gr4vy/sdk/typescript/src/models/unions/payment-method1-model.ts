import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  checkoutSessionPaymentMethodSchema,
  type CheckoutSessionPaymentMethod,
} from "../checkout-session-payment-method.js";

/** Information about the payment method stored on the checkout session. */
export type PaymentMethod1Model = CheckoutSessionPaymentMethod;

export const paymentMethod1ModelSchema: Schema<PaymentMethod1Model> = s.of<PaymentMethod1Model>(
  s.union([s.lazy(() => checkoutSessionPaymentMethodSchema)]),
);
