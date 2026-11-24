using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// ListAppGroupsResponse contains the 0 or more AppGroups, along with the optional page token and the total count of apps.
/// </summary>
public record GoogleCloudApigeeV1ListAppGroupsResponse
{
    /// <summary>
    /// Total count of AppGroups.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalSize")]
    public int? TotalSize { get; init; }

    /// <summary>
    /// Token that can be sent as <c>next_page_token</c> to retrieve the next page. If this field is omitted, there are no subsequent pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    /// <summary>
    /// List of AppGroups.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appGroups")]
    public IReadOnlyList<GoogleCloudApigeeV1AppGroup>? AppGroups { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
