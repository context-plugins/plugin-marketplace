import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The ID of the Plaid payment service related to the provided public token. If not provided will be
 * fetched from the currently active expecting to have a single one.
 */
export type PaymentServiceId5 = string;

export const paymentServiceId5Schema: Schema<PaymentServiceId5> = s.of<PaymentServiceId5>(
  s.union([s.string()]),
);
