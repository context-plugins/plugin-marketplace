using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// CreditMemo usage Dto.
/// </summary>
public record CreditMemoUsageDto
{
    /// <summary>
    /// BILL-generated ID of the invoice to which the credit memo is applied
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invoiceId")]
    public string? InvoiceId { get; init; }

    /// <summary>
    /// Credit memo amount applied to the invoice
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public double? Amount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
