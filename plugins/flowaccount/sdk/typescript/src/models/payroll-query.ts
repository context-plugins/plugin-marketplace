import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customDocumentModelSchema, type CustomDocumentModel } from "./custom-document-model.js";
import { dataRangeSchema, type DataRange } from "./data-range.js";
import { dateTypeSchema, type DateType } from "./date-type.js";
import { documentTypesSchema, type DocumentTypes } from "./document-types.js";
import { filterOptionsSchema, type FilterOptions } from "./filter-options.js";
import { listItemSchema, type ListItem } from "./list-item.js";
import { payrollTypeSchema, type PayrollType } from "./payroll-type.js";
import { reportTypesSchema, type ReportTypes } from "./report-types.js";
import { sortOptionsSchema, type SortOptions } from "./sort-options.js";

export type PayrollQuery = {
  pageSize?: number | null;
  currentPage?: number | null;
  totalRecords?: number;
  /** 1 = PublishDate 3 = PaymentDate 5 = ExpenseDate 7 = TransitionDate */
  dateType?: DateType;
  startDate?: Date | null;
  endDate?: Date | null;
  day?: number;
  month?: number;
  year?: number;
  /**
   * 1 = CurrentMonth 3 = PreviousMonth 5 = Manual 7 = CurrentYear 9 = PreviousYear 11 = AsAt 13 =
   * Grid 15 = FiscalYear 17 = Months 19 = Days
   */
  range?: DataRange;
  isFirstCurrent?: number;
  hashTags?: string[] | null;
  /**
   * 10 = Sales 11 = SalesTeamReport 12 = SalesTax 13 = SimpleSales 14 = AccountReceivable 15 =
   * AccountReceivableAging 20 = Purchase 21 = PurchaseTax 22 = AccountPayable 23 =
   * AccountPayableAging 24 = PurchaseByProduct 25 = PurchaseByProductAdvance 30 = Clients 40 =
   * Vendor 50 = PaymentCollection 60 = SalesByProduct 61 = SalesByProductAdvance 62 = SalesByPerson
   * 63 = SalesByPersonAdvance 64 = SalesByCustomer 65 = SalesByCustomerAdvance 70 = Quotation 80 =
   * BillingNote 90 = ReceiveInventory 91 = StocksReport 92 = GroupStockReport 100 = Expense 110 =
   * WithHoldingTax 120 = ProfitAndLossOneMonth 121 = ProfitAndLossMultipleMonth 130 = Receipt 140 =
   * CreditNote 150 = DebitNote 160 = TaxInvoice 170 = Payroll 171 = PayrollSummary 172 =
   * PayrollGroup 173 = PayrollSscSummary 180 = ContactGrid 190 = ProductGrid 200 = ExportContact
   * 210 = ExportProduct 220 = Receivables 240 = Payables 260 = GeneralLedger 270 = JournalEntry 280
   * = Payment 290 = InputTax 291 = OutputTax 292 = FixedAsset 293 = Depreciation 300 = PaymentSlip
   */
  reportType?: ReportTypes;
  filter?: FilterOptions[] | null;
  sortBy?: SortOptions[] | null;
  totalValue?: number;
  totalVat?: number;
  isReceived?: boolean;
  documentType?: DocumentTypes[] | null;
  revenue?: ListItem[] | null;
  expenses?: ListItem[] | null;
  previousMonths?: ListItem[] | null;
  previousYears?: ListItem[] | null;
  customDocumentModels?: CustomDocumentModel[] | null;
  fromPayroll?: boolean;
  /** 1 = FirstVersion 3 = PayrollPayment 5 = Kconnect 7 = Cash 9 = Transfer */
  payrollType?: PayrollType;
};

export const payrollQuerySchema: Schema<PayrollQuery> = s.object<PayrollQuery>({
  pageSize: s.optionalNullable(s.int()),
  currentPage: s.optionalNullable(s.int()),
  totalRecords: s.optional(s.int()),
  dateType: s.optional(s.lazy(() => dateTypeSchema)),
  startDate: s.optionalNullable(s.dateTime()),
  endDate: s.optionalNullable(s.dateTime()),
  day: s.optional(s.int()),
  month: s.optional(s.int()),
  year: s.optional(s.int()),
  range: s.optional(s.lazy(() => dataRangeSchema)),
  isFirstCurrent: s.optional(s.int()),
  hashTags: s.optionalNullable(s.array(s.string())),
  reportType: s.optional(s.lazy(() => reportTypesSchema)),
  filter: s.optionalNullable(s.array(s.lazy(() => filterOptionsSchema))),
  sortBy: s.optionalNullable(s.array(s.lazy(() => sortOptionsSchema))),
  totalValue: s.optional(s.float64()),
  totalVat: s.optional(s.float64()),
  isReceived: s.optional(s.boolean()),
  documentType: s.optionalNullable(s.array(s.lazy(() => documentTypesSchema))),
  revenue: s.optionalNullable(s.array(s.lazy(() => listItemSchema))),
  expenses: s.optionalNullable(s.array(s.lazy(() => listItemSchema))),
  previousMonths: s.optionalNullable(s.array(s.lazy(() => listItemSchema))),
  previousYears: s.optionalNullable(s.array(s.lazy(() => listItemSchema))),
  customDocumentModels: s.optionalNullable(s.array(s.lazy(() => customDocumentModelSchema))),
  fromPayroll: s.optional(s.boolean()),
  payrollType: s.optional(s.lazy(() => payrollTypeSchema)),
  _keysMap: {
    totalVat: "totalVAT",
  },
});
