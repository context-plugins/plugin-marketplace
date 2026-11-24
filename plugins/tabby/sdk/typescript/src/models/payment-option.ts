import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** One of - card / direct banking / COD (cash) / other */
export const PaymentOption = {
  Card: "card",
  DirectBanking: "direct banking",
  Cod: "cod",
  Other: "other",
} as const;
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption] | (string & {});

export const paymentOptionSchema: EnumSchema<PaymentOption> = s.enumOf<PaymentOption>(PaymentOption);
