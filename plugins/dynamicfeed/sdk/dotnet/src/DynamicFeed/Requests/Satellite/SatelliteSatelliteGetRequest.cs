using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.Satellite;

/// <summary>
/// The inputs of the SatelliteSatelliteGet operation.
/// </summary>
public sealed record SatelliteSatelliteGetRequest
{
    /// <summary>
    /// NORAD catalog number, e.g. 25544 (ISS), 20580 (Hubble), 44714 (a Starlink)
    /// </summary>
    public required int NoradId { get; init; }

    /// <summary>
    /// also return a predicted ground-track this many minutes ahead (0 = none)
    /// </summary>
    [Minimum(0)]
    [Maximum(360)]
    public int TrackMinutes { get; init; } = 0;

    /// <summary>
    /// ground-track sampling step in seconds
    /// </summary>
    [Minimum(10)]
    [Maximum(600)]
    public int StepSeconds { get; init; } = 60;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
