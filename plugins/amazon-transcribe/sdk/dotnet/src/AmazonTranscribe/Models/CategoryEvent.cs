using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record CategoryEvent
{
    /// <summary>
    /// Lists the categories that were matched in your audio segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MatchedCategories")]
    public IReadOnlyList<string>? MatchedCategories { get; init; }

    /// <summary>
    /// Contains information about the matched categories, including category names and timestamps.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MatchedDetails")]
    public IReadOnlyDictionary<string, PointsOfInterest>? MatchedDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
