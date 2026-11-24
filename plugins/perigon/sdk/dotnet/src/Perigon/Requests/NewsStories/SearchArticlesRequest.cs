using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Perigon.Core.Validation.Attributes;
using Perigon.Models.Enums;

namespace Perigon.Requests.NewsStories;

/// <summary>
/// The inputs of the SearchArticles operation.
/// </summary>
public sealed record SearchArticlesRequest
{
    /// <summary>
    /// String. Primary search query for filtering articles based on their title, description, and content. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// String. Search specifically within article headlines/titles. Supports Boolean operators, exact phrases with quotes, and wildcards for matching title variations.
    /// </summary>
    public string? Title { get; init; }

    /// <summary>
    /// String. Search within article description fields. Supports Boolean expressions, exact phrase matching with quotes, and wildcards for flexible pattern matching.
    /// </summary>
    public string? Desc { get; init; }

    /// <summary>
    /// String. Search within the full article body content. Supports Boolean logic, exact phrase matching with quotes, and wildcards for comprehensive content searching.
    /// </summary>
    public string? Content { get; init; }

    /// <summary>
    /// String. Search within article summary fields. Supports Boolean expressions, exact phrase matching with quotes, and wildcards for flexible pattern matching.
    /// </summary>
    public string? Summary { get; init; }

    /// <summary>
    /// String. Search query on the url field. Semantic similar to q parameter. E.g. could be used for querying certain website sections, e.g. source=cnn.com&amp;url=travel.
    /// </summary>
    public string? Url { get; init; }

    /// <summary>
    /// String Array. Retrieve specific news articles by their unique article identifiers. Multiple IDs can be provided to return a collection of specific articles.
    /// </summary>
    public IReadOnlyList<string>? ArticleId { get; init; }

    /// <summary>
    /// String Array. Filter results to only show content within a specific related content cluster. Returns articles grouped together as part of Perigon Stories based on topic relevance.
    /// </summary>
    public IReadOnlyList<string>? ClusterId { get; init; }

    /// <summary>
    /// String. Determines the article sorting order. Options include relevance (default), date/pubDate (newest publication date first), reverseDate (oldest publication date first), addDate (newest ingestion date first), reverseAddDate (oldest ingestion date first), and refreshDate (most recently updated in system first, often identical to addDate).
    /// </summary>
    public AllEndpointSortBy? SortBy { get; init; }

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
    /// Date. Filter for articles published after this date. Accepts ISO 8601 format (e.g., 2023-03-01T00:00:00) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? From { get; init; }

    /// <summary>
    /// Date. Filter for articles published before this date. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? To { get; init; }

    /// <summary>
    /// Date. Filter for articles added to Perigon's system after this date. Accepts ISO 8601 format (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? AddDateFrom { get; init; }

    /// <summary>
    /// Date. Filter for articles added to Perigon's system before this date. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? AddDateTo { get; init; }

    /// <summary>
    /// Date. Filter for articles refreshed/updated in Perigon's system after this date. In most cases yields similar results to addDateFrom but can differ for updated content. Accepts ISO 8601 format (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? RefreshDateFrom { get; init; }

    /// <summary>
    /// Date. Filter for articles refreshed/updated in Perigon's system before this date. In most cases yields similar results to addDateTo but can differ for updated content. Accepts ISO 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? RefreshDateTo { get; init; }

    /// <summary>
    /// String Array. Filter articles by their primary medium type. Accepts Article for written content or Video for video-based stories. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Medium { get; init; }

    /// <summary>
    /// String Array. Filter articles by specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Source { get; init; }

    /// <summary>
    /// String Array. Filter articles using Perigon's curated publisher bundles (e.g., top100, top25crypto). Multiple values create an OR filter to include articles from any of the specified bundles.
    /// </summary>
    public IReadOnlyList<string>? SourceGroup { get; init; }

    /// <summary>
    /// String Array. Exclude articles from specified Perigon source groups. Multiple values create an AND-exclude filter, removing content from publishers in any of the specified bundles (e.g., top10, top100).
    /// </summary>
    public IReadOnlyList<string>? ExcludeSourceGroup { get; init; }

    /// <summary>
    /// String Array. Exclude articles from specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an AND-exclude filter.
    /// </summary>
    public IReadOnlyList<string>? ExcludeSource { get; init; }

