using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Weather;

/// <summary>
/// The inputs of the WeatherWeatherGet operation.
/// </summary>
public sealed record WeatherWeatherGetRequest
{
    /// <summary>
    /// city name, e.g. London, Tokyo, New York
    /// </summary>
    public City? City { get; init; }

    /// <summary>
    /// latitude (alternative to city)
    /// </summary>
    public Lat? Lat { get; init; }

    /// <summary>
    /// longitude (alternative to city)
    /// </summary>
    public Lon? Lon { get; init; }

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
