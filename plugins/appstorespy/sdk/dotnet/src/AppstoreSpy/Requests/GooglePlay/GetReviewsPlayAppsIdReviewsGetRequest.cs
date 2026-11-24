using AppstoreSpy.Core.Validation.Attributes;
using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetReviewsPlayAppsIdReviewsGet operation.
/// </summary>
public sealed record GetReviewsPlayAppsIdReviewsGetRequest
{
    /// <summary>
    /// Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the <c>id</c> value from it
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Review language
    /// </summary>
    public required AppLanguages Language { get; init; }

    public AppCountries? Country { get; init; }

    /// <summary>
    /// Count of reviews per page
    /// </summary>
    [Maximum(1000)]
    public int Limit { get; init; } = 10;

    /// <summary>
    /// Sort params separated by comma(,)
    /// </summary>
    public string? Sort { get; init; }
}
