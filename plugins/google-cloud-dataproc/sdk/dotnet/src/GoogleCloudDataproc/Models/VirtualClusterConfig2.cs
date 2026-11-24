using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. The virtual cluster config is used when creating a cluster that does not directly control the underlying compute resources, for example, when creating a GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). the service may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified.
/// </summary>
public record VirtualClusterConfig2
{
    /// <summary>
    /// Required. The configuration for running the cluster on Kubernetes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kubernetesClusterConfig")]
    public KubernetesClusterConfig2? KubernetesClusterConfig { get; init; }

    /// <summary>
    /// Optional. Configuration of auxiliary services used by this cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auxiliaryServicesConfig")]
    public AuxiliaryServicesConfig2? AuxiliaryServicesConfig { get; init; }

    /// <summary>
    /// Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, the service will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stagingBucket")]
    public string? StagingBucket { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
