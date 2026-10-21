import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethodSchema, type PaymentMethod } from "./unions/payment-method.js";
import { postalCode1Schema, type PostalCode1 } from "./unions/postal-code1.js";

export type CheckoutSessionSecureFields = {
  /** The details of the payment method to update. */
  paymentMethod: PaymentMethod;
  /** The postal code of the buyer. */
  postalCode?: PostalCode1;
};

export const checkoutSessionSecureFieldsSchema: Schema<CheckoutSessionSecureFields> =
  s.object<CheckoutSessionSecureFields>({
    paymentMethod: paymentMethodSchema,
    postalCode: s.optional(s.lazy(() => postalCode1Schema)),
    _keysMap: {
      paymentMethod: "payment_method",
      postalCode: "postal_code",
    },
  });
