using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

public record MonitorMemoryEvent
{
    /// <summary>
    /// ID of the monitor event.
    /// </summary>
    [JsonPropertyName("event_id")]
    public required string EventId { get; init; }

    /// <summary>
    /// ID of the execution that produced this event.
    /// </summary>
    [JsonPropertyName("event_group_id")]
    public required string EventGroupId { get; init; }

    /// <summary>
    /// When the event was detected, as an RFC 3339 timestamp.
    /// </summary>
    [JsonPropertyName("detected_at")]
    public required DateTimeOffset DetectedAt { get; init; }

    /// <summary>
    /// Excerpt of the monitor event. May be truncated.
    /// </summary>
    [JsonPropertyName("excerpt")]
    public required string Excerpt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
