using System.ComponentModel.DataAnnotations;
using AlphaAi.Core.Validation.Attributes;
using AlphaAi.Models.AnyOf;
using AlphaAi.Models.Enums;

namespace AlphaAi.Requests.Radar;

/// <summary>
/// The inputs of the GetRadarSnapshot operation.
/// </summary>
public sealed record GetRadarSnapshotRequest
{
    /// <summary>
    /// Window ending at as_of, not at wall-clock now.
    /// </summary>
    public Window Window { get; init; } = Window._24H;

    /// <summary>
    /// market scans all tickers without a tier ticker cap. watchlist requires authentication and reads only the caller's existing saved symbols, matched exactly. An empty list returns no results. Existing watchlist entitlements apply (default Free 10, Basic/Pro unlimited); no separate Radar allowance.
    /// </summary>
    public Scope Scope { get; init; } = Scope.Market;

    /// <summary>
    /// Filter within the selected scope; international includes all intl:* markets.
    /// </summary>
    public Market Market { get; init; } = Market.All;

    /// <summary>
    /// One exact ticker, case-insensitive. No alias expansion. Mutually exclusive with tickers.
    /// </summary>
    [MaxLength(32)]
    public string Ticker { get; init; } = "";

    /// <summary>
    /// Comma-separated exact symbols, case-insensitive. No tier ticker cap; request text is bounded to 16384 characters. Applied within scope, so it never bypasses watchlist ownership.
    /// </summary>
    [MaxLength(16384)]
    public string Tickers { get; init; } = "";

    /// <summary>
    /// Case-insensitive ticker substring for interactive search. Separate from exact ticker selection.
    /// </summary>
    [MaxLength(32)]
    public string Search { get; init; } = "";

    /// <summary>
    /// score, stories (total), model_stories, sentiment or sentiment_change (current minus prior window). Missing values last; ties use total story count then ticker.
    /// </summary>
    public SortAlphAiRestRadarApi Sort { get; init; } = SortAlphAiRestRadarApi.Score;

    /// <summary>
    /// asc or desc (default). Missing metrics always remain last.
    /// </summary>
    public Order Order { get; init; } = Order.Desc;

    /// <summary>
    /// all, positive (&gt;0.15), negative (&lt;-0.15), mixed (inclusive -0.15 through 0.15). Null metrics match only all.
    /// </summary>
    public SentimentAlphAiRestRadarApi Sentiment { get; init; } = SentimentAlphAiRestRadarApi.All;

    /// <summary>
    /// Minimum descriptive activity score, not a confirmed candidate filter.
    /// </summary>
    public MinZ? MinZ { get; init; }

    /// <summary>
    /// Page size only, never a tier ticker cap. Follow next_cursor with the same filters and page size.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 50;

    /// <summary>
    /// Legacy zero-based pagination without snapshot pinning. Prefer cursor; cannot combine a nonzero offset with cursor.
    /// </summary>
    [Minimum(0)]
    public int Offset { get; init; } = 0;

    /// <summary>
    /// Opaque signed next_cursor or previous_cursor. Pins the complete snapshot, filters, tier and watchlist membership/owner. A changed context, removed snapshot or replaced content returns 409; restart without cursor. Never edit the token.
    /// </summary>
    [MaxLength(4096)]
    public string Cursor { get; init; } = "";
}
