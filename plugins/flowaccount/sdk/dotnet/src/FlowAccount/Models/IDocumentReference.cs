using System;
using System.Text.Json.Serialization;
using FlowAccount.Models.Enums;

namespace FlowAccount.Models;

public record IDocumentReference
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public long? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyId")]
    public long? CompanyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceId")]
    public long? ReferenceId { get; init; }

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
    [JsonPropertyName("referenceDocumentType")]
    public DocumentTypes? ReferenceDocumentType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceDocumentSerial")]
    public string? ReferenceDocumentSerial { get; init; }

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
    [JsonPropertyName("isDelete")]
    public bool? IsDelete { get; init; }

    /// <summary>
    /// 1 = ImportDocument
    /// 3 = PartialPayments
    /// 5 = Batch
    /// 7 = Etax
    /// 9 = MiigratePartialPayments
    /// 11 = BatchPartialPayments
    /// 13 = DepositFirst
    /// 15 = DepositLast
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public DocumentReferenceTypes? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentStatus")]
    public int? DocumentStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentStatusString")]
    public string? DocumentStatusString { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentDate")]
    public DateTimeOffset? DocumentDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentAmount")]
    public double? DocumentAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentAmountWithVat")]
    public double? DocumentAmountWithVat { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refDocumentStatus")]
    public int? RefDocumentStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refDocumentStatusString")]
    public string? RefDocumentStatusString { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refDocumentDate")]
    public DateTimeOffset? RefDocumentDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refDocumentAmount")]
    public double? RefDocumentAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refDocumentAmountWithVat")]
    public double? RefDocumentAmountWithVat { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partialPaymentTotalAmount")]
    public double? PartialPaymentTotalAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partialPaymentTotalPercent")]
    public double? PartialPaymentTotalPercent { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refCreatedOn")]
    public DateTimeOffset? RefCreatedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refModifiedOn")]
    public DateTimeOffset? RefModifiedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("refIsMigrate")]
    public bool? RefIsMigrate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isCompileRule")]
    public bool? IsCompileRule { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentCollected")]
    public double? DocumentCollected { get; init; }
}
