import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enumeration of entities that map from bipaas. */
export const ExportEntity = {
  Bill: "BILL",
  Customer: "CUSTOMER",
  ChartOfAccount: "CHART_OF_ACCOUNT",
  Department: "DEPARTMENT",
  Invoice: "INVOICE",
  Item: "ITEM",
  Job: "JOB",
  Vendor: "VENDOR",
  Payment: "PAYMENT",
  Location: "LOCATION",
  Employee: "EMPLOYEE",
  AccountingClass: "ACCOUNTING_CLASS",
  FundTransfer: "FUND_TRANSFER",
  PaymentReceived: "PAYMENT_RECEIVED",
  VendorCredit: "VENDOR_CREDIT",
  CreditMemo: "CREDIT_MEMO",
  PaymentTerm: "PAYMENT_TERM",
  BillLineItem: "BILL_LINE_ITEM",
  User: "USER",
  CustomerCreditLineItem: "CUSTOMER_CREDIT_LINE_ITEM",
  AchPaymentHistory: "ACH_PAYMENT_HISTORY",
  InvoiceLineItem: "INVOICE_LINE_ITEM",
  ReceivableCustomField: "RECEIVABLE_CUSTOM_FIELD",
  BillPayment: "BILL_PAYMENT",
  InvoicePayment: "INVOICE_PAYMENT",
  VendorCreditLineItem: "VENDOR_CREDIT_LINE_ITEM",
  AmortizationSchedule: "AMORTIZATION_SCHEDULE",
  JournalEntry: "JOURNAL_ENTRY",
  IntegrationStatus: "INTEGRATION_STATUS",
  CardTransaction: "CARD_TRANSACTION",
  Reimbursement: "REIMBURSEMENT",
  PurchaseOrder: "PURCHASE_ORDER",
  PurchaseOrderLineItem: "PURCHASE_ORDER_LINE_ITEM",
  PaymentFees: "PAYMENT_FEES",
  Undefined: "UNDEFINED",
} as const;
export type ExportEntity = (typeof ExportEntity)[keyof typeof ExportEntity] | (string & {});

export const exportEntitySchema: EnumSchema<ExportEntity> = s.enumOf<ExportEntity>(ExportEntity);
