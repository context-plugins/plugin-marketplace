using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Emitted when a monitor execution ran but detected no material changes.
/// <para>
/// Only returned when <c>include_completions=true</c> is passed to the list events
/// endpoint. Useful for auditing execution history alongside content events.
/// </para>
/// </summary>
public record MonitorCompletionEvent
{
    /// <summary>
    /// Discriminant for the completion event variant.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_type")]
    public EventType2? EventType { get; init; } = EventType2.Completion;

    /// <summary>
    /// Timestamp of when the monitor execution completed, as an RFC 3339 string.
    /// </summary>
    [JsonPropertyName("timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
