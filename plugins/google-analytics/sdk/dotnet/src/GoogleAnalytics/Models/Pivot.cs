using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// Describes the visible dimension columns and rows in the report response.
/// </summary>
public record Pivot
{
    /// <summary>
    /// Specifies how dimensions are ordered in the pivot. In the first Pivot, the OrderBys determine Row and PivotDimensionHeader ordering; in subsequent Pivots, the OrderBys determine only PivotDimensionHeader ordering. Dimensions specified in these OrderBys must be a subset of Pivot.field_names.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderBys")]
    public IReadOnlyList<OrderBy>? OrderBys { get; init; }

    /// <summary>
    /// Aggregate the metrics by dimensions in this pivot using the specified metric_aggregations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricAggregations")]
    public IReadOnlyList<MetricAggregation>? MetricAggregations { get; init; }

    /// <summary>
    /// Dimension names for visible columns in the report response. Including "dateRange" produces a date range column; for each row in the response, dimension values in the date range column will indicate the corresponding date range from the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fieldNames")]
    public IReadOnlyList<string>? FieldNames { get; init; }

    /// <summary>
    /// The number of unique combinations of dimension values to return in this pivot. The <c>limit</c> parameter is required. A <c>limit</c> of 10,000 is common for single pivot requests. The product of the <c>limit</c> for each <c>pivot</c> in a <c>RunPivotReportRequest</c> must not exceed 250,000. For example, a two pivot request with <c>limit: 1000</c> in each pivot will fail because the product is <c>1,000,000</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("limit")]
    public string? Limit { get; init; }

    /// <summary>
    /// The row count of the start row. The first row is counted as row 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("offset")]
    public string? Offset { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
