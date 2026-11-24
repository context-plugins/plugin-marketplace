using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Response from adding new task runs to a task group.
/// </summary>
public record TaskGroupRunResponse
{
    /// <summary>
    /// Status of the group.
    /// </summary>
    [JsonPropertyName("status")]
    public required TaskGroupStatus3 Status { get; init; }

    /// <summary>
    /// IDs of the newly created runs.
    /// </summary>
    [JsonPropertyName("run_ids")]
    public required IReadOnlyList<string> RunIds { get; init; }

    /// <summary>
    /// Cursor for these runs in the run stream at taskgroup/runs?last_event_id=&lt;run_cursor&gt;. Empty for the first runs in the group.
    /// </summary>
    [JsonPropertyName("run_cursor")]
    public required RunCursor RunCursor { get; init; }

    /// <summary>
    /// Cursor for these runs in the event stream at taskgroup/events?last_event_id=&lt;event_cursor&gt;. Empty for the first runs in the group.
    /// </summary>
    [JsonPropertyName("event_cursor")]
    public required EventCursor EventCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
