import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { businessTypeSchema, type BusinessType } from "./business-type.js";
import { documentTemplatesSchema, type DocumentTemplates } from "./document-templates.js";
import { runningNumberTypeSchema, type RunningNumberType } from "./running-number-type.js";
import { templateFontSchema, type TemplateFont } from "./template-font.js";

export type CompanyPreferences = {
  companyId?: number;
  /** @default false */
  showWithHolding?: boolean;
  invoicePrefix: string;
  quotationPrefix: string;
  billingNotePrefix: string;
  receiptPrefix: string;
  purchaseOrderPrefix: string;
  cashInvoicePrefix: string;
  receivableInvoicePrefix: string;
  cashInvoiceStartingNumber?: number;
  receiptStartingNumber?: number;
  quotationStartingNumber?: number;
  billingNoteStartingNumber?: number;
  purchaseOrderStartingNumber?: number;
  purchaseOrderTitleEn: string;
  quotationTitleEn: string;
  billingNoteTitleEn: string;
  invoiceTitleEn: string;
  receiptTitleEn: string;
  paymentSlipTitleEn: string;
  purchaseOrderTitleTh: string;
  quotationTitleTh: string;
  billingNoteTitleTh: string;
  invoiceTitleTh: string;
  receiptTitleTh: string;
  paymentSlipTitleTh: string;
  /** 1 = SellingProducts 3 = SellingServices 5 = SellingBoth 7 = Custom */
  businessType?: BusinessType;
  termsAgreement?: string | null;
  defaultRemarks?: string | null;
  invoiceStartingNumber?: number;
  cashInvoiceTitleEn: string;
  cashInvoiceTitleTh: string;
  receivableInvoiceTitleTh: string;
  receivableInvoiceTitleEn: string;
  /** 1 = Default 3 = YearMonth 5 = Month 7 = Year 9 = FreeHand */
  runningNumberType?: RunningNumberType;
  purchaseOrderStartingYear?: number | null;
  quotationStartingYear?: number | null;
  billingNoteStartingYear?: number | null;
  invoiceStartingYear?: number | null;
  cashInvoiceStartingYear?: number | null;
  receiptStartingYear?: number | null;
  purchaseOrderStartingMonth?: number | null;
  quotationStartingMonth?: number | null;
  billingNoteStartingMonth?: number | null;
  invoiceStartingMonth?: number | null;
  cashInvoiceStartingMonth?: number | null;
  receiptStartingMonth?: number | null;
  /** @default false */
  settingsInitiated?: boolean;
  runningNumberSettingsModifiedOn?: Date | null;
  withHoldingTaxPrefix: string;
  withHoldingTaxStartingNumber?: number;
  withHoldingTaxStartingMonth?: number | null;
  withHoldingTaxStartingYear?: number | null;
  /**
   * 1 = Default 3 = Template1 5 = Template2 7 = Template3 9 = Template4 11 = Template5 13 =
   * TemplateA5 15 = Template9x11withOriginal 17 = Template8 101 = NativeDefault 103 = Native1 105 =
   * Native3 107 = Native5 109 = Native7 111 = Native9 113 = Native11 115 = Native13 201 = Thermal1
   * 203 = Thermal2 205 = SocialSlip 301 = ShortCA1 303 = ShortCA2 305 = ShortCA3
   */
  documentTemplates?: DocumentTemplates;
  /** @default true */
  printColor?: boolean;
  /** 1 = ChatThai 3 = Rsu */
  templateFont?: TemplateFont;
  /** @default false */
  printOneInvoice?: boolean;
  remarks?: string | null;
  emailMessageTemplate?: string | null;
  purchasePrefix: string;
  purchaseStartingNumber?: number;
  purchaseTitleEn: string;
  purchaseTitleTh: string;
  purchaseStartingYear?: number | null;
  purchaseStartingMonth?: number | null;
  adjustInventoryPrefix: string;
  adjustInventoryStartingNumber?: number;
  adjustInventoryStartingMonth?: number | null;
  adjustInventoryStartingYear?: number | null;
  expensePrefix: string;
  expenseStartingNumber?: number;
  expenseStartingMonth?: number | null;
  expenseStartingYear?: number | null;
  paymentSlipPrefix: string;
  paymentSlipStartingNumber?: number;
  paymentSlipStartingYear?: number | null;
  paymentSlipStartingMonth?: number | null;
  cashInvoiceRunningNumberModifiedOn?: Date | null;
  purchaseOrderRunningNumberModifiedOn?: Date | null;
  quotationRunningNumberModifiedOn?: Date | null;
  billingNoteRunningNumberModifiedOn?: Date | null;
  invoiceRunningNumberModifiedOn?: Date | null;
  purchaseRunningNumberModifiedOn?: Date | null;
  receivableInvoiceRunningNumberModifiedOn?: Date | null;
  paymentSlipRunningNumberModifiedOn?: Date | null;
  rubberStampUrl?: string | null;
  creditNotePrefix: string;
  creditNoteStartingNumber?: number;
  creditNoteStartingMonth?: number | null;
  creditNoteStartingYear?: number | null;
  creditNoteRunningNumberModifiedOn?: Date | null;
  creditNoteTitleEn: string;
  creditNoteTitleTh: string;
  debitNotePrefix: string;
  debitNoteStartingNumber?: number;
  debitNoteStartingMonth?: number | null;
  debitNoteStartingYear?: number | null;
  debitNoteRunningNumberModifiedOn?: Date | null;
  debitNoteTitleEn: string;
  debitNoteTitleTh: string;
  receiptRunningNumberModifiedOn?: Date | null;
  receivableInvoiceStartingNumber?: number;
  receivableInvoiceStartingMonth?: number | null;
  receivableInvoiceStartingYear?: number | null;
  /** @default false */
  usePartialReceipt?: boolean;
  /** @default false */
  useCashInvoice?: boolean;
  /** @default false */
  useShortCashInvoice?: boolean;
  /** 1 = Default 3 = YearMonth 5 = Month 7 = Year 9 = FreeHand */
  generalLedgerRunningNumberType?: RunningNumberType;
  journalVoucherPrefix: string;
  purchaseVoucherPrefix: string;
  purchaseVoucherRunningNumberModifiedOn?: Date | null;
  salesVoucherPrefix: string;
  salesVoucherRunningNumberModifiedOn?: Date | null;
  paymentVoucherPrefix: string;
  paymentVoucherRunningNumberModifiedOn?: Date | null;
  receivedVoucherPrefix: string;
  receivedVoucherRunningNumberModifiedOn?: Date | null;
  conversionBalancePrefix: string;
  conversionBalanceRunningNumberModifiedOn?: Date | null;
  eTaxEmail?: string | null;
  /**
   * 1 = Default 3 = Template1 5 = Template2 7 = Template3 9 = Template4 11 = Template5 13 =
   * TemplateA5 15 = Template9x11withOriginal 17 = Template8 101 = NativeDefault 103 = Native1 105 =
   * Native3 107 = Native5 109 = Native7 111 = Native9 113 = Native11 115 = Native13 201 = Thermal1
   * 203 = Thermal2 205 = SocialSlip 301 = ShortCA1 303 = ShortCA2 305 = ShortCA3
   */
  shortCashInvoiceTemplates?: DocumentTemplates;
  useBillingNoteAccountingRule?: boolean;
  billingNoteAccountingRuleModifiedOn?: Date | null;
  templateFontSize?: number | null;
  /** @default false */
  useMultiCurrency?: boolean;
  expenseTitleTh?: string | null;
  expenseTitleEn?: string | null;
  withHoldingTaxTitleTh?: string | null;
  withHoldingTaxTitleEn?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyPreferencesProperties: s.Shape<CompanyPreferences> = {
  companyId: s.optional(s.int()),
  showWithHolding: s.defaulted(s.boolean(), false),
  invoicePrefix: s.string(),
  quotationPrefix: s.string(),
  billingNotePrefix: s.string(),
  receiptPrefix: s.string(),
  purchaseOrderPrefix: s.string(),
  cashInvoicePrefix: s.string(),
  receivableInvoicePrefix: s.string(),
  cashInvoiceStartingNumber: s.optional(s.int()),
  receiptStartingNumber: s.optional(s.int()),
  quotationStartingNumber: s.optional(s.int()),
  billingNoteStartingNumber: s.optional(s.int()),
  purchaseOrderStartingNumber: s.optional(s.int()),
  purchaseOrderTitleEn: s.string(),
  quotationTitleEn: s.string(),
  billingNoteTitleEn: s.string(),
  invoiceTitleEn: s.string(),
  receiptTitleEn: s.string(),
  paymentSlipTitleEn: s.string(),
  purchaseOrderTitleTh: s.string(),
  quotationTitleTh: s.string(),
  billingNoteTitleTh: s.string(),
  invoiceTitleTh: s.string(),
  receiptTitleTh: s.string(),
  paymentSlipTitleTh: s.string(),
  businessType: s.optional(s.lazy(() => businessTypeSchema)),
  termsAgreement: s.optionalNullable(s.string()),
  defaultRemarks: s.optionalNullable(s.string()),
  invoiceStartingNumber: s.optional(s.int()),
  cashInvoiceTitleEn: s.string(),
  cashInvoiceTitleTh: s.string(),
  receivableInvoiceTitleTh: s.string(),
  receivableInvoiceTitleEn: s.string(),
  runningNumberType: s.optional(s.lazy(() => runningNumberTypeSchema)),
  purchaseOrderStartingYear: s.optionalNullable(s.int()),
  quotationStartingYear: s.optionalNullable(s.int()),
  billingNoteStartingYear: s.optionalNullable(s.int()),
  invoiceStartingYear: s.optionalNullable(s.int()),
  cashInvoiceStartingYear: s.optionalNullable(s.int()),
  receiptStartingYear: s.optionalNullable(s.int()),
  purchaseOrderStartingMonth: s.optionalNullable(s.int()),
  quotationStartingMonth: s.optionalNullable(s.int()),
  billingNoteStartingMonth: s.optionalNullable(s.int()),
  invoiceStartingMonth: s.optionalNullable(s.int()),
  cashInvoiceStartingMonth: s.optionalNullable(s.int()),
  receiptStartingMonth: s.optionalNullable(s.int()),
  settingsInitiated: s.defaulted(s.boolean(), false),
  runningNumberSettingsModifiedOn: s.optionalNullable(s.dateTime()),
  withHoldingTaxPrefix: s.string(),
  withHoldingTaxStartingNumber: s.optional(s.int()),
  withHoldingTaxStartingMonth: s.optionalNullable(s.int()),
  withHoldingTaxStartingYear: s.optionalNullable(s.int()),
  documentTemplates: s.optional(s.lazy(() => documentTemplatesSchema)),
  printColor: s.defaulted(s.boolean(), true),
  templateFont: s.optional(s.lazy(() => templateFontSchema)),
  printOneInvoice: s.defaulted(s.boolean(), false),
  remarks: s.optionalNullable(s.string()),
  emailMessageTemplate: s.optionalNullable(s.string()),
  purchasePrefix: s.string(),
  purchaseStartingNumber: s.optional(s.int()),
  purchaseTitleEn: s.string(),
  purchaseTitleTh: s.string(),
  purchaseStartingYear: s.optionalNullable(s.int()),
  purchaseStartingMonth: s.optionalNullable(s.int()),
  adjustInventoryPrefix: s.string(),
  adjustInventoryStartingNumber: s.optional(s.int()),
  adjustInventoryStartingMonth: s.optionalNullable(s.int()),
  adjustInventoryStartingYear: s.optionalNullable(s.int()),
  expensePrefix: s.string(),
  expenseStartingNumber: s.optional(s.int()),
  expenseStartingMonth: s.optionalNullable(s.int()),
  expenseStartingYear: s.optionalNullable(s.int()),
  paymentSlipPrefix: s.string(),
  paymentSlipStartingNumber: s.optional(s.int()),
  paymentSlipStartingYear: s.optionalNullable(s.int()),
  paymentSlipStartingMonth: s.optionalNullable(s.int()),
  cashInvoiceRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  purchaseOrderRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  quotationRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  billingNoteRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  invoiceRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  purchaseRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  receivableInvoiceRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  paymentSlipRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  rubberStampUrl: s.optionalNullable(s.string()),
  creditNotePrefix: s.string(),
  creditNoteStartingNumber: s.optional(s.int()),
  creditNoteStartingMonth: s.optionalNullable(s.int()),
  creditNoteStartingYear: s.optionalNullable(s.int()),
  creditNoteRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  creditNoteTitleEn: s.string(),
  creditNoteTitleTh: s.string(),
  debitNotePrefix: s.string(),
  debitNoteStartingNumber: s.optional(s.int()),
  debitNoteStartingMonth: s.optionalNullable(s.int()),
  debitNoteStartingYear: s.optionalNullable(s.int()),
  debitNoteRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  debitNoteTitleEn: s.string(),
  debitNoteTitleTh: s.string(),
  receiptRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  receivableInvoiceStartingNumber: s.optional(s.int()),
  receivableInvoiceStartingMonth: s.optionalNullable(s.int()),
  receivableInvoiceStartingYear: s.optionalNullable(s.int()),
  usePartialReceipt: s.defaulted(s.boolean(), false),
  useCashInvoice: s.defaulted(s.boolean(), false),
  useShortCashInvoice: s.defaulted(s.boolean(), false),
  generalLedgerRunningNumberType: s.optional(s.lazy(() => runningNumberTypeSchema)),
  journalVoucherPrefix: s.string(),
  purchaseVoucherPrefix: s.string(),
  purchaseVoucherRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  salesVoucherPrefix: s.string(),
  salesVoucherRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  paymentVoucherPrefix: s.string(),
  paymentVoucherRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  receivedVoucherPrefix: s.string(),
  receivedVoucherRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  conversionBalancePrefix: s.string(),
  conversionBalanceRunningNumberModifiedOn: s.optionalNullable(s.dateTime()),
  eTaxEmail: s.optionalNullable(s.string()),
  shortCashInvoiceTemplates: s.optional(s.lazy(() => documentTemplatesSchema)),
  useBillingNoteAccountingRule: s.optional(s.boolean()),
  billingNoteAccountingRuleModifiedOn: s.optionalNullable(s.dateTime()),
  templateFontSize: s.optionalNullable(s.float64()),
  useMultiCurrency: s.defaulted(s.boolean(), false),
  expenseTitleTh: s.optionalNullable(s.string()),
  expenseTitleEn: s.optionalNullable(s.string()),
  withHoldingTaxTitleTh: s.optionalNullable(s.string()),
  withHoldingTaxTitleEn: s.optionalNullable(s.string()),
  _keysMap: {
    purchaseOrderTitleEn: "purchaseOrderTitleEN",
    quotationTitleEn: "quotationTitleEN",
    billingNoteTitleEn: "billingNoteTitleEN",
    invoiceTitleEn: "invoiceTitleEN",
    receiptTitleEn: "receiptTitleEN",
    paymentSlipTitleEn: "paymentSlipTitleEN",
    purchaseOrderTitleTh: "purchaseOrderTitleTH",
    quotationTitleTh: "quotationTitleTH",
    billingNoteTitleTh: "billingNoteTitleTH",
    invoiceTitleTh: "invoiceTitleTH",
    receiptTitleTh: "receiptTitleTH",
    paymentSlipTitleTh: "paymentSlipTitleTH",
    cashInvoiceTitleEn: "cashInvoiceTitleEN",
    cashInvoiceTitleTh: "cashInvoiceTitleTH",
    receivableInvoiceTitleTh: "receivableInvoiceTitleTH",
    receivableInvoiceTitleEn: "receivableInvoiceTitleEN",
    purchaseTitleEn: "purchaseTitleEN",
    purchaseTitleTh: "purchaseTitleTH",
    creditNoteTitleEn: "creditNoteTitleEN",
    creditNoteTitleTh: "creditNoteTitleTH",
    debitNoteTitleEn: "debitNoteTitleEN",
    debitNoteTitleTh: "debitNoteTitleTH",
    expenseTitleTh: "expenseTitleTH",
    expenseTitleEn: "expenseTitleEN",
    withHoldingTaxTitleTh: "withHoldingTaxTitleTH",
    withHoldingTaxTitleEn: "withHoldingTaxTitleEN",
  },
};

export const companyPreferencesInternalSchema: Schema<CompanyPreferences> = s.object<CompanyPreferences>(
  companyPreferencesProperties,
  { additionalProperties: s.json() },
);

export const companyPreferencesSchema: Schema<CompanyPreferences> = s.lazySchema(() =>
  s.object<CompanyPreferences>(
    {
      ...companyPreferencesProperties,
      invoicePrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      quotationPrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      billingNotePrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      receiptPrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      purchaseOrderPrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      cashInvoicePrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      receivableInvoicePrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      purchaseOrderTitleEn: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      quotationTitleEn: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      billingNoteTitleEn: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      invoiceTitleEn: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      receiptTitleEn: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      paymentSlipTitleEn: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      purchaseOrderTitleTh: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      quotationTitleTh: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      billingNoteTitleTh: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      invoiceTitleTh: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      receiptTitleTh: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      paymentSlipTitleTh: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      termsAgreement: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(2147483647))),
      defaultRemarks: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(2147483647))),
      cashInvoiceTitleEn: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      cashInvoiceTitleTh: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      receivableInvoiceTitleTh: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      receivableInvoiceTitleEn: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      withHoldingTaxPrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      remarks: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(2147483647))),
      emailMessageTemplate: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(2147483647))),
      purchasePrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      purchaseTitleEn: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      purchaseTitleTh: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      adjustInventoryPrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      expensePrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      paymentSlipPrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      rubberStampUrl: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(2147483647))),
      creditNotePrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      creditNoteTitleEn: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      creditNoteTitleTh: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      debitNotePrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      debitNoteTitleEn: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      debitNoteTitleTh: s.string().check(s.minLength(0), s.maxLength(2147483647)),
      journalVoucherPrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      purchaseVoucherPrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      salesVoucherPrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      paymentVoucherPrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      receivedVoucherPrefix: s.string().check(s.minLength(0), s.maxLength(6)),
      conversionBalancePrefix: s.string().check(s.minLength(0), s.maxLength(6)),
    },
    { additionalProperties: s.json() },
  ),
);
