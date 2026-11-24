using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Required. The configuration for running the cluster on Kubernetes.
/// </summary>
public record KubernetesClusterConfig2
{
    /// <summary>
    /// Required. The configuration for running the Dataproc cluster on GKE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gkeClusterConfig")]
    public GkeClusterConfig2? GkeClusterConfig { get; init; }

    /// <summary>
    /// Optional. A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kubernetesNamespace")]
    public string? KubernetesNamespace { get; init; }

    /// <summary>
    /// Optional. The software configuration for this Dataproc cluster running on Kubernetes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kubernetesSoftwareConfig")]
    public KubernetesSoftwareConfig2? KubernetesSoftwareConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
