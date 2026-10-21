import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Organization-level Role assigned to the API Credential. */
export const OrganizationRole = {
  Owner: "owner",
  Admin: "admin",
  BillingReader: "billing_reader",
  User: "user",
} as const;
export type OrganizationRole = (typeof OrganizationRole)[keyof typeof OrganizationRole] | (string & {});

export const organizationRoleSchema: EnumSchema<OrganizationRole> =
  s.enumOf<OrganizationRole>(OrganizationRole);
