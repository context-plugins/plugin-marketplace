using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Describes the identifying information, config, and status of a cluster
/// </summary>
public record Cluster
{
    /// <summary>
    /// Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Required. The Google Cloud Platform project ID that the cluster belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("projectId")]
    public string? ProjectId { get; init; }

    /// <summary>
    /// Output only. Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public ClusterMetrics2? Metrics { get; init; }

    /// <summary>
    /// Required. The cluster name, which must be unique within a project. The name must start with a lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot end with a hyphen. The name of a deleted cluster can be reused.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterName")]
    public string? ClusterName { get; init; }

    /// <summary>
    /// Output only. A cluster UUID (Unique Universal Identifier). The service generates this value when it creates the cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterUuid")]
    public string? ClusterUuid { get; init; }

    /// <summary>
    /// Optional. The virtual cluster config is used when creating a cluster that does not directly control the underlying compute resources, for example, when creating a GKE cluster (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). the service may set default values, and values may change when clusters are updated. Exactly one of config or virtual_cluster_config must be specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualClusterConfig")]
    public VirtualClusterConfig2? VirtualClusterConfig { get; init; }

    /// <summary>
    /// Output only. The previous cluster status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statusHistory")]
    public IReadOnlyList<ClusterStatus>? StatusHistory { get; init; }

    /// <summary>
    /// Optional. The cluster config for a cluster of Compute Engine Instances. Note that the service may set default values, and values may change when clusters are updated.Exactly one of ClusterConfig or VirtualClusterConfig must be specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("config")]
    public ClusterConfig1? Config { get; init; }

    /// <summary>
    /// Output only. Cluster status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public ClusterStatus1? Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
