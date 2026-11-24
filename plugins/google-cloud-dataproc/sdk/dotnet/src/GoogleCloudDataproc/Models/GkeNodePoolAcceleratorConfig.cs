using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool.
/// </summary>
public record GkeNodePoolAcceleratorConfig
{
    /// <summary>
    /// The number of accelerator cards exposed to an instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acceleratorCount")]
    public string? AcceleratorCount { get; init; }

    /// <summary>
    /// The accelerator type resource namename (see GPUs on Compute Engine).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("acceleratorType")]
    public string? AcceleratorType { get; init; }

    /// <summary>
    /// Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gpuPartitionSize")]
    public string? GpuPartitionSize { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
