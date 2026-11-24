import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustInventoryReasonSchema, type AdjustInventoryReason } from "./adjust-inventory-reason.js";
import { documentTypesSchema, type DocumentTypes } from "./document-types.js";
import { inventoryTypeSchema, type InventoryType } from "./inventory-type.js";
import { iStockCardSchema, type IStockCard } from "./istock-card.js";
import { objectIdSchema, type ObjectId } from "./object-id.js";

export type StockCard = {
  /** Represents an ObjectId (see also BsonObjectId). */
  id?: ObjectId;
  productId?: number;
  productName?: string | null;
  productCode?: string | null;
  inventoryId?: number;
  /**
   * 3 = Initial 5 = BroughtForward 7 = In 11 = TransferIn 17 = Out 21 = TransferOut 25 = CreditNote
   * 27 = DebitNote 29 = InternalUse 31 = Hold 35 = AdjustIn 39 = AdjustOut
   */
  inventoryType?: InventoryType;
  date?: Date;
  quantity?: number;
  unitId?: number;
  unitPrice?: number;
  unitName?: string | null;
  total?: number;
  remaining?: number;
  documentId?: number;
  /**
   * 1 = PurchaseOrder 3 = Quotation 5 = BillingNote 7 = TaxInvoice 9 = Receipt 13 = Expense 15 =
   * Vendor 17 = WithHoldingTax 19 = BillingNotePartials 21 = TaxInvoicePartails 23 = Purchase 24 =
   * PurchaseTax 25 = ReceivableInvoice 29 = AdjustInventory 31 = CreditNote 33 = DebitNote 35 =
   * CashInvoice 37 = PaymentSlip 51 = JournalEntry 53 = PurchaseVoucher 55 = SalesVoucher 57 =
   * PaymentVoucher 59 = ReceivedVoucher 61 = ConversionBalance 63 = Transaction 65 =
   * SupplierInvoice 67 = BatchTaxFiling 69 = FixedAsset 71 = Depreciation 73 = BankTransfer 151 =
   * DraftJournalEntry 153 = DraftPurchaseVoucher 155 = DraftSalesVoucher 157 = DraftPaymentVoucher
   * 159 = DraftReceivedVoucher 201 = Payroll 202 = PayrollDetail 203 = Employee 204 =
   * PayrollPayment
   */
  documentType?: DocumentTypes;
  documentSerial?: string | null;
  allowDelete?: boolean;
  remarks?: string | null;
  /**
   * 0 = Default 1 = DisastersFire 3 = StolenGoods 5 = StockWrittenOff 7 = StockTakingResults 9 =
   * ReturnedStock 11 = DamagedGoods 13 = RawMaterialUsed 15 = FinishedGoodsTransfer 17 = Other
   */
  reason?: AdjustInventoryReason;
  contactName?: string | null;
  isOverSold?: boolean;
  rowIndex?: number;
  reasonDescription?: string | null;
  averagePricePerUnit?: number;
  remainingAmount?: number;
  transactions?: IStockCard[] | null;
};

export const stockCardSchema: Schema<StockCard> = s.object<StockCard>({
  id: s.optional(s.lazy(() => objectIdSchema)),
  productId: s.optional(s.int()),
  productName: s.optionalNullable(s.string()),
  productCode: s.optionalNullable(s.string()),
  inventoryId: s.optional(s.int()),
  inventoryType: s.optional(s.lazy(() => inventoryTypeSchema)),
  date: s.optional(s.dateTime()),
  quantity: s.optional(s.float64()),
  unitId: s.optional(s.int()),
  unitPrice: s.optional(s.float64()),
  unitName: s.optionalNullable(s.string()),
  total: s.optional(s.float64()),
  remaining: s.optional(s.float64()),
  documentId: s.optional(s.int()),
  documentType: s.optional(s.lazy(() => documentTypesSchema)),
  documentSerial: s.optionalNullable(s.string()),
  allowDelete: s.optional(s.boolean()),
  remarks: s.optionalNullable(s.string()),
  reason: s.optional(s.lazy(() => adjustInventoryReasonSchema)),
  contactName: s.optionalNullable(s.string()),
  isOverSold: s.optional(s.boolean()),
  rowIndex: s.optional(s.int()),
  reasonDescription: s.optionalNullable(s.string()),
  averagePricePerUnit: s.optional(s.float64()),
  remainingAmount: s.optional(s.float64()),
  transactions: s.optionalNullable(s.array(s.lazy(() => iStockCardSchema))),
});
