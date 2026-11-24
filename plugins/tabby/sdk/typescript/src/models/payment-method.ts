import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Payment method used. */
export const PaymentMethod = {
  Card: "card",
  Cod: "cod",
} as const;
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod] | (string & {});

export const paymentMethodSchema: EnumSchema<PaymentMethod> = s.enumOf<PaymentMethod>(PaymentMethod);
