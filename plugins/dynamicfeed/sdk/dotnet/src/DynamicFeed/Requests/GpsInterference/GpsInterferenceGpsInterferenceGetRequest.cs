using DynamicFeed.Core.Validation.Attributes;
using DynamicFeed.Models.AnyOf;

namespace DynamicFeed.Requests.GpsInterference;

/// <summary>
/// The inputs of the GpsInterferenceGpsInterferenceGet operation.
/// </summary>
public sealed record GpsInterferenceGpsInterferenceGetRequest
{
    /// <summary>
    /// preset: london, blacksea, baltic, easternmed, persiangulf, korea, finland, caucasus, northsea
    /// </summary>
    public string Region { get; init; } = "";

    /// <summary>
    /// latitude (use with lon instead of a preset)
    /// </summary>
    public Lat? Lat { get; init; }

    /// <summary>
    /// longitude
    /// </summary>
    public Lon? Lon { get; init; }

    /// <summary>
    /// radius around lat/lon in km
    /// </summary>
    [Minimum(20)]
    [Maximum(460)]
    public int RadiusKm { get; init; } = 300;

    public XApiKey? XApiKey { get; init; }

    public XRapidapiProxySecret? XRapidapiProxySecret { get; init; }

    public XRapidapiUser? XRapidapiUser { get; init; }
}