    /// <summary>
    /// String Array. Filter articles using watchlists of people and companies. Multiple values create an OR filter to include articles mentioning any entity from the specified watchlists.
    /// </summary>
    public IReadOnlyList<string>? Watchlist { get; init; }

    /// <summary>
    /// String Array. Exclude articles mentioning entities from specified watchlists. Multiple values create an AND-exclude filter, removing content mentioning any entity from the specified watchlists.
    /// </summary>
    public IReadOnlyList<string>? ExcludeWatchlist { get; init; }

    /// <summary>
    /// Boolean. Filter to show only results where the source has a paywall (true) or does not have a paywall (false).
    /// </summary>
    public bool? Paywall { get; init; }

    /// <summary>
    /// String Array. Filter articles by author bylines. Works as an exact match for each author name provided. Multiple values create an OR filter to find articles by any of the specified authors.
    /// </summary>
    public IReadOnlyList<string>? Byline { get; init; }

    /// <summary>
    /// String Array. Filter articles by specific author names. Works as an exact match for each name. Multiple values create an OR filter to find articles by any of the specified authors.
    /// </summary>
    public IReadOnlyList<string>? Author { get; init; }

    /// <summary>
    /// String Array. Exclude articles written by specific authors. Any article with an author name matching an entry in this list will be omitted from results. Multiple values create an AND-exclude filter.
    /// </summary>
    public IReadOnlyList<string>? ExcludeAuthor { get; init; }

    /// <summary>
    /// String Array. Filter by unique journalist identifiers which can be found through the Journalist API or in the matchedAuthors field. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? JournalistId { get; init; }

    /// <summary>
    /// String Array. Exclude articles written by specific journalists identified by their unique IDs. Multiple values create an AND-exclude filter.
    /// </summary>
    public IReadOnlyList<string>? ExcludeJournalistId { get; init; }

    /// <summary>
    /// String Array. Filter articles by their language using ISO-639 two-letter codes (e.g., en, es, fr). Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Language { get; init; }

    /// <summary>
    /// String Array. Exclude articles in specific languages using ISO-639 two-letter codes. Multiple values create an AND-exclude filter.
    /// </summary>
    public IReadOnlyList<string>? ExcludeLanguage { get; init; }

    /// <summary>
    /// Boolean. Expand search to include translated content fields for non-English articles. When true, searches translated title, description, and content fields.
    /// </summary>
    public bool? SearchTranslation { get; init; }

    /// <summary>
    /// String Array. Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact Check, or Press Release. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Label { get; init; }

    /// <summary>
    /// String Array. Exclude articles with specific editorial labels. Multiple values create an AND-exclude filter, removing all content with any of these labels.
    /// </summary>
    public IReadOnlyList<string>? ExcludeLabel { get; init; }

    /// <summary>
    /// String Array. Filter by categories. Categories are general themes that the article is about. Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be applied as OR operations. Use 'none' to search uncategorized articles.
    /// </summary>
    public IReadOnlyList<string>? Category { get; init; }

    /// <summary>
    /// String Array. Exclude articles with specific categories. Multiple values create an AND-exclude filter, removing all content with any of these categories.
    /// </summary>
    public IReadOnlyList<string>? ExcludeCategory { get; init; }

    /// <summary>
    /// String Array. Filter by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Topics are more granular than categories, and articles can have multiple topics. Use the /topics endpoint for a complete list of available topics. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Topic { get; init; }

    /// <summary>
    /// String Array. Exclude articles with specific topics. Multiple values create an AND-exclude filter, removing all content with any of these topics.
    /// </summary>
    public IReadOnlyList<string>? ExcludeTopic { get; init; }

    /// <summary>
    /// String. Returns only articles that contain links to the specified URL pattern. Matches against the 'links' field in article responses.
    /// </summary>
    public string? LinkTo { get; init; }

    /// <summary>
    /// Boolean. Controls whether to include reprinted content in results. When true (default), shows syndicated articles from wire services like AP or Reuters that appear on multiple sites.
    /// </summary>
    public bool? ShowReprints { get; init; }

    /// <summary>
    /// String. Returns all articles in a specific reprint group, including the original article and all its known reprints. Use when you want to see all versions of the same content.
    /// </summary>
    public string? ReprintGroupId { get; init; }

