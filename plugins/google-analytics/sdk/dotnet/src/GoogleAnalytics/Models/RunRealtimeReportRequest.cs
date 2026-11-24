using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// The request to generate a realtime report.
/// </summary>
public record RunRealtimeReportRequest
{
    /// <summary>
    /// Specifies how rows are ordered in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderBys")]
    public IReadOnlyList<OrderBy>? OrderBys { get; init; }

    /// <summary>
    /// The minute ranges of event data to read. If unspecified, one minute range for the last 30 minutes will be used. If multiple minute ranges are requested, each response row will contain a zero based minute range index. If two minute ranges overlap, the event data for the overlapping minutes is included in the response rows for both minute ranges.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minuteRanges")]
    public IReadOnlyList<MinuteRange>? MinuteRanges { get; init; }

    /// <summary>
    /// The dimensions requested and displayed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<Dimension>? Dimensions { get; init; }

    /// <summary>
    /// Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to "RESERVED_(MetricAggregation)".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricAggregations")]
    public IReadOnlyList<MetricAggregation>? MetricAggregations { get; init; }

    /// <summary>
    /// The filter clause of metrics. Applied at post aggregation phase, similar to SQL having-clause. Dimensions cannot be used in this filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricFilter")]
    public FilterExpression7? MetricFilter { get; init; }

    /// <summary>
    /// The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. <c>limit</c> must be positive. The API can also return fewer rows than the requested <c>limit</c>, if there aren't as many dimension values as the <c>limit</c>. For instance, there are fewer than 300 possible values for the dimension <c>country</c>, so when reporting on only <c>country</c>, you can't get more than 300 rows, even if you set <c>limit</c> to a higher value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public string? Limit { get; init; }

    /// <summary>
    /// The filter clause of dimensions. Metrics cannot be used in this filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionFilter")]
    public FilterExpression8? DimensionFilter { get; init; }

    /// <summary>
    /// The metrics requested and displayed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<Metric>? Metrics { get; init; }

    /// <summary>
    /// Toggles whether to return the current state of this Google Analytics property's Realtime quota. Quota is returned in <see href="#PropertyQuota">PropertyQuota</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("returnPropertyQuota")]
    public bool? ReturnPropertyQuota { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
