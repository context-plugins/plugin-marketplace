using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// A detailed breakdown of the output tokens.
/// </summary>
public record OutputTokensDetails
{
    [JsonPropertyName("reasoning_tokens")]
    public required int ReasoningTokens { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
