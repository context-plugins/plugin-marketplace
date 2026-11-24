import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The payment processor via which the sale was made. */
export const PaymentProcessor = {
  Stripe: "stripe",
  Shopify: "shopify",
  Polar: "polar",
  Paddle: "paddle",
  Revenuecat: "revenuecat",
  Custom: "custom",
  Manual: "manual",
} as const;
export type PaymentProcessor = (typeof PaymentProcessor)[keyof typeof PaymentProcessor] | (string & {});

export const paymentProcessorSchema: EnumSchema<PaymentProcessor> =
  s.enumOf<PaymentProcessor>(PaymentProcessor);
