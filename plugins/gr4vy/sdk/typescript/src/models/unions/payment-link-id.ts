import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters for transactions where the `payment_link_id` matches the provided value. */
export type PaymentLinkId = string;

export const paymentLinkIdSchema: Schema<PaymentLinkId> = s.of<PaymentLinkId>(s.union([s.string()]));
