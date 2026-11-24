using System.Collections.Generic;
using Perigon.Core.Validation.Attributes;
using Perigon.Models.Enums;

namespace Perigon.Requests.SupplementalEndpoints;

/// <summary>
/// The inputs of the SearchSources operation.
/// </summary>
public sealed record SearchSourcesRequest
{
    /// <summary>
    /// String Array. Filter by specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com, us?.nytimes.com). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Domain { get; init; }

    /// <summary>
    /// String. Search by source name or alternative names. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// String. Filter by predefined publisher bundles (e.g., top100, top50tech). Returns all sources within the specified group. See documentation for available source groups.
    /// </summary>
    public string? SourceGroup { get; init; }

    /// <summary>
    /// String. Determines the source sorting order. Options include relevance (default, best match to query), globalRank (by overall traffic and popularity), monthlyVisits (by total monthly visitor count), and avgMonthlyPosts (by number of articles published monthly).
    /// </summary>
    public SourcesSortBy? SortBy { get; init; }

    /// <summary>
    /// Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
    /// </summary>
    [Minimum(0)]
    [Maximum(10000)]
    public int? Page { get; init; }

    /// <summary>
    /// Integer. The number of sources to return per page in the paginated response.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int? Size { get; init; }

    /// <summary>
    /// Integer. Filter for sources with at least this many monthly visitors. Used to target publishers by audience size.
    /// </summary>
    public long? MinMonthlyVisits { get; init; }

    /// <summary>
    /// Integer. Filter for sources with no more than this many monthly visitors. Used to target publishers by audience size.
    /// </summary>
    public long? MaxMonthlyVisits { get; init; }

    /// <summary>
    /// Integer. Filter for sources that publish at least this many articles per month. Used to target publishers by content volume.
    /// </summary>
    public long? MinMonthlyPosts { get; init; }

    /// <summary>
    /// Integer. Filter for sources that publish no more than this many articles per month. Used to target publishers by content volume.
    /// </summary>
    public long? MaxMonthlyPosts { get; init; }

    /// <summary>
    /// String Array. Filter sources by countries they commonly cover in their reporting. Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported country codes. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Country { get; init; }

    /// <summary>
    /// String Array. Filter for local publications based in specific countries. Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). See documentation for supported country codes. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? SourceCountry { get; init; }

    /// <summary>
    /// String Array. Filter for local publications based in specific states or regions. Uses standard two-letter state codes in lowercase (e.g., ca, ny, tx). See documentation for supported state codes. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? SourceState { get; init; }

    /// <summary>
    /// String Array. Filter for local publications based in specific counties. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? SourceCounty { get; init; }

    /// <summary>
    /// String Array. Filter for local publications based in specific cities. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? SourceCity { get; init; }

    /// <summary>
    /// Float. Latitude coordinate for filtering local publications by geographic proximity. Used with sourceLon and sourceMaxDistance for radius search.
    /// </summary>
    [Minimum(-90.0)]
    [Maximum(90.0)]
    public double? SourceLat { get; init; }

    /// <summary>
    /// Float. Longitude coordinate for filtering local publications by geographic proximity. Used with sourceLat and sourceMaxDistance for radius search.
    /// </summary>
    [Minimum(-180.0)]
    [Maximum(180.0)]
    public double? SourceLon { get; init; }

    /// <summary>
    /// Float. Maximum distance in kilometers from the coordinates defined by sourceLat and sourceLon. Defines the radius for local publication searches.
    /// </summary>
    [Minimum(1.0)]
    [Maximum(300.0)]
    public double? SourceMaxDistance { get; init; }

    /// <summary>
    /// String Array. Filter sources by their primary content categories such as Politics, Tech, Sports, Business, or Finance. Returns sources that frequently cover these topics. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Category { get; init; }

    /// <summary>
    /// String Array. Filter sources by their frequently covered topics (e.g., Markets, Cryptocurrency, Climate Change). Returns sources where the specified topic is among their top 10 covered areas. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Topic { get; init; }

    /// <summary>
    /// String Array. Filter sources by their content label patterns (e.g., Opinion, Paid-news, Non-news). Returns sources where the specified label is common in their published content. See documentation for all available labels. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Label { get; init; }

    /// <summary>
    /// Boolean. Filter by paywall status. Set to true to find sources with paywalls, or false to find sources without paywalls.
    /// </summary>
    public bool? Paywall { get; init; }

    /// <summary>
    /// Boolean. Controls whether subdomains are included as separate results. When true (default), subdomains appear as distinct sources. When false, results are consolidated to parent domains only.
    /// </summary>
    public bool? ShowSubdomains { get; init; }

    /// <summary>
    /// Boolean. Controls whether to return the exact result count. When false (default), counts are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets.
    /// </summary>
    public bool? ShowNumResults { get; init; }
}
