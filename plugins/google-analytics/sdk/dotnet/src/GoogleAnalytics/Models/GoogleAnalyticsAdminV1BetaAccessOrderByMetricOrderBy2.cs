using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Sorts results by a metric's values.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2
{
    /// <summary>
    /// A metric name in the request to order by.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricName")]
    public string? MetricName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
