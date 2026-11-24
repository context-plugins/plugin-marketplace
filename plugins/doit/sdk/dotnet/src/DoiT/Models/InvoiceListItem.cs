using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Summary information about an invoice.
/// </summary>
public record InvoiceListItem
{
    /// <summary>
    /// Invoice number, identifying the invoice.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// The time when this invoice was issued, in milliseconds since the epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceDate")]
    public long? InvoiceDate { get; init; }

    /// <summary>
    /// Platform identifier for invoice source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platform")]
    public InvoicePlatform? Platform { get; init; }

    /// <summary>
    /// The last day to pay the invoice, in milliseconds since the epoch
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dueDate")]
    public long? DueDate { get; init; }

    /// <summary>
    /// Status of the invoice
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusDoiTInvoicesApi? Status { get; init; }

    /// <summary>
    /// Total invoiced amount
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalAmount")]
    public double? TotalAmount { get; init; }

    /// <summary>
    /// Invoice balance to be paid
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balanceAmount")]
    public double? BalanceAmount { get; init; }

    /// <summary>
    /// Currency code for monetary values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// Link to <see href="https://help.doit.com/docs/billing/invoices-and-payments/managing-invoices">invoice details page</see> in the DoiT console. You can download the PDF invoice from the invoice details page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
