using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Core.Validation.Attributes;

namespace Divvy.Models;

/// <summary>
/// Update an invoice
/// </summary>
public record InvoiceUpdateRequestDto
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

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customer")]
    public Customer? Customer { get; init; }

    /// <summary>
    /// Invoice line item information
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceLineItems")]
    public IReadOnlyList<InvoiceUpdateLineItem>? InvoiceLineItems { get; init; }

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
    /// Set as <c>true</c> if the card payment option is enabled for the invoice
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableCardPayment")]
    public bool? EnableCardPayment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("convenienceFee")]
    public ConvenienceFee? ConvenienceFee { get; init; }

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
    /// BILL-generated ID of the invoice PDF. The value begins with <c>att</c>.
    /// <para>
    /// The invoice PDF is sent as an email attachment when you send an invoice to a customer. The invoice PDF also appears when the customer clicks the invoice payment link to complete the invoice payment.
    /// </para>
    /// <para>
    /// <b>Note</b>: You can get the list of invoice attachments with <c>GET /v3/attachments/invoices/{invoiceId}</c>. All the attachments in the list (including the invoice PDF) are sent as email attachments when you send the invoice to the customer.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoicePdfId")]
    public string? InvoicePdfId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
