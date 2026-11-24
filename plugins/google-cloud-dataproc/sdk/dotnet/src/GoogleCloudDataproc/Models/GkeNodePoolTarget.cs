using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// GKE node pools that Dataproc workloads run on.
/// </summary>
public record GkeNodePoolTarget
{
    /// <summary>
    /// Input only. The configuration for the GKE node pool.If specified, Dataproc attempts to create a node pool with the specified shape. If one with the same name already exists, it is verified against all specified fields. If a field differs, the virtual cluster creation will fail.If omitted, any node pool with the specified name is used. If a node pool with the specified name does not exist, Dataproc create a node pool with default values.This is an input only field. It will not be returned by the API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nodePoolConfig")]
    public GkeNodePoolConfig2? NodePoolConfig { get; init; }

    /// <summary>
    /// Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nodePool")]
    public string? NodePool { get; init; }

    /// <summary>
    /// Required. The roles associated with the GKE node pool.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roles")]
    public IReadOnlyList<Role>? Roles { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
