using System.Collections.Generic;
using System.Text.Json.Serialization;
using Leadspace.Core.Models;

namespace Leadspace.Models;

public record IntentModelingScores
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_name")]
    public string? ProjectName { get; init; }

    /// <summary>
    /// By default 0-1 No Intent, 1-75 Low, 75-95 Medium, 95-100 High
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("project_score")]
    public string? ProjectScore { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("surging_topics")]
    public IReadOnlyList<string>? SurgingTopics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
