using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record ExecutionTimeFilter
{
    /// <summary>
    /// Specifies the oldest start or close date and time to return.
    /// </summary>
    [JsonPropertyName("oldestDate")]
    public required DateTimeOffset OldestDate { get; init; }

    /// <summary>
    /// Specifies the latest start or close date and time to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latestDate")]
    public DateTimeOffset? LatestDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
