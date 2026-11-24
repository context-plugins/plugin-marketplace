using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Emitted when a monitor execution failed (e.g. payment or quota error).
/// <para>
/// Always included in the events list regardless of <c>include_completions</c>.
/// </para>
/// </summary>
public record MonitorErrorEvent
{
    /// <summary>
    /// Discriminant for the error event variant.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_type")]
    public EventType3? EventType { get; init; } = EventType3.Error;

    /// <summary>
    /// Human-readable description of the failure.
    /// </summary>
    [JsonPropertyName("error_message")]
    public required string ErrorMessage { get; init; }

    /// <summary>
    /// Timestamp of when the monitor execution failed, as an RFC 3339 string.
    /// </summary>
    [JsonPropertyName("timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
