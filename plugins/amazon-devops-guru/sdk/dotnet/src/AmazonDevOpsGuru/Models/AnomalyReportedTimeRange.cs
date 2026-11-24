using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record AnomalyReportedTimeRange
{
    /// <summary>
    /// The time when an anomaly is opened.
    /// </summary>
    [JsonPropertyName("OpenTime")]
    public required DateTimeOffset OpenTime { get; init; }

    /// <summary>
    /// The time when an anomaly is closed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CloseTime")]
    public DateTimeOffset? CloseTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
