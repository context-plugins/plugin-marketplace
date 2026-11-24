using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Defines a mapping from machine types to the number of VMs that are created with each machine type.
/// </summary>
public record InstanceSelectionResult
{
    /// <summary>
    /// Output only. Full machine-type names, e.g. "n1-standard-16".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("machineType")]
    public string? MachineType { get; init; }

    /// <summary>
    /// Output only. Number of VM provisioned with the machine_type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vmCount")]
    public int? VmCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
