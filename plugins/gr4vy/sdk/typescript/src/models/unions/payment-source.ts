import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that were processed with the specified payment
 * source.
 */
export type PaymentSource = string[];

export const paymentSourceSchema: Schema<PaymentSource> = s.of<PaymentSource>(s.union([s.array(s.string())]));
