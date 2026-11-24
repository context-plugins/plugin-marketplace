using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Estimated token usage, populated for OpenAI SDK compatibility. Counts
/// are approximate; Parallel bills per request, not per token.
/// </summary>
public record ResponseUsage
{
    [JsonPropertyName("input_tokens")]
    public required int InputTokens { get; init; }

    /// <summary>
    /// A detailed breakdown of the input tokens.
    /// </summary>
    [JsonPropertyName("input_tokens_details")]
    public required InputTokensDetails InputTokensDetails { get; init; }

    [JsonPropertyName("output_tokens")]
    public required int OutputTokens { get; init; }

    /// <summary>
    /// A detailed breakdown of the output tokens.
    /// </summary>
    [JsonPropertyName("output_tokens_details")]
    public required OutputTokensDetails OutputTokensDetails { get; init; }

    [JsonPropertyName("total_tokens")]
    public required int TotalTokens { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
