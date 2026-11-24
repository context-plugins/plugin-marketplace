import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bankInternalSchema, bankSchema, type Bank } from "./bank.js";
import { companyInternalSchema, companySchema, type Company } from "./company.js";
import {
  conditionsOfWithholdingTaxSchema,
  type ConditionsOfWithholdingTax,
} from "./conditions-of-withholding-tax.js";
import { departmentInternalSchema, departmentSchema, type Department } from "./department.js";
import { employeeTypesSchema, type EmployeeTypes } from "./employee-types.js";
import { galleryInternalSchema, gallerySchema, type Gallery } from "./gallery.js";
import { genderPrefixSchema, type GenderPrefix } from "./gender-prefix.js";
import { PaidPeriod, paidPeriodSchema } from "./paid-period.js";
import { payrollDetailInternalSchema, payrollDetailSchema, type PayrollDetail } from "./payroll-detail.js";

export type Employee = {
  id?: number;
  companyId?: number | null;
  /** 1 = Mr 3 = Mrs 5 = Ms */
  prefix?: GenderPrefix;
  firstName?: string | null;
  lastName?: string | null;
  salary?: number;
  identitficationNumber?: string | null;
  passportNumber?: string | null;
  profileImage?: string | null;
  mobile?: string | null;
  commission?: number | null;
  remarks?: string | null;
  title?: string | null;
  galleryId?: number | null;
  bankId?: number | null;
  branch?: string | null;
  accountNumber?: string | null;
  accountType?: number | null;
  startDate?: Date | null;
  endDate?: Date | null;
  internalNote?: string | null;
  isActive?: boolean | null;
  createdOn?: Date | null;
  modifiedOn?: Date | null;
  createdBy?: number | null;
  modifiedBy?: number | null;
  type?: EmployeeTypes;
  code?: string | null;
  salaryType?: number;
  socialSecurityNumber?: string | null;
  employerSocialSecurityRate?: number;
  employeeSocialSecurityRate?: number;
  email?: string | null;
  dob?: Date | null;
  address?: string | null;
  contactName?: string | null;
  contactNumber?: string | null;
  contactRelationship?: string | null;
  office?: string | null;
  socialSecurityStatus?: number | null;
  methodPayment?: number | null;
  secondaryEmail?: string | null;
  isDelete?: boolean;
  socialSecurityValue?: number;
  withholdingTax?: number;
  isHeadOffice?: boolean;
  companyBranch?: string | null;
  maritalStatus?: number;
  currentAddress?: string | null;
  departmentId?: number | null;
  firstNameForeign?: string | null;
  lastNameForeign?: string | null;
  isSocialSecurityRegistered?: boolean;
  bankBranchCode?: string | null;
  idCard?: number | null;
  householdRegistration?: number | null;
  nickname?: string | null;
  nicknameForeign?: string | null;
  lineId?: string | null;
  conditionsWithholdingTax?: ConditionsOfWithholdingTax;
  /** @default PaidPeriod._1 */
  paidPeriod?: PaidPeriod;
  bank?: Bank;
  company?: Company;
  gallery?: Gallery;
  galleryIdCard?: Gallery;
  galleryHouseholdRegistration?: Gallery;
  payrollDetail?: PayrollDetail[] | null;
  department?: Department;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const employeeProperties: s.Shape<Employee> = {
  id: s.optional(s.int()),
  companyId: s.optionalNullable(s.int()),
  prefix: s.optional(s.lazy(() => genderPrefixSchema)),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  salary: s.optional(s.float64()),
  identitficationNumber: s.optionalNullable(s.string()),
  passportNumber: s.optionalNullable(s.string()),
  profileImage: s.optionalNullable(s.string()),
  mobile: s.optionalNullable(s.string()),
  commission: s.optionalNullable(s.float64()),
  remarks: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  galleryId: s.optionalNullable(s.int()),
  bankId: s.optionalNullable(s.int()),
  branch: s.optionalNullable(s.string()),
  accountNumber: s.optionalNullable(s.string()),
  accountType: s.optionalNullable(s.int()),
  startDate: s.optionalNullable(s.dateTime()),
  endDate: s.optionalNullable(s.dateTime()),
  internalNote: s.optionalNullable(s.string()),
  isActive: s.optionalNullable(s.boolean()),
  createdOn: s.optionalNullable(s.dateTime()),
  modifiedOn: s.optionalNullable(s.dateTime()),
  createdBy: s.optionalNullable(s.int()),
  modifiedBy: s.optionalNullable(s.int()),
  type: s.optional(s.lazy(() => employeeTypesSchema)),
  code: s.optionalNullable(s.string()),
  salaryType: s.optional(s.int()),
  socialSecurityNumber: s.optionalNullable(s.string()),
  employerSocialSecurityRate: s.optional(s.int()),
  employeeSocialSecurityRate: s.optional(s.int()),
  email: s.optionalNullable(s.string()),
  dob: s.optionalNullable(s.dateTime()),
  address: s.optionalNullable(s.string()),
  contactName: s.optionalNullable(s.string()),
  contactNumber: s.optionalNullable(s.string()),
  contactRelationship: s.optionalNullable(s.string()),
  office: s.optionalNullable(s.string()),
  socialSecurityStatus: s.optionalNullable(s.int()),
  methodPayment: s.optionalNullable(s.int()),
  secondaryEmail: s.optionalNullable(s.string()),
  isDelete: s.optional(s.boolean()),
  socialSecurityValue: s.optional(s.float64()),
  withholdingTax: s.optional(s.float64()),
  isHeadOffice: s.optional(s.boolean()),
  companyBranch: s.optionalNullable(s.string()),
  maritalStatus: s.optional(s.int()),
  currentAddress: s.optionalNullable(s.string()),
  departmentId: s.optionalNullable(s.int()),
  firstNameForeign: s.optionalNullable(s.string()),
  lastNameForeign: s.optionalNullable(s.string()),
  isSocialSecurityRegistered: s.optional(s.boolean()),
  bankBranchCode: s.optionalNullable(s.string()),
  idCard: s.optionalNullable(s.int()),
  householdRegistration: s.optionalNullable(s.int()),
  nickname: s.optionalNullable(s.string()),
  nicknameForeign: s.optionalNullable(s.string()),
  lineId: s.optionalNullable(s.string()),
  conditionsWithholdingTax: s.optional(s.lazy(() => conditionsOfWithholdingTaxSchema)),
  paidPeriod: s.defaulted(paidPeriodSchema, PaidPeriod._1),
  bank: s.optional(s.lazy(() => bankInternalSchema)),
  company: s.optional(s.lazy(() => companyInternalSchema)),
  gallery: s.optional(s.lazy(() => galleryInternalSchema)),
  galleryIdCard: s.optional(s.lazy(() => galleryInternalSchema)),
  galleryHouseholdRegistration: s.optional(s.lazy(() => galleryInternalSchema)),
  payrollDetail: s.optionalNullable(s.array(s.lazy(() => payrollDetailInternalSchema))),
  department: s.optional(s.lazy(() => departmentInternalSchema)),
};

export const employeeInternalSchema: Schema<Employee> = s.object<Employee>(employeeProperties, {
  additionalProperties: s.json(),
});

export const employeeSchema: Schema<Employee> = s.lazySchema(() =>
  s.object<Employee>(
    {
      ...employeeProperties,
      bank: s.optional(s.lazy(() => bankSchema)),
      company: s.optional(s.lazy(() => companySchema)),
      gallery: s.optional(s.lazy(() => gallerySchema)),
      galleryIdCard: s.optional(s.lazy(() => gallerySchema)),
      galleryHouseholdRegistration: s.optional(s.lazy(() => gallerySchema)),
      payrollDetail: s.optionalNullable(s.array(s.lazy(() => payrollDetailSchema))),
      department: s.optional(s.lazy(() => departmentSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
