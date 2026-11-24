using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Node Group Affinity for clusters using sole-tenant node groups. The NodeGroupAffinity resource is not related to the NodeGroup resource.
/// </summary>
public record NodeGroupAffinity
{
    /// <summary>
    /// Required. The URI of a sole-tenant node group resource (https://cloud.google.com/compute/docs/reference/rest/v1/nodeGroups) that the cluster will be created on.A full URL, partial URI, or node group name are valid. Examples: https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 projects/[project_id]/zones/[zone]/nodeGroups/node-group-1 node-group-1
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nodeGroupUri")]
    public string? NodeGroupUri { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
