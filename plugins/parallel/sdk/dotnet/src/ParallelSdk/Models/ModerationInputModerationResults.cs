using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Successful moderation results for the request input or generated output.
/// </summary>
public record ModerationInputModerationResults
{
    [JsonPropertyName("model")]
    public required string Model { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<ModerationInputModerationResultsResult> Results { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "moderation_results";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
