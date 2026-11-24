using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Event containing a candidate whose match status has changed.
/// </summary>
public record FindAllCandidateMatchStatusEvent
{
    /// <summary>
    /// Event type; one of findall.candidate.generated, findall.candidate.matched, findall.candidate.unmatched, findall.candidate.discarded, findall.candidate.enriched.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2 Type { get; init; }

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
    /// The candidate whose match status has been updated.
    /// </summary>
    [JsonPropertyName("data")]
    public required FindAllCandidate2 Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
