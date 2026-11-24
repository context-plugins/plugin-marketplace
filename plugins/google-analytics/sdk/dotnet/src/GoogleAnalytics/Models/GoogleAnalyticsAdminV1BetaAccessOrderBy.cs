using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessOrderBy
{
    /// <summary>
    /// If true, sorts by descending order. If false or unspecified, sorts in ascending order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("desc")]
    public bool? Desc { get; init; }

    /// <summary>
    /// Sorts results by a dimension's values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimension")]
    public GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1? Dimension { get; init; }

    /// <summary>
    /// Sorts results by a metric's values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metric")]
    public GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2? Metric { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
