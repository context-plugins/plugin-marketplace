using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record AsyncTaskCreateResponse
{
    [JsonPropertyName("success")]
    public required bool Success { get; init; }

    /// <summary>
    /// Common task summary fields shared across async task responses.
    /// </summary>
    [JsonPropertyName("task")]
    public required AsyncTaskSummary Task { get; init; }

    /// <summary>
    /// Credit information for an async task.
    /// </summary>
    [JsonPropertyName("credits")]
    public required AsyncTaskCredits Credits { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
