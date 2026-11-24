using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// A moderation result produced for the response input or output.
/// </summary>
public record ModerationOutputModerationResultsResult
{
    [JsonPropertyName("categories")]
    public required IReadOnlyDictionary<string, bool> Categories { get; init; }

    [JsonPropertyName("category_applied_input_types")]
    public required IReadOnlyDictionary<string, object> CategoryAppliedInputTypes { get; init; }

    [JsonPropertyName("category_scores")]
    public required IReadOnlyDictionary<string, double> CategoryScores { get; init; }

    [JsonPropertyName("flagged")]
    public required bool Flagged { get; init; }

    [JsonPropertyName("model")]
    public required string Model { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "moderation_result";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
