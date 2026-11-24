using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The response realtime report table corresponding to a request.
/// </summary>
public record RunRealtimeReportResponse
{
    /// <summary>
    /// The total number of rows in the query result. <c>rowCount</c> is independent of the number of rows returned in the response and the <c>limit</c> request parameter. For example if a query returns 175 rows and includes <c>limit</c> of 50 in the API request, the response will contain <c>rowCount</c> of 175 but only 50 rows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowCount")]
    public int? RowCount { get; init; }

    /// <summary>
    /// Identifies what kind of resource this message is. This <c>kind</c> is always the fixed string "analyticsData#runRealtimeReport". Useful to distinguish between response types in JSON.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public string? Kind { get; init; }

    /// <summary>
    /// If requested, the totaled values of metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totals")]
    public IReadOnlyList<Row>? Totals { get; init; }

    /// <summary>
    /// This Google Analytics property's Realtime quota state including this request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("propertyQuota")]
    public PropertyQuota3? PropertyQuota { get; init; }

    /// <summary>
    /// Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricHeaders")]
    public IReadOnlyList<MetricHeader>? MetricHeaders { get; init; }

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
    /// If requested, the maximum values of metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maximums")]
    public IReadOnlyList<Row>? Maximums { get; init; }

    /// <summary>
    /// If requested, the minimum values of metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minimums")]
    public IReadOnlyList<Row>? Minimums { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
