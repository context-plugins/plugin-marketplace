import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** created: awaiting payment. attempted: payment attempted but not captured. paid: fully paid. */
export const StatusRazorpayOrdersApi = {
  Created: "created",
  Attempted: "attempted",
  Paid: "paid",
} as const;
export type StatusRazorpayOrdersApi =
  | (typeof StatusRazorpayOrdersApi)[keyof typeof StatusRazorpayOrdersApi]
  | (string & {});

export const statusRazorpayOrdersApiSchema: EnumSchema<StatusRazorpayOrdersApi> =
  s.enumOf<StatusRazorpayOrdersApi>(StatusRazorpayOrdersApi);
