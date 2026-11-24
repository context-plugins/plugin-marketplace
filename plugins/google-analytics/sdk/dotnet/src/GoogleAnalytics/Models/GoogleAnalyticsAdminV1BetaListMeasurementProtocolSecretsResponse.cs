using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Response message for ListMeasurementProtocolSecret RPC
/// </summary>
public record GoogleAnalyticsAdminV1BetaListMeasurementProtocolSecretsResponse
{
    /// <summary>
    /// A list of secrets for the parent stream specified in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("measurementProtocolSecrets")]
    public IReadOnlyList<GoogleAnalyticsAdminV1BetaMeasurementProtocolSecret>? MeasurementProtocolSecrets { get; init; }

    /// <summary>
    /// A token, which can be sent as <c>page_token</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
