using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bill.Core.Models;
using Bill.Core.Validation.Attributes;

namespace Bill.Models;

/// <summary>
/// Create an invoice
/// </summary>
public record InvoiceCreateRequestDto
{
    /// <summary>
    /// User-generated invoice number. This value can be your chosen number scheme.
    /// <para>
    /// If you do not set this field, <c>invoiceNumber</c> is auto-generated.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceNumber")]
    [MaxLength(100)]
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

    [JsonPropertyName("customer")]
    public required Customer Customer { get; init; }

    /// <summary>
    /// Invoice line item information
    /// </summary>
    [JsonPropertyName("invoiceLineItems")]
    public required IReadOnlyList<InvoiceCreateLineItem> InvoiceLineItems { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("processingOptions")]
    public ProcessingOptions? ProcessingOptions { get; init; }

    /// <summary>
    /// BILL-generated ID of the chart of accounts for the invoice payment. The value begins with <c>0ca</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payToChartOfAccountId")]
    public string? PayToChartOfAccountId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("classifications")]
    public Classifications1BillV3CreditMemosApi? Classifications { get; init; }

    /// <summary>
    /// Credit amount applied to the invoice.
    /// <para>
    /// BILL applies the credit amount from the total of all the credit memos available for the customer.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creditAmount")]
    [Minimum(0.0)]
    public double? CreditAmount { get; init; }

    /// <summary>
    /// BILL-generated ID of the <c>SALES_TAX</c> item. The value begins with <c>0ii</c>. The tax rate is applied to all the invoice line items set as taxable.
    /// <para>
    /// You can set up a <c>SALES_TAX</c> percentage item with <c>POST /v3/classifications/items</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesTaxItemId")]
    public string? SalesTaxItemId { get; init; }

    /// <summary>
    /// Set as <c>true</c> if the card payment option is enabled for the invoice
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableCardPayment")]
    public bool? EnableCardPayment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("convenienceFee")]
    public ConvenienceFee? ConvenienceFee { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
