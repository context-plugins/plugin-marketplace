using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Response message for ListCustomMetrics RPC.
/// </summary>
public record GoogleAnalyticsAdminV1BetaListCustomMetricsResponse
{
    /// <summary>
    /// List of CustomMetrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customMetrics")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaCustomMetric>? CustomMetrics { get; init; }

    /// <summary>
    /// A token, which can be sent as <c>page_token</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
