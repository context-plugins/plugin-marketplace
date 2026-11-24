using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Defines machines types and a rank to which the machines types belong.
/// </summary>
public record InstanceSelection
{
    /// <summary>
    /// Optional. Full machine-type names, e.g. "n1-standard-16".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("machineTypes")]
    public IReadOnlyList<string>? MachineTypes { get; init; }

    /// <summary>
    /// Optional. Disk configuration to apply to the instances in this instance selection. If specified on any entry in instanceSelectionList, then it must be specified on every entry in instanceSelectionList and the instanceGroupConfig must not specify any diskConfig.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diskConfig")]
    public DiskConfig2? DiskConfig { get; init; }

    /// <summary>
    /// Optional. Preference of this instance selection. Lower number means higher preference. The service will first try to create a VM based on the machine-type with priority rank and fallback to next rank based on availability. Machine types and instance selections with the same priority have the same preference.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rank")]
    public int? Rank { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
