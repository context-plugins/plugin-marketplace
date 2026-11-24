using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Summary information for an allocation.
/// </summary>
public record AllocationListItem
{
    /// <summary>
    /// Allocation ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// Allocation name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Allocation owner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("owner")]
    public string? Owner { get; init; }

    /// <summary>
    /// Allocation description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Type of allocation (preset or custom).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// Composition type of allocation (single or group).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allocationType")]
    public AllocationType? AllocationType { get; init; }

    /// <summary>
    /// The time when the allocation was created (in UNIX timestamp).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public long? CreateTime { get; init; }

    /// <summary>
    /// Last time the allocation was modified (in UNIX timestamp).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public long? UpdateTime { get; init; }

    /// <summary>
    /// URL to view the allocation in the DoiT console.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("urlUI")]
    public string? UrlUi { get; init; }

    /// <summary>
    /// Identifier of the folder that contains the allocation. Set to "root" if the allocation is at the top level (not in a folder).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("folderId")]
    public string? FolderId { get; init; } = "root";

    /// <summary>
    /// Whether anomaly detection is enabled for this allocation. Only applicable to single allocations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("anomalyDetection")]
    public bool? AnomalyDetection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
