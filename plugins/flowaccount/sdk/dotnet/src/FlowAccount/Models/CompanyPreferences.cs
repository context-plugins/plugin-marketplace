using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FlowAccount.Core.Models;
using FlowAccount.Models.Enums;

namespace FlowAccount.Models;

public record CompanyPreferences
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyId")]
    public long? CompanyId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("showWithHolding")]
    public bool? ShowWithHolding { get; init; } = false;

    [JsonPropertyName("invoicePrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string InvoicePrefix { get; init; }

    [JsonPropertyName("quotationPrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string QuotationPrefix { get; init; }

    [JsonPropertyName("billingNotePrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string BillingNotePrefix { get; init; }

    [JsonPropertyName("receiptPrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string ReceiptPrefix { get; init; }

    [JsonPropertyName("purchaseOrderPrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string PurchaseOrderPrefix { get; init; }

    [JsonPropertyName("cashInvoicePrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string CashInvoicePrefix { get; init; }

    [JsonPropertyName("receivableInvoicePrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string ReceivableInvoicePrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cashInvoiceStartingNumber")]
    public long? CashInvoiceStartingNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receiptStartingNumber")]
    public long? ReceiptStartingNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quotationStartingNumber")]
    public long? QuotationStartingNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingNoteStartingNumber")]
    public long? BillingNoteStartingNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseOrderStartingNumber")]
    public long? PurchaseOrderStartingNumber { get; init; }

    [JsonPropertyName("purchaseOrderTitleEN")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string PurchaseOrderTitleEn { get; init; }

    [JsonPropertyName("quotationTitleEN")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string QuotationTitleEn { get; init; }

    [JsonPropertyName("billingNoteTitleEN")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string BillingNoteTitleEn { get; init; }

    [JsonPropertyName("invoiceTitleEN")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string InvoiceTitleEn { get; init; }

    [JsonPropertyName("receiptTitleEN")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string ReceiptTitleEn { get; init; }

    [JsonPropertyName("paymentSlipTitleEN")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string PaymentSlipTitleEn { get; init; }

    [JsonPropertyName("purchaseOrderTitleTH")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string PurchaseOrderTitleTh { get; init; }

    [JsonPropertyName("quotationTitleTH")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string QuotationTitleTh { get; init; }

    [JsonPropertyName("billingNoteTitleTH")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string BillingNoteTitleTh { get; init; }

    [JsonPropertyName("invoiceTitleTH")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string InvoiceTitleTh { get; init; }

    [JsonPropertyName("receiptTitleTH")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string ReceiptTitleTh { get; init; }

    [JsonPropertyName("paymentSlipTitleTH")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string PaymentSlipTitleTh { get; init; }

    /// <summary>
    /// 1 = SellingProducts
    /// 3 = SellingServices
    /// 5 = SellingBoth
    /// 7 = Custom
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("businessType")]
    public BusinessType? BusinessType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("termsAgreement")]
    [StringLength(2147483647, MinimumLength = 0)]
    public string? TermsAgreement { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("defaultRemarks")]
    [StringLength(2147483647, MinimumLength = 0)]
    public string? DefaultRemarks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceStartingNumber")]
    public long? InvoiceStartingNumber { get; init; }

    [JsonPropertyName("cashInvoiceTitleEN")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string CashInvoiceTitleEn { get; init; }

    [JsonPropertyName("cashInvoiceTitleTH")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string CashInvoiceTitleTh { get; init; }

    [JsonPropertyName("receivableInvoiceTitleTH")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string ReceivableInvoiceTitleTh { get; init; }

    [JsonPropertyName("receivableInvoiceTitleEN")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string ReceivableInvoiceTitleEn { get; init; }

    /// <summary>
    /// 1 = Default
    /// 3 = YearMonth
    /// 5 = Month
    /// 7 = Year
    /// 9 = FreeHand
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runningNumberType")]
    public RunningNumberType? RunningNumberType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseOrderStartingYear")]
    public int? PurchaseOrderStartingYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quotationStartingYear")]
    public int? QuotationStartingYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingNoteStartingYear")]
    public int? BillingNoteStartingYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceStartingYear")]
    public int? InvoiceStartingYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cashInvoiceStartingYear")]
    public int? CashInvoiceStartingYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receiptStartingYear")]
    public int? ReceiptStartingYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseOrderStartingMonth")]
    public int? PurchaseOrderStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quotationStartingMonth")]
    public int? QuotationStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingNoteStartingMonth")]
    public int? BillingNoteStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceStartingMonth")]
    public int? InvoiceStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cashInvoiceStartingMonth")]
    public int? CashInvoiceStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receiptStartingMonth")]
    public int? ReceiptStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settingsInitiated")]
    public bool? SettingsInitiated { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runningNumberSettingsModifiedOn")]
    public DateTimeOffset? RunningNumberSettingsModifiedOn { get; init; }

    [JsonPropertyName("withHoldingTaxPrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string WithHoldingTaxPrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withHoldingTaxStartingNumber")]
    public int? WithHoldingTaxStartingNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withHoldingTaxStartingMonth")]
    public int? WithHoldingTaxStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withHoldingTaxStartingYear")]
    public int? WithHoldingTaxStartingYear { get; init; }

    /// <summary>
    /// 1 = Default
    /// 3 = Template1
    /// 5 = Template2
    /// 7 = Template3
    /// 9 = Template4
    /// 11 = Template5
    /// 13 = TemplateA5
    /// 15 = Template9x11withOriginal
    /// 17 = Template8
    /// 101 = NativeDefault
    /// 103 = Native1
    /// 105 = Native3
    /// 107 = Native5
    /// 109 = Native7
    /// 111 = Native9
    /// 113 = Native11
    /// 115 = Native13
    /// 201 = Thermal1
    /// 203 = Thermal2
    /// 205 = SocialSlip
    /// 301 = ShortCA1
    /// 303 = ShortCA2
    /// 305 = ShortCA3
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("documentTemplates")]
    public DocumentTemplates? DocumentTemplates { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("printColor")]
    public bool? PrintColor { get; init; } = true;

    /// <summary>
    /// 1 = ChatThai
    /// 3 = Rsu
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("templateFont")]
    public TemplateFont? TemplateFont { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("printOneInvoice")]
    public bool? PrintOneInvoice { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remarks")]
    [StringLength(2147483647, MinimumLength = 0)]
    public string? Remarks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emailMessageTemplate")]
    [StringLength(2147483647, MinimumLength = 0)]
    public string? EmailMessageTemplate { get; init; }

    [JsonPropertyName("purchasePrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string PurchasePrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseStartingNumber")]
    public long? PurchaseStartingNumber { get; init; }

    [JsonPropertyName("purchaseTitleEN")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string PurchaseTitleEn { get; init; }

    [JsonPropertyName("purchaseTitleTH")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string PurchaseTitleTh { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseStartingYear")]
    public int? PurchaseStartingYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseStartingMonth")]
    public int? PurchaseStartingMonth { get; init; }

    [JsonPropertyName("adjustInventoryPrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string AdjustInventoryPrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adjustInventoryStartingNumber")]
    public int? AdjustInventoryStartingNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adjustInventoryStartingMonth")]
    public int? AdjustInventoryStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("adjustInventoryStartingYear")]
    public int? AdjustInventoryStartingYear { get; init; }

    [JsonPropertyName("expensePrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string ExpensePrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expenseStartingNumber")]
    public int? ExpenseStartingNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expenseStartingMonth")]
    public int? ExpenseStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expenseStartingYear")]
    public int? ExpenseStartingYear { get; init; }

    [JsonPropertyName("paymentSlipPrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string PaymentSlipPrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentSlipStartingNumber")]
    public int? PaymentSlipStartingNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentSlipStartingYear")]
    public int? PaymentSlipStartingYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentSlipStartingMonth")]
    public int? PaymentSlipStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cashInvoiceRunningNumberModifiedOn")]
    public DateTimeOffset? CashInvoiceRunningNumberModifiedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseOrderRunningNumberModifiedOn")]
    public DateTimeOffset? PurchaseOrderRunningNumberModifiedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quotationRunningNumberModifiedOn")]
    public DateTimeOffset? QuotationRunningNumberModifiedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingNoteRunningNumberModifiedOn")]
    public DateTimeOffset? BillingNoteRunningNumberModifiedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceRunningNumberModifiedOn")]
    public DateTimeOffset? InvoiceRunningNumberModifiedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseRunningNumberModifiedOn")]
    public DateTimeOffset? PurchaseRunningNumberModifiedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receivableInvoiceRunningNumberModifiedOn")]
    public DateTimeOffset? ReceivableInvoiceRunningNumberModifiedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentSlipRunningNumberModifiedOn")]
    public DateTimeOffset? PaymentSlipRunningNumberModifiedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rubberStampUrl")]
    [StringLength(2147483647, MinimumLength = 0)]
    public string? RubberStampUrl { get; init; }

    [JsonPropertyName("creditNotePrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string CreditNotePrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditNoteStartingNumber")]
    public int? CreditNoteStartingNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditNoteStartingMonth")]
    public int? CreditNoteStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditNoteStartingYear")]
    public int? CreditNoteStartingYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditNoteRunningNumberModifiedOn")]
    public DateTimeOffset? CreditNoteRunningNumberModifiedOn { get; init; }

    [JsonPropertyName("creditNoteTitleEN")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string CreditNoteTitleEn { get; init; }

    [JsonPropertyName("creditNoteTitleTH")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string CreditNoteTitleTh { get; init; }

    [JsonPropertyName("debitNotePrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string DebitNotePrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debitNoteStartingNumber")]
    public int? DebitNoteStartingNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debitNoteStartingMonth")]
    public int? DebitNoteStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debitNoteStartingYear")]
    public int? DebitNoteStartingYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debitNoteRunningNumberModifiedOn")]
    public DateTimeOffset? DebitNoteRunningNumberModifiedOn { get; init; }

    [JsonPropertyName("debitNoteTitleEN")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string DebitNoteTitleEn { get; init; }

    [JsonPropertyName("debitNoteTitleTH")]
    [StringLength(2147483647, MinimumLength = 0)]
    public required string DebitNoteTitleTh { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receiptRunningNumberModifiedOn")]
    public DateTimeOffset? ReceiptRunningNumberModifiedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receivableInvoiceStartingNumber")]
    public int? ReceivableInvoiceStartingNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receivableInvoiceStartingMonth")]
    public int? ReceivableInvoiceStartingMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receivableInvoiceStartingYear")]
    public int? ReceivableInvoiceStartingYear { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usePartialReceipt")]
    public bool? UsePartialReceipt { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("useCashInvoice")]
    public bool? UseCashInvoice { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("useShortCashInvoice")]
    public bool? UseShortCashInvoice { get; init; } = false;

    /// <summary>
    /// 1 = Default
    /// 3 = YearMonth
    /// 5 = Month
    /// 7 = Year
    /// 9 = FreeHand
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generalLedgerRunningNumberType")]
    public RunningNumberType? GeneralLedgerRunningNumberType { get; init; }

    [JsonPropertyName("journalVoucherPrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string JournalVoucherPrefix { get; init; }

    [JsonPropertyName("purchaseVoucherPrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string PurchaseVoucherPrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseVoucherRunningNumberModifiedOn")]
    public DateTimeOffset? PurchaseVoucherRunningNumberModifiedOn { get; init; }

    [JsonPropertyName("salesVoucherPrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string SalesVoucherPrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesVoucherRunningNumberModifiedOn")]
    public DateTimeOffset? SalesVoucherRunningNumberModifiedOn { get; init; }

    [JsonPropertyName("paymentVoucherPrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string PaymentVoucherPrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentVoucherRunningNumberModifiedOn")]
    public DateTimeOffset? PaymentVoucherRunningNumberModifiedOn { get; init; }

    [JsonPropertyName("receivedVoucherPrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string ReceivedVoucherPrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("receivedVoucherRunningNumberModifiedOn")]
    public DateTimeOffset? ReceivedVoucherRunningNumberModifiedOn { get; init; }

    [JsonPropertyName("conversionBalancePrefix")]
    [StringLength(6, MinimumLength = 0)]
    public required string ConversionBalancePrefix { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversionBalanceRunningNumberModifiedOn")]
    public DateTimeOffset? ConversionBalanceRunningNumberModifiedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eTaxEmail")]
    public string? ETaxEmail { get; init; }

    /// <summary>
    /// 1 = Default
    /// 3 = Template1
    /// 5 = Template2
    /// 7 = Template3
    /// 9 = Template4
    /// 11 = Template5
    /// 13 = TemplateA5
    /// 15 = Template9x11withOriginal
    /// 17 = Template8
    /// 101 = NativeDefault
    /// 103 = Native1
    /// 105 = Native3
    /// 107 = Native5
    /// 109 = Native7
    /// 111 = Native9
    /// 113 = Native11
    /// 115 = Native13
    /// 201 = Thermal1
    /// 203 = Thermal2
    /// 205 = SocialSlip
    /// 301 = ShortCA1
    /// 303 = ShortCA2
    /// 305 = ShortCA3
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortCashInvoiceTemplates")]
    public DocumentTemplates? ShortCashInvoiceTemplates { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("useBillingNoteAccountingRule")]
    public bool? UseBillingNoteAccountingRule { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingNoteAccountingRuleModifiedOn")]
    public DateTimeOffset? BillingNoteAccountingRuleModifiedOn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("templateFontSize")]
    public double? TemplateFontSize { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("useMultiCurrency")]
    public bool? UseMultiCurrency { get; init; } = false;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expenseTitleTH")]
    public string? ExpenseTitleTh { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expenseTitleEN")]
    public string? ExpenseTitleEn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withHoldingTaxTitleTH")]
    public string? WithHoldingTaxTitleTh { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("withHoldingTaxTitleEN")]
    public string? WithHoldingTaxTitleEn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
