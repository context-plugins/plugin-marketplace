using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Auto schema for a task input or output.
/// </summary>
public record AutoSchema
{
    /// <summary>
    /// The type of schema being defined. Always <c>auto</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type3ParallelAiTasksApi? Type { get; init; } = Type3ParallelAiTasksApi.Auto;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
