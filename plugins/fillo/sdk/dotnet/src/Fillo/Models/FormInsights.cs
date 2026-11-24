using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

/// <summary>
/// The same computation the dashboard's Insights page renders. Epoch-millisecond timestamps.
/// </summary>
public record FormInsights
{
    [JsonPropertyName("range")]
    public required RangeEnum Range { get; init; }

    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firstAt")]
    public int? FirstAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastAt")]
    public int? LastAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("medianDurationMs")]
    public int? MedianDurationMs { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("durationCount")]
    public int? DurationCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastSevenDays")]
    public int? LastSevenDays { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previousSevenDays")]
    public int? PreviousSevenDays { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sevenDayChange")]
    public double? SevenDayChange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sampled")]
    public bool? Sampled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versionCount")]
    public int? VersionCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("legacyHistoryIncomplete")]
    public bool? LegacyHistoryIncomplete { get; init; }

    [JsonPropertyName("timeline")]
    public required IReadOnlyList<Timeline> Timeline { get; init; }

    [JsonPropertyName("sources")]
    public required IReadOnlyList<InsightBreakdownRow> Sources { get; init; }

    [JsonPropertyName("surfaces")]
    public required IReadOnlyList<InsightBreakdownRow> Surfaces { get; init; }

    /// <summary>
    /// started, completed, excluded, completionRate, multiPage, and a per-page reached/pct list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funnel")]
    public object? Funnel { get; init; }

    /// <summary>
    /// open, identified, and byPage — the same counts the drafts endpoint returns.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("drafts")]
    public object? Drafts { get; init; }

    /// <summary>
    /// One entry per field ever answered: id, label, kind, inCurrentSchema, answered, skipped, fillRate, and a <c>summary</c> discriminated on <c>type</c> (choice, multi, ranking, scale, number, boolean, matrix, text, date, file, generic).
    /// </summary>
    [JsonPropertyName("fields")]
    public required IReadOnlyList<object> Fields { get; init; }

    /// <summary>
    /// Present when <c>by</c> is supplied: the cohort's size, share, its own <c>fields</c>, and the <c>differences</c> that separate it from the baseline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("segment")]
    public object? Segment { get; init; }

    /// <summary>
    /// True when <c>by</c> named a field the current data cannot segment on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("segmentIgnored")]
    public bool? SegmentIgnored { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
