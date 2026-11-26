using AlphAi.Core.Validation.Attributes;
using AlphAi.Models.Enums;

namespace AlphAi.Requests.News;

/// <summary>
/// The inputs of the GetApiNewsInsiderClusters operation.
/// </summary>
public sealed record GetApiNewsInsiderClustersRequest
{
    /// <summary>
    /// Lookback in days over <c>known_at</c>, <c>1</c>-<c>90</c>, default <c>30</c>. Deeper than your plan's archive horizon (Free 30, Basic 90) returns 403.
    /// </summary>
    [Minimum(1)]
    [Maximum(90)]
    public int Days { get; init; } = 30;

    /// <summary>
    /// Minimum headcount, <c>2</c>-<c>10</c>, default <c>2</c>: independent buyers for <c>open_market</c> / <c>holders_only</c> episodes, everyone who bought (<c>buyers_total</c>) for <c>plan_or_offering</c> ones, where by construction fewer than two buyers are independent.
    /// </summary>
    [Minimum(2)]
    [Maximum(10)]
    public int MinBuyers { get; init; } = 2;

    /// <summary>
    /// Drop episodes whose <c>total_usd</c> is below this. An episode with an unknown total (<c>value_partial</c> with no priced fill) is kept, not dropped — a missing number is not a small one.
    /// </summary>
    [Minimum(0)]
    public int? MinUsd { get; init; }

    /// <summary>
    /// <c>open_market</c> (default), <c>plan_or_offering</c>, <c>holders_only</c>, or <c>all</c>. Insiders taking a $70M IPO allocation is an event too; it is labeled, not hidden, when you ask for it.
    /// </summary>
    public Pattern1 Pattern { get; init; } = Pattern1.OpenMarket;

    /// <summary>
    /// One ticker. A renamed company's current ticker also matches episodes tagged with its former ticker, and share-class siblings (GOOGL / GOOG) match each other. A delisted ticker still returns its episodes when named explicitly; the unfiltered list shows active listings only. <c>ticker</c> is accepted as an alias.
    /// </summary>
    public string? Symbol { get; init; }

    /// <summary>
    /// <c>recent</c> (default) — newest <c>known_at</c> first; <c>buyers</c> — most independent buyers first, ties by value; <c>value</c> — largest <c>total_usd</c> first, unknown totals last. Cursors are sort-specific.
    /// </summary>
    public Sort3 Sort { get; init; } = Sort3.Recent;

    /// <summary>
    /// Opaque cursor from a prior response's <c>next_cursor</c>, with the same <c>sort</c>. Omit for the first page.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Items per page, default <c>10</c>; <c>1</c>-<c>20</c> on every tier, <c>21</c>-<c>50</c> with a Pro key. <c>limit</c> is accepted as an alias.
    /// </summary>
    [Minimum(1)]
    [Maximum(50)]
    public int PageSize { get; init; } = 10;
}
