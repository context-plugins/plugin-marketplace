using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.AirQuality;

/// <summary>
/// The inputs of the AirQualityAirQualityGet operation.
/// </summary>
public sealed record AirQualityAirQualityGetRequest
{
    /// <summary>
    /// city name
    /// </summary>
    public City? City { get; init; }

    public Lat? Lat { get; init; }

    public Lon? Lon { get; init; }

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
