using System;
using System.Text.Json.Serialization;

namespace Hightouch.Models;

/// <summary>
/// A completed Match Booster enrichment run.
/// </summary>
public record MatchBoosterRun
{
    /// <summary>
    /// The id of the enrichment run.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("status")]
    public required string Status { get; init; }

    /// <summary>
    /// The Match Booster region the enrichment ran in.
    /// </summary>
    [JsonPropertyName("region")]
    public required string Region { get; init; }

    /// <summary>
    /// If available, the error associated with a failed run.
    /// </summary>
    [JsonPropertyName("error")]
    public required string? Error { get; init; }

    /// <summary>
    /// The number of rows enriched during the run.
    /// </summary>
    [JsonPropertyName("enrichedRows")]
    public required double? EnrichedRows { get; init; }

    /// <summary>
    /// Whether the run enriched all rows or only new/changed rows.
    /// </summary>
    [JsonPropertyName("isFullEnrichment")]
    public required bool? IsFullEnrichment { get; init; }

    /// <summary>
    /// The duration of the enrichment in milliseconds.
    /// </summary>
    [JsonPropertyName("durationMs")]
    public required double? DurationMs { get; init; }

    /// <summary>
    /// Timestamp of the run's completion.
    /// </summary>
    [JsonPropertyName("enrichedAt")]
    public required DateTimeOffset EnrichedAt { get; init; }
}
