using AppstoreSpy.Core.Validation.Attributes;
using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.AppStore;

/// <summary>
/// The inputs of the GetReviewsIosAppsIdReviewsGet operation.
/// </summary>
public sealed record GetReviewsIosAppsIdReviewsGetRequest
{
    /// <summary>
    /// App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A store link cannot be passed in the path; pass the id from it
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// App storefront
    /// </summary>
    public AppCountries? Country { get; init; }

    /// <summary>
    /// Fields to return separated by comma(,)
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// Count of reviews per page
    /// </summary>
    [Minimum(1)]
    [Maximum(1000)]
    public int Limit { get; init; } = 10;

    /// <summary>
    /// Sort params separated by comma(,)
    /// </summary>
    public string? Sort { get; init; }
}
