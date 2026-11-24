using System;
using System.Text.Json.Serialization;
using FlowAccount.Models.Enums;

namespace FlowAccount.Models;

public record BatchImportMetadata
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyUserGuid")]
    public string? CompanyUserGuid { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public DateTimeOffset? CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedAt")]
    public DateTimeOffset? UpdatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("templateId")]
    public string? TemplateId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("batchId")]
    public string? BatchId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filename")]
    public string? Filename { get; init; }

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

    /// <summary>
    /// 0 = None
    /// 1 = Awaiting
    /// 3 = Pending
    /// 5 = Failed
    /// 6 = HandledDuplicated
    /// 7 = Succeed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public BatchImportStatus? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentCount")]
    public int? DocumentCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("successCount")]
    public int? SuccessCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failedCount")]
    public int? FailedCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("s3Key")]
    public string? S3Key { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userId")]
    public long? UserId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyId")]
    public long? CompanyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isViewed")]
    public bool? IsViewed { get; init; }
}
