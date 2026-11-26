using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Models.Enums;

namespace Bill.Models;

/// <summary>
/// Invoices response.
/// </summary>
public record InvoiceResponseDto
{
    /// <summary>
    /// BILL-generated ID of the invoice. The value begins with <c>00e</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the invoice is archived
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recordStatus")]
    public InvoiceRecordStatus? RecordStatus { get; init; }

    /// <summary>
    /// User-generated invoice number. This value can be your chosen number scheme.
    /// <para>
    /// If you do not set this field, <c>invoiceNumber</c> is auto-generated.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceNumber")]
    public string? InvoiceNumber { get; init; }

    /// <summary>
    /// Invoice creation date. This value is in the <c>yyyy-MM-dd</c> format.
    /// <para>
    /// If you do not set this field, <c>invoiceDate</c> is set as the date when the invoice is created.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceDate")]
    public DateTimeOffset? InvoiceDate { get; init; }

    /// <summary>
    /// Invoice due date. The value is in the <c>yyyy-MM-dd</c> format.
    /// <para>
    /// If you do not set this field, <c>dueDate</c> is set as the date when the invoice is created.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dueDate")]
    public DateTimeOffset? DueDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentTermId")]
    public string? PaymentTermId { get; init; }

    /// <summary>
    /// BILL-generated ID of the customer. The value begins with <c>0cu</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerId")]
    public string? CustomerId { get; init; }

    /// <summary>
    /// Name of the customer the invoice is issued to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customerName")]
    public string? CustomerName { get; init; }

    /// <summary>
    /// Invoice total amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalAmount")]
    public double? TotalAmount { get; init; }

    /// <summary>
    /// Invoice due amount. The value is calculated by subtracting any applied credits (<c>creditAmount</c>), scheduled payment (<c>scheduledAmount</c>), and cleared payment from <c>totalAmount</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dueAmount")]
    public double? DueAmount { get; init; }

    /// <summary>
    /// Invoice scheduled amount. The value is set as the customer payment amount that is pending clearance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduledAmount")]
    public double? ScheduledAmount { get; init; }

    /// <summary>
    /// Credit amount applied to the invoice.
    /// <para>
    /// When a credit amount is applied to an invoice, the invoice <c>status</c> is set as <c>PARTIAL_PAYMENT</c> or <c>PAID_IN_FULL</c> depending on the invoice <c>totalAmount</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditAmount")]
    public double? CreditAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public InvoiceStatus? Status { get; init; }

    /// <summary>
    /// Invoice exchange rate
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exchangeRate")]
    public double? ExchangeRate { get; init; }

    /// <summary>
    /// BILL-generated ID of the user that created the invoice. The value begins with <c>006</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdBy")]
    public string? CreatedBy { get; init; }

    /// <summary>
    /// Invoice created time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdTime")]
    public DateTimeOffset? CreatedTime { get; init; }

    /// <summary>
    /// Invoice updated time
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updatedTime")]
    public DateTimeOffset? UpdatedTime { get; init; }

    /// <summary>
    /// Invoice line item information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceLineItems")]
    public IReadOnlyList<InvoiceResponseLineItem>? InvoiceLineItems { get; init; }

    /// <summary>
    /// BILL-generated ID of the chart of accounts for the invoice payment. The value begins with <c>0ca</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payToChartOfAccountId")]
    public string? PayToChartOfAccountId { get; init; }

    /// <summary>
    /// Invoice payments information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payments")]
    public IReadOnlyList<InvoicePayment>? Payments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classifications")]
    public Classifications1BillV3CreditMemosApi? Classifications { get; init; }

    /// <summary>
    /// BILL-generated ID of the <c>SALES_TAX</c> item. The value begins with <c>0ii</c>. The tax rate is applied to all the invoice line items set as taxable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesTaxItemId")]
    public string? SalesTaxItemId { get; init; }

    /// <summary>
    /// Invoice sales tax amount. The value is set based on <c>salesTaxItemId</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesTaxTotal")]
    public double? SalesTaxTotal { get; init; }

    /// <summary>
    /// Invoice sales tax percentage. The value is set based on <c>salesTaxItemId</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesTaxPercentage")]
    public double? SalesTaxPercentage { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the card payment option is enabled for the invoice
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableCardPayment")]
    public bool? EnableCardPayment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("convenienceFee")]
    public ConvenienceFee1? ConvenienceFee { get; init; }

    /// <summary>
    /// BILL-generated ID of the invoice PDF. The value begins with <c>att</c>.
    /// <para>
    /// The invoice PDF is sent as an email attachment when you send an invoice to a customer. The invoice PDF also appears when the customer clicks the invoice payment link to complete the invoice payment.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoicePdfId")]
    public string? InvoicePdfId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
