using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Input only. The configuration for the GKE node pool.If specified, Dataproc attempts to create a node pool with the specified shape. If one with the same name already exists, it is verified against all specified fields. If a field differs, the virtual cluster creation will fail.If omitted, any node pool with the specified name is used. If a node pool with the specified name does not exist, Dataproc create a node pool with default values.This is an input only field. It will not be returned by the API.
/// </summary>
public record GkeNodePoolConfig2
{
    /// <summary>
    /// Optional. The autoscaler configuration for this node pool. The autoscaler is enabled only when a valid configuration is present.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoscaling")]
    public GkeNodePoolAutoscalingConfig2? Autoscaling { get; init; }

    /// <summary>
    /// Optional. The node pool configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public GkeNodeConfig2? Config { get; init; }

    /// <summary>
    /// Optional. The list of Compute Engine zones (https://cloud.google.com/compute/docs/zones#available) where node pool nodes associated with a Dataproc on GKE virtual cluster will be located.Note: All node pools associated with a virtual cluster must be located in the same region as the virtual cluster, and they must be located in the same zone within that region.If a location is not specified during node pool creation, Dataproc on GKE will choose the zone.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locations")]
    public IReadOnlyList<string>? Locations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
