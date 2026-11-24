using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// The log probability of a token.
/// </summary>
public record Logprob
{
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    [JsonPropertyName("bytes")]
    public required IReadOnlyList<int> Bytes { get; init; }

    [JsonPropertyName("logprob")]
    public required double LogprobValue { get; init; }

    [JsonPropertyName("top_logprobs")]
    public required IReadOnlyList<LogprobTopLogprob> TopLogprobs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
