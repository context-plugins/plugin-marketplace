import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Bank account user verification status. */
export const OrganizationBankAccountUserStatus = {
  Unverified: "UNVERIFIED",
  Nominated: "NOMINATED",
  Verified: "VERIFIED",
  Undefined: "UNDEFINED",
} as const;
export type OrganizationBankAccountUserStatus =
  | (typeof OrganizationBankAccountUserStatus)[keyof typeof OrganizationBankAccountUserStatus]
  | (string & {});

export const organizationBankAccountUserStatusSchema: EnumSchema<OrganizationBankAccountUserStatus> =
  s.enumOf<OrganizationBankAccountUserStatus>(OrganizationBankAccountUserStatus);
