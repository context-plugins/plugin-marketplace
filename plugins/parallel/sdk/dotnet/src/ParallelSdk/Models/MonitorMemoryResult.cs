using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

public record MonitorMemoryResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public Kind2? Kind { get; init; } = Kind2.Monitor;

    /// <summary>
    /// ID of the monitor.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// When the monitor last ran, as an RFC 3339 timestamp.
    /// </summary>
    [JsonPropertyName("updated_at")]
    public required DateTimeOffset UpdatedAt { get; init; }

    /// <summary>
    /// Preview of the monitor's query. May be truncated.
    /// </summary>
    [JsonPropertyName("input_excerpt")]
    public required string InputExcerpt { get; init; }

    /// <summary>
    /// Current status of the monitor.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusParallelAiMemoryApi Status { get; init; }

    /// <summary>
    /// Detected events matching the retrieval query, ordered by relevance with more recent events favored. For an empty query, events are ordered by recency.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("matched_events")]
    public IReadOnlyList<MonitorMemoryEvent>? MatchedEvents { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
