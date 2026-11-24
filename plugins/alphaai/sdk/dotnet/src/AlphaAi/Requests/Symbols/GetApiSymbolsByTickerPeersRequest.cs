using System.ComponentModel.DataAnnotations;

namespace AlphaAi.Requests.Symbols;

/// <summary>
/// The inputs of the GetApiSymbolsByTickerPeers operation.
/// </summary>
public sealed record GetApiSymbolsByTickerPeersRequest
{
    [RegularExpression("^[A-Z0-9][A-Z0-9.\\-]{0,19}$")]
    public required string Ticker { get; init; }
}
