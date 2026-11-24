using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Reasoning configuration (OpenAI-compatible subset).
/// </summary>
public record ResponseReasoningConfig
{
    /// <summary>
    /// Controls how much research is performed, trading response time for answer quality. Defaults to <c>medium</c> when omitted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("effort")]
    public Effort1? Effort { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
