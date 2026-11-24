import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerUserStatus = {
  Active: "active",
  Deactivated: "deactivated",
} as const;
export type CustomerUserStatus = (typeof CustomerUserStatus)[keyof typeof CustomerUserStatus] | (string & {});

export const customerUserStatusSchema: EnumSchema<CustomerUserStatus> =
  s.enumOf<CustomerUserStatus>(CustomerUserStatus);
