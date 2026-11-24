using System.Collections.Generic;
using System.Text.Json.Serialization;
using DopeSecurity.Core.Models;

namespace DopeSecurity.Models;

public record PoliciesAssignmentsRequest
{
    /// <summary>
    /// User emails to assign. Omit to leave unchanged, send [] to unassign all.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("users")]
    public IReadOnlyList<string>? Users { get; init; }

    /// <summary>
    /// Group emails to assign. Omit to leave unchanged, send [] to unassign all.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groups")]
    public IReadOnlyList<string>? Groups { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
