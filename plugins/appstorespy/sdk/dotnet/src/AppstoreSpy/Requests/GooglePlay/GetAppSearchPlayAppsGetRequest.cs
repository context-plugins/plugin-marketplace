using AppstoreSpy.Core.Validation.Attributes;
using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetAppSearchPlayAppsGet operation.
/// </summary>
public sealed record GetAppSearchPlayAppsGetRequest
{
    /// <summary>
    /// Word or phrase for search.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Empty for all.
    /// </summary>
    public bool? Published { get; init; }

    /// <summary>
    /// Country for specific country fields. Default - US.
    /// </summary>
    public AppCountries? Country { get; init; }

    /// <summary>
    /// Language of meta data. By default: store default language.
    /// </summary>
    public AppLanguages? Language { get; init; }

    /// <summary>
    /// Fields to return separated by comma(,)
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// Sort params separated by comma(,)
    /// </summary>
    public string? Sort { get; init; }

    /// <summary>
    /// Count per page
    /// </summary>
    [Maximum(1000)]
    public int Limit { get; init; } = 10;

    /// <summary>
    /// Page
    /// </summary>
    public int Page { get; init; } = 1;
}
