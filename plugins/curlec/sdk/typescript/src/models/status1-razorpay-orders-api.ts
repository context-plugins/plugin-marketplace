import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * created: initiated. authorized: bank approved, not yet captured. captured: funds collected.
 * refunded: fully refunded. failed: transaction failed.
 */
export const Status1RazorpayOrdersApi = {
  Created: "created",
  Authorized: "authorized",
  Captured: "captured",
  Refunded: "refunded",
  Failed: "failed",
} as const;
export type Status1RazorpayOrdersApi =
  | (typeof Status1RazorpayOrdersApi)[keyof typeof Status1RazorpayOrdersApi]
  | (string & {});

export const status1RazorpayOrdersApiSchema: EnumSchema<Status1RazorpayOrdersApi> =
  s.enumOf<Status1RazorpayOrdersApi>(Status1RazorpayOrdersApi);
