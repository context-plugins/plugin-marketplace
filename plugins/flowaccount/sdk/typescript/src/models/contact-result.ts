import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { contactGroupsSchema, type ContactGroups } from "./contact-groups.js";
import { contactTypesSchema, type ContactTypes } from "./contact-types.js";
import { mediaInternalSchema, mediaSchema, type Media } from "./media.js";

export type ContactResult = {
  id?: number;
  /** 0 = OwnCompany 3 = Client 5 = Vendor 7 = VendorAndClient 9 = ExpenseVendor */
  contactType?: ContactTypes;
  code?: string | null;
  name?: string | null;
  addressLocal?: string | null;
  addressLocalLine2?: string | null;
  addressLocalLine3?: string | null;
  taxId?: string | null;
  branch?: string | null;
  branchCode?: string | null;
  contactPerson?: string | null;
  email?: string | null;
  mobile?: string | null;
  defaultCreditDays?: number | null;
  office?: string | null;
  fax?: string | null;
  website?: string | null;
  shippingAddress?: string | null;
  internalNotes?: string | null;
  remarks?: string | null;
  zipCode?: string | null;
  bankId?: number | null;
  bankName?: string | null;
  bankBranch?: string | null;
  bankAccountNumber?: string | null;
  swiftCode?: string | null;
  bankAddress?: string | null;
  useForeignBank?: boolean;
  bankAccountType?: BankAccountType;
  /** 1 = Individual 3 = Juristic 9 = Undefined */
  contactGroup?: ContactGroups;
  media?: Media[] | null;
  qrCode?: Media;
};

const contactResultProperties: s.Shape<ContactResult> = {
  id: s.optional(s.int()),
  contactType: s.optional(s.lazy(() => contactTypesSchema)),
  code: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  addressLocal: s.optionalNullable(s.string()),
  addressLocalLine2: s.optionalNullable(s.string()),
  addressLocalLine3: s.optionalNullable(s.string()),
  taxId: s.optionalNullable(s.string()),
  branch: s.optionalNullable(s.string()),
  branchCode: s.optionalNullable(s.string()),
  contactPerson: s.optionalNullable(s.string()),
  email: s.optionalNullable(s.string()),
  mobile: s.optionalNullable(s.string()),
  defaultCreditDays: s.optionalNullable(s.int()),
  office: s.optionalNullable(s.string()),
  fax: s.optionalNullable(s.string()),
  website: s.optionalNullable(s.string()),
  shippingAddress: s.optionalNullable(s.string()),
  internalNotes: s.optionalNullable(s.string()),
  remarks: s.optionalNullable(s.string()),
  zipCode: s.optionalNullable(s.string()),
  bankId: s.optionalNullable(s.int()),
  bankName: s.optionalNullable(s.string()),
  bankBranch: s.optionalNullable(s.string()),
  bankAccountNumber: s.optionalNullable(s.string()),
  swiftCode: s.optionalNullable(s.string()),
  bankAddress: s.optionalNullable(s.string()),
  useForeignBank: s.optional(s.boolean()),
  bankAccountType: s.optional(s.lazy(() => bankAccountTypeSchema)),
  contactGroup: s.optional(s.lazy(() => contactGroupsSchema)),
  media: s.optionalNullable(s.array(s.lazy(() => mediaInternalSchema))),
  qrCode: s.optional(s.lazy(() => mediaInternalSchema)),
};

export const contactResultInternalSchema: Schema<ContactResult> =
  s.object<ContactResult>(contactResultProperties);

export const contactResultSchema: Schema<ContactResult> = s.lazySchema(() =>
  s.object<ContactResult>({
    ...contactResultProperties,
    media: s.optionalNullable(s.array(s.lazy(() => mediaSchema))),
    qrCode: s.optional(s.lazy(() => mediaSchema)),
  }),
);
