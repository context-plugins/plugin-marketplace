using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The request to generate a pivot report.
/// </summary>
public record RunPivotReportRequest
{
    /// <summary>
    /// The filter clause of metrics. Applied at post aggregation phase, similar to SQL having-clause. Metrics must be requested to be used in this filter. Dimensions cannot be used in this filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricFilter")]
    public FilterExpression2? MetricFilter { get; init; }

    /// <summary>
    /// If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this <c>keep_empty_rows</c> setting, only data recorded by the Google Analytics property can be displayed in a report. For example if a property never logs a <c>purchase</c> event, then a query for the <c>eventName</c> dimension and <c>eventCount</c> metric will not have a row eventName: "purchase" and eventCount: 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keepEmptyRows")]
    public bool? KeepEmptyRows { get; init; }

    /// <summary>
    /// A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/property-id">where to find your Property ID</see>. Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("property")]
    public string? Property { get; init; }

    /// <summary>
    /// Describes the visual format of the report's dimensions in columns or rows. The union of the fieldNames (dimension names) in all pivots must be a subset of dimension names defined in Dimensions. No two pivots can share a dimension. A dimension is only visible if it appears in a pivot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pivots")]
    public IReadOnlyList<Pivot>? Pivots { get; init; }

    /// <summary>
    /// Optional. The configuration of comparisons requested and displayed. The request requires both a comparisons field and a comparisons dimension to receive a comparison column in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("comparisons")]
    public IReadOnlyList<ComparisonModel>? Comparisons { get; init; }

    /// <summary>
    /// Cohort group associated with this request. If there is a cohort group in the request the 'cohort' dimension must be present.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cohortSpec")]
    public CohortSpec1? CohortSpec { get; init; }

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
    /// The dimensions requested. All defined dimensions must be used by one of the following: dimension_expression, dimension_filter, pivots, order_bys.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<Dimension>? Dimensions { get; init; }

    /// <summary>
    /// The metrics requested, at least one metric needs to be specified. All defined metrics must be used by one of the following: metric_expression, metric_filter, order_bys.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<Metric>? Metrics { get; init; }

    /// <summary>
    /// The filter clause of dimensions. Dimensions must be requested to be used in this filter. Metrics cannot be used in this filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionFilter")]
    public FilterExpression4? DimensionFilter { get; init; }

    /// <summary>
    /// The date range to retrieve event data for the report. If multiple date ranges are specified, event data from each date range is used in the report. A special dimension with field name "dateRange" can be included in a Pivot's field names; if included, the report compares between date ranges. In a cohort request, this <c>dateRanges</c> must be unspecified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dateRanges")]
    public IReadOnlyList<DateRange>? DateRanges { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
