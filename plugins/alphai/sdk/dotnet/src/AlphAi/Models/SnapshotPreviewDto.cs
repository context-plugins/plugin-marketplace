using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.AnyOf;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

public record SnapshotPreviewDto
{
    [JsonPropertyName("snapshot_id")]
    public required string SnapshotId { get; init; }

    [JsonPropertyName("methodology_version")]
    public required string MethodologyVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("research_only")]
    public bool? ResearchOnly { get; init; } = true;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("point_in_time")]
    public bool? PointInTime { get; init; } = false;

    [JsonPropertyName("as_of")]
    public required DateTimeOffset AsOf { get; init; }

    [JsonPropertyName("preview_reference_at")]
    public required PreviewReferenceAt PreviewReferenceAt { get; init; }

    [JsonPropertyName("freshness")]
    public required RadarSnapshotFreshness Freshness { get; init; }

    [JsonPropertyName("access")]
    public required RadarSignalAccess Access { get; init; }

    [JsonPropertyName("window")]
    public required Window Window { get; init; }

    [JsonPropertyName("parameters")]
    public required RadarCalculationParams Parameters { get; init; }

    [JsonPropertyName("limitations")]
    public required IReadOnlyList<string> Limitations { get; init; }

    [JsonPropertyName("input_hashes")]
    public required IReadOnlyDictionary<string, string> InputHashes { get; init; }

    [JsonPropertyName("universe")]
    public required int Universe { get; init; }

    [JsonPropertyName("summary")]
    public required RadarSnapshotSummary Summary { get; init; }

    [JsonPropertyName("watchlist_coverage")]
    public required WatchlistCoverage WatchlistCoverage { get; init; }

    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("offset")]
    public required int Offset { get; init; }

    [JsonPropertyName("next_offset")]
    public required NextOffset NextOffset { get; init; }

    [JsonPropertyName("next_cursor")]
    public required NextCursor NextCursor { get; init; }

    [JsonPropertyName("previous_cursor")]
    public required PreviousCursor PreviousCursor { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<RadarReading> Results { get; init; }

    /// <summary>
    /// Context availability and timing for the selected snapshot, without ticker data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_context")]
    public RadarContextSummary? EventContext { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
