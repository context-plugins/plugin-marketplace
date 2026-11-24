using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

/// <summary>
/// If supplied, overrides server-side pricing. The usage breakdown is still recorded for analytics.
/// </summary>
public record CostOverride
{
    [JsonPropertyName("amount")]
    public required double Amount { get; init; }

    /// <summary>
    /// ISO 4217 currency code, e.g. "USD".
    /// </summary>
    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
