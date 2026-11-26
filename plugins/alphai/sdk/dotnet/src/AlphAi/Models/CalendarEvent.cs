using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Core.Validation;
using AlphAi.Core.Validation.Attributes;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

/// <summary>
/// One scheduled occurrence of a US macro release. <c>uid</c> is a stable, opaque occurrence id — reschedules update the row in place, so the uid is safe to store and link. <c>phase</c> is computed against request time and only says whether the scheduled moment passed; check <c>schedule_status</c> first (a <c>cancelled</c> row's phase is meaningless).
/// </summary>
public record CalendarEvent
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("event_key")]
    public EventKey? EventKey { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// What the release covers, machine-readable: a month (<c>2026-07</c>), a quarter (<c>2026-Q2</c>), or — for weekly claims — the reference week-ending Saturday (<c>2026-07-25</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reference_period")]
    public string? ReferencePeriod { get; init; }

    /// <summary>
    /// GDP only — <c>advance</c>, <c>second</c> or <c>third</c>; null elsewhere.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("release_stage")]
    public string? ReleaseStage { get; init; }

    /// <summary>
    /// Official release moment (UTC; 08:30 / 10:00 / 14:00 ET converted).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduled_at")]
    public DateTimeOffset? ScheduledAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phase")]
    public Phase? Phase { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedule_status")]
    public ScheduleStatus? ScheduleStatus { get; init; }

    /// <summary>
    /// <c>official</c>: the date is printed on the agency's own schedule page. <c>inferred</c>: derived from the documented publication cadence — weekly jobless claims (DOL publishes no forward schedule) and FOMC minutes dates the Fed has not printed yet (three weeks after the meeting). Inferred dates flip to official once the agency lists them.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedule_basis")]
    public ScheduleBasis? ScheduleBasis { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("importance")]
    public Importance? Importance { get; init; }

    /// <summary>
    /// <c>market_movers</c> is for articles whose subject IS a notable price move ("AMD up 5% today"); <c>sector_analysis</c> is genuine sector-level analysis; <c>insider</c> covers SEC Form 4 insider transactions only. SEC 8-K filings categorize by their primary item: an earnings release (Item 2.02) is <c>earnings</c>, a completed acquisition or disposition (Item 2.01) is <c>mergers_acquisitions</c>, and the remaining events (material agreements, debt, executive changes, annual-meeting results, and since 2026-09-17 securities offerings, Regulation FD disclosures and other events under Items 7.01/8.01) are <c>corporate_actions</c>. A foreign private issuer's SEC 6-K appears only when it is an earnings release (<c>source</c> "SEC EDGAR 6-K") and is always <c>earnings</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public NewsCategory? Category { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public string? Country { get; init; }

    /// <summary>
    /// The agency's own schedule page for the series.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_url")]
    [Format(FormatKind.Uri)]
    public string? SourceUrl { get; init; }

    /// <summary>
    /// FOMC decisions only — the 14:30 ET press conference; null elsewhere.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("press_conference_at")]
    public DateTimeOffset? PressConferenceAt { get; init; }

    /// <summary>
    /// FOMC decisions only — true when the meeting carries a Summary of Economic Projections (the "dot plot").
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("has_sep")]
    public bool? HasSep { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
