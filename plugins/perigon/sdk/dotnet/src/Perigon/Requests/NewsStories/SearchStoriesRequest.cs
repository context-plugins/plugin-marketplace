using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Perigon.Core.Validation.Attributes;
using Perigon.Models.Enums;

namespace Perigon.Requests.NewsStories;

/// <summary>
/// The inputs of the SearchStories operation.
/// </summary>
public sealed record SearchStoriesRequest
{
    /// <summary>
    /// String. Primary search query for filtering stories based on their name, summary, and key points. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards (* and ?) for flexible searching.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// String. Search specifically within story names. Supports Boolean operators, exact phrases with quotes, and wildcards for matching name variations.
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// String Array. Filter to specific stories using their unique identifiers. Each clusterId represents a distinct story that groups related articles. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? ClusterId { get; init; }

    /// <summary>
    /// String Array. Excludes specific stories from the results by their unique identifiers. Use this parameter to filter out unwanted or previously seen stories.
    /// </summary>
    public IReadOnlyList<string>? ExcludeClusterId { get; init; }

    /// <summary>
    /// String. Determines the story sorting order. Options include createdAt (default, when stories first emerged), updatedAt (when stories received new articles, best for tracking developing events), relevance (best match to query), count (by unique article count), and totalCount (by total article count including reprints).
    /// </summary>
    public ClustersListSortBy? SortBy { get; init; }

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
    [Maximum(100)]
    public int? Size { get; init; }

    /// <summary>
    /// Filter for stories created on or after this date. Accepts ISO 8601 or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? From { get; init; }

    /// <summary>
    /// Filter for stories created on or before this date. Accepts ISO 8601 or yyyy-mm-dd format.
    /// </summary>
    public DateTimeOffset? To { get; init; }

    /// <summary>
    /// Filter for stories initialized on or after this date. A story is initialized when it becomes visible with generated story data.
    /// </summary>
    public DateTimeOffset? InitializedFrom { get; init; }

    /// <summary>
    /// Filter for stories initialized on or before this date. A story is initialized when it becomes visible with generated story data.
    /// </summary>
    public DateTimeOffset? InitializedTo { get; init; }

    /// <summary>
    /// Date. Filter for stories that received new articles after this date. Useful for tracking developing news events or evolving storylines.
    /// </summary>
    public DateTimeOffset? UpdatedFrom { get; init; }

    /// <summary>
    /// Date. Filter for stories that received new articles before this date. Useful for tracking developing news events or evolving storylines.
    /// </summary>
    public DateTimeOffset? UpdatedTo { get; init; }

    /// <summary>
    /// String Array. Filter stories by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Topics are more granular than categories, and stories can include multiple topics based on their constituent articles. Use the /topics endpoint for a complete list of available topics. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Topic { get; init; }

    /// <summary>
    /// String Array. Filter stories by broad content categories such as Politics, Tech, Sports, Business, or Finance. Use 'none' to find uncategorized stories. Categories are derived from the articles within each story. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Category { get; init; }

    /// <summary>
    /// String Array. Filter stories by Google Content Categories. Must pass the full hierarchical path of the category. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Stories are categorized based on their constituent articles. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Taxonomy { get; init; }

    /// <summary>
    /// String Array. Filter stories that contain articles from specific publisher domains or subdomains. Supports wildcards (* and ?) for pattern matching (e.g., *.cnn.com). A story will match if it contains at least one article from any of the specified sources. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? Source { get; init; }

    /// <summary>
    /// String Array. Filter stories that contain articles from publishers in Perigon's curated bundles (e.g., top100, top25crypto). A story will match if it contains at least one article from any publisher in the specified bundles. Multiple values create an OR filter.
    /// </summary>
    public IReadOnlyList<string>? SourceGroup { get; init; }

    /// <summary>
    /// Integer. Specifies the minimum number of unique sources required for a story to appear in results. Higher values return more significant stories covered by multiple publications. Default is 3.
    /// </summary>
    [Minimum(1)]
    public int? MinUniqueSources { get; init; }

    /// <summary>
    /// Float. Minimum ratio of unique sources to unique articles (uniqueSources / uniqueCount). Filters out stories dominated by a single publisher. For example, a value of 0.05 requires at least 1 unique source per 20 articles. Not applied by default.
    /// </summary>
    [Minimum(0.0)]
    [Maximum(1.0)]
    public double? MinSourceDiversity { get; init; }

    /// <summary>
    /// String Array. Filter stories by Wikidata IDs of top mentioned people. Returns stories where these individuals appear prominently. Refer to the /people endpoint for a complete list of tracked individuals.
    /// </summary>
    public IReadOnlyList<string>? PersonWikidataId { get; init; }

    /// <summary>
    /// String. Filter stories by exact name matches of top mentioned people. Does not support Boolean or complex logic. For available person entities, consult the /people endpoint.
    /// </summary>
    public string? PersonName { get; init; }

