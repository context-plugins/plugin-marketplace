using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).
/// </summary>
public record GkeNodePoolConfig
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
