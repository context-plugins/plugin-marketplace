using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Event containing full snapshot of FindAll run state.
/// </summary>
public record FindAllSchemaUpdatedEvent
{
    /// <summary>
    /// Event type; always 'findall.schema.updated'.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "findall.schema.updated";

    /// <summary>
    /// Timestamp of the event.
    /// </summary>
    [JsonPropertyName("timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    /// <summary>
    /// Unique event identifier for the event.
    /// </summary>
    [JsonPropertyName("event_id")]
    public required string EventId { get; init; }

    /// <summary>
    /// Updated FindAll schema.
    /// </summary>
    [JsonPropertyName("data")]
    public required FindAllSchema1 Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
