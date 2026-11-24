namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Currencyconverter operation.
/// </summary>
public sealed record CurrencyconverterRequest
{
    /// <summary>
    /// The amount to convert
    /// </summary>
    public required double Value { get; init; }

    /// <summary>
    /// The ISO 4217 currency code to convert from
    /// </summary>
    public required string From { get; init; }

    /// <summary>
    /// The ISO 4217 currency code to convert to
    /// </summary>
    public required string To { get; init; }
}
