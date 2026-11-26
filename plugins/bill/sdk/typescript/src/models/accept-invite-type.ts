import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for different types of organizations in BILL network. */
export const AcceptInviteType = {
  Vendor: "VENDOR",
  Customer: "CUSTOMER",
} as const;
export type AcceptInviteType = (typeof AcceptInviteType)[keyof typeof AcceptInviteType] | (string & {});

export const acceptInviteTypeSchema: EnumSchema<AcceptInviteType> =
  s.enumOf<AcceptInviteType>(AcceptInviteType);
