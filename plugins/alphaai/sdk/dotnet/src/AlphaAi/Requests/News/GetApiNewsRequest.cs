using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using AlphaAi.Core.Validation.Attributes;
using AlphaAi.Models.Enums;

namespace AlphaAi.Requests.News;

/// <summary>
/// The inputs of the GetApiNews operation.
/// </summary>
public sealed record GetApiNewsRequest
{
    /// <summary>
    /// Opaque cursor from a prior response's <c>next_cursor</c>. Omit for the newest page.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Filter to articles that mention this ticker. US equities use the bare symbol (<c>NVDA</c>); cryptocurrencies use the <c>&lt;SYM&gt;-USD</c> form (<c>BTC-USD</c>), and a bare crypto name resolves to it (<c>DOGE</c> matches <c>DOGE-USD</c>); foreign listings use the Yahoo suffix (<c>VOD.L</c>). A delisted symbol returns its news history. A renamed company's current ticker also matches articles tagged with its former ticker, and any share class of an issuer matches articles tagged with its other listed classes (<c>GOOGL</c> includes rows tagged <c>GOOG</c>); article tags stay as published. <c>ticker</c> is accepted as an alias.
    /// </summary>
    public string? Symbol { get; init; }

    /// <summary>
    /// Keep only these categories. Accepts a single value, a CSV list (<c>category=earnings,insider</c>), or a repeated parameter — matches any of them (OR).
    /// </summary>
    public IReadOnlyList<NewsCategory>? Category { get; init; }

    /// <summary>
    /// Drop these categories from the feed. Same single / CSV / repeated forms as <c>category</c>.
    /// </summary>
    public IReadOnlyList<NewsCategory>? ExcludeCategories { get; init; }

    /// <summary>
    /// Override the default ≥4 threshold.
    /// </summary>
    [Minimum(1)]
    [Maximum(10)]
    public int MinRelevance { get; init; } = 4;

    /// <summary>
    /// Items per page, default <c>10</c>. Any value from <c>1</c> to <c>20</c> is accepted on every tier; <c>21</c>-<c>50</c> requires a Pro key. A value outside <c>1</c>-<c>50</c>, or an over-<c>20</c> page without a Pro key, returns 400 — the page is never silently clamped. Pagination is otherwise unchanged: pass each response's <c>next_cursor</c> back as <c>cursor</c> regardless of page size. <c>limit</c> is accepted as an alias.
    /// </summary>
    [Minimum(1)]
    [Maximum(50)]
    public int PageSize { get; init; } = 10;

    /// <summary>
    /// <c>story</c> collapses coverage of one event to a single representative row (the story root): syndicated reprints and independently written articles about the same event, matched on headline and lead similarity. Populates the <c>story_id</c>, <c>sources_count</c> and <c>sources</c> fields on each item. Omit for the full feed (every article, story fields <c>null</c>). Only <c>story</c> is accepted; any other value returns 400.
    /// Note: row-level filters (<c>symbol</c>, <c>category</c>, <c>min_relevance</c>) apply to the story's representative root, so a story whose root does not match the filter is omitted entirely. The root is the best copy the enricher has seen: a later copy that outscores a weak root (one below 7) takes the root over, so a story's <c>story_id</c> and its place in the feed can move once to that copy; a root at 7 or above is never replaced. An 8-K that carries a press release as its exhibit is a member of that release's story (same issuer, the release's headline inside the filing, within 3 hours) when the release itself scores at or above the feed floor, so with <c>source_type=sec_form8k</c> a collapsed feed omits such filings — read them uncollapsed. A filing whose release scored below the floor stays its own story.
    /// </summary>
    public Collapse? Collapse { get; init; }

    /// <summary>
    /// Boolean alias matching the MCP and Python SDK option. <c>true</c> is equivalent to <c>collapse=story</c>; <c>false</c> leaves articles ungrouped. Send either <c>collapse</c> or <c>collapse_stories</c>, not both (400).
    /// </summary>
    public bool CollapseStories { get; init; } = false;

    /// <summary>
    /// <c>published</c> (default) is the reverse-chronological feed. <c>ingested</c> is delta-polling mode: rows in the order they became available, ascending, with <c>next_cursor</c> always returned (empty <c>results</c> = caught up) — see the endpoint description. All other filters apply unchanged in both modes. Cursors are mode-specific: a cursor is only valid with the sort mode that issued it (a mismatch returns 400).
    /// </summary>
    public Sort1 Sort { get; init; } = Sort1.Published;

    /// <summary>
    /// Inclusive lower bound on <c>time_published</c> — when the article was published, not when it entered the feed. ISO-8601; a value without a timezone is read as UTC. A bare date (<c>2026-06-01</c>) means that day's midnight.
    /// Reaching further back than your plan's archive horizon returns 403 (see the <c>403</c> response) — the window is subject to the same tiered depth as a deep <c>cursor</c>, and on the first page just the same. Cannot be combined with <c>sort=ingested</c> (400): delta mode returns rows in ingest order from your cursor and never walks back into history.
    /// </summary>
    public DateTimeOffset? FromDate { get; init; }

    /// <summary>
    /// Inclusive upper bound on <c>time_published</c>, same format as <c>from_date</c>. A bare date (<c>2026-06-01</c>) covers the WHOLE day (through <c>23:59:59.999999Z</c>), so <c>from_date=2026-06-01&amp;to_date=2026-06-01</c> returns that day rather than an empty page. <c>from_date</c> later than <c>to_date</c> returns 400.
    /// </summary>
    public DateTimeOffset? ToDate { get; init; }

    /// <summary>
    /// Keep only rows ingested from these sources: <c>gdelt</c> (press coverage), <c>sec_form4</c> (insider transactions), <c>sec_form8k</c> (8-K current reports), <c>sec_form6k</c> (a foreign private issuer's 6-K earnings release). Same single / CSV / repeated forms as <c>category</c>, OR-matched. Unknown values return 400. Composes with every other filter: <c>source_type=sec_form8k&amp;symbol=NVDA</c> is one company's 8-Ks, <c>source_type=gdelt&amp;min_relevance=8</c> is the press without any filing.
    /// </summary>
    public IReadOnlyList<NewsSourceType>? SourceType { get; init; }

    /// <summary>
    /// 8-K item code, e.g. <c>5.02</c> (officer departures/appointments), <c>8.01</c> (other events), <c>1.01</c> (material agreements). Keeps only 8-K filings that carry the item — ANY item of the filing, not just the one that drove its category — and implies <c>source_type=sec_form8k</c>; <c>item</c> next to any other <c>source_type</c> returns 400 (only 8-Ks have item codes). The category filter already covers the two headline items (<c>2.02</c> → <c>earnings</c>, <c>2.01</c> → <c>mergers_acquisitions</c>); <c>item</c> is for everything else. A filing SEC served no document for has an empty item list and never matches. Every matched row carries the <c>filing</c> block.
    /// </summary>
    [RegularExpression("^\\d\\.\\d{2}$")]
    public string? Item { get; init; }
}
