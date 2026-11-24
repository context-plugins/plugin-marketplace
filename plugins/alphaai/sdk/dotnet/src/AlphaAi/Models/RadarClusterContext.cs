using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

public record RadarClusterContext
{
    [JsonPropertyName("window_start")]
    public required DateTimeOffset WindowStart { get; init; }

    [JsonPropertyName("window_end")]
    public required DateTimeOffset WindowEnd { get; init; }

    [JsonPropertyName("known_at")]
    public required DateTimeOffset KnownAt { get; init; }

    [JsonPropertyName("buyers")]
    public required int Buyers { get; init; }

    [JsonPropertyName("officer_director_buyers")]
    public required int OfficerDirectorBuyers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pattern")]
    public PatternAlphAiRestRadarApi? Pattern { get; init; } = PatternAlphAiRestRadarApi.OpenMarket;

    [JsonPropertyName("filings_count")]
    public required int FilingsCount { get; init; }

    [JsonPropertyName("evidence")]
    public required IReadOnlyList<RadarClusterFiling> Evidence { get; init; }

    [JsonPropertyName("evidence_truncated")]
    public required bool EvidenceTruncated { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
