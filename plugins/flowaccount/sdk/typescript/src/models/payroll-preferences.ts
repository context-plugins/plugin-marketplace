import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kConnectProductCodeSchema, type KConnectProductCode } from "./kconnect-product-code.js";

export type PayrollPreferences = {
  companyId?: number;
  isSocialSecurityRegistered?: boolean;
  employerAccountNumber?: string | null;
  employerAccountBranch?: string | null;
  kCorporateClientCode?: string | null;
  kCorporateAccountNumber?: string | null;
  payrollBankAccountId?: number | null;
  /** 1 = PCT 3 = PPA 5 = PPB */
  kConnectProductCode?: KConnectProductCode;
  overtimePnd?: number | null;
  commissionPnd?: number | null;
  bonusPnd?: number | null;
  allowancePnd?: number | null;
  colaPnd?: number | null;
  medicalExpensePnd?: number | null;
  accommodationPnd?: number | null;
  directorRemunerationPnd?: number | null;
  otherAdditionPnd?: number | null;
  accessKConnect?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payrollPreferencesSchema: Schema<PayrollPreferences> = s.object<PayrollPreferences>(
  {
    companyId: s.optional(s.int()),
    isSocialSecurityRegistered: s.optional(s.boolean()),
    employerAccountNumber: s.optionalNullable(s.string()),
    employerAccountBranch: s.optionalNullable(s.string()),
    kCorporateClientCode: s.optionalNullable(s.string()),
    kCorporateAccountNumber: s.optionalNullable(s.string()),
    payrollBankAccountId: s.optionalNullable(s.int()),
    kConnectProductCode: s.optional(s.lazy(() => kConnectProductCodeSchema)),
    overtimePnd: s.optionalNullable(s.int()),
    commissionPnd: s.optionalNullable(s.int()),
    bonusPnd: s.optionalNullable(s.int()),
    allowancePnd: s.optionalNullable(s.int()),
    colaPnd: s.optionalNullable(s.int()),
    medicalExpensePnd: s.optionalNullable(s.int()),
    accommodationPnd: s.optionalNullable(s.int()),
    directorRemunerationPnd: s.optionalNullable(s.int()),
    otherAdditionPnd: s.optionalNullable(s.int()),
    accessKConnect: s.optional(s.boolean()),
    _keysMap: {
      kConnectProductCode: "kConnect_ProductCode",
      overtimePnd: "overtimePND",
      commissionPnd: "commissionPND",
      bonusPnd: "bonusPND",
      allowancePnd: "allowancePND",
      colaPnd: "colaPND",
      medicalExpensePnd: "medicalExpensePND",
      accommodationPnd: "accommodationPND",
      directorRemunerationPnd: "directorRemunerationPND",
      otherAdditionPnd: "otherAdditionPND",
    },
  },
  { additionalProperties: s.json() },
);
