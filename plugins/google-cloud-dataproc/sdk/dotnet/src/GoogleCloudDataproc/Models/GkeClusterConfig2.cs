using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Required. The configuration for running the Dataproc cluster on GKE.
/// </summary>
public record GkeClusterConfig2
{
    /// <summary>
    /// Optional. Deprecated. Use gkeClusterTarget. Used only for the deprecated beta. A target for the deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("namespacedGkeDeploymentTarget")]
    public NamespacedGkeDeploymentTarget2? NamespacedGkeDeploymentTarget { get; init; }

    /// <summary>
    /// Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gkeClusterTarget")]
    public string? GkeClusterTarget { get; init; }

    /// <summary>
    /// Optional. GKE node pools where workloads will be scheduled. At least one node pool must be assigned the DEFAULT GkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc constructs a DEFAULT GkeNodePoolTarget. Each role can be given to only one GkeNodePoolTarget. All node pools must have the same location settings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nodePoolTarget")]
    public IReadOnlyList<GkeNodePoolTarget>? NodePoolTarget { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
