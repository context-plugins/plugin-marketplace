using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetAppDetailsPlayAppsIdGet operation.
/// </summary>
public sealed record GetAppDetailsPlayAppsIdGetRequest
{
    /// <summary>
    /// Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the <c>id</c> value from it
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
