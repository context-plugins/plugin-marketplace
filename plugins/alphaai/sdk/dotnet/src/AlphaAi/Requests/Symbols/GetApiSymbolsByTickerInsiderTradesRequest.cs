using System.ComponentModel.DataAnnotations;
using AlphaAi.Core.Validation.Attributes;
using AlphaAi.Models.Enums;

namespace AlphaAi.Requests.Symbols;

/// <summary>
/// The inputs of the GetApiSymbolsByTickerInsiderTrades operation.
/// </summary>
public sealed record GetApiSymbolsByTickerInsiderTradesRequest
{
    /// <summary>
    /// Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their <c>&lt;SYM&gt;-USD</c> listing, and delisted or renamed symbols stay addressable. Crypto and foreign listings have no Form 4 flow, so they return empty history.
    /// </summary>
    [RegularExpression("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")]
    public required string Ticker { get; init; }

    /// <summary>
    /// Filters the paginated <c>events</c> list only; the first page's aggregates always cover both sides.
    /// </summary>
    public Side1 Side { get; init; } = Side1.All;

    /// <summary>
    /// Opaque keyset cursor from a prior response's <c>next_cursor</c>. Omit it for the newest page, the only one carrying the aggregates.
    /// </summary>
    public string? Cursor { get; init; }

    /// <summary>
    /// Events per page. Not tier-gated: every tier may request up to 200, so one request can load a chart's whole working set. <c>limit</c> is accepted as an alias.
    /// </summary>
    [Minimum(1)]
    [Maximum(200)]
    public int PageSize { get; init; } = 20;
}
