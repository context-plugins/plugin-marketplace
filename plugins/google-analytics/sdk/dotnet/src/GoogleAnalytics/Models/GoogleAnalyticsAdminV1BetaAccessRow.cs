using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Access report data for each row.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessRow
{
    /// <summary>
    /// List of metric values. These values are in the same order as specified in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricValues")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaAccessMetricValue>? MetricValues { get; init; }

    /// <summary>
    /// List of dimension values. These values are in the same order as specified in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionValues")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaAccessDimensionValue>? DimensionValues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
