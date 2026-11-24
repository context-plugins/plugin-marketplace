using AlphaAi.Core.Validation.Attributes;

namespace AlphaAi.Requests.Symbols;

/// <summary>
/// The inputs of the GetApiSymbols operation.
/// </summary>
public sealed record GetApiSymbolsRequest
{
    /// <summary>
    /// Return at most this many symbols. Omit for the full list.
    /// </summary>
    [Minimum(1)]
    [Maximum(10000)]
    public int? Limit { get; init; }

    /// <summary>
    /// Skip this many symbols from the start of the list.
    /// </summary>
    [Minimum(0)]
    public int Offset { get; init; } = 0;

    /// <summary>
    /// Resolve a query to matching symbols: ticker-prefix, company-name substring, or the company's brand name where that differs from its registered name (<c>search=spacex</c> returns <c>SPCX</c>, registered as SPACE EXPLORATION TECHNOLOGIES CORP). Case-insensitive; exact ticker, exact name and brand matches rank above prefix and substring matches, and within the same level a company ranks above a fund (<c>search=jpmorgan</c> lists <c>JPM</c> before <c>JEPI</c>). Useful for finding the canonical form of a name (<c>search=bitcoin</c> returns <c>BTC-USD</c>).
    /// </summary>
    public string? Search { get; init; }
}
