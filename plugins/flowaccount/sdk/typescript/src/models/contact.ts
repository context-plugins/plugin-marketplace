import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactGroupsSchema, type ContactGroups } from "./contact-groups.js";
import { contactTypesSchema, type ContactTypes } from "./contact-types.js";

export type Contact = {
  id?: number;
  nameLocal?: string | null;
  nameForeign?: string | null;
  addressLocal?: string | null;
  addressForeign?: string | null;
  addressLocalLine2?: string | null;
  addressForeignLine2?: string | null;
  addressLocalLine3?: string | null;
  addressForeignLine3?: string | null;
  branch?: string | null;
  branchForeign?: string | null;
  companyTaxId?: string | null;
  fax?: string | null;
  phone1?: string | null;
  phone2?: string | null;
  phone3?: string | null;
  websites?: string | null;
  createdOn?: Date;
  modifiedOn?: Date;
  modifiedBy?: number;
  isDelete?: boolean;
  isDefault?: boolean;
  logoImage?: string | null;
  defaultCreditDays?: number | null;
  vatRate?: number;
  email?: string | null;
  contactPerson?: string | null;
  isActive?: boolean;
  /** 0 = OwnCompany 3 = Client 5 = Vendor 7 = VendorAndClient 9 = ExpenseVendor */
  contactType?: ContactTypes;
  /** 1 = Individual 3 = Juristic 9 = Undefined */
  contactGroup?: ContactGroups;
  remarks?: string | null;
  galleryId?: number | null;
  branchCode?: string | null;
  transactionId?: string | null;
  resetTransactionId?: number | null;
  contactCode?: string | null;
  internalNotes?: string | null;
  shippingAddress?: string | null;
  zipCode?: string | null;
  swiftCode?: string | null;
  bankAddress?: string | null;
  useForeignBank?: boolean | null;
  isMigrate?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactProperties: s.Shape<Contact> = {
  id: s.optional(s.int()),
  nameLocal: s.optionalNullable(s.string()),
  nameForeign: s.optionalNullable(s.string()),
  addressLocal: s.optionalNullable(s.string()),
  addressForeign: s.optionalNullable(s.string()),
  addressLocalLine2: s.optionalNullable(s.string()),
  addressForeignLine2: s.optionalNullable(s.string()),
  addressLocalLine3: s.optionalNullable(s.string()),
  addressForeignLine3: s.optionalNullable(s.string()),
  branch: s.optionalNullable(s.string()),
  branchForeign: s.optionalNullable(s.string()),
  companyTaxId: s.optionalNullable(s.string()),
  fax: s.optionalNullable(s.string()),
  phone1: s.optionalNullable(s.string()),
  phone2: s.optionalNullable(s.string()),
  phone3: s.optionalNullable(s.string()),
  websites: s.optionalNullable(s.string()),
  createdOn: s.optional(s.dateTime()),
  modifiedOn: s.optional(s.dateTime()),
  modifiedBy: s.optional(s.int()),
  isDelete: s.optional(s.boolean()),
  isDefault: s.optional(s.boolean()),
  logoImage: s.optionalNullable(s.string()),
  defaultCreditDays: s.optionalNullable(s.int()),
  vatRate: s.optional(s.int()),
  email: s.optionalNullable(s.string()),
  contactPerson: s.optionalNullable(s.string()),
  isActive: s.optional(s.boolean()),
  contactType: s.optional(s.lazy(() => contactTypesSchema)),
  contactGroup: s.optional(s.lazy(() => contactGroupsSchema)),
  remarks: s.optionalNullable(s.string()),
  galleryId: s.optionalNullable(s.int()),
  branchCode: s.optionalNullable(s.string()),
  transactionId: s.optionalNullable(s.string()),
  resetTransactionId: s.optionalNullable(s.int()),
  contactCode: s.optionalNullable(s.string()),
  internalNotes: s.optionalNullable(s.string()),
  shippingAddress: s.optionalNullable(s.string()),
  zipCode: s.optionalNullable(s.string()),
  swiftCode: s.optionalNullable(s.string()),
  bankAddress: s.optionalNullable(s.string()),
  useForeignBank: s.optionalNullable(s.boolean()),
  isMigrate: s.optional(s.boolean()),
};

export const contactInternalSchema: Schema<Contact> = s.object<Contact>(contactProperties, {
  additionalProperties: s.json(),
});

export const contactSchema: Schema<Contact> = s.lazySchema(() =>
  s.object<Contact>(
    {
      ...contactProperties,
      branchCode: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
      transactionId: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
