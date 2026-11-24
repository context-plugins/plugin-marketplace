using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record BatchTaskSuccessResult
{
    /// <summary>
    /// Indicates this task was created successfully.
    /// </summary>
    [JsonPropertyName("success")]
    public string Success { get; } = "True";

    /// <summary>
    /// The zero-based position of this task in the original request array.
    /// </summary>
    [JsonPropertyName("index")]
    public required int Index { get; init; }

    [JsonPropertyName("task")]
    public required TaskModel Task { get; init; }

    /// <summary>
    /// Credit information for an async task.
    /// </summary>
    [JsonPropertyName("credits")]
    public required AsyncTaskCredits Credits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
