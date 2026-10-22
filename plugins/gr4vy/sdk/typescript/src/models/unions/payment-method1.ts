import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentMethodCardSchema, type PaymentMethodCard } from "../payment-method-card.js";
import {
  paymentMethodStoredCardSchema,
  type PaymentMethodStoredCard,
} from "../payment-method-stored-card.js";

/** The type of payment method to send funds too. */
export type PaymentMethod1 = PaymentMethodCard | PaymentMethodStoredCard;

export const paymentMethod1Schema: Schema<PaymentMethod1> = s.of<PaymentMethod1>(
  s.union([s.lazy(() => paymentMethodCardSchema), s.lazy(() => paymentMethodStoredCardSchema)]),
);
