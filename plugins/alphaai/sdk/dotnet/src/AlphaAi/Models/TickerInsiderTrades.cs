using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record TickerInsiderTrades
{
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    /// <summary>
    /// Earliest recorded transaction date for this ticker; charts should not claim history from before it. <c>null</c> when nothing is recorded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coverage_start")]
    public DateTimeOffset? CoverageStart { get; init; }

    /// <summary>
    /// First page only; <c>null</c> on cursor pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public InsiderTradesSummary? Summary { get; init; }

    /// <summary>
    /// Calendar-month buckets, zero-filled up to the current month and capped to the trailing 12 months. First page only; <c>null</c> on cursor pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("series")]
    public IReadOnlyList<InsiderTradesMonthBucket>? Series { get; init; }

    /// <summary>
    /// ISO-week buckets keyed by their Monday, zero-filled up to the current week over the same 12-month horizon. First page only; <c>null</c> on cursor pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("series_weekly")]
    public IReadOnlyList<InsiderTradesWeekBucket>? SeriesWeekly { get; init; }

    /// <summary>
    /// Every event of the trailing 12 months, both sides, independent of the paginated list below — a chart never shows a bar without its marks. First page only; <c>null</c> on cursor pages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("chart_events")]
    public IReadOnlyList<InsiderTradeEvent>? ChartEvents { get; init; }

    /// <summary>
    /// One page of the event history, newest first; honors <c>side</c>.
    /// </summary>
    [JsonPropertyName("events")]
    public required IReadOnlyList<InsiderTradeEvent> Events { get; init; }

    /// <summary>
    /// Opaque cursor for the next (older) page; <c>null</c> at the end of the recorded history.
    /// </summary>
    [JsonPropertyName("next_cursor")]
    public required string? NextCursor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
