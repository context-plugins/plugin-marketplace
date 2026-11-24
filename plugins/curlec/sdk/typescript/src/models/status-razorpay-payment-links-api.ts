import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * created: awaiting payment. partially_paid: one or more partial payments received. expired: past
 * expiry with no full payment. cancelled: manually cancelled. paid: fully paid.
 */
export const StatusRazorpayPaymentLinksApi = {
  Created: "created",
  PartiallyPaid: "partially_paid",
  Expired: "expired",
  Cancelled: "cancelled",
  Paid: "paid",
} as const;
export type StatusRazorpayPaymentLinksApi =
  | (typeof StatusRazorpayPaymentLinksApi)[keyof typeof StatusRazorpayPaymentLinksApi]
  | (string & {});

export const statusRazorpayPaymentLinksApiSchema: EnumSchema<StatusRazorpayPaymentLinksApi> =
  s.enumOf<StatusRazorpayPaymentLinksApi>(StatusRazorpayPaymentLinksApi);
