using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Deprecated. Use gkeClusterTarget. Used only for the deprecated beta. A target for the deployment.
/// </summary>
public record NamespacedGkeDeploymentTarget2
{
    /// <summary>
    /// Optional. The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetGkeCluster")]
    public string? TargetGkeCluster { get; init; }

    /// <summary>
    /// Optional. A namespace within the GKE cluster to deploy into.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterNamespace")]
    public string? ClusterNamespace { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
