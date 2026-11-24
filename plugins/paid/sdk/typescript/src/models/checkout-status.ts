import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CheckoutStatus = {
  Active: "active",
  Completed: "completed",
  Expired: "expired",
  Archived: "archived",
} as const;
export type CheckoutStatus = (typeof CheckoutStatus)[keyof typeof CheckoutStatus] | (string & {});

export const checkoutStatusSchema: EnumSchema<CheckoutStatus> = s.enumOf<CheckoutStatus>(CheckoutStatus);
