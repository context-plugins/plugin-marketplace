using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Response for ListArchiveDeployments method.
/// </summary>
public record GoogleCloudApigeeV1ListArchiveDeploymentsResponse
{
    /// <summary>
    /// Archive Deployments in the specified environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archiveDeployments")]
    public IReadOnlyList<GoogleCloudApigeeV1ArchiveDeployment>? ArchiveDeployments { get; init; }

    /// <summary>
    /// Page token that you can include in a ListArchiveDeployments request to retrieve the next page. If omitted, no subsequent pages exist.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
