using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record InsiderClustersMeta
{
    /// <summary>
    /// When the underlying computation ran (the list is refreshed every few minutes).
    /// </summary>
    [JsonPropertyName("as_of")]
    public required DateTimeOffset AsOf { get; init; }

    /// <summary>
    /// Earliest purchase date on record; nothing before it can appear.
    /// </summary>
    [JsonPropertyName("coverage_since")]
    public required DateTimeOffset? CoverageSince { get; init; }

    [JsonPropertyName("episode_gap_days")]
    public required int EpisodeGapDays { get; init; }

    [JsonPropertyName("episode_max_days")]
    public required int EpisodeMaxDays { get; init; }

    [JsonPropertyName("research_only")]
    public required bool ResearchOnly { get; init; }

    [JsonPropertyName("point_in_time")]
    public required bool PointInTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
