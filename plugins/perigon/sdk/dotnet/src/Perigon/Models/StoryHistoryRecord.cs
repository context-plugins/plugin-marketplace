using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// History records returned for the requested page.
/// </summary>
public record StoryHistoryRecord
{
    /// <summary>
    /// Unique identifier of the story associated with this history record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterId")]
    public string? ClusterId { get; init; }

    /// <summary>
    /// Date and time the history record was created, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// Story name captured in this history record, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Date and time the story refresh that produced this record was triggered, in ISO 8601 format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("triggeredAt")]
    public string? TriggeredAt { get; init; }

    /// <summary>
    /// Story summary captured in this history record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public string? Summary { get; init; }

    /// <summary>
    /// Short story summary captured in this history record, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shortSummary")]
    public string? ShortSummary { get; init; }

    /// <summary>
    /// Description of changes from the previous story version, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("changelog")]
    public string? Changelog { get; init; }

    /// <summary>
    /// Key points captured for this version of the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyPoints")]
    public IReadOnlyList<KeyPoint>? KeyPoints { get; init; }

    /// <summary>
    /// Questions and answers generated for this version of the story.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("questions")]
    public IReadOnlyList<Question>? Questions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
