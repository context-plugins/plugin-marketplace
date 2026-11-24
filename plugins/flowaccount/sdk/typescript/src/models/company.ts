import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyPreferencesInternalSchema,
  companyPreferencesSchema,
  type CompanyPreferences,
} from "./company-preferences.js";
import {
  companySubscriptionInternalSchema,
  companySubscriptionSchema,
  type CompanySubscription,
} from "./company-subscription.js";
import { companyTypeEnumSchema, type CompanyTypeEnum } from "./company-type-enum.js";
import { payrollPreferencesSchema, type PayrollPreferences } from "./payroll-preferences.js";
import { salesTypeSchema, type SalesType } from "./sales-type.js";

export type Company = {
  id?: number;
  nameLocal: string;
  nameForeign?: string | null;
  addressLocal?: string | null;
  addressForeign?: string | null;
  companyTaxId?: string | null;
  logoImage?: string | null;
  fax?: string | null;
  phone1?: string | null;
  phone2?: string | null;
  phone3?: string | null;
  websites?: string | null;
  /**
   * 10 = PrivateWithTax 20 = PrivateWithoutTax 30 = Personal 40 = PersonalWithTax 50 =
   * PartnershipLimitedWithTax 60 = PartnershipLimitedWithoutTax
   */
  companyType?: CompanyTypeEnum;
  createdOn: Date;
  modifiedOn: Date;
  isDefault?: boolean;
  addressLocalLine2?: string | null;
  addressForeignLine2?: string | null;
  vatRate?: number;
  /** @default false */
  isVat?: boolean;
  email?: string | null;
  branch?: string | null;
  addressLocalLine3?: string | null;
  addressForeignLine3?: string | null;
  contactPerson?: string | null;
  /** @default true */
  isActive?: boolean;
  remarks?: string | null;
  galleryId?: number | null;
  branchForeign?: string | null;
  branchCode?: string | null;
  contactType: number;
  defaultCreditDays?: number | null;
  logoType: number;
  /** @default true */
  isRegistered?: boolean;
  isAdvance: boolean;
  address?: string | null;
  provinceId?: number | null;
  amphurId?: number | null;
  districtId?: number | null;
  zipCode?: string | null;
  supportCode?: string | null;
  salesType?: SalesType;
  companyPreferences?: CompanyPreferences;
  payrollPreferences?: PayrollPreferences;
  companySubscription?: CompanySubscription[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyProperties: s.Shape<Company> = {
  id: s.optional(s.int()),
  nameLocal: s.string(),
  nameForeign: s.optionalNullable(s.string()),
  addressLocal: s.optionalNullable(s.string()),
  addressForeign: s.optionalNullable(s.string()),
  companyTaxId: s.optionalNullable(s.string()),
  logoImage: s.optionalNullable(s.string()),
  fax: s.optionalNullable(s.string()),
  phone1: s.optionalNullable(s.string()),
  phone2: s.optionalNullable(s.string()),
  phone3: s.optionalNullable(s.string()),
  websites: s.optionalNullable(s.string()),
  companyType: s.optional(s.lazy(() => companyTypeEnumSchema)),
  createdOn: s.dateTime(),
  modifiedOn: s.dateTime(),
  isDefault: s.optional(s.boolean()),
  addressLocalLine2: s.optionalNullable(s.string()),
  addressForeignLine2: s.optionalNullable(s.string()),
  vatRate: s.optional(s.int()),
  isVat: s.defaulted(s.boolean(), false),
  email: s.optionalNullable(s.string()),
  branch: s.optionalNullable(s.string()),
  addressLocalLine3: s.optionalNullable(s.string()),
  addressForeignLine3: s.optionalNullable(s.string()),
  contactPerson: s.optionalNullable(s.string()),
  isActive: s.defaulted(s.boolean(), true),
  remarks: s.optionalNullable(s.string()),
  galleryId: s.optionalNullable(s.int()),
  branchForeign: s.optionalNullable(s.string()),
  branchCode: s.optionalNullable(s.string()),
  contactType: s.int(),
  defaultCreditDays: s.optionalNullable(s.int()),
  logoType: s.int(),
  isRegistered: s.defaulted(s.boolean(), true),
  isAdvance: s.boolean(),
  address: s.optionalNullable(s.string()),
  provinceId: s.optionalNullable(s.int()),
  amphurId: s.optionalNullable(s.int()),
  districtId: s.optionalNullable(s.int()),
  zipCode: s.optionalNullable(s.string()),
  supportCode: s.optionalNullable(s.string()),
  salesType: s.optional(s.lazy(() => salesTypeSchema)),
  companyPreferences: s.optional(s.lazy(() => companyPreferencesInternalSchema)),
  payrollPreferences: s.optional(s.lazy(() => payrollPreferencesSchema)),
  companySubscription: s.optionalNullable(s.array(s.lazy(() => companySubscriptionInternalSchema))),
};

export const companyInternalSchema: Schema<Company> = s.object<Company>(companyProperties, {
  additionalProperties: s.json(),
});

export const companySchema: Schema<Company> = s.lazySchema(() =>
  s.object<Company>(
    {
      ...companyProperties,
      nameLocal: s.string().check(s.minLength(1)),
      fax: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
      phone1: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
      phone2: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
      phone3: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
      websites: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(2147483647))),
      branchForeign: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(2147483647))),
      branchCode: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
      companyPreferences: s.optional(s.lazy(() => companyPreferencesSchema)),
      companySubscription: s.optionalNullable(s.array(s.lazy(() => companySubscriptionSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
