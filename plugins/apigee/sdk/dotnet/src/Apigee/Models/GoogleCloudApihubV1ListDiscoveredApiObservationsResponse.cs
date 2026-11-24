using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Message for response to listing DiscoveredApiObservations
/// </summary>
public record GoogleCloudApihubV1ListDiscoveredApiObservationsResponse
{
    /// <summary>
    /// The DiscoveredApiObservation from the specified project and location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discoveredApiObservations")]
    public IReadOnlyList<GoogleCloudApihubV1DiscoveredApiObservation>? DiscoveredApiObservations { get; init; }

    /// <summary>
    /// A token, which can be sent as <c>page_token</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
