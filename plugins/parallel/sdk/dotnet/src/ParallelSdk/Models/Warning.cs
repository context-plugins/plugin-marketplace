using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Human-readable message for a task.
/// </summary>
public record Warning
{
    /// <summary>
    /// Type of warning. Note that adding new warning types is considered a backward-compatible change.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeParallelAiExtractApi Type { get; init; }

    /// <summary>
    /// Human-readable message.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Optional detail supporting the warning.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public Detail1? Detail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
