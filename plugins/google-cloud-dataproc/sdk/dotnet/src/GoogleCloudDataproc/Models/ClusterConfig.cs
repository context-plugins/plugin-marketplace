using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// The cluster config.
/// </summary>
public record ClusterConfig
{
    /// <summary>
    /// Optional. A Cloud Storage bucket used to collect checkpoint diagnostic data (https://cloud.google.com/dataproc/docs/support/diagnose-clusters#checkpoint_diagnostic_data). If you do not specify a diagnostic bucket, The service will use the temp bucket to collect the checkpoint diagnostic data. This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diagnosticBucket")]
    public string? DiagnosticBucket { get; init; }

    /// <summary>
    /// Optional. Security settings for the cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("securityConfig")]
    public SecurityConfig2? SecurityConfig { get; init; }

    /// <summary>
    /// Optional. The config settings for cluster software.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("softwareConfig")]
    public SoftwareConfig2? SoftwareConfig { get; init; }

    /// <summary>
    /// Optional. The High Obtainability (HO) config settings for the cluster's worker instances.In High Obtainability (HO) mode, flexible configs are the single source of truth for desired cluster configuration. num_instances represents the desired capacity of the worker group and is mutable via cluster updates and autoscaling.Only one of worker_config or worker_flexible_config can be set.In High Obtainability (HO) mode, for multi-node (standard) clusters, both master_flexible_config and worker_flexible_config must be specified. Mixing standard and flexible configs across node groups is not allowed. Single-node clusters do not specify worker configs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workerFlexibleConfig")]
    public FlexibleInstanceGroupConfig4? WorkerFlexibleConfig { get; init; }

    /// <summary>
    /// Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. If you do not specify a temp bucket, the service will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use any TTL (or none) if you specify a bucket (see staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tempBucket")]
    public string? TempBucket { get; init; }

    /// <summary>
    /// Optional. The High Obtainability (HO) config settings for the cluster's master instances.In High Obtainability (HO) mode, flexible configs are the single source of truth for desired cluster configuration across node groups: * For single-node clusters: master_flexible_config must be specified, and no worker configs should be set. * For multi-node (standard) clusters: both master_flexible_config and worker_flexible_config must be specified. Mixing standard and flexible configs across node groups is not allowed.Only one of master_config or master_flexible_config can be set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("masterFlexibleConfig")]
    public FlexibleInstanceGroupConfig1? MasterFlexibleConfig { get; init; }

    /// <summary>
    /// Optional. Encryption settings for the cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionConfig")]
    public EncryptionConfig3? EncryptionConfig { get; init; }

    /// <summary>
    /// Optional. Config for scheduling the resources to be allocated when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedulingConfig")]
    public SchedulingConfig2? SchedulingConfig { get; init; }

    /// <summary>
    /// Optional. Lifecycle setting for the cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lifecycleConfig")]
    public LifecycleConfig2? LifecycleConfig { get; init; }

    /// <summary>
    /// Optional. Autoscaling config for the policy associated with the cluster. Cluster does not autoscale if this field is unset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoscalingConfig")]
    public AutoscalingConfig3? AutoscalingConfig { get; init; }

    /// <summary>
    /// Optional. The cluster tier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterTier")]
    public ClusterTier? ClusterTier { get; init; }

    /// <summary>
    /// Optional. BETA. The Kubernetes Engine config for clusters deployed to Kubernetes. These config settings are mutually exclusive with Compute Engine-based options, such as gce_cluster_config, master_config, worker_config, secondary_worker_config, and autoscaling_config.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gkeClusterConfig")]
    public GkeClusterConfig3? GkeClusterConfig { get; init; }

    /// <summary>
    /// Optional. The shared Compute Engine config settings for all instances in a cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gceClusterConfig")]
    public GceClusterConfig2? GceClusterConfig { get; init; }

    /// <summary>
    /// Optional. The High Obtainability (HO) config settings for a cluster's secondary worker instances.In High Obtainability (HO) mode, flexible configs are the single source of truth for desired cluster configuration. num_instances represents the desired capacity of the secondary worker group and is mutable via cluster updates and autoscaling.Only one of secondary_worker_config or secondary_worker_flexible_config can be set.In High Obtainability (HO) mode, secondary workers are optional. If secondary workers are used in an HO cluster, they must be configured using secondary_worker_flexible_config (not secondary_worker_config).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondaryWorkerFlexibleConfig")]
    public FlexibleInstanceGroupConfig2? SecondaryWorkerFlexibleConfig { get; init; }

    /// <summary>
    /// Optional. The Compute Engine config settings for the cluster's master instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("masterConfig")]
    public InstanceGroupConfig5? MasterConfig { get; init; }

    /// <summary>
    /// Optional. The cluster engine.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("engine")]
    public Engine? Engine { get; init; }

    /// <summary>
    /// Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver console output. If you do not specify a staging bucket, the service will determine a Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute Engine zone where your cluster is deployed, and then create and manage this project-level, per-location bucket (see staging and temp buckets (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configBucket")]
    public string? ConfigBucket { get; init; }

    /// <summary>
    /// Optional. The Compute Engine config settings for the cluster's worker instances.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workerConfig")]
    public InstanceGroupConfig1? WorkerConfig { get; init; }

    /// <summary>
    /// Optional. The config for metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataprocMetricConfig")]
    public DataprocMetricConfig2? DataprocMetricConfig { get; init; }

    /// <summary>
    /// Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget): ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" == 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("initializationActions")]
    public IReadOnlyList<NodeInitializationAction>? InitializationActions { get; init; }

    /// <summary>
    /// Optional. The type of the cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterType")]
    public ClusterType? ClusterType { get; init; }

    /// <summary>
    /// Optional. The node group settings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("auxiliaryNodeGroups")]
    public IReadOnlyList<AuxiliaryNodeGroup>? AuxiliaryNodeGroups { get; init; }

    /// <summary>
    /// Optional. The Compute Engine config settings for a cluster's secondary worker instances
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secondaryWorkerConfig")]
    public InstanceGroupConfig3? SecondaryWorkerConfig { get; init; }

    /// <summary>
    /// Optional. Metastore configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metastoreConfig")]
    public MetastoreConfig3? MetastoreConfig { get; init; }

    /// <summary>
    /// Optional. Port/endpoint configuration for this cluster
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpointConfig")]
    public EndpointConfig2? EndpointConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
