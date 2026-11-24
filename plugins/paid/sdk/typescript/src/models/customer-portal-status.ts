import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerPortalStatus = {
  Active: "active",
  Expired: "expired",
} as const;
export type CustomerPortalStatus =
  | (typeof CustomerPortalStatus)[keyof typeof CustomerPortalStatus]
  | (string & {});

export const customerPortalStatusSchema: EnumSchema<CustomerPortalStatus> =
  s.enumOf<CustomerPortalStatus>(CustomerPortalStatus);
