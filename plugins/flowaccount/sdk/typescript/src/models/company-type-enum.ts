import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 10 = PrivateWithTax 20 = PrivateWithoutTax 30 = Personal 40 = PersonalWithTax 50 =
 * PartnershipLimitedWithTax 60 = PartnershipLimitedWithoutTax
 */
export const CompanyTypeEnum = {
  _10: 10,
  _20: 20,
  _30: 30,
  _40: 40,
  _50: 50,
  _60: 60,
} as const;
export type CompanyTypeEnum = (typeof CompanyTypeEnum)[keyof typeof CompanyTypeEnum] | (number & {});

export const companyTypeEnumSchema: EnumSchema<CompanyTypeEnum> = s.enumOf<CompanyTypeEnum>(CompanyTypeEnum);
