using System;
using System.Collections.Generic;
using Perigon.Core.Validation.Attributes;
using Perigon.Models.Enums;

namespace Perigon.Requests.Wikipedia;

/// <summary>
/// The inputs of the SearchWikipedia operation.
/// </summary>
public sealed record SearchWikipediaRequest
{
    /// <summary>
    /// String. Primary search query for filtering pages based on their title, summary, and content. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// String. Search specifically within page titles. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations.
    /// </summary>
    public string? Title { get; init; }

    /// <summary>
    /// String. Search specifically within page summary. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations.
    /// </summary>
    public string? Summary { get; init; }

    /// <summary>
    /// String. Search specifically within the page's content (across all sections). Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations.
    /// </summary>
    public string? Text { get; init; }

    /// <summary>
    /// String. Search specifically across page's references. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations.
    /// </summary>
    public string? Reference { get; init; }

    /// <summary>
    /// String Array. Retrieve specific pages by their unique Perigon identifiers. Multiple IDs can be provided to return a collection of specific pages.
    /// </summary>
    public IReadOnlyList<string>? Id { get; init; }

    /// <summary>
    /// Integer Array. Retrieve specific pages by their Wikipedia identifiers. These are unique only in a combination with <c>wikiCode</c> parameter. Multiple IDs can be provided to return a collection of specific pages.
    /// </summary>
    public IReadOnlyList<int>? WikiPageId { get; init; }

    /// <summary>
    /// Integer Array. Retrieve specific pages by their Wikipedia revision identifiers. These are unique only in a combination with <c>wikiCode</c> parameter. Multiple IDs can be provided to return a collection of specific pages. This ID changes each time a page is edited.
    /// </summary>
    public IReadOnlyList<int>? WikiRevisionId { get; init; }

    /// <summary>
    /// String Array. Retrieve pages only from specified wiki projects. Currently, the only accepted value is <c>enwiki</c>.
    /// </summary>
    public IReadOnlyList<string>? WikiCode { get; init; }

    /// <summary>
    /// Integer Array. Retrieve pages only from specified wiki namespace. Currently, only the main namespace (0) is available.
    /// </summary>
    public IReadOnlyList<int>? WikiNamespace { get; init; }

    /// <summary>
    /// String Array. Retrieve pages by the ids corresponding to their Wikidata entities.
    /// </summary>
    public IReadOnlyList<string>? WikidataId { get; init; }

    /// <summary>
    /// String Array. Retrieve all pages whose Wikidata entities are instances of these provided ids.
    /// </summary>
    public IReadOnlyList<string>? WikidataInstanceOfId { get; init; }

    /// <summary>
    /// String Array. Retrieve all pages whose Wikidata entities are instances of these ids (provided as labels).
    /// </summary>
    public IReadOnlyList<string>? WikidataInstanceOfLabel { get; init; }

    /// <summary>
    /// String Array. Retrieve all pages for specified categories.
    /// </summary>
    public IReadOnlyList<string>? Category { get; init; }

    /// <summary>
    /// String Array. Retrieve pages containing provided section ids. Each section ID is unique.
    /// </summary>
    public IReadOnlyList<string>? SectionId { get; init; }

    /// <summary>
    /// Date. Retrieve pages modified after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? WikiRevisionFrom { get; init; }

    /// <summary>
    /// Date. Retrieve pages modified before this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? WikiRevisionTo { get; init; }

    /// <summary>
    /// Date. Retrieve pages scraped after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? ScrapedAtFrom { get; init; }

    /// <summary>
    /// Date. Retrieve pages scraped before this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? ScrapedAtTo { get; init; }

    /// <summary>
    /// Integer. Retrieve pages with the average number of views per day higher than the provided value.
    /// </summary>
    public long? PageviewsFrom { get; init; }

    /// <summary>
    /// Integer. Retrieve pages with the average number of views per day lower than the provided value.
    /// </summary>
    public long? PageviewsTo { get; init; }

    /// <summary>
    /// Boolean. Retrieve pages that have any viewership statistics available for them. If <c>false</c> (the default) - return all pages.
    /// </summary>
    public bool? WithPageviews { get; init; }

    /// <summary>
    /// Boolean. Whether to show the total number of all matched pages. Default value is false which makes queries a bit more efficient but also counts up to 10000 pages.
    /// </summary>
    public bool? ShowNumResults { get; init; }

    /// <summary>
    /// Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
    /// </summary>
    [Minimum(0)]
    [Maximum(10000)]
    public int? Page { get; init; }

    /// <summary>
    /// Integer. The number of articles to return per page in the paginated response.
    /// </summary>
    [Minimum(0)]
    [Maximum(1000)]
    public int? Size { get; init; }

    /// <summary>
    /// String. Determines the Wikipedia page sorting order. Options include relevance (default), revisionTsDesc (recently edited first), revisionTsAsc (recently edited last), pageViewsDesc (highest viewership first), pageViewsAsc (highest viewership last), scrapedAtDesc (recently scraped first), scrapedAtAsc (recently scraped last).
    /// </summary>
    public SortByPerigonWikipediaApi? SortBy { get; init; }
}
