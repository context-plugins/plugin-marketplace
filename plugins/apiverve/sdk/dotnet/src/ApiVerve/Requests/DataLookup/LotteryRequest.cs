namespace ApiVerve.Requests.DataLookup;

/// <summary>
/// The inputs of the Lottery operation.
/// </summary>
public sealed record LotteryRequest
{
    /// <summary>
    /// The lottery game to lookup: powerball, megamillions, euromillions, or lottomax
    /// </summary>
    public required string Numbers { get; init; }

    /// <summary>
    /// Optional date for historical lookup (YYYY-MM-DD). Returns the nearest draw to this date.
    /// </summary>
    public string? Date { get; init; }
}
