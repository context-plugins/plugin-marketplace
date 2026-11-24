namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Currencysymbols operation.
/// </summary>
public sealed record CurrencysymbolsRequest
{
    /// <summary>
    /// The currency code for which you want to get the symbol
    /// </summary>
    public required string Currency { get; init; }
}
