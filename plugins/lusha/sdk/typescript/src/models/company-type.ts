import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CompanyType = {
  Government: "Government",
  PrivateCompany: "Private Company",
  PublicCompany: "Public Company",
  Educational: "Educational",
  NonProfit: "Non Profit",
  SelfEmployed: "Self Employed",
} as const;
export type CompanyType = (typeof CompanyType)[keyof typeof CompanyType] | (string & {});

export const companyTypeSchema: EnumSchema<CompanyType> = s.enumOf<CompanyType>(CompanyType);
