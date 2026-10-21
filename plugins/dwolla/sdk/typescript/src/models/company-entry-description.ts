import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describes the purpose of the transaction */
export const CompanyEntryDescription = {
  Reversal: "REVERSAL",
  Reclaim: "RECLAIM",
  NoCheck: "NO CHECK",
  Autoenroll: "AUTOENROLL",
  Redepcheck: "REDEPCHECK",
  ReturnFee: "RETURN FEE",
  RetryPmnt: "RETRY PMNT",
  Healthcare: "HEALTHCARE",
  Payment: "PAYMENT",
} as const;
export type CompanyEntryDescription =
  | (typeof CompanyEntryDescription)[keyof typeof CompanyEntryDescription]
  | (string & {});

export const companyEntryDescriptionSchema: EnumSchema<CompanyEntryDescription> =
  s.enumOf<CompanyEntryDescription>(CompanyEntryDescription);
