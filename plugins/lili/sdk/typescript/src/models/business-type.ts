import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Incorporation type of the business */
export const BusinessType = {
  Dba: "DBA",
  Llc: "LLC",
  Mmllc: "MMLLC",
  GeneralPartnership: "GENERAL_PARTNERSHIP",
  Llp: "LLP",
  SCorp: "S_CORP",
  Ssn: "SSN",
  CCorp: "C_CORP",
} as const;
export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType] | (string & {});

export const businessTypeSchema: EnumSchema<BusinessType> = s.enumOf<BusinessType>(BusinessType);
