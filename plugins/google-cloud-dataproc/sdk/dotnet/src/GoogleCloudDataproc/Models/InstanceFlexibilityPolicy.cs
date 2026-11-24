using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Instance flexibility Policy allowing a mixture of VM shapes and provisioning models.
/// </summary>
public record InstanceFlexibilityPolicy
{
    /// <summary>
    /// Optional. Defines how the Group selects the provisioning model to ensure required reliability.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provisioningModelMix")]
    public ProvisioningModelMix2? ProvisioningModelMix { get; init; }

    /// <summary>
    /// Output only. A map of instance short name to machine type. The key is the short name of the Compute Engine instance, and the value is the full machine-type name (e.g., 'n1-standard-16'). See Machine types for more information on valid machine type strings.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceMachineTypes")]
    public IReadOnlyDictionary<string, string>? InstanceMachineTypes { get; init; }

    /// <summary>
    /// Optional. List of instance selection options that the group will use when creating new VMs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceSelectionList")]
    public IReadOnlyList<InstanceSelection>? InstanceSelectionList { get; init; }

    /// <summary>
    /// Output only. A list of instance selection results in the group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instanceSelectionResults")]
    public IReadOnlyList<InstanceSelectionResult>? InstanceSelectionResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