    /// <summary>
    /// String Array. Filters articles where a specified city plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the urban area in question. If multiple parameters are passed, they will be applied as OR operations.
    /// </summary>
    public IReadOnlyList<string>? City { get; init; }

    /// <summary>
    /// String Array. A list of cities to exclude from the results. Articles that are associated with any of the specified cities will be filtered out.
    /// </summary>
    public IReadOnlyList<string>? ExcludeCity { get; init; }

    /// <summary>
    /// String Array. Filters articles where a specified area, such as a neighborhood, borough, or district, plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the area in question. If multiple parameters are passed, they will be applied as OR operations.
    /// </summary>
    public IReadOnlyList<string>? Area { get; init; }

    /// <summary>
    /// String Array. Filters articles where a specified state plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the state in question. If multiple parameters are passed, they will be applied as OR operations.
    /// </summary>
    public IReadOnlyList<string>? State { get; init; }

    /// <summary>
    /// String Array. A list of states to exclude. Articles that include, or are associated with, any of the states provided here will be filtered out. This is especially useful if you want to ignore news tied to certain geographical areas (e.g., US states).
    /// </summary>
    public IReadOnlyList<string>? ExcludeState { get; init; }

    /// <summary>
    /// String Array. A list of counties to include (or specify) in the search results. This field filters the returned articles based on the county associated with the event or news. Only articles tagged with one of these counties will be included.
    /// </summary>
    public IReadOnlyList<string>? County { get; init; }

    /// <summary>
    /// String Array. Excludes articles from specific counties or administrative divisions in the search results. Accepts either a single county name or a list of county names. County names should match the format used in article metadata (e.g., 'Los Angeles County', 'Cook County'). This parameter allows for more granular geographic filter
    /// </summary>
    public IReadOnlyList<string>? ExcludeCounty { get; init; }

    /// <summary>
    /// String Array. Filters articles where a specified country plays a central role in the content, beyond mere mentions, to ensure the results are deeply relevant to the country in question. If multiple parameters are passed, they will be applied as OR operations.
    /// </summary>
    public IReadOnlyList<string>? LocationsCountry { get; init; }

    /// <summary>
    /// String Array. Country code to filter by country. If multiple parameters are passed, they will be applied as OR operations.
    /// </summary>
    public IReadOnlyList<string>? Country { get; init; }

    /// <summary>
    /// String Array. Excludes articles where a specified country plays a central role in the content, ensuring results are not deeply relevant to the country in question. If multiple parameters are passed, they will be applied as AND operations, excluding articles relevant to any of the specified countries.
    /// </summary>
    public IReadOnlyList<string>? ExcludeLocationsCountry { get; init; }

    /// <summary>
    /// String Array. Return all articles that have the specified location. Location attributes are delimited by ':' between key and value, and '::' between attributes. Example: 'city:New York::state:NY'.
    /// </summary>
    public IReadOnlyList<string>? Location { get; init; }

    /// <summary>
    /// Float. Latitude of the center point to search places
    /// </summary>
    [Minimum(-90.0)]
    [Maximum(90.0)]
    public double? Lat { get; init; }

    /// <summary>
    /// Float. Longitude of the center point to search places
    /// </summary>
    [Minimum(-180.0)]
    [Maximum(180.0)]
    public double? Lon { get; init; }

    /// <summary>
    /// Float. Maximum distance (in km) from starting point to search articles by tagged places
    /// </summary>
    [Minimum(1.0)]
    [Maximum(300.0)]
    public double? MaxDistance { get; init; }

    /// <summary>
    /// String Array. Find articles published by sources that are located within a given city.
    /// </summary>
    public IReadOnlyList<string>? SourceCity { get; init; }

    /// <summary>
    /// String Array. Excludes articles published by sources that are located within the specified cities.
    /// </summary>
    public IReadOnlyList<string>? ExcludeSourceCity { get; init; }

    /// <summary>
    /// String Array. Find articles published by sources that are located within a given county.
    /// </summary>
    public IReadOnlyList<string>? SourceCounty { get; init; }

    /// <summary>
    /// String Array. Excludes articles published by sources that are located within the specified counties.
    /// </summary>
    public IReadOnlyList<string>? ExcludeSourceCounty { get; init; }

