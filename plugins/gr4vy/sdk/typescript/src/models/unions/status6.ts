import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentLinkStatusSchema, type PaymentLinkStatus } from "../payment-link-status.js";

/**
 * Filters the results to only the payment links that have a `status` that matches with any of the
 * provided status values.
 */
export type Status6 = PaymentLinkStatus[];

export const status6Schema: Schema<Status6> = s.of<Status6>(
  s.union([s.array(s.lazy(() => paymentLinkStatusSchema))]),
);
