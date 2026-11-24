using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetEventsPlayLiveopsGet2 operation.
/// </summary>
public sealed record GetEventsPlayLiveopsGet2Request
{
    public required string App { get; init; }

    public AppCountries Country { get; init; } = AppCountries.Us;

    public CacheTime Freshness { get; init; } = CacheTime._7D;
}
