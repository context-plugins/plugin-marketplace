using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1InvoicegeneratorRequest
{
    /// <summary>
    /// The invoice number
    /// </summary>
    [JsonPropertyName("invoiceNumber")]
    public required string InvoiceNumber { get; init; }

    /// <summary>
    /// The invoice date (YYYY-MM-DD format)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("date")]
    public string? Date { get; init; }

    /// <summary>
    /// The name of the person or company issuing the invoice
    /// </summary>
    [JsonPropertyName("from_name")]
    public required string FromName { get; init; }

    /// <summary>
    /// The street address of the person or company issuing the invoice
    /// </summary>
    [JsonPropertyName("from_street")]
    public required string FromStreet { get; init; }

    /// <summary>
    /// The city of the person or company issuing the invoice
    /// </summary>
    [JsonPropertyName("from_city")]
    public required string FromCity { get; init; }

    /// <summary>
    /// The state of the person or company issuing the invoice
    /// </summary>
    [JsonPropertyName("from_state")]
    public required string FromState { get; init; }

    /// <summary>
    /// The zip code of the person or company issuing the invoice
    /// </summary>
    [JsonPropertyName("from_zip")]
    public required string FromZip { get; init; }

    /// <summary>
    /// The name of the person or company being invoiced
    /// </summary>
    [JsonPropertyName("to_name")]
    public required string ToName { get; init; }

    /// <summary>
    /// The street address of the person or company being invoiced
    /// </summary>
    [JsonPropertyName("to_street")]
    public required string ToStreet { get; init; }

    /// <summary>
    /// The city of the person or company being invoiced
    /// </summary>
    [JsonPropertyName("to_city")]
    public required string ToCity { get; init; }

    /// <summary>
    /// The state of the person or company being invoiced
    /// </summary>
    [JsonPropertyName("to_state")]
    public required string ToState { get; init; }

    /// <summary>
    /// The zip code of the person or company being invoiced
    /// </summary>
    [JsonPropertyName("to_zip")]
    public required string ToZip { get; init; }

    /// <summary>
    /// The job or project associated with the invoice
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("job")]
    public string? Job { get; init; }

    /// <summary>
    /// The payment terms for the invoice
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paymentTerms")]
    public string? PaymentTerms { get; init; }

    /// <summary>
    /// The due date for the invoice (YYYY-MM-DD format)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dueDate")]
    public string? DueDate { get; init; }

    /// <summary>
    /// The discount to be applied to the invoice
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discount")]
    public double? Discount { get; init; }

    /// <summary>
    /// The sales tax rate for the invoice as a percentage, applied to the subtotal after discount (e.g. 7.5 for 7.5%)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesTax")]
    public double? SalesTax { get; init; }

    /// <summary>
    /// Public http(s) URL of an image to use as the invoice logo (max 2 MB, fetched with a 5 second timeout; a placeholder logo is used if it can't be loaded)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logoURL")]
    public string? LogoUrl { get; init; }

    /// <summary>
    /// The currency for the invoice
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    /// <summary>
    /// The items being invoiced (qty, description, unit_price)
    /// </summary>
    [JsonPropertyName("items")]
    public required string Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
