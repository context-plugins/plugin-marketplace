import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inlineProductItemSchema, type InlineProductItem } from "./inline-product-item.js";
import { upgradeDocumentSchema, type UpgradeDocument } from "./upgrade-document.js";

export type InlineDocument = {
  recordId?: number;
  contactCode?: string | null;
  contactName?: string | null;
  contactAddress?: string | null;
  contactTaxId?: string | null;
  contactBranch?: string | null;
  contactPerson?: string | null;
  contactEmail?: string | null;
  contactNumber?: string | null;
  contactZipCode?: string | null;
  contactGroup?: number;
  publishedOn?: Date;
  creditType?: number;
  creditDays?: number;
  dueDate?: Date;
  salesName?: string | null;
  projectName?: string | null;
  reference?: string | null;
  isVatInclusive?: boolean;
  useReceiptDeduction?: boolean;
  subTotal?: number;
  discountPercentage?: number;
  discountAmount?: number;
  totalAfterDiscount?: number;
  isVat?: boolean;
  vatAmount?: number;
  grandTotal?: number;
  documentShowWithholdingTax?: boolean;
  documentWithholdingTaxPercentage?: number;
  documentWithholdingTaxAmount?: number;
  documentDeductionType?: number;
  documentDeductionAmount?: number;
  remarks?: string | null;
  internalNotes?: string | null;
  showSignatureOrStamp?: boolean;
  documentStructureType?: string | null;
  externalId?: string | null;
  saleAndPurchaseChannel?: string | null;
  rowIndex?: string | null;
  discountType?: number;
  useInlineDiscount?: boolean;
  useInlineVat?: boolean;
  exemptAmount?: number | null;
  vatableAmount?: number | null;
  items?: InlineProductItem[] | null;
  documentReference?: UpgradeDocument[] | null;
};

export const inlineDocumentSchema: Schema<InlineDocument> = s.object<InlineDocument>({
  recordId: s.optional(s.int()),
  contactCode: s.optionalNullable(s.string()),
  contactName: s.optionalNullable(s.string()),
  contactAddress: s.optionalNullable(s.string()),
  contactTaxId: s.optionalNullable(s.string()),
  contactBranch: s.optionalNullable(s.string()),
  contactPerson: s.optionalNullable(s.string()),
  contactEmail: s.optionalNullable(s.string()),
  contactNumber: s.optionalNullable(s.string()),
  contactZipCode: s.optionalNullable(s.string()),
  contactGroup: s.optional(s.int()),
  publishedOn: s.optional(s.dateTime()),
  creditType: s.optional(s.int()),
  creditDays: s.optional(s.int()),
  dueDate: s.optional(s.dateTime()),
  salesName: s.optionalNullable(s.string()),
  projectName: s.optionalNullable(s.string()),
  reference: s.optionalNullable(s.string()),
  isVatInclusive: s.optional(s.boolean()),
  useReceiptDeduction: s.optional(s.boolean()),
  subTotal: s.optional(s.float64()),
  discountPercentage: s.optional(s.int()),
  discountAmount: s.optional(s.float64()),
  totalAfterDiscount: s.optional(s.float64()),
  isVat: s.optional(s.boolean()),
  vatAmount: s.optional(s.float64()),
  grandTotal: s.optional(s.float64()),
  documentShowWithholdingTax: s.optional(s.boolean()),
  documentWithholdingTaxPercentage: s.optional(s.int()),
  documentWithholdingTaxAmount: s.optional(s.float64()),
  documentDeductionType: s.optional(s.int()),
  documentDeductionAmount: s.optional(s.float64()),
  remarks: s.optionalNullable(s.string()),
  internalNotes: s.optionalNullable(s.string()),
  showSignatureOrStamp: s.optional(s.boolean()),
  documentStructureType: s.optionalNullable(s.string()),
  externalId: s.optionalNullable(s.string()),
  saleAndPurchaseChannel: s.optionalNullable(s.string()),
  rowIndex: s.optionalNullable(s.string()),
  discountType: s.optional(s.int()),
  useInlineDiscount: s.optional(s.boolean()),
  useInlineVat: s.optional(s.boolean()),
  exemptAmount: s.optionalNullable(s.float64()),
  vatableAmount: s.optionalNullable(s.float64()),
  items: s.optionalNullable(s.array(s.lazy(() => inlineProductItemSchema))),
  documentReference: s.optionalNullable(s.array(s.lazy(() => upgradeDocumentSchema))),
});
