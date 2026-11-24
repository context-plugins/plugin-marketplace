import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * created: initiated. authorized: bank approved, not yet captured. captured: funds collected.
 * refunded: fully refunded. failed: transaction failed.
 */
export const StatusRazorpayPaymentsApi = {
  Created: "created",
  Authorized: "authorized",
  Captured: "captured",
  Refunded: "refunded",
  Failed: "failed",
} as const;
export type StatusRazorpayPaymentsApi =
  | (typeof StatusRazorpayPaymentsApi)[keyof typeof StatusRazorpayPaymentsApi]
  | (string & {});

export const statusRazorpayPaymentsApiSchema: EnumSchema<StatusRazorpayPaymentsApi> =
  s.enumOf<StatusRazorpayPaymentsApi>(StatusRazorpayPaymentsApi);
