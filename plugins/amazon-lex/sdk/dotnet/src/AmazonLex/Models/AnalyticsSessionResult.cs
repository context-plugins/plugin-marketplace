using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AnalyticsSessionResult
{
    /// <summary>
    /// A list of objects containing the criteria you requested for binning results and the values of the bins.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("binKeys")]
    public IReadOnlyList<AnalyticsBinKey>? BinKeys { get; init; }

    /// <summary>
    /// A list of objects containing the criteria you requested for grouping results and the values of the bins.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groupByKeys")]
    public IReadOnlyList<AnalyticsSessionGroupByKey>? GroupByKeys { get; init; }

    /// <summary>
    /// A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricsResults")]
    public IReadOnlyList<AnalyticsSessionMetricResult>? MetricsResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
