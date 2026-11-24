using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// The list of all clusters in a project.
/// </summary>
public record ListClustersResponse
{
    /// <summary>
    /// Output only. The clusters in the project.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusters")]
    public IReadOnlyList<Cluster>? Clusters { get; init; }

    /// <summary>
    /// Output only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token in a subsequent ListClustersRequest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextPageToken")]
    public string? NextPageToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
