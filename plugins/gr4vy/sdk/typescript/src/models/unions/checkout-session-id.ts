import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The identifier for the checkout session this transaction is associated with. */
export type CheckoutSessionId = string;

export const checkoutSessionIdSchema: Schema<CheckoutSessionId> = s.of<CheckoutSessionId>(
  s.union([s.string()]),
);
