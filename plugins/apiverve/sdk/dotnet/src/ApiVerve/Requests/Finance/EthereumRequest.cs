namespace ApiVerve.Requests.Finance;

/// <summary>
/// The inputs of the Ethereum operation.
/// </summary>
public sealed record EthereumRequest
{
    /// <summary>
    /// The currency to get the price in
    /// </summary>
    public string? Currency { get; init; }

    /// <summary>
    /// Include hourly price data for the past 24 hours
    /// </summary>
    public bool? Hourly { get; init; }

    /// <summary>
    /// UTC hour-of-day slot (0-23) the price was captured in
    /// </summary>
    public double? HourlyHour { get; init; }

    /// <summary>
    /// Price at that hour, in the requested currency
    /// </summary>
    public double? HourlyPrice { get; init; }

    /// <summary>
    /// ISO 8601 time the hourly price was captured
    /// </summary>
    public string? HourlyTimestamp { get; init; }
}
