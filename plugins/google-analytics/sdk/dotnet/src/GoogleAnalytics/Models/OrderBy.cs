using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is one ordering, and ordering rows by the event name string is a different ordering.
/// </summary>
public record OrderBy
{
    /// <summary>
    /// Sorts results by a metric's values within a pivot column group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pivot")]
    public PivotOrderBy2? Pivot { get; init; }

    /// <summary>
    /// If true, sorts by descending order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("desc")]
    public bool? Desc { get; init; }

    /// <summary>
    /// Sorts results by a dimension's values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimension")]
    public DimensionOrderBy2? Dimension { get; init; }

    /// <summary>
    /// Sorts results by a metric's values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metric")]
    public MetricOrderBy2? Metric { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
