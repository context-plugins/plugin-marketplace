using System.ComponentModel.DataAnnotations;

namespace AlphAi.Requests.Symbols;

/// <summary>
/// The inputs of the GetApiSymbolsByTickerEarnings operation.
/// </summary>
public sealed record GetApiSymbolsByTickerEarningsRequest
{
    /// <summary>
    /// Accepts the same ticker forms as the symbol detail endpoint.
    /// </summary>
    [RegularExpression("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")]
    public required string Ticker { get; init; }
}
