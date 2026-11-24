using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Forecast;

/// <summary>
/// The inputs of the ForecastForecastGet operation.
/// </summary>
public sealed record ForecastForecastGetRequest
{
    /// <summary>
    /// city name
    /// </summary>
    public City? City { get; init; }

    public Lat? Lat { get; init; }

    public Lon? Lon { get; init; }

    [Minimum(1)]
    [Maximum(16)]
    public int Days { get; init; } = 7;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
