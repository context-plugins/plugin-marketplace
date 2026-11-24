using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AnalyticsUtteranceResult
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
    public IReadOnlyList<AnalyticsUtteranceGroupByKey>? GroupByKeys { get; init; }

    /// <summary>
    /// A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricsResults")]
    public IReadOnlyList<AnalyticsUtteranceMetricResult>? MetricsResults { get; init; }

    /// <summary>
    /// A list of objects containing information about the last used intent at the time of an utterance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributeResults")]
    public IReadOnlyList<AnalyticsUtteranceAttributeResult>? AttributeResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
