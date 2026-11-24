import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Card account user verification status. */
export const OrganizationCardAccountUserStatus = {
  Unverified: "UNVERIFIED",
  Nominated: "NOMINATED",
  Verified: "VERIFIED",
  Undefined: "UNDEFINED",
} as const;
export type OrganizationCardAccountUserStatus =
  | (typeof OrganizationCardAccountUserStatus)[keyof typeof OrganizationCardAccountUserStatus]
  | (string & {});

export const organizationCardAccountUserStatusSchema: EnumSchema<OrganizationCardAccountUserStatus> =
  s.enumOf<OrganizationCardAccountUserStatus>(OrganizationCardAccountUserStatus);
