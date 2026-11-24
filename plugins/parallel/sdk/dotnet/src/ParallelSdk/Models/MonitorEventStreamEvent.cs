using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;
using ParallelSdk.Models.OneOf;

namespace ParallelSdk.Models;

/// <summary>
/// Append-only event from an event_stream monitor.
/// <para>
/// Each event represents a distinct material change detected since the
/// previous execution. Events are net-new relative to the cursor; clients
/// should treat them as an append-only log.
/// </para>
/// </summary>
public record MonitorEventStreamEvent
{
    /// <summary>
    /// Stable identifier for this event. Safe to use for client-side deduplication across pagination and retries.
    /// </summary>
    [JsonPropertyName("event_id")]
    public required string EventId { get; init; }

    /// <summary>
    /// ID of the event group that owns this event.
    /// </summary>
    [JsonPropertyName("event_group_id")]
    public required string EventGroupId { get; init; }

    /// <summary>
    /// Date when this event was produced. ISO 8601 date (YYYY-MM-DD) or partial (YYYY-MM or YYYY).
    /// </summary>
    [JsonPropertyName("event_date")]
    public required EventDate EventDate { get; init; }

    /// <summary>
    /// Discriminant for the event_stream event variant.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_type")]
    public EventTypeParallelAiMonitorApi? EventType { get; init; } = EventTypeParallelAiMonitorApi.EventStream;

    /// <summary>
    /// Text or JSON output describing the detected change.
    /// </summary>
    [JsonPropertyName("output")]
    public required OutputParallelAiMonitorApi Output { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
