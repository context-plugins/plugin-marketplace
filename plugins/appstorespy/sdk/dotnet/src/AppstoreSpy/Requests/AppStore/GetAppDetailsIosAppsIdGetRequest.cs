using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the GetAppDetailsIosAppsIdGet operation.
/// </summary>
public sealed record GetAppDetailsIosAppsIdGetRequest
{
    /// <summary>
    /// App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store link cannot be passed in the path; pass the id from it
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Fields to return separated by comma(,)
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// Country for which return data. By default: US.
    /// </summary>
    public AppCountries? Country { get; init; }

    /// <summary>
    /// Language of meta data. By default: store default language.
    /// </summary>
    public AppLanguages? Language { get; init; }
}
