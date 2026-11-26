using System.ComponentModel.DataAnnotations;

namespace AlphAi.Requests.Symbols;

/// <summary>
/// The inputs of the GetApiSymbolsByTickerSentimentSummary operation.
/// </summary>
public sealed record GetApiSymbolsByTickerSentimentSummaryRequest
{
    /// <summary>
    /// Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their <c>&lt;SYM&gt;-USD</c> listing (<c>DOGE</c> → <c>DOGE-USD</c>; the response echoes the resolved ticker), and delisted or renamed symbols stay addressable.
    /// </summary>
    [RegularExpression("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")]
    public required string Ticker { get; init; }
}
