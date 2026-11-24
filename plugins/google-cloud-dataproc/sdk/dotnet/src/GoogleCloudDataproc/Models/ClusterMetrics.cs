using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
/// </summary>
public record ClusterMetrics
{
    /// <summary>
    /// The HDFS metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hdfsMetrics")]
    public IReadOnlyDictionary<string, string>? HdfsMetrics { get; init; }

    /// <summary>
    /// YARN metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("yarnMetrics")]
    public IReadOnlyDictionary<string, string>? YarnMetrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
