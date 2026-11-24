using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Text description for a task input or output.
/// </summary>
public record TextSchema
{
    /// <summary>
    /// A text description of the desired output from the task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public Description? Description { get; init; }

    /// <summary>
    /// The type of schema being defined. Always <c>text</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeParallelAiTasksApi? Type { get; init; } = TypeParallelAiTasksApi.Text;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
