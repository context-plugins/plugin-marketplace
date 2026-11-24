using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. Cluster to be repaired
/// </summary>
public record ClusterToRepair2
{
    /// <summary>
    /// Required. Repair action to take on the cluster resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterRepairAction")]
    public ClusterRepairAction? ClusterRepairAction { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
