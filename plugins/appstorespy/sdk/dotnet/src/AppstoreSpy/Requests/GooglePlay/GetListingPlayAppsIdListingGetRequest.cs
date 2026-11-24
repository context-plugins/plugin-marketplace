using AppstoreSpy.Models.Enums;

namespace AppstoreSpy.Requests.GooglePlay;

/// <summary>
/// The inputs of the GetListingPlayAppsIdListingGet operation.
/// </summary>
public sealed record GetListingPlayAppsIdListingGetRequest
{
    /// <summary>
    /// Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass the <c>id</c> value from it
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Country of the listing (Google Play <c>gl</c>). By default: US.
    /// </summary>
    public AppCountries Country { get; init; } = AppCountries.Us;

    /// <summary>
    /// Language of the listing (Google Play <c>hl</c>), any Google Play Console locale. By default: en_US.
    /// </summary>
    public PlayListingLanguages Language { get; init; } = PlayListingLanguages.EnUs;

    /// <summary>
    /// How old a kept listing may be before it is crawled again.
    /// </summary>
    public CacheTime Freshness { get; init; } = CacheTime._1D;

    /// <summary>
    /// Wait for a running crawl, or answer 202 right away.
    /// </summary>
    public bool Wait { get; init; } = true;
}