    /// <summary>
    /// String Array. Find articles published by sources that are located within a given country. Must be 2 character country code (i.e. us, gb, etc).
    /// </summary>
    public IReadOnlyList<string>? SourceCountry { get; init; }

    /// <summary>
    /// String Array. Excludes articles published by sources that are located within the specified countries. Must be 2 character country codes (e.g., us, gb).
    /// </summary>
    public IReadOnlyList<string>? ExcludeSourceCountry { get; init; }

    /// <summary>
    /// String Array. Find articles published by sources that are located within a given state.
    /// </summary>
    public IReadOnlyList<string>? SourceState { get; init; }

    /// <summary>
    /// String Array. Excludes articles published by sources that are located within the specified states.
    /// </summary>
    public IReadOnlyList<string>? ExcludeSourceState { get; init; }

    /// <summary>
    /// Float. Latitude of the center point to search articles created by local publications.
    /// </summary>
    [Minimum(-90.0)]
    [Maximum(90.0)]
    public double? SourceLat { get; init; }

    /// <summary>
    /// Float. Longitude of the center point to search articles created by local publications.
    /// </summary>
    [Minimum(-180.0)]
    [Maximum(180.0)]
    public double? SourceLon { get; init; }

    /// <summary>
    /// Float. Maximum distance from starting point to search articles created by local publications.
    /// </summary>
    [Minimum(1.0)]
    [Maximum(300.0)]
    public double? SourceMaxDistance { get; init; }

    /// <summary>
    /// String Array. Filter articles by Wikidata IDs of mentioned people. Refer to the /people endpoint for a complete list of tracked individuals.
    /// </summary>
    public IReadOnlyList<string>? PersonWikidataId { get; init; }

    /// <summary>
    /// String Array. Exclude articles mentioning people with specific Wikidata IDs. Creates an AND-exclude filter to remove content about these individuals. Uses precise identifiers to avoid name ambiguity.
    /// </summary>
    public IReadOnlyList<string>? ExcludePersonWikidataId { get; init; }

    /// <summary>
    /// String Array. Filter articles by exact person name matches. Does not support Boolean or complex logic. For available person entities, consult the /people endpoint.
    /// </summary>
    public IReadOnlyList<string>? PersonName { get; init; }

    /// <summary>
    /// String Array. Exclude articles mentioning specific people by name. Creates an AND-exclude filter to remove content about these individuals.
    /// </summary>
    public IReadOnlyList<string>? ExcludePersonName { get; init; }

    /// <summary>
    /// String Array. Filter articles by company identifiers. For a complete list of tracked companies, refer to the /companies endpoint.
    /// </summary>
    public IReadOnlyList<string>? CompanyId { get; init; }

    /// <summary>
    /// String Array. Exclude articles mentioning companies with specific identifiers. Creates an AND-exclude filter to remove content about these corporate entities.
    /// </summary>
    public IReadOnlyList<string>? ExcludeCompanyId { get; init; }

    /// <summary>
    /// String. Filter articles by company name mentions. Performs an exact match on company names.
    /// </summary>
    public string? CompanyName { get; init; }

    /// <summary>
    /// String Array. Filter articles by company domains (e.g., apple.com). For available company entities, consult the /companies endpoint.
    /// </summary>
    public IReadOnlyList<string>? CompanyDomain { get; init; }

    /// <summary>
    /// String Array. Exclude articles related to companies with specific domains. Creates an AND-exclude filter to remove content about these companies.
    /// </summary>
    public IReadOnlyList<string>? ExcludeCompanyDomain { get; init; }

    /// <summary>
    /// String Array. Filter articles by company stock symbols. For available company entities and their symbols, consult the /companies endpoint.
    /// </summary>
    public IReadOnlyList<string>? CompanySymbol { get; init; }

    /// <summary>
    /// String Array. Filter articles by company ISIN codes (International Securities Identification Numbers). For available company entities and their ISINs, consult the /companies endpoint.
    /// </summary>
    [MinLength(0)]
    [MaxLength(300)]
    public IReadOnlyList<string>? CompanyIsin { get; init; }

