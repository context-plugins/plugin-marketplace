using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The response pivot report table corresponding to a pivot request.
/// </summary>
public record RunPivotReportResponse
{
    /// <summary>
    /// Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionHeaders")]
    public IReadOnlyList<DimensionHeader>? DimensionHeaders { get; init; }

    /// <summary>
    /// Rows of dimension value combinations and metric values in the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rows")]
    public IReadOnlyList<Row>? Rows { get; init; }

    /// <summary>
    /// Identifies what kind of resource this message is. This <c>kind</c> is always the fixed string "analyticsData#runPivotReport". Useful to distinguish between response types in JSON.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public string? Kind { get; init; }

    /// <summary>
    /// Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricHeaders")]
    public IReadOnlyList<MetricHeader>? MetricHeaders { get; init; }

    /// <summary>
    /// Summarizes the columns and rows created by a pivot. Each pivot in the request produces one header in the response. If we have a request like this: "pivots": [{ "fieldNames": ["country", "city"] }, { "fieldNames": "eventName" }] We will have the following <c>pivotHeaders</c> in the response: "pivotHeaders" : [{ "dimensionHeaders": [{ "dimensionValues": [ { "value": "United Kingdom" }, { "value": "London" } ] }, { "dimensionValues": [ { "value": "Japan" }, { "value": "Osaka" } ] }] }, { "dimensionHeaders": [{ "dimensionValues": [{ "value": "session_start" }] }, { "dimensionValues": [{ "value": "scroll" }] }] }]
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pivotHeaders")]
    public IReadOnlyList<PivotHeader>? PivotHeaders { get; init; }

    /// <summary>
    /// Aggregation of metric values. Can be totals, minimums, or maximums. The returned aggregations are controlled by the metric_aggregations in the pivot. The type of aggregation returned in each row is shown by the dimension_values which are set to "RESERVED_".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aggregates")]
    public IReadOnlyList<Row>? Aggregates { get; init; }

    /// <summary>
    /// This Google Analytics property's quota state including this request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("propertyQuota")]
    public PropertyQuota1? PropertyQuota { get; init; }

    /// <summary>
    /// Metadata for the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public ResponseMetaData2? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
