using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the GetRecrawlIosAppsIdRecrawlGet operation.
/// </summary>
public sealed record GetRecrawlIosAppsIdRecrawlGetRequest
{
    /// <summary>
    /// App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store link cannot be passed in the path; pass the id from it
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Country for which return data. By default: US.
    /// </summary>
    public AppCountries Country { get; init; } = AppCountries.Us;

    /// <summary>
    /// Language of meta data. By default: en_US
    /// </summary>
    public AppLanguages Language { get; init; } = AppLanguages.EnUs;
}
