namespace FinancialModelingPrep.Requests.Search;

/// <summary>
/// The inputs of the SearchSymbols operation.
/// </summary>
public sealed record SearchSymbolsRequest
{
    public required string Query { get; init; }

    public int Limit { get; init; } = 10;

    public string? Exchange { get; init; }
}
