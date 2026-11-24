namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Platinumprice operation.
/// </summary>
public sealed record PlatinumpriceRequest
{
    /// <summary>
    /// The currency to get the price in
    /// </summary>
    public string? Currency { get; init; }

    /// <summary>
    /// Include hourly price data for the past 24 hours
    /// </summary>
    public bool? Hourly { get; init; }
}
