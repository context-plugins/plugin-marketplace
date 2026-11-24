using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FlowAccount.Models.Enums;

namespace FlowAccount.Models;

public record JournalEntry
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public long? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyId")]
    public long? CompanyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentSerial")]
    [StringLength(100, MinimumLength = 0)]
    public string? DocumentSerial { get; init; }

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
    [JsonPropertyName("documentType")]
    public required DocumentTypes DocumentType { get; init; }

    /// <summary>
    /// 0 = Delete
    /// 1 = Awaiting
    /// 5 = Approved
    /// 9 = Void
    /// </summary>
    [JsonPropertyName("status")]
    public required JournalEntryStatus Status { get; init; }

    [JsonPropertyName("documentDate")]
    public required DateTimeOffset DocumentDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [StringLength(2000, MinimumLength = 0)]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("descriptionForeign")]
    [StringLength(2000, MinimumLength = 0)]
    public string? DescriptionForeign { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voidDescription")]
    [StringLength(2000, MinimumLength = 0)]
    public string? VoidDescription { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voidedOn")]
    public DateTimeOffset? VoidedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approvedOn")]
    public DateTimeOffset? ApprovedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transactionNo")]
    public long? TransactionNo { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    /// <summary>
    /// 1 = Default
    /// 3 = DocumentCreated
    /// 5 = Payment
    /// 7 = ChequeDate
    /// 9 = TaxNoRefund
    /// 11 = VATManagementHistory
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("templateType")]
    public JournalEntryTemplateType? TemplateType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contactName")]
    public string? ContactName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentSerialNoPrefix")]
    public long? DocumentSerialNoPrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdBy")]
    public long? CreatedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modifiedBy")]
    public long? ModifiedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approvedBy")]
    public long? ApprovedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voidedBy")]
    public long? VoidedBy { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("galleryId")]
    public long? GalleryId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contactId")]
    public long? ContactId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runningNumberType")]
    public RunningNumberType? RunningNumberType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fiscalYearId")]
    public long? FiscalYearId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gallery")]
    public Gallery? Gallery { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company")]
    public Company? Company { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("approvedByUser")]
    public User? ApprovedByUser { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("modifiedByUser")]
    public User? ModifiedByUser { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voidedByUser")]
    public User? VoidedByUser { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remarks")]
    [StringLength(2000, MinimumLength = 0)]
    public string? Remarks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contact")]
    public Contact? Contact { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fiscalYear")]
    public FiscalYear? FiscalYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reference")]
    [StringLength(50, MinimumLength = 0)]
    public string? Reference { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceId")]
    public long? ReferenceId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceDocumentType")]
    public DocumentTypes? ReferenceDocumentType { get; init; }

    [JsonPropertyName("isSystemDocument")]
    public bool IsSystemDocument { get; init; } = false;

    /// <summary>
    /// 1 = Pending
    /// 3 = Execute
    /// 5 = Success
    /// 7 = Error
    /// 9 = WHTWarning
    /// 11 = NoMoreCompile
    /// 13 = Ignore
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ruleCompileStatus")]
    public RuleCompileStatus? RuleCompileStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bookOfAccounts")]
    public IReadOnlyList<IBookOfAccount>? BookOfAccounts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isChangedDocumentDate")]
    public bool? IsChangedDocumentDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isResetDocument")]
    public bool? IsResetDocument { get; init; }
}
