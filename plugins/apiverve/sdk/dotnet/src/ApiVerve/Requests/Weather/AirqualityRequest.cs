namespace ApiVerve.Requests.Weather;

/// <summary>
/// The inputs of the Airquality operation.
/// </summary>
public sealed record AirqualityRequest
{
    /// <summary>
    /// The city name for which you want to get the air quality data (e.g., New York)
    /// </summary>
    public required string City { get; init; }
}
