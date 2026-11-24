using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;
using ParallelSdk.Models.OneOf;

namespace ParallelSdk.Models;

/// <summary>
/// Snapshot diff event emitted when a monitored task run's output changes.
/// <para>
/// <c>changed_output</c> contains only the fields that changed since the previous execution,
/// along with their <c>basis</c> (reasoning + citations). <c>previous_output</c> holds
/// the complete output from the prior run for comparison.
/// </para>
/// </summary>
public record MonitorSnapshotEvent
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
    /// Discriminant for the snapshot event variant.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_type")]
    public EventType1? EventType { get; init; } = EventType1.Snapshot;

    /// <summary>
    /// Partial output containing only the fields that changed since the previous execution, each with its <c>basis</c> (reasoning and citations).
    /// </summary>
    [JsonPropertyName("changed_output")]
    public required ChangedOutput ChangedOutput { get; init; }

    /// <summary>
    /// The full output from the prior run, including all fields and basis.
    /// </summary>
    [JsonPropertyName("previous_output")]
    public required PreviousOutput PreviousOutput { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
