using System.ComponentModel.DataAnnotations;

namespace AlphaAi.Requests.Symbols;

/// <summary>
/// The inputs of the GetApiSymbolsByTickerEarningsLatest operation.
/// </summary>
public sealed record GetApiSymbolsByTickerEarningsLatestRequest
{
    /// <summary>
    /// Accepts the same ticker forms as the symbol detail endpoint.
    /// </summary>
    [RegularExpression("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")]
    public required string Ticker { get; init; }
}
