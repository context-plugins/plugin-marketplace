using System;
using AlphaAi.Core.Validation.Attributes;
using AlphaAi.Models.Enums;

namespace AlphaAi.Requests.News;

/// <summary>
/// The inputs of the GetApiNewsMacro operation.
/// </summary>
public sealed record GetApiNewsMacroRequest
{
    /// <summary>
    /// Opaque cursor from a prior response's <c>next_cursor</c>. Omit for the newest page.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Narrow to a subset of the macro categories, comma-separated. Values outside <c>macro_economy</c>/<c>commodities</c>/<c>geopolitics</c> return 400 (the full category filter lives on <c>/api/news/</c>).
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// Override the default ≥4 threshold. On release days the release itself scores 7-9, so <c>min_relevance=7</c> keeps roughly "the events" and drops the commentary.
    /// </summary>
    [Minimum(1)]
    [Maximum(10)]
    public int MinRelevance { get; init; } = 4;

    /// <summary>
    /// Items per page, default <c>10</c>. Any value from <c>1</c> to <c>20</c> is accepted on every tier; <c>21</c>-<c>50</c> requires a Pro key. A value outside <c>1</c>-<c>50</c>, or an over-<c>20</c> page without a Pro key, returns 400. <c>limit</c> is accepted as an alias.
    /// </summary>
    [Minimum(1)]
    [Maximum(50)]
    public int PageSize { get; init; } = 10;

    /// <summary>
    /// <c>published</c> (default) is the reverse-chronological feed. <c>ingested</c> is delta-polling mode, with the same contract as on <c>/api/news/</c>. Cursors are mode-specific: a cursor is only valid with the sort mode that issued it (a mismatch returns 400).
    /// </summary>
    public Sort1 Sort { get; init; } = Sort1.Published;

    /// <summary>
    /// Inclusive lower bound on <c>time_published</c>, exactly as on <c>/api/news/</c>: ISO-8601, a value without a timezone is read as UTC, a bare date (<c>2026-09-16</c>) means that day's midnight. "What did the tape say after the decision" is <c>from_date=&lt;decision day&gt;</c> plus <c>min_relevance=7</c>. Subject to your plan's archive horizon (403 on the first page, see the <c>403</c> response) and refused with <c>sort=ingested</c> (400).
    /// </summary>
    public DateTimeOffset? FromDate { get; init; }

    /// <summary>
    /// Inclusive upper bound on <c>time_published</c>, same format as <c>from_date</c>. A bare date covers the WHOLE day, so <c>from_date=2026-09-16&amp;to_date=2026-09-16</c> returns that day. <c>from_date</c> later than <c>to_date</c> returns 400.
    /// </summary>
    public DateTimeOffset? ToDate { get; init; }
}
