using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Earthquakes;

/// <summary>
/// The inputs of the EarthquakesEarthquakesGet operation.
/// </summary>
public sealed record EarthquakesEarthquakesGetRequest
{
    /// <summary>
    /// minimum magnitude
    /// </summary>
    [Minimum(0.0)]
    public double MinMagnitude { get; init; } = 2.5d;

    /// <summary>
    /// hour | day | week | month
    /// </summary>
    public string Period { get; init; } = "day";

    /// <summary>
    /// only quakes flagged with tsunami potential
    /// </summary>
    public bool TsunamiOnly { get; init; } = false;

    [Maximum(200)]
    public int Limit { get; init; } = 30;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
