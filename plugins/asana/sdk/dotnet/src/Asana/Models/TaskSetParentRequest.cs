using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TaskSetParentRequest
{
    /// <summary>
    /// The new parent of the task, or <c>null</c> for no parent.
    /// </summary>
    [JsonPropertyName("parent")]
    public required string Parent { get; init; }

    /// <summary>
    /// A subtask of the parent to insert the task after, or <c>null</c> to insert at the beginning of the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_after")]
    public string? InsertAfter { get; init; }

    /// <summary>
    /// A subtask of the parent to insert the task before, or <c>null</c> to insert at the end of the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_before")]
    public string? InsertBefore { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
