import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A Stripe customer ID (`cus_xxx`) to associate with the PaymentIntent for network token
 * transactions. When provided, Stripe Radar can access the customer's payment history, dispute
 * rate, and account age to improve risk scoring for returning customers.
 */
export type CustomerId = string;

export const customerIdSchema: Schema<CustomerId> = s.of<CustomerId>(s.union([s.string()]));
