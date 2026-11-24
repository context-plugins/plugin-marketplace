namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Exchangerate operation.
/// </summary>
public sealed record ExchangerateRequest
{
    /// <summary>
    /// The first currency you want to get the exchange rate for
    /// </summary>
    public required string Currency1 { get; init; }

    /// <summary>
    /// The second currency you want to get the exchange rate for
    /// </summary>
    public required string Currency2 { get; init; }
}