    /// <summary>
    /// String Array. Filter articles by ISIN codes on company ticker listings (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. For available company entities and their listing ISINs, consult the /companies endpoint.
    /// </summary>
    [MinLength(0)]
    [MaxLength(300)]
    public IReadOnlyList<string>? CompanySymbolIsin { get; init; }

    /// <summary>
    /// String Array. Exclude articles related to companies with specific ISIN codes. Creates an AND-exclude filter to remove content about these companies. For available company entities and their ISINs, consult the /companies endpoint.
    /// </summary>
    [MinLength(0)]
    [MaxLength(300)]
    public IReadOnlyList<string>? ExcludeCompanyIsin { get; init; }

    /// <summary>
    /// String Array. Exclude articles related to companies whose ticker listings have these ISIN codes (symbols.isin). Distinct from excludeCompanyIsin, which matches the company-level ISIN. For available company entities and their listing ISINs, consult the /companies endpoint.
    /// </summary>
    [MinLength(0)]
    [MaxLength(300)]
    public IReadOnlyList<string>? ExcludeCompanySymbolIsin { get; init; }

    /// <summary>
    /// String Array. A list of stock symbols (ticker symbols) that identify companies to be excluded. Articles related to companies using any of these symbols will be omitted, which is useful for targeting or avoiding specific public companies.
    /// </summary>
    public IReadOnlyList<string>? ExcludeCompanySymbol { get; init; }

    /// <summary>
    /// Boolean. Whether to show the total number of all matched articles. Default value is false which makes queries a bit more efficient but also counts up to 10000 articles.
    /// </summary>
    public bool? ShowNumResults { get; init; }

    /// <summary>
    /// Float. Filter articles with a positive sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
    /// </summary>
    public double? PositiveSentimentFrom { get; init; }

    /// <summary>
    /// Float. Filter articles with a positive sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
    /// </summary>
    public double? PositiveSentimentTo { get; init; }

    /// <summary>
    /// Float. Filter articles with a neutral sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
    /// </summary>
    public double? NeutralSentimentFrom { get; init; }

    /// <summary>
    /// Float. Filter articles with a neutral sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
    /// </summary>
    public double? NeutralSentimentTo { get; init; }

    /// <summary>
    /// Float. Filter articles with a negative sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
    /// </summary>
    public double? NegativeSentimentFrom { get; init; }

    /// <summary>
    /// Float. Filter articles with a negative sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
    /// </summary>
    public double? NegativeSentimentTo { get; init; }

    /// <summary>
    /// String Array. Filters by Google Content Categories. This field will accept 1 or more categories, must pass the full name of the category. Example: taxonomy=/Finance/Banking/Other, /Finance/Investing/Funds. <see href="https://docs.cloud.google.com/natural-language/docs/categories#version_2">Full list</see>
    /// </summary>
    public IReadOnlyList<string>? Taxonomy { get; init; }

    /// <summary>
    /// String. Filters by Google Content Categories. This field will filter by the category prefix only. Example: prefixTaxonomy=/Finance
    /// </summary>
    public string? PrefixTaxonomy { get; init; }

    /// <summary>
    /// Boolean. When set to true, enables text highlighting in search results.
    /// </summary>
    public bool? ShowHighlighting { get; init; }

    /// <summary>
    /// Integer. Specifies the size in characters of each highlighted text fragment. Defaults to 100 if not specified.
    /// </summary>
    public int? HighlightFragmentSize { get; init; }

    /// <summary>
    /// Integer. Controls the maximum number of highlighted fragments to return per field.
    /// </summary>
    public int? HighlightNumFragments { get; init; }

    /// <summary>
    /// String. Defines the HTML tag that appears before highlighted text. Defaults to '&lt;em&gt;' if not specified.
    /// </summary>
    public string? HighlightPreTag { get; init; }

    /// <summary>
    /// String. Defines the HTML tag that appears after highlighted text. Defaults to '&lt;/em&gt;' if not specified.
    /// </summary>
    public string? HighlightPostTag { get; init; }

    /// <summary>
    /// String. Specifies a separate query for highlighting, allowing highlights based on terms different from the main search query. Example: main query 'q=climate change' with 'highlightQ=renewable OR solar' will highlight terms 'renewable' and 'solar' in results about climate change.
    /// </summary>
    public string? HighlightQ { get; init; }
}
