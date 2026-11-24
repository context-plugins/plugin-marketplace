using System.ComponentModel.DataAnnotations;

namespace AlphaAi.Requests.Symbols;

/// <summary>
/// The inputs of the GetApiSymbolsByTicker operation.
/// </summary>
public sealed record GetApiSymbolsByTickerRequest
{
    /// <summary>
    /// Ticker symbol. US equities are bare (<c>AAPL</c>); cryptocurrencies use the <c>&lt;SYM&gt;-USD</c> form (<c>BTC-USD</c>); foreign listings use the Yahoo suffix (<c>VOD.L</c>).
    /// </summary>
    [RegularExpression("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")]
    public required string Ticker { get; init; }
}
