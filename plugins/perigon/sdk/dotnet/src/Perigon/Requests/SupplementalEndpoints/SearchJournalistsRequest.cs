using System;
using System.Collections.Generic;
using Perigon.Core.Validation.Attributes;
using Perigon.Models.Enums;

namespace Perigon.Requests.SupplementalEndpoints;

/// <summary>
/// The inputs of the SearchJournalists operation.
/// </summary>
public sealed record SearchJournalistsRequest
{
    /// <summary>
    /// String Array. Filter by unique journalist identifiers. Multiple values create an OR filter to find journalists matching any of the specified IDs.
    /// </summary>
    public IReadOnlyList<string>? Id { get; init; }

    /// <summary>
    /// String. Primary search query for filtering journalists based on their name, title, and Twitter bio. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// String. Search specifically within journalist names. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// String. Filter journalists by their exact Twitter handle, without the @ symbol.
    /// </summary>
    public string? Twitter { get; init; }

    /// <summary>
    /// String. Sort journalists from highest to lowest by avgMonthlyPosts, linkedinConnections, or linkedinFollowers. When omitted, results are sorted by relevance.
    /// </summary>
    public JournalistsSortBy? SortBy { get; init; }

    /// <summary>
    /// Integer. The number of journalists to return per page in the paginated response.
    /// </summary>
    [Minimum(0)]
    [Maximum(1000)]
    public int? Size { get; init; }

    /// <summary>
    /// Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
    /// </summary>
    [Minimum(0)]
    public int? Page { get; init; }

    /// <summary>
    /// String Array. Filter journalists by the publisher domains they write for. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Source { get; init; }

    /// <summary>
    /// String Array. Filter journalists by the top topics they cover. Topics are more specific themes that the article is about. Examples of topics: 'Economy', 'Real Estate', 'Cryptocurrency'. If multiple parameters are passed, they will be applied as OR operations. (Searches inside the topCategories data field.)
    /// </summary>
    public IReadOnlyList<string>? Topic { get; init; }

    /// <summary>
    /// String Array. Filter journalists by the top categories they cover. Categories are general themes that the article is about. Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be applied as OR operations. (Searches inside the topCategories data field.)
    /// </summary>
    public IReadOnlyList<string>? Category { get; init; }

    /// <summary>
    /// String Array. Filter journalists by the most common label tagged to the articles they publish. This accepts labels like 'Opinion' or 'Pop Culture'. (Searches the topLabels data field.)
    /// </summary>
    public IReadOnlyList<string>? Label { get; init; }

    /// <summary>
    /// Integer. Filter for journalists who publish at least this many articles per month. Used to identify more active journalists.
    /// </summary>
    public int? MinMonthlyPosts { get; init; }

    /// <summary>
    /// Integer. Filter for journalists who publish no more than this many articles per month.
    /// </summary>
    public int? MaxMonthlyPosts { get; init; }

    /// <summary>
    /// String Array. Filter journalists by countries they commonly cover in their reporting. Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Country { get; init; }

    /// <summary>
    /// String Array. Filter journalists by their profile location country (<c>locations.country</c>). Uses ISO 3166-1 alpha-2 two-letter country codes in lowercase (e.g., us, gb, jp). <c>uk</c> is accepted as an alias for <c>gb</c>. Distinct from <c>country</c>, which filters reporting focus (<c>topCountries</c>). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? LocationCountry { get; init; }

    /// <summary>
    /// String Array. Filter journalists by their profile location state or region (<c>locations.state</c>). For US locations this is the two-letter state code (e.g., NY, CA). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? LocationState { get; init; }

    /// <summary>
    /// String Array. Filter journalists by their profile location county (<c>locations.county</c>). County names should match stored metadata (e.g., 'Los Angeles County', 'Cook County'). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? LocationCounty { get; init; }

    /// <summary>
    /// String Array. Filter journalists by their profile location city (<c>locations.city</c>). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? LocationCity { get; init; }

    /// <summary>
    /// String Array. Filter journalists by their profile location area — neighborhood, borough, or district (<c>locations.area</c>). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? LocationArea { get; init; }

    /// <summary>
    /// Date. Filter for journalist profiles updated on or after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? UpdatedAtFrom { get; init; }

    /// <summary>
    /// Date. Filter for journalist profiles updated on or before this date. Accepts ISO 8601 format (e.g., 2023-03-01T23:59:59) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? UpdatedAtTo { get; init; }

    /// <summary>
    /// Boolean. Controls whether to return the exact result count. When false (default), counts are capped at 10,000 for performance reasons. Set to true for precise counts in smaller result sets.
    /// </summary>
    public bool? ShowNumResults { get; init; }
}
