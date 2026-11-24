import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason for taking out the loan. If absent, the lending rate is applicable to all loan
 * purposes.
 */
export const LoanPurpose = {
  Investment: "INVESTMENT",
  OwnerOccupied: "OWNER_OCCUPIED",
} as const;
export type LoanPurpose = (typeof LoanPurpose)[keyof typeof LoanPurpose] | (string & {});

export const loanPurposeSchema: EnumSchema<LoanPurpose> = s.enumOf<LoanPurpose>(LoanPurpose);
