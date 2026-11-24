using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudTasks.Core.Models;

namespace GoogleCloudTasks.Models;

/// <summary>
/// The response message for Locations.ListLocations.
/// </summary>
public record ListLocationsResponse
{
    /// <summary>
    /// The standard List next-page token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// A list of locations that matches the specified filter in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locations")]
    public IReadOnlyList<Location>? Locations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
