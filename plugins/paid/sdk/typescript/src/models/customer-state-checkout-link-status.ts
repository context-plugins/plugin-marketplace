import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerStateCheckoutLinkStatus = {
  Active: "active",
  Completed: "completed",
  Expired: "expired",
  Archived: "archived",
} as const;
export type CustomerStateCheckoutLinkStatus =
  | (typeof CustomerStateCheckoutLinkStatus)[keyof typeof CustomerStateCheckoutLinkStatus]
  | (string & {});

export const customerStateCheckoutLinkStatusSchema: EnumSchema<CustomerStateCheckoutLinkStatus> =
  s.enumOf<CustomerStateCheckoutLinkStatus>(CustomerStateCheckoutLinkStatus);
