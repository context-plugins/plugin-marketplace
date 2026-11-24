namespace ApiVerve.Requests.Weather;

/// <summary>
/// The inputs of the Moonrisemoonset operation.
/// </summary>
public sealed record MoonrisemoonsetRequest
{
    /// <summary>
    /// The latitude of the location
    /// </summary>
    public required double Lat { get; init; }

    /// <summary>
    /// The longitude of the location
    /// </summary>
    public required double Lon { get; init; }

    /// <summary>
    /// The date to get the moonrise and moonset times for (MM-dd-yyyy)
    /// </summary>
    public string? Date { get; init; }
}
