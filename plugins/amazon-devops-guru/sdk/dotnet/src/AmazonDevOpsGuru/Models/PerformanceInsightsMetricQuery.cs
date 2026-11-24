using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record PerformanceInsightsMetricQuery
{
    /// <summary>
    /// The name of the meteric used used when querying an Performance Insights GetResourceMetrics API for anomaly metrics. Valid values for Metric are: db.load.avg - a scaled representation of the number of active sessions for the database engine. db.sampledload.avg - the raw number of active sessions for the database engine. If the number of active sessions is less than an internal Performance Insights threshold, db.load.avg and db.sampledload.avg are the same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples the active sessions, with db.loa
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Metric")]
    public string? Metric { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupBy")]
    public PerformanceInsightsMetricDimensionGroup? GroupBy { get; init; }

    /// <summary>
    /// One or more filters to apply to a Performance Insights GetResourceMetrics API query. Restrictions: Any number of filters by the same dimension, as specified in the GroupBy parameter. A single filter for any other dimension in this dimension group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Filter")]
    public IReadOnlyDictionary<string, string>? Filter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
