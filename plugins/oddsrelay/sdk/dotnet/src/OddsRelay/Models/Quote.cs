using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.AnyOf;

namespace OddsRelay.Models;

/// <summary>
/// <c>quote=true</c>: this request's price. Free.
/// </summary>
public record Quote
{
    [JsonPropertyName("cost")]
    public required int Cost { get; init; }

    /// <summary>
    /// Tokens left, <c>unlimited</c>, or null when unknown.
    /// </summary>
    [JsonPropertyName("remaining")]
    public required Remaining? Remaining { get; init; }

    [JsonPropertyName("rate_card")]
    public required string RateCard { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
