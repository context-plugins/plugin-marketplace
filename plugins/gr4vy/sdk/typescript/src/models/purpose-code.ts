import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PurposeCode = {
  Mortgage: "mortgage",
  Utility: "utility",
  Loan: "loan",
  DependantSupport: "dependant_support",
  Gambling: "gambling",
  Retail: "retail",
  Salary: "salary",
  Personal: "personal",
  Government: "government",
  Pension: "pension",
  Tax: "tax",
  Other: "other",
} as const;
export type PurposeCode = (typeof PurposeCode)[keyof typeof PurposeCode] | (string & {});

export const purposeCodeSchema: EnumSchema<PurposeCode> = s.enumOf<PurposeCode>(PurposeCode);
