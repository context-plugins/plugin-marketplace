using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Moderation results for the response input and output, if moderated completions were requested.
/// </summary>
public record Moderation
{
    [JsonPropertyName("input")]
    public required Input Input { get; init; }

    [JsonPropertyName("output")]
    public required Output Output { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
