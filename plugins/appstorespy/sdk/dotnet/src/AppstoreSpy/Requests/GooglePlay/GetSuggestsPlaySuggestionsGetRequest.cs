using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetSuggestsPlaySuggestionsGet operation.
/// </summary>
public sealed record GetSuggestsPlaySuggestionsGetRequest
{
    public required string Q { get; init; }

    public AppCountries Country { get; init; } = AppCountries.Us;

    public AppLanguages Lang { get; init; } = AppLanguages.EnUs;

    public CacheTime Freshness { get; init; } = CacheTime._7D;
}
