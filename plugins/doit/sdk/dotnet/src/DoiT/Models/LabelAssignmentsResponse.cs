using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Response containing the list of objects assigned to a label.
/// </summary>
public record LabelAssignmentsResponse
{
    /// <summary>
    /// Array of objects currently assigned to the label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assignments")]
    public IReadOnlyList<LabelAssignmentObject>? Assignments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
