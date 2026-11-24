using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.Events;

/// <summary>
/// The inputs of the GetEventsPlayLiveopsGet operation.
/// </summary>
public sealed record GetEventsPlayLiveopsGetRequest
{
    public required string App { get; init; }

    public AppCountries Country { get; init; } = AppCountries.Us;

    public CacheTime Freshness { get; init; } = CacheTime._7D;
}
