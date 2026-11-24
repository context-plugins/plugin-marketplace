using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FlowAccount.Models.Enums;

namespace FlowAccount.Models;

public record ReconciledDocument
{
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
    [JsonPropertyName("transactionId")]
    [StringLength(255, MinimumLength = 0)]
    public string? TransactionId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fromAccount")]
    public string? FromAccount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channel")]
    public string? Channel { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("accountNumber")]
    [StringLength(255, MinimumLength = 0)]
    public required string AccountNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bankId")]
    public int? BankId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyId")]
    public long? CompanyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bank")]
    public Bank? Bank { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company")]
    public Company? Company { get; init; }
}
