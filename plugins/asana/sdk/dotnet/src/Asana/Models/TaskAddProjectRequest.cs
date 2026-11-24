using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record TaskAddProjectRequest
{
    /// <summary>
    /// The project to add the task to.
    /// </summary>
    [JsonPropertyName("project")]
    public required string Project { get; init; }

    /// <summary>
    /// A task in the project to insert the task after, or <c>null</c> to insert at the beginning of the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_after")]
    public string? InsertAfter { get; init; }

    /// <summary>
    /// A task in the project to insert the task before, or <c>null</c> to insert at the end of the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insert_before")]
    public string? InsertBefore { get; init; }

    /// <summary>
    /// A section in the project to insert the task into. The task will be inserted at the bottom of the section.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("section")]
    public string? Section { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
