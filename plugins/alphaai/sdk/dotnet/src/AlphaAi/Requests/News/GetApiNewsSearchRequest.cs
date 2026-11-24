using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using AlphaAi.Core.Validation.Attributes;
using AlphaAi.Models.Enums;

namespace AlphaAi.Requests.News;

/// <summary>
/// The inputs of the GetApiNewsSearch operation.
/// </summary>
public sealed record GetApiNewsSearchRequest
{
    /// <summary>
    /// The words to search for, 2 to 200 characters (syntax above). <c>query</c> is accepted as an alias.
    /// </summary>
    [StringLength(200, MinimumLength = 2)]
    public required string Q { get; init; }

    /// <summary>
    /// Opaque cursor from a prior response's <c>next_cursor</c>; only valid with the <c>q</c> that issued it.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Hard ticker filter, same forms and expansions as on <c>/api/news/</c> (<c>ticker</c> is an alias).
    /// </summary>
    public string? Symbol { get; init; }

    /// <summary>
    /// Hard category filter — single value, CSV or repeated, OR-matched.
    /// </summary>
    public IReadOnlyList<NewsCategory>? Category { get; init; }

    /// <summary>
    /// Keep only rows ingested from these sources, same values and forms as on <c>/api/news/</c>: <c>gdelt</c> (press coverage), <c>sec_form4</c>, <c>sec_form8k</c>, <c>sec_form6k</c>. Single, CSV or repeated, OR-matched. Unknown values return 400.
    /// </summary>
    public IReadOnlyList<SourceType>? SourceType { get; init; }

    /// <summary>
    /// 8-K item code, e.g. <c>5.02</c>: only 8-K filings carrying that item (any item of the filing). Implies <c>source_type=sec_form8k</c>; next to any other <c>source_type</c> it returns 400.
    /// </summary>
    [RegularExpression("^\\d\\.\\d{2}$")]
    public string? Item { get; init; }

    /// <summary>
    /// Override the default ≥4 threshold.
    /// </summary>
    [Minimum(1)]
    [Maximum(10)]
    public int MinRelevance { get; init; } = 4;

    /// <summary>
    /// Items per page, default <c>10</c>; <c>1</c>-<c>20</c> on every tier, up to <c>50</c> on a Pro key (<c>limit</c> is an alias).
    /// </summary>
    [Minimum(1)]
    [Maximum(50)]
    public int PageSize { get; init; } = 10;

    /// <summary>
    /// <c>story</c> collapses coverage of one event to its best-ranked article, with <c>story_id</c>, <c>sources_count</c> and <c>sources</c> on each item.
    /// </summary>
    public Collapse? Collapse { get; init; }

    /// <summary>
    /// Boolean alias: <c>true</c> is equivalent to <c>collapse=story</c>; <c>false</c> leaves articles ungrouped. Send either spelling, not both (400).
    /// </summary>
    public bool CollapseStories { get; init; } = false;

    /// <summary>
    /// Inclusive lower bound on <c>time_published</c> (ISO-8601, UTC when naive; a bare date is that day's midnight). Past your archive horizon → 403.
    /// </summary>
    public DateTimeOffset? FromDate { get; init; }

    /// <summary>
    /// Inclusive upper bound on <c>time_published</c>; a bare date covers its whole day.
    /// </summary>
    public DateTimeOffset? ToDate { get; init; }
}
