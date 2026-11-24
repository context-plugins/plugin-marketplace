using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Moderation results for the request input and generated output, if moderated
/// completions were requested.
/// </summary>
public record Moderation1
{
    [JsonPropertyName("input")]
    public required Input1 Input { get; init; }

    [JsonPropertyName("output")]
    public required Output1 Output { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
