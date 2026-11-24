using System;
using AlphaAi.Core.Validation.Attributes;
using AlphaAi.Models.Enums;

namespace AlphaAi.Requests.News;

/// <summary>
/// The inputs of the GetApiNewsInsider operation.
/// </summary>
public sealed record GetApiNewsInsiderRequest
{
    /// <summary>
    /// Opaque cursor from a prior response's <c>next_cursor</c>. Omit for the newest page.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Filter to insider news that mentions this ticker. Delisted symbols return their history; a renamed company's current ticker also matches rows tagged with its former ticker. <c>ticker</c> is accepted as an alias.
    /// </summary>
    public string? Symbol { get; init; }

    /// <summary>
    /// Override the default ≥4 threshold. Insider rows score deterministically from the event's summed dollar value (plus buy/10b5-1 modifiers), and a sale tops out at 6, so this acts as an "only large trades" dial: <c>min_relevance=6</c> keeps purchases from roughly $500k and sales from roughly $1M, <c>min_relevance=7</c> keeps purchases from roughly $1M and no sales, except a large buyback by the company from a holder who keeps a stake (<c>transaction_code</c> <c>D</c>). A 10b5-1 plan trade sits one step lower.
    /// </summary>
    [Minimum(1)]
    [Maximum(10)]
    public int MinRelevance { get; init; } = 4;

    /// <summary>
    /// Filter on the same field each item's <c>insider</c> block reports: the event's Rule 10b5-1 status. Omit for every event; <c>false</c> returns discretionary trades only — the "hide pre-scheduled sales" dial, since a 10b5-1 ladder was set up months earlier and carries no timing decision; <c>true</c> returns plan events only. Event-level, like the field itself: a filing whose group mixes plan and discretionary tranches counts as a plan event on both. The two values partition the feed, so <c>true</c> and <c>false</c> pages always add up to the unfiltered one.
    /// </summary>
    public bool? Is10B51 { get; init; }

    /// <summary>
    /// Items per page, default <c>10</c>. Any value from <c>1</c> to <c>20</c> is accepted on every tier; <c>21</c>-<c>50</c> requires a Pro key. A value outside <c>1</c>-<c>50</c>, or an over-<c>20</c> page without a Pro key, returns 400. <c>limit</c> is accepted as an alias.
    /// </summary>
    [Minimum(1)]
    [Maximum(50)]
    public int PageSize { get; init; } = 10;

    /// <summary>
    /// <c>published</c> (default) is the reverse-chronological feed. <c>ingested</c> is delta-polling mode, with the same contract as on <c>/api/news/</c>: rows in the order they became available, ascending, <c>next_cursor</c> always returned (empty <c>results</c> = caught up), and all other filters applied unchanged. Prefer it for watching insider activity — a Form 4 is filed days after the trade it reports, so a new event routinely lands below the newest page of the publish-ordered feed and a poller reading only the head misses it. Cursors are mode-specific: a cursor is only valid with the sort mode that issued it (a mismatch returns 400).
    /// </summary>
    public Sort1 Sort { get; init; } = Sort1.Published;

    /// <summary>
    /// Inclusive lower bound on <c>time_published</c>, identical in format and behaviour to the parameter on <c>/api/news/</c> (ISO-8601, naive read as UTC, tier-gated with 403, refused with <c>sort=ingested</c>).
    /// Note which clock it is: <c>time_published</c> is when the filing reached the feed, NOT the insider's <c>transaction_date</c> reported in the <c>insider</c> block. A Form 4 is filed days after the trade, so a window over trade dates is a different question and this parameter does not answer it.
    /// </summary>
    public DateTimeOffset? FromDate { get; init; }

    /// <summary>
    /// Inclusive upper bound on <c>time_published</c>. A bare date covers the whole day; same clock caveat as <c>from_date</c>.
    /// </summary>
    public DateTimeOffset? ToDate { get; init; }

