using System;
using System.Text.Json.Serialization;
using Hightouch.Core.Models;
using Hightouch.Models.Enums;

namespace Hightouch.Models;

public record IdrRun
{
    [JsonPropertyName("fullRerun")]
    public required bool FullRerun { get; init; }

    /// <summary>
    /// If available, the stats at the end of a successful run.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats")]
    public IdrRunStatsByThreshold2? Stats { get; init; }

    /// <summary>
    /// Timestamp of the run's completion. Only set for successful or failed runs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("finishedAt")]
    public DateTimeOffset? FinishedAt { get; init; }

    /// <summary>
    /// Timestamp of the run's start. Not set for queued runs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startedAt")]
    public DateTimeOffset? StartedAt { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    /// <summary>
    /// If available, the error associated with a failed status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    [JsonPropertyName("status")]
    public required StatusHightouchIdrApi Status { get; init; }

    [JsonPropertyName("graphId")]
    public required string GraphId { get; init; }

    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
