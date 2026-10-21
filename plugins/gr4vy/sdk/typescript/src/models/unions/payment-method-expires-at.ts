import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Defines the date at which the payment will expire if not completed. Must be provided in ISO 8601
 * format `(YYYY-MM-DD`). If not specified, it defaults to 7 days in the future from the current
 * date.
 */
export type PaymentMethodExpiresAt = string;

export const paymentMethodExpiresAtSchema: Schema<PaymentMethodExpiresAt> = s.of<PaymentMethodExpiresAt>(
  s.union([s.string()]),
);
