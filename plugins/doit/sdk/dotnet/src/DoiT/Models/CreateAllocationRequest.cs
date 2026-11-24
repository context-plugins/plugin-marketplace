using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request body for creating an allocation.
/// </summary>
public record CreateAllocationRequest
{
    /// <summary>
    /// Allocation name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Allocation description.
    /// </summary>
    [JsonPropertyName("description")]
    public required string Description { get; init; }

    /// <summary>
    /// Whether anomaly detection is enabled for this allocation. Only applicable to single allocations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("anomalyDetection")]
    public bool? AnomalyDetection { get; init; }

    /// <summary>
    /// Single allocation rule. Components can reference other existing allocation rules by using the "allocation_rule" dimension type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rule")]
    public AllocationRule? Rule { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rules")]
    public IReadOnlyList<GroupAllocationRule?>? Rules { get; init; }

    /// <summary>
    /// Custom label for values that do not fit into allocation (required for group type allocation).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unallocatedCosts")]
    public string? UnallocatedCosts { get; init; }

    /// <summary>
    /// Identifier of the folder that contains the allocation. Set to "root" if the allocation is at the top level (not in a folder).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("folderId")]
    public string? FolderId { get; init; } = "root";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
