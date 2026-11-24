import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enumeration of organization user roles. */
export const OrganizationUserRoleType = {
  Administrator: "ADMINISTRATOR",
  Clerk: "CLERK",
  Approver: "APPROVER",
  Accountant: "ACCOUNTANT",
  Custom: "CUSTOM",
  Payer: "PAYER",
  Partner: "PARTNER",
  Auditor: "AUDITOR",
  NoAccess: "NO_ACCESS",
  Member: "MEMBER",
  MemberPlus: "MEMBER_PLUS",
  Internal: "INTERNAL",
  PurchaseRequester: "PURCHASE_REQUESTER",
  ConsoleCustom: "CONSOLE_CUSTOM",
  Receiver: "RECEIVER",
  ProcurementUser: "PROCUREMENT_USER",
  Undefined: "UNDEFINED",
} as const;
export type OrganizationUserRoleType =
  | (typeof OrganizationUserRoleType)[keyof typeof OrganizationUserRoleType]
  | (string & {});

export const organizationUserRoleTypeSchema: EnumSchema<OrganizationUserRoleType> =
  s.enumOf<OrganizationUserRoleType>(OrganizationUserRoleType);
