import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for different types of accounts in BILL network. */
export const NetworkAccountType = {
  Advanced: "ADVANCED",
  Business: "BUSINESS",
  Rpps: "RPPS",
  Contractor: "CONTRACTOR",
  EmployeeOrIndividual: "EMPLOYEE_OR_INDIVIDUAL",
  Undefined: "UNDEFINED",
} as const;
export type NetworkAccountType = (typeof NetworkAccountType)[keyof typeof NetworkAccountType] | (string & {});

export const networkAccountTypeSchema: EnumSchema<NetworkAccountType> =
  s.enumOf<NetworkAccountType>(NetworkAccountType);
