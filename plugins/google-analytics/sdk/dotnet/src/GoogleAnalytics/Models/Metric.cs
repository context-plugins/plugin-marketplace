using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// The quantitative measurements of a report. For example, the metric <c>eventCount</c> is the total number of events. Requests are allowed up to 10 metrics.
/// </summary>
public record Metric
{
    /// <summary>
    /// Indicates if a metric is invisible in the report response. If a metric is invisible, the metric will not produce a column in the response, but can be used in <c>metricFilter</c>, <c>orderBys</c>, or a metric <c>expression</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invisible")]
    public bool? Invisible { get; init; }

    /// <summary>
    /// The name of the metric. See the <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics">API Metrics</see> for the list of metric names supported by core reporting methods such as <c>runReport</c> and <c>batchRunReports</c>. See <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#metrics">Realtime Metrics</see> for the list of metric names supported by the <c>runRealtimeReport</c> method. See <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#metrics">Funnel Metrics</see> for the list of metric names supported by the <c>runFunnelReport</c> method. If <c>expression</c> is specified, <c>name</c> can be any string that you would like within the allowed character set. For example if <c>expression</c> is <c>screenPageViews/sessions</c>, you could call that metric's name = <c>viewsPerSession</c>. Metric names that you choose must match the regular expression <c>^[a-zA-Z0-9_]$</c>. Metrics are referenced by <c>name</c> in <c>metricFilter</c>, <c>orderBys</c>, and metric <c>expression</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// A mathematical expression for derived metrics. For example, the metric Event count per user is <c>eventCount/totalUsers</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expression")]
    public string? Expression { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
