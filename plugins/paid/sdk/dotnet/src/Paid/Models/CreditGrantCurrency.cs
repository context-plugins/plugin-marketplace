using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CreditGrantCurrency
{
    /// <summary>
    /// Stable machine-readable key for this credit currency.
    /// </summary>
    [JsonPropertyName("key")]
    public required string Key { get; init; }

    /// <summary>
    /// Human-readable name for this credit currency.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
