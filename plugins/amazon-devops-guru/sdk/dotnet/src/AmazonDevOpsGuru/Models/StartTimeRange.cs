using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record StartTimeRange
{
    /// <summary>
    /// The start time of the time range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FromTime")]
    public DateTimeOffset? FromTime { get; init; }

    /// <summary>
    /// The end time of the time range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ToTime")]
    public DateTimeOffset? ToTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
