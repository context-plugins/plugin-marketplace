using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// The request to generate a report.
/// </summary>
public record RunReportRequest
{
    /// <summary>
    /// The row count of the start row. The first row is counted as row 0. When paging, the first request does not specify offset; or equivalently, sets offset to 0; the first request returns the first <c>limit</c> of rows. The second request sets offset to the <c>limit</c> of the first request; the second request returns the second <c>limit</c> of rows. To learn more about this pagination parameter, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination">Pagination</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    public string? Offset { get; init; }

    /// <summary>
    /// Toggles whether to return the current state of this Google Analytics property's quota. Quota is returned in <see href="#PropertyQuota">PropertyQuota</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("returnPropertyQuota")]
    public bool? ReturnPropertyQuota { get; init; }

    /// <summary>
    /// A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the property's default currency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currencyCode")]
    public string? CurrencyCode { get; init; }

    /// <summary>
    /// Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to "RESERVED_(MetricAggregation)". Aggregates including both comparisons and multiple date ranges will be aggregated based on the date ranges.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricAggregations")]
    public IReadOnlyList<MetricAggregation>? MetricAggregations { get; init; }

    /// <summary>
    /// Cohort group associated with this request. If there is a cohort group in the request the 'cohort' dimension must be present.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cohortSpec")]
    public CohortSpec1? CohortSpec { get; init; }

    /// <summary>
    /// Dimension filters let you ask for only specific dimension values in the report. To learn more, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters">Fundamentals of Dimension Filters</see> for examples. Metrics cannot be used in this filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionFilter")]
    public FilterExpression5? DimensionFilter { get; init; }

    /// <summary>
    /// If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this <c>keep_empty_rows</c> setting, only data recorded by the Google Analytics property can be displayed in a report. For example if a property never logs a <c>purchase</c> event, then a query for the <c>eventName</c> dimension and <c>eventCount</c> metric will not have a row eventName: "purchase" and eventCount: 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keepEmptyRows")]
    public bool? KeepEmptyRows { get; init; }

    /// <summary>
    /// The metrics requested and displayed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<Metric>? Metrics { get; init; }

    /// <summary>
    /// The filter clause of metrics. Applied after aggregating the report's rows, similar to SQL having-clause. Dimensions cannot be used in this filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricFilter")]
    public FilterExpression6? MetricFilter { get; init; }

    /// <summary>
    /// The dimensions requested and displayed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<Dimension>? Dimensions { get; init; }

    /// <summary>
    /// A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/property-id">where to find your Property ID</see>. Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("property")]
    public string? Property { get; init; }

    /// <summary>
    /// The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. <c>limit</c> must be positive. The API can also return fewer rows than the requested <c>limit</c>, if there aren't as many dimension values as the <c>limit</c>. For instance, there are fewer than 300 possible values for the dimension <c>country</c>, so when reporting on only <c>country</c>, you can't get more than 300 rows, even if you set <c>limit</c> to a higher value. To learn more about this pagination parameter, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination">Pagination</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public string? Limit { get; init; }

    /// <summary>
    /// Specifies how rows are ordered in the response. Requests including both comparisons and multiple date ranges will have order bys applied on the comparisons.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderBys")]
    public IReadOnlyList<OrderBy>? OrderBys { get; init; }

    /// <summary>
    /// Optional. The configuration of comparisons requested and displayed. The request only requires a comparisons field in order to receive a comparison column in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comparisons")]
    public IReadOnlyList<ComparisonModel>? Comparisons { get; init; }

    /// <summary>
    /// Date ranges of data to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the event data for the overlapping days is included in the response rows for both date ranges. In a cohort request, this <c>dateRanges</c> must be unspecified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dateRanges")]
    public IReadOnlyList<DateRange>? DateRanges { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
