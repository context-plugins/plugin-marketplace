using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Parameters that describe cluster nodes.
/// </summary>
public record GkeNodeConfig
{
    /// <summary>
    /// Optional. The number of local SSD disks to attach to the node, which is limited by the maximum number of disks allowable per zone (see Adding Local SSDs (https://cloud.google.com/compute/docs/disks/local-ssd)).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localSsdCount")]
    public int? LocalSsdCount { get; init; }

    /// <summary>
    /// Optional. The Customer Managed Encryption Key (CMEK) (https://cloud.google.com/kubernetes-engine/docs/how-to/using-cmek) used to encrypt the boot disk attached to each node in the node pool. Specify the key using the following format: projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bootDiskKmsKey")]
    public string? BootDiskKmsKey { get; init; }

    /// <summary>
    /// Optional. Specifies the service account (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam) to be used by the node pools. Specify the email address of the service account or its full resource name.Format: projects/{project}/serviceAccounts/{service_account_email} or {service_account_email}.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAccount")]
    public string? ServiceAccount { get; init; }

    /// <summary>
    /// Optional. A list of hardware accelerators (https://cloud.google.com/compute/docs/gpus) to attach to each node.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accelerators")]
    public IReadOnlyList<GkeNodePoolAcceleratorConfig>? Accelerators { get; init; }

    /// <summary>
    /// Optional. Whether the nodes are created as legacy preemptible VM instances (https://cloud.google.com/compute/docs/instances/preemptible). Also see Spot VMs, preemptible VM instances without a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("preemptible")]
    public bool? Preemptible { get; init; }

    /// <summary>
    /// Optional. Whether the nodes are created as Spot VM instances (https://cloud.google.com/compute/docs/instances/spot). Spot VMs are the latest update to legacy preemptible VMs. Spot VMs do not have a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spot")]
    public bool? Spot { get; init; }

    /// <summary>
    /// Optional. Minimum CPU platform (https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) to be used by this instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the friendly names of CPU platforms, such as "Intel Haswell"` or Intel Sandy Bridge".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minCpuPlatform")]
    public string? MinCpuPlatform { get; init; }

    /// <summary>
    /// Optional. The name of a Compute Engine machine type (https://cloud.google.com/compute/docs/machine-types).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("machineType")]
    public string? MachineType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
