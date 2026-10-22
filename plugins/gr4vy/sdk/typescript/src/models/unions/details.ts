import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  checkoutSessionPaymentMethodDetailsSchema,
  type CheckoutSessionPaymentMethodDetails,
} from "../checkout-session-payment-method-details.js";

/** Details for credit or debit card payment method. */
export type Details = CheckoutSessionPaymentMethodDetails;

export const detailsSchema: Schema<Details> = s.of<Details>(
  s.union([s.lazy(() => checkoutSessionPaymentMethodDetailsSchema)]),
);
