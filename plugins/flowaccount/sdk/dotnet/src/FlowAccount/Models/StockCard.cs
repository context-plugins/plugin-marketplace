using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using FlowAccount.Models.Enums;

namespace FlowAccount.Models;

public record StockCard
{
    /// <summary>
    /// Represents an ObjectId (see also BsonObjectId).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public ObjectId? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productId")]
    public long? ProductId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productName")]
    public string? ProductName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("productCode")]
    public string? ProductCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inventoryId")]
    public long? InventoryId { get; init; }

    /// <summary>
    /// 3 = Initial
    /// 5 = BroughtForward
    /// 7 = In
    /// 11 = TransferIn
    /// 17 = Out
    /// 21 = TransferOut
    /// 25 = CreditNote
    /// 27 = DebitNote
    /// 29 = InternalUse
    /// 31 = Hold
    /// 35 = AdjustIn
    /// 39 = AdjustOut
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inventoryType")]
    public InventoryType? InventoryType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date")]
    public DateTimeOffset? Date { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantity")]
    public double? Quantity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unitId")]
    public long? UnitId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unitPrice")]
    public double? UnitPrice { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unitName")]
    public string? UnitName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public double? Total { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remaining")]
    public double? Remaining { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentId")]
    public long? DocumentId { get; init; }

    /// <summary>
    /// 1 = PurchaseOrder
    /// 3 = Quotation
    /// 5 = BillingNote
    /// 7 = TaxInvoice
    /// 9 = Receipt
    /// 13 = Expense
    /// 15 = Vendor
    /// 17 = WithHoldingTax
    /// 19 = BillingNotePartials
    /// 21 = TaxInvoicePartails
    /// 23 = Purchase
    /// 24 = PurchaseTax
    /// 25 = ReceivableInvoice
    /// 29 = AdjustInventory
    /// 31 = CreditNote
    /// 33 = DebitNote
    /// 35 = CashInvoice
    /// 37 = PaymentSlip
    /// 51 = JournalEntry
    /// 53 = PurchaseVoucher
    /// 55 = SalesVoucher
    /// 57 = PaymentVoucher
    /// 59 = ReceivedVoucher
    /// 61 = ConversionBalance
    /// 63 = Transaction
    /// 65 = SupplierInvoice
    /// 67 = BatchTaxFiling
    /// 69 = FixedAsset
    /// 71 = Depreciation
    /// 73 = BankTransfer
    /// 151 = DraftJournalEntry
    /// 153 = DraftPurchaseVoucher
    /// 155 = DraftSalesVoucher
    /// 157 = DraftPaymentVoucher
    /// 159 = DraftReceivedVoucher
    /// 201 = Payroll
    /// 202 = PayrollDetail
    /// 203 = Employee
    /// 204 = PayrollPayment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentType")]
    public DocumentTypes? DocumentType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentSerial")]
    public string? DocumentSerial { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowDelete")]
    public bool? AllowDelete { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remarks")]
    public string? Remarks { get; init; }

    /// <summary>
    /// 0 = Default
    /// 1 = DisastersFire
    /// 3 = StolenGoods
    /// 5 = StockWrittenOff
    /// 7 = StockTakingResults
    /// 9 = ReturnedStock
    /// 11 = DamagedGoods
    /// 13 = RawMaterialUsed
    /// 15 = FinishedGoodsTransfer
    /// 17 = Other
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public AdjustInventoryReason? Reason { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contactName")]
    public string? ContactName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isOverSold")]
    public bool? IsOverSold { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowIndex")]
    public int? RowIndex { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reasonDescription")]
    public string? ReasonDescription { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("averagePricePerUnit")]
    public double? AveragePricePerUnit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remainingAmount")]
    public double? RemainingAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactions")]
    public IReadOnlyList<IStockCard>? Transactions { get; init; }
}
