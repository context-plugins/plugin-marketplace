using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListEnvironmentGroups.
/// </summary>
public record GoogleCloudApigeeV1ListEnvironmentGroupsResponse
{
    /// <summary>
    /// EnvironmentGroups in the specified organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environmentGroups")]
    public IReadOnlyList<GoogleCloudApigeeV1EnvironmentGroup>? EnvironmentGroups { get; init; }

    /// <summary>
    /// Page token that you can include in a ListEnvironmentGroups request to retrieve the next page. If omitted, no subsequent pages exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
