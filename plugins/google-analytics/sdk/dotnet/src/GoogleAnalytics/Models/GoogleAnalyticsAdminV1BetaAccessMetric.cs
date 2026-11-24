using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The quantitative measurements of a report. For example, the metric <c>accessCount</c> is the total number of data access records.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessMetric
{
    /// <summary>
    /// The API name of the metric. See <see href="https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema">Data Access Schema</see> for the list of metrics supported in this API. Metrics are referenced by name in <c>metricFilter</c> &amp; <c>orderBys</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metricName")]
    public string? MetricName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
