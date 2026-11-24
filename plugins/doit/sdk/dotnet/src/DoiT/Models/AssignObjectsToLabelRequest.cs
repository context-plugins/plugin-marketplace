using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Request to assign or remove objects from a label.
/// </summary>
public record AssignObjectsToLabelRequest
{
    /// <summary>
    /// Array of objects to assign to the label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("add")]
    public IReadOnlyList<LabelAssignmentObject>? Add { get; init; }

    /// <summary>
    /// Array of objects to unassign from the label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remove")]
    public IReadOnlyList<LabelAssignmentObject>? Remove { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
