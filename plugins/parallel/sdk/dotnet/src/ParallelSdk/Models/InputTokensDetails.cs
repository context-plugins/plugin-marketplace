using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// A detailed breakdown of the input tokens.
/// </summary>
public record InputTokensDetails
{
    [JsonPropertyName("cached_tokens")]
    public required int CachedTokens { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
