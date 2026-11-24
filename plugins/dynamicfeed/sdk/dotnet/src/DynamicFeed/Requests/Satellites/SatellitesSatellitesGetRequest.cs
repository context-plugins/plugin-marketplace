using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Satellites;

/// <summary>
/// The inputs of the SatellitesSatellitesGet operation.
/// </summary>
public sealed record SatellitesSatellitesGetRequest
{
    /// <summary>
    /// starlink, stations, gps-ops, oneweb, galileo, weather, active, geo
    /// </summary>
    public string Group { get; init; } = "starlink";

    [Maximum(200)]
    public int Limit { get; init; } = 25;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
