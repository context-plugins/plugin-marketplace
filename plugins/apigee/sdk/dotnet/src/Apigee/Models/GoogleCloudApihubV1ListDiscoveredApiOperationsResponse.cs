using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Message for response to listing DiscoveredApiOperations
/// </summary>
public record GoogleCloudApihubV1ListDiscoveredApiOperationsResponse
{
    /// <summary>
    /// The DiscoveredApiOperations from the specified project, location and DiscoveredApiObservation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("discoveredApiOperations")]
    public IReadOnlyList<GoogleCloudApihubV1DiscoveredApiOperation>? DiscoveredApiOperations { get; init; }

    /// <summary>
    /// A token, which can be sent as <c>page_token</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
