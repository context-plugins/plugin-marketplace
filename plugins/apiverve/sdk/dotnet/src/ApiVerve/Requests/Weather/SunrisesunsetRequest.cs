namespace ApiVerve.Requests.Weather;

/// <summary>
/// The inputs of the Sunrisesunset operation.
/// </summary>
public sealed record SunrisesunsetRequest
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
    /// The date for which you want to get the sunrise and sunset times (e.g., MM-DD-YYYY : 01-01-2022)
    /// </summary>
    public string? Date { get; init; }
}