    /// <summary>
    /// String Array. Filter stories by identifiers of top mentioned companies. Returns stories where these companies appear prominently. For a complete list of tracked companies, refer to the /companies endpoint.
    /// </summary>
    public IReadOnlyList<string>? CompanyId { get; init; }

    /// <summary>
    /// String. Filter stories by names of top mentioned companies. Performs an exact match on company names in the topCompanies field.
    /// </summary>
    public string? CompanyName { get; init; }

    /// <summary>
    /// String Array. Filter stories by domains of top mentioned companies (e.g., apple.com). Returns stories where companies with these domains appear prominently. For available company entities, consult the /companies endpoint.
    /// </summary>
    public IReadOnlyList<string>? CompanyDomain { get; init; }

    /// <summary>
    /// String Array. Filter stories by stock symbols of top mentioned companies. Returns stories where companies with these symbols appear prominently. For available company entities and their symbols, consult the /companies endpoint.
    /// </summary>
    public IReadOnlyList<string>? CompanySymbol { get; init; }

    /// <summary>
    /// String Array. Filter stories by ISIN codes of top mentioned companies (International Securities Identification Numbers). Returns stories where companies with these ISINs appear prominently. For available company entities and their ISINs, consult the /companies endpoint.
    /// </summary>
    [MinLength(0)]
    [MaxLength(300)]
    public IReadOnlyList<string>? CompanyIsin { get; init; }

    /// <summary>
    /// String Array. Filter stories by ISIN codes on ticker listings of top mentioned companies (symbols.isin). Distinct from companyIsin, which matches the company-level ISIN. Returns stories where those companies appear prominently. For available company entities and their listing ISINs, consult the /companies endpoint.
    /// </summary>
    [MinLength(0)]
    [MaxLength(300)]
    public IReadOnlyList<string>? CompanySymbolIsin { get; init; }

    /// <summary>
    /// String Array. Country code to filter by country. If multiple parameters are passed, they will be applied as OR operations.
    /// </summary>
    public IReadOnlyList<string>? Country { get; init; }

    /// <summary>
    /// String Array. Filter local news by state. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations.
    /// </summary>
    public IReadOnlyList<string>? State { get; init; }

    /// <summary>
    /// String Array. Filter local news by city. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations.
    /// </summary>
    public IReadOnlyList<string>? City { get; init; }

    /// <summary>
    /// String Array. Filter local news by area. Applies only to local news, when this param is passed non-local news will not be returned. If multiple parameters are passed, they will be applied as OR operations.
    /// </summary>
    public IReadOnlyList<string>? Area { get; init; }

    /// <summary>
    /// Integer. Filter by minimum cluster size. Minimum cluster size filter applies to number of unique articles.
    /// </summary>
    [Minimum(1)]
    public int? MinClusterSize { get; init; }

    /// <summary>
    /// Integer. Filter by maximum cluster size. Maximum cluster size filter applies to number of unique articles in the cluster.
    /// </summary>
    public int? MaxClusterSize { get; init; }

    /// <summary>
    /// Boolean. Filter to only include stories that have been assigned names. Defaults to true. Note that stories only receive names after they contain at least 5 unique articles.
    /// </summary>
    public bool? NameExists { get; init; }

    /// <summary>
    /// Filter stories with an aggregate positive sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
    /// </summary>
    public double? PositiveSentimentFrom { get; init; }

    /// <summary>
    /// Filter stories with an aggregate positive sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
    /// </summary>
    public double? PositiveSentimentTo { get; init; }

    /// <summary>
    /// Filter stories with an aggregate neutral sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
    /// </summary>
    public double? NeutralSentimentFrom { get; init; }

    /// <summary>
    /// Filter stories with an aggregate neutral sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
    /// </summary>
    public double? NeutralSentimentTo { get; init; }

    /// <summary>
    /// Filter stories with an aggregate negative sentiment score greater than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
    /// </summary>
    public double? NegativeSentimentFrom { get; init; }

    /// <summary>
    /// Filter stories with an aggregate negative sentiment score less than or equal to the specified value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
    /// </summary>
    public double? NegativeSentimentTo { get; init; }

    /// <summary>
    /// Boolean.
    /// </summary>
    public bool? ShowStoryPageInfo { get; init; }

    /// <summary>
    /// Boolean. Show total number of results. By default set to false, will cap result count at 10000.
    /// </summary>
    public bool? ShowNumResults { get; init; }

    /// <summary>
    /// Boolean. Stories are deduplicated by default. If a story is deduplicated, all future articles are merged into the original story. duplicateOf field contains the original cluster Id. When showDuplicates=true, all stories are shown.
    /// </summary>
    public bool? ShowDuplicates { get; init; }

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

    /// <summary>
    /// Boolean. Preview 5 articles from the cluster.
    /// </summary>
    public bool? ExpandArticles { get; init; }
}
