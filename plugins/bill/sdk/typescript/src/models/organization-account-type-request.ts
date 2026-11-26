import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Organization Account Type. */
export const OrganizationAccountTypeRequest = {
  Business: "BUSINESS",
  Contractor: "CONTRACTOR",
  EmployeeOrIndividual: "EMPLOYEE_OR_INDIVIDUAL",
  Other: "OTHER",
  Consumer: "CONSUMER",
} as const;
export type OrganizationAccountTypeRequest =
  | (typeof OrganizationAccountTypeRequest)[keyof typeof OrganizationAccountTypeRequest]
  | (string & {});

export const organizationAccountTypeRequestSchema: EnumSchema<OrganizationAccountTypeRequest> =
  s.enumOf<OrganizationAccountTypeRequest>(OrganizationAccountTypeRequest);
