using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.Suggestions;

/// <summary>
/// The inputs of the GetSuggestsPlaySuggestionsGet2 operation.
/// </summary>
public sealed record GetSuggestsPlaySuggestionsGet2Request
{
    public required string Q { get; init; }

    public AppCountries Country { get; init; } = AppCountries.Us;

    public AppLanguages Lang { get; init; } = AppLanguages.EnUs;

    public CacheTime Freshness { get; init; } = CacheTime._7D;
}
