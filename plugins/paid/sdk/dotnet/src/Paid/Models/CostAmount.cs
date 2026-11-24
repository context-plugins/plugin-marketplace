using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// Cost amount with currency
/// </summary>
public record CostAmount
{
    /// <summary>
    /// The cost amount
    /// </summary>
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    /// <summary>
    /// The currency code (e.g., "USD")
    /// </summary>
    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
