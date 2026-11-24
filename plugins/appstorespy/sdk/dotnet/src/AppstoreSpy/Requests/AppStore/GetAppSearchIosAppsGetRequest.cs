using AppstoreSpy.Core.Validation.Attributes;
using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the GetAppSearchIosAppsGet operation.
/// </summary>
public sealed record GetAppSearchIosAppsGetRequest
{
    /// <summary>
    /// Word or phrase for search.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Country for specific country fields. Default - US.
    /// </summary>
    public AppCountries? Country { get; init; }

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
