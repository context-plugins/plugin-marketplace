using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListDataCollectors.
/// </summary>
public record GoogleCloudApigeeV1ListDataCollectorsResponse
{
    /// <summary>
    /// Data collectors in the specified organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataCollectors")]
    public IReadOnlyList<GoogleCloudApigeeV1DataCollector>? DataCollectors { get; init; }

    /// <summary>
    /// Page token that you can include in a ListDataCollectors request to retrieve the next page. If omitted, no subsequent pages exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
