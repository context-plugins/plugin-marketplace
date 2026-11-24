import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 10 = Sales 11 = SalesTeamReport 12 = SalesTax 13 = SimpleSales 14 = AccountReceivable 15 =
 * AccountReceivableAging 20 = Purchase 21 = PurchaseTax 22 = AccountPayable 23 =
 * AccountPayableAging 24 = PurchaseByProduct 25 = PurchaseByProductAdvance 30 = Clients 40 = Vendor
 * 50 = PaymentCollection 60 = SalesByProduct 61 = SalesByProductAdvance 62 = SalesByPerson 63 =
 * SalesByPersonAdvance 64 = SalesByCustomer 65 = SalesByCustomerAdvance 70 = Quotation 80 =
 * BillingNote 90 = ReceiveInventory 91 = StocksReport 92 = GroupStockReport 100 = Expense 110 =
 * WithHoldingTax 120 = ProfitAndLossOneMonth 121 = ProfitAndLossMultipleMonth 130 = Receipt 140 =
 * CreditNote 150 = DebitNote 160 = TaxInvoice 170 = Payroll 171 = PayrollSummary 172 = PayrollGroup
 * 173 = PayrollSscSummary 180 = ContactGrid 190 = ProductGrid 200 = ExportContact 210 =
 * ExportProduct 220 = Receivables 240 = Payables 260 = GeneralLedger 270 = JournalEntry 280 =
 * Payment 290 = InputTax 291 = OutputTax 292 = FixedAsset 293 = Depreciation 300 = PaymentSlip
 */
export const ReportTypes = {
  _10: 10,
  _11: 11,
  _12: 12,
  _13: 13,
  _14: 14,
  _15: 15,
  _20: 20,
  _21: 21,
  _22: 22,
  _23: 23,
  _24: 24,
  _25: 25,
  _30: 30,
  _40: 40,
  _50: 50,
  _60: 60,
  _61: 61,
  _62: 62,
  _63: 63,
  _64: 64,
  _65: 65,
  _70: 70,
  _80: 80,
  _90: 90,
  _91: 91,
  _92: 92,
  _100: 100,
  _110: 110,
  _120: 120,
  _121: 121,
  _130: 130,
  _140: 140,
  _150: 150,
  _160: 160,
  _170: 170,
  _171: 171,
  _172: 172,
  _173: 173,
  _180: 180,
  _190: 190,
  _200: 200,
  _210: 210,
  _220: 220,
  _240: 240,
  _260: 260,
  _270: 270,
  _280: 280,
  _290: 290,
  _291: 291,
  _292: 292,
  _293: 293,
  _300: 300,
} as const;
export type ReportTypes = (typeof ReportTypes)[keyof typeof ReportTypes] | (number & {});

export const reportTypesSchema: EnumSchema<ReportTypes> = s.enumOf<ReportTypes>(ReportTypes);
