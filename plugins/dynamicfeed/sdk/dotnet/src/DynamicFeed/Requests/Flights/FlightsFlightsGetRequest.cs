using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Flights;

/// <summary>
/// The inputs of the FlightsFlightsGet operation.
/// </summary>
public sealed record FlightsFlightsGetRequest
{
    /// <summary>
    /// region preset: morocco, spain, london, newyork, paris, tokyo, dubai, europe, usa, asia, ...
    /// </summary>
    public Region? Region { get; init; }

    /// <summary>
    /// filter by flight callsign, e.g. BAW123
    /// </summary>
    public Callsign? Callsign { get; init; }

    [Maximum(200)]
    public int Limit { get; init; } = 50;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
