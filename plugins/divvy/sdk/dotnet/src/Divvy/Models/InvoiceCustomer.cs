using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Customer info for an invoice.
/// </summary>
public record InvoiceCustomer
{
    /// <summary>
    /// BILL-generated ID of the customer. The value begins with <c>0cu</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Customer name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(100)]
    public string? Name { get; init; }

    /// <summary>
    /// Customer email address
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceCurrency")]
    public CurrencyCode? InvoiceCurrency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
