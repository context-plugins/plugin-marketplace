namespace ApiVerve.Requests.Weather;

/// <summary>
/// The inputs of the Weatherforecast operation.
/// </summary>
public sealed record WeatherforecastRequest
{
    /// <summary>
    /// The city for which you want to get the current weather (e.g., San Francisco)
    /// </summary>
    public required string City { get; init; }
}
