using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Event indicating an update to group status.
/// </summary>
public record TaskGroupStatusEvent
{
    /// <summary>
    /// Event type; always 'task_group_status'.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "task_group_status";

    /// <summary>
    /// Cursor to resume the event stream.
    /// </summary>
    [JsonPropertyName("event_id")]
    public required string EventId { get; init; }

    /// <summary>
    /// Task group status object.
    /// </summary>
    [JsonPropertyName("status")]
    public required TaskGroupStatus2 Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
