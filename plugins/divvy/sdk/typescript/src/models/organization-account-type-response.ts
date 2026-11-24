import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Organization Account Type. */
export const OrganizationAccountTypeResponse = {
  Business: "BUSINESS",
  Contractor: "CONTRACTOR",
  EmployeeOrIndividual: "EMPLOYEE_OR_INDIVIDUAL",
  Other: "OTHER",
  Consumer: "CONSUMER",
  Undefined: "UNDEFINED",
} as const;
export type OrganizationAccountTypeResponse =
  | (typeof OrganizationAccountTypeResponse)[keyof typeof OrganizationAccountTypeResponse]
  | (string & {});

export const organizationAccountTypeResponseSchema: EnumSchema<OrganizationAccountTypeResponse> =
  s.enumOf<OrganizationAccountTypeResponse>(OrganizationAccountTypeResponse);
