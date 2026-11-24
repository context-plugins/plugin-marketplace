using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// The top log probability of a token.
/// </summary>
public record LogprobTopLogprob
{
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    [JsonPropertyName("bytes")]
    public required IReadOnlyList<int> Bytes { get; init; }

    [JsonPropertyName("logprob")]
    public required double Logprob { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
