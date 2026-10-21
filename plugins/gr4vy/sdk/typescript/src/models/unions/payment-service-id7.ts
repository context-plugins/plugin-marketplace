import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The optional ID of the configured payment service. New fields will be merged with any existing
 * fields already stored before they are verified.
 */
export type PaymentServiceId7 = string;

export const paymentServiceId7Schema: Schema<PaymentServiceId7> = s.of<PaymentServiceId7>(
  s.union([s.string()]),
);
