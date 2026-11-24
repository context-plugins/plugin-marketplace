using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. The High Obtainability (HO) config settings for the cluster's worker instances.In High Obtainability (HO) mode, flexible configs are the single source of truth for desired cluster configuration. num_instances represents the desired capacity of the worker group and is mutable via cluster updates and autoscaling.Only one of worker_config or worker_flexible_config can be set.In High Obtainability (HO) mode, for multi-node (standard) clusters, both master_flexible_config and worker_flexible_config must be specified. Mixing standard and flexible configs across node groups is not allowed. Single-node clusters do not specify worker configs.
/// </summary>
public record FlexibleInstanceGroupConfig4
{
    /// <summary>
    /// Optional. The boot disk size in GB. This is a create-time specification and is not currently mutable via update masks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bootDiskSizeGb")]
    public int? BootDiskSizeGb { get; init; }

    /// <summary>
    /// Optional. The number of vCPUs per instance. Must be a power of 2 (2, 4, 8, 16, 32). This is a create-time specification and is not currently mutable via update masks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coreCount")]
    public int? CoreCount { get; init; }

    /// <summary>
    /// Optional. The hardware class of the instances. This is a create-time specification and is not currently mutable via update masks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hardwareClass")]
    public HardwareClass? HardwareClass { get; init; }

    /// <summary>
    /// Optional. The number of VM instances requested.For master instances, this must be 1. For worker and secondary worker instances, this represents the desired capacity of the group and is mutable via cluster update operations and autoscaling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numInstances")]
    public int? NumInstances { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
