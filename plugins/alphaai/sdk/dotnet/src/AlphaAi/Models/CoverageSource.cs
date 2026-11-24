using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

public record CoverageSource
{
    [JsonPropertyName("source")]
    public required Source Source { get; init; }

    /// <summary>
    /// Earliest row by the source's own clock (article publish time, filing acceptance time, scheduled date at 00:00 UTC). The earliest row we hold, NOT the start of continuous coverage — see <c>history_note</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_row_at")]
    public DateTimeOffset? FirstRowAt { get; init; }

    /// <summary>
    /// Latest row by the same clock. For <c>earnings_schedule</c> and <c>economic_calendar</c> this reaches into the future (scheduled dates).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_row_at")]
    public DateTimeOffset? LastRowAt { get; init; }

    /// <summary>
    /// Arrival clock: when the newest row landed (<c>created_at</c>); for <c>earnings_schedule</c> the sync's last touch, for <c>economic_calendar</c> the last change to the calendar.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_ingested_at")]
    public DateTimeOffset? LastIngestedAt { get; init; }

    /// <summary>
    /// Rows in the source's own unit: articles for <c>publisher_news</c>, distinct filings (accession numbers) for <c>sec_form4</c>, filings for <c>sec_form8k</c> / <c>sec_form6k</c>, published reads for <c>earnings_reads</c>, confirmed dates for <c>earnings_schedule</c>, occurrences for <c>economic_calendar</c>.
    /// </summary>
    [JsonPropertyName("rows_total")]
    public required int RowsTotal { get; init; }

    /// <summary>
    /// How and how often the source is collected, in plain words.
    /// </summary>
    [JsonPropertyName("cadence")]
    public required string Cadence { get; init; }

    /// <summary>
    /// Where the history is thin or starts: the caveat you would otherwise discover by probing the feed.
    /// </summary>
    [JsonPropertyName("history_note")]
    public required string HistoryNote { get; init; }

    /// <summary>
    /// Known scope limits of the source (what is deliberately not collected).
    /// </summary>
    [JsonPropertyName("limits")]
    public required IReadOnlyList<string> Limits { get; init; }

    /// <summary>
    /// How far back a key on each plan can page the news feeds into this source's rows; <c>null</c> where the archive gate does not apply (<c>earnings_reads</c>, <c>earnings_schedule</c>, <c>economic_calendar</c> are served by endpoints that page back freely).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archive_days")]
    public CoverageArchiveDays? ArchiveDays { get; init; }

    /// <summary>
    /// <c>true</c> when <c>last_ingested_at</c> is older than <c>stale_after_seconds</c>, or — for <c>economic_calendar</c>, where <c>stale_after_seconds</c> is null — when no future occurrence is held. An honest flag, not an alert.
    /// </summary>
    [JsonPropertyName("stale")]
    public required bool Stale { get; init; }

    /// <summary>
    /// The horizon <c>stale</c> keys on: six poll cycles for the collectors, three days for SEC filings, ten days for earnings reads; <c>null</c> for the economic calendar.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stale_after_seconds")]
    public int? StaleAfterSeconds { get; init; }

    /// <summary>
    /// Only on <c>publisher_news</c> — the two discovery channels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channels")]
    public IReadOnlyList<CoverageChannel>? Channels { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
