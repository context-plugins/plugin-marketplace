namespace ApiVerve.Requests.Weather;

/// <summary>
/// The inputs of the Marineweather operation.
/// </summary>
public sealed record MarineweatherRequest
{
    /// <summary>
    /// The latitude coordinate of the location
    /// </summary>
    public required double Lat { get; init; }

    /// <summary>
    /// The longitude coordinate of the location
    /// </summary>
    public required double Lon { get; init; }
}
