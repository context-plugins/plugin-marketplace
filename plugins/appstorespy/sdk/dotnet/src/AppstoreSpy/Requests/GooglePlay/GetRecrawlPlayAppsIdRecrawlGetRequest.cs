using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetRecrawlPlayAppsIdRecrawlGet operation.
/// </summary>
public sealed record GetRecrawlPlayAppsIdRecrawlGetRequest
{
    /// <summary>
    /// Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the <c>id</c> value from it
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
