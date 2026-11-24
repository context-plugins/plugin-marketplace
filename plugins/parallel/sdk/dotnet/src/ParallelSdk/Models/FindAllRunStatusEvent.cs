using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Event containing status update for FindAll run.
/// </summary>
public record FindAllRunStatusEvent
{
    /// <summary>
    /// Event type; always 'findall.status'.
    /// </summary>
    [JsonPropertyName("type")]
    public string Type { get; } = "findall.status";

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
    /// Updated FindAll run information.
    /// </summary>
    [JsonPropertyName("data")]
    public required FindAllRun3 Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
