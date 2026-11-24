using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record PointsOfInterest
{
    /// <summary>
    /// Contains the timestamp ranges (start time through end time) of matched categories and rules.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimestampRanges")]
    public IReadOnlyList<TimestampRange>? TimestampRanges { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
