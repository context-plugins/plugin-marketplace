import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for transactions where the `checkout_session_id` matches the provided value. */
export type CheckoutSessionId2 = string;

export const checkoutSessionId2Schema: Schema<CheckoutSessionId2> = s.of<CheckoutSessionId2>(
  s.union([s.string()]),
);
