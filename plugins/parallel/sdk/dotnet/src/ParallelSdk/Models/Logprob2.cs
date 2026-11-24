using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// A logprob is the logarithmic probability that the model assigns to producing
/// a particular token at a given position in the sequence. Less-negative (higher)
/// logprob values indicate greater model confidence in that token choice.
/// </summary>
public record Logprob2
{
    [JsonPropertyName("token")]
    public required string Token { get; init; }

    [JsonPropertyName("logprob")]
    public required double Logprob { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("top_logprobs")]
    public TopLogprobs1? TopLogprobs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
