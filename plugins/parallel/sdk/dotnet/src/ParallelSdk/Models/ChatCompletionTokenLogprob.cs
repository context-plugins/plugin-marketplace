using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

public record ChatCompletionTokenLogprob
{
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bytes")]
    public Bytes? Bytes { get; init; }

    [JsonPropertyName("logprob")]
    public required double Logprob { get; init; }

    [JsonPropertyName("top_logprobs")]
    public required IReadOnlyList<TopLogprob> TopLogprobs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
