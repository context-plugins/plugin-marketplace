using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.SpaceWeather;

/// <summary>
/// The inputs of the SpaceWeatherSpaceWeatherGet operation.
/// </summary>
public sealed record SpaceWeatherSpaceWeatherGetRequest
{
    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
