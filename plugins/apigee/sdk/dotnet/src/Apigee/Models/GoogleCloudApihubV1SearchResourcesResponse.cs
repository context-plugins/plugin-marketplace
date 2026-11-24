using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for the SearchResources method.
/// </summary>
public record GoogleCloudApihubV1SearchResourcesResponse
{
    /// <summary>
    /// List of search results according to the filter and search query specified. The order of search results represents the ranking.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchResults")]
    public IReadOnlyList<GoogleCloudApihubV1SearchResult>? SearchResults { get; init; }

    /// <summary>
    /// Pass this token in the SearchResourcesRequest to continue to list results. If all results have been returned, this field is an empty string or not present in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
