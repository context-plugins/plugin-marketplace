using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// A message for a task run progress update.
/// </summary>
public record TaskRunProgressMessageEvent
{
    /// <summary>
    /// Event type; always starts with 'task_run.progress_msg'.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type5 Type { get; init; }

    /// <summary>
    /// Progress update message.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// Timestamp of the message.
    /// </summary>
    [JsonPropertyName("timestamp")]
    public required Timestamp Timestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
