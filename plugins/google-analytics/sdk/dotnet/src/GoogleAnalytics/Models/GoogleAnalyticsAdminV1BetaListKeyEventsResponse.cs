using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Response message for ListKeyEvents RPC.
/// </summary>
public record GoogleAnalyticsAdminV1BetaListKeyEventsResponse
{
    /// <summary>
    /// The requested Key Events
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("keyEvents")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaKeyEvent>? KeyEvents { get; init; }

    /// <summary>
    /// A token, which can be sent as <c>page_token</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
