import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  paymentMethodDetailsCardSchema,
  type PaymentMethodDetailsCard,
} from "../payment-method-details-card.js";

/** Details for credit or debit card payment method. */
export type Details1 = PaymentMethodDetailsCard;

export const details1Schema: Schema<Details1> = s.of<Details1>(
  s.union([s.lazy(() => paymentMethodDetailsCardSchema)]),
);
