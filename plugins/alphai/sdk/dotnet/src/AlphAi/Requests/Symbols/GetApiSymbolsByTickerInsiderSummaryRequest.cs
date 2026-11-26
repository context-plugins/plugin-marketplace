using System.ComponentModel.DataAnnotations;

namespace AlphAi.Requests.Symbols;

/// <summary>
/// The inputs of the GetApiSymbolsByTickerInsiderSummary operation.
/// </summary>
public sealed record GetApiSymbolsByTickerInsiderSummaryRequest
{
    /// <summary>
    /// Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their <c>&lt;SYM&gt;-USD</c> listing, and delisted or renamed symbols stay addressable. Crypto and foreign listings have no Form 4 flow, so they return zeros.
    /// </summary>
    [RegularExpression("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")]
    public required string Ticker { get; init; }
}