    /// <summary>
    /// Response format. <c>json</c> (default) is the page described below.
    /// <c>csv</c> streams the same feed as a file: one row per insider event,
    /// the same filters (<c>symbol</c>, <c>min_relevance</c>, <c>is_10b5_1</c>,
    /// <c>from_date</c>/<c>to_date</c>, <c>sort</c>, <c>cursor</c>), walked page by page on
    /// the server up to your plan's <b>row cap</b> — Free 500, Basic 2 000,
    /// Pro 10 000 rows per file — inside your plan's archive horizon
    /// (30 / 90 / 180 days). <c>page_size</c> has no effect on CSV. One
    /// request counts once against your rate limit, whatever the file's
    /// length.
    /// <para>
    /// Where a JSON page past the horizon returns 403, the file stops at the horizon and the
    /// response headers say so (<c>X-Alphai-Truncated: archive_horizon</c>).
    /// Validation errors (a bad cursor, an inverted window, a window with
    /// <c>sort=ingested</c>) are the same 400 JSON bodies as for <c>format=json</c>,
    /// sent before any row.
    /// </para>
    /// <para>
    /// Concurrent feed changes or a connection error can interrupt the
    /// stream after headers are sent. Accept a file only after the stream
    /// completes and the number of parsed CSV data rows matches
    /// <c>X-Alphai-Rows</c>. Otherwise discard the partial file and retry the
    /// original request; do not advance to <c>X-Alphai-Next-Cursor</c>.
    /// </para>
    /// <para>
    /// Response: <c>Content-Type: text/csv; charset=utf-8</c>,
    /// <c>Content-Disposition: attachment; filename="alphai-insider-&lt;date&gt;.csv"</c>,
    /// <c>Cache-Control: private, no-store</c>, plus the <c>X-Alphai-*</c> headers
    /// listed under the 200 response: <c>X-Alphai-Rows</c> (data rows in the
    /// file), <c>X-Alphai-Row-Cap</c> (your plan's cap), <c>X-Alphai-Truncated</c>
    /// (<c>row_cap</c> — more rows exist, continue with the cursor;
    /// <c>archive_horizon</c> — the walk reached your plan's archive depth;
    /// <c>false</c> — the file holds everything the filters select) and
    /// <c>X-Alphai-Next-Cursor</c> (present when there is more: the same token
    /// a JSON page would have returned at that position, so you can
    /// continue in either format).
    /// </para>
    /// <para>
    /// Columns, in order: <c>uid</c>, <c>time_published</c>, <c>tickers</c>
    /// (<c>|</c>-joined), <c>title</c>, <c>url</c>, <c>category</c>, <c>relevance_score</c>,
    /// <c>side</c>, <c>transaction_code</c>, <c>shares</c>, <c>avg_price_usd</c>,
    /// <c>total_value_usd</c>, <c>is_10b5_1</c>, <c>insider_name</c>, <c>insider_title</c>,
    /// <c>is_officer</c>, <c>is_director</c>, <c>is_ten_percent_owner</c>,
    /// <c>transaction_date</c>, <c>filed_at</c>, <c>late_filing</c>, <c>summary</c> — the
    /// JSON item's fields and its <c>insider</c> block flattened (event
    /// columns are empty for a row without a block). RFC 4180 quoting,
    /// LF line endings, UTF-8, timestamps in ISO 8601 UTC (<c>Z</c>),
    /// booleans <c>true</c>/<c>false</c>, an empty cell for null, never the article
    /// body. A free-text cell that begins with <c>=</c>, <c>+</c>, <c>-</c>, <c>@</c> or a
    /// tab is prefixed with an apostrophe so it cannot run as a formula
    /// when the file is opened in a spreadsheet.
    /// </para>
    /// <para>
    /// Select the format with this parameter only: an <c>Accept: text/csv</c>
    /// header on its own still returns JSON, and a client that sends
    /// <c>Accept: application/json</c> together with <c>format=csv</c> gets 406.
    /// With <c>sort=ingested</c> and no cursor the file holds the newest rows
    /// (up to the cap) in ingest order and the cursor parks at the head,
    /// like the JSON prime page; with a cursor it holds everything since
    /// that position, with rows older than your archive horizon skipped
    /// and reported as <c>archive_horizon</c>.
    /// </para>
    /// </summary>
    public Format Format { get; init; } = Format.Json;
}
