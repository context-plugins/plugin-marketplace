using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Complex filter structure for article searches that supports nested logical operations (AND, OR, NOT) and multiple filtering criteria.
/// </summary>
public record ArticleSearchFilter
{
    /// <summary>
    /// Filter by specific article identifiers. Accepts either a single ID or an array of IDs. Returns only articles matching these IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("articleId")]
    public IReadOnlyList<string>? ArticleId { get; init; }

    /// <summary>
    /// Filter by specific story identifiers. Accepts either a single ID or an array of IDs. Returns only articles belonging to these stories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterId")]
    public IReadOnlyList<string>? ClusterId { get; init; }

    /// <summary>
    /// Filter articles by specific publisher domains or subdomains. Accepts either a single domain or an array of domains. Multiple values create an OR filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public IReadOnlyList<string>? Source { get; init; }

    /// <summary>
    /// Exclude articles from specific publisher domains or subdomains. Accepts either a single domain or an array of domains. Multiple values create an AND-exclude filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeSource")]
    public IReadOnlyList<string>? ExcludeSource { get; init; }

    /// <summary>
    /// Filter articles using Perigon's curated publisher bundles (e.g., top100, top25tech). Accepts either a single source group or an array. Multiple values create an OR filter to include articles from any of the specified bundles.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceGroup")]
    public IReadOnlyList<string>? SourceGroup { get; init; }

    /// <summary>
    /// Filter articles by their language using ISO-639 two-letter codes in lowercase (e.g., en, es, fr). Accepts either a single language code or an array. Multiple values create an OR filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    public IReadOnlyList<string>? Language { get; init; }

    /// <summary>
    /// Exclude articles in specific languages using ISO-639 two-letter codes in lowercase. Accepts either a single language code or an array. Multiple values create an AND-exclude filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeLanguage")]
    public IReadOnlyList<string>? ExcludeLanguage { get; init; }

    /// <summary>
    /// Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact Check, or Press Release. View our docs for an exhaustive list of labels. Accepts either a single label or an array. Multiple values create an OR filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public IReadOnlyList<string>? Label { get; init; }

    /// <summary>
    /// Exclude articles with specific editorial labels. Accepts either a single label or an array. Multiple values create an AND-exclude filter, removing all content with any of these labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeLabel")]
    public IReadOnlyList<string>? ExcludeLabel { get; init; }

    /// <summary>
    /// Filter by Google Content Categories. Must pass the full hierarchical path of the category. Accepts either a single path or an array. Example: taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Multiple values create an OR filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxonomy")]
    public IReadOnlyList<string>? Taxonomy { get; init; }

    /// <summary>
    /// Filter by broad content categories such as Politics, Tech, Sports, Business, or Finance. Accepts either a single category or an array. Use none to find uncategorized articles. Multiple values create an OR filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public IReadOnlyList<string>? Category { get; init; }

    /// <summary>
    /// Filter by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Accepts either a single topic or an array. Topics are more granular than categories, and articles can have multiple topics. Multiple values create an OR filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topic")]
    public IReadOnlyList<string>? Topic { get; init; }

    /// <summary>
    /// Exclude articles with specific topics. Accepts either a single topic or an array. Multiple values create an AND-exclude filter, removing all content with any of these topics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeTopic")]
    public IReadOnlyList<string>? ExcludeTopic { get; init; }

    /// <summary>
    /// Filter articles by countries they mention using two-letter country codes in lowercase (e.g., us, gb, jp). Accepts either a single country code or an array. Multiple values create an OR filter. See documentation for supported country codes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public IReadOnlyList<string>? Country { get; init; }

    /// <summary>
    /// Exclude articles from specific countries using two-letter country codes in lowercase. Accepts either a single country code or an array. Multiple values create an AND-exclude filter. See documentation for supported country codes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCountry")]
    public IReadOnlyList<string>? ExcludeCountry { get; init; }

    /// <summary>
    /// Filter articles where specified countries play a central role in the content, not just mentioned. Uses two-letter country codes in lowercase. Accepts either a single country code or an array. Multiple values create an OR filter. See documentation for supported country codes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationsCountry")]
    public IReadOnlyList<string>? LocationsCountry { get; init; }

    /// <summary>
    /// Exclude articles where specified countries play a central role in the content. Accepts either a single country code or an array. Multiple values create an AND-exclude filter, removing articles focused on any of these countries. See documentation for supported country codes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeLocationsCountry")]
    public IReadOnlyList<string>? ExcludeLocationsCountry { get; init; }

    /// <summary>
    /// Filter articles where specified states play a central role in the content. Accepts either a single state code or an array. Multiple values create an OR filter. Uses two-letter state codes in lowercase. See documentation for supported state codes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public IReadOnlyList<string>? State { get; init; }

    /// <summary>
    /// Exclude articles where specified states play a central role. Accepts either a single state code or an array. Multiple values create an AND-exclude filter, removing articles focused on any of these states. See documentation for supported state codes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeState")]
    public IReadOnlyList<string>? ExcludeState { get; init; }

    /// <summary>
    /// Filter articles that mention or are related to specific counties. Accepts either a single county name or an array. Multiple values create an OR filter. County names typically include the word 'County' (e.g., Los Angeles County).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("county")]
    public IReadOnlyList<string>? County { get; init; }

    /// <summary>
    /// Exclude articles that mention or are related to specific counties. Accepts either a single county name or an array. Multiple values create an AND-exclude filter. County names should match the format in article metadata (e.g., Los Angeles County, Cook County).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCounty")]
    public IReadOnlyList<string>? ExcludeCounty { get; init; }

    /// <summary>
    /// Filter articles that mention or are related to specific cities. Accepts either a single city name or an array. Multiple values create an OR filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    public IReadOnlyList<string>? City { get; init; }

    /// <summary>
    /// Exclude articles that mention or are related to specific cities. Accepts either a single city name or an array. Multiple values create an AND-exclude filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCity")]
    public IReadOnlyList<string>? ExcludeCity { get; init; }

    /// <summary>
    /// Filter for articles from publishers based in specific countries. Accepts either a single country code or an array. Uses two-letter country codes in lowercase (e.g., us, gb). See documentation for supported country codes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceCountry")]
    public IReadOnlyList<string>? SourceCountry { get; init; }

    /// <summary>
    /// Filter for articles from publishers based in specific states or regions. Accepts either a single state code or an array. Uses two-letter state codes in lowercase. See documentation for supported state codes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceState")]
    public IReadOnlyList<string>? SourceState { get; init; }

    /// <summary>
    /// Filter for articles from publishers based in specific counties. Accepts either a single county name or an array. Multiple values create an OR filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceCounty")]
    public IReadOnlyList<string>? SourceCounty { get; init; }

    /// <summary>
    /// Filter for articles from publishers based in specific cities. Accepts either a single city name or an array. Multiple values create an OR filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceCity")]
    public IReadOnlyList<string>? SourceCity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coordinates")]
    public CoordinateFilter? Coordinates { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceCoordinates")]
    public CoordinateFilter? SourceCoordinates { get; init; }

    /// <summary>
    /// Filter articles by company identifiers. Accepts either a single ID or an array. Multiple values create an OR filter. For a complete list of tracked companies and their IDs, refer to the /companies endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyId")]
    public IReadOnlyList<string>? CompanyId { get; init; }

    /// <summary>
    /// Exclude articles mentioning companies with specific identifiers. Accepts either a single ID or an array. Multiple values create an AND-exclude filter. For a complete list of tracked companies and their IDs, refer to the /companies endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCompanyId")]
    public IReadOnlyList<string>? ExcludeCompanyId { get; init; }

    /// <summary>
    /// Filter articles by company domains (e.g., apple.com). Accepts either a single domain or an array. Multiple values create an OR filter. For a complete list of tracked companies and their domains, refer to the /companies endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyDomain")]
    public IReadOnlyList<string>? CompanyDomain { get; init; }

    /// <summary>
    /// Exclude articles related to companies with specific domains. Accepts either a single domain or an array. Multiple values create an AND-exclude filter. For a complete list of tracked companies and their domains, refer to the /companies endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCompanyDomain")]
    public IReadOnlyList<string>? ExcludeCompanyDomain { get; init; }

    /// <summary>
    /// Filter articles by company stock symbols (e.g., AAPL, MSFT). Accepts either a single symbol or an array. Multiple values create an OR filter. For a complete list of tracked companies and their symbols, refer to the /companies endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companySymbol")]
    public IReadOnlyList<string>? CompanySymbol { get; init; }

    /// <summary>
    /// Exclude articles related to companies with specific stock symbols. Accepts either a single symbol or an array. Multiple values create an AND-exclude filter. For a complete list of tracked companies and their symbols, refer to the /companies endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCompanySymbol")]
    public IReadOnlyList<string>? ExcludeCompanySymbol { get; init; }

    /// <summary>
    /// Filter articles by company name mentions. Accepts either a single name or an array. Performs exact matching on company names. Multiple values create an OR filter. For a complete list of tracked companies and their names, refer to the /companies endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyName")]
    public IReadOnlyList<string>? CompanyName { get; init; }

    /// <summary>
    /// Filter articles by Wikidata IDs of mentioned people. Accepts either a single ID or an array. Multiple values create an OR filter. For a complete list of tracked individuals and their Wikidata IDs, refer to the /people endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personWikidataId")]
    public IReadOnlyList<string>? PersonWikidataId { get; init; }

    /// <summary>
    /// Exclude articles mentioning people with specific Wikidata IDs. Accepts either a single ID or an array. Multiple values create an AND-exclude filter. For a complete list of tracked individuals and their Wikidata IDs, refer to the /people endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludePersonWikidataId")]
    public IReadOnlyList<string>? ExcludePersonWikidataId { get; init; }

    /// <summary>
    /// Filter articles by exact person name matches. Accepts either a single name or an array. Does not support Boolean operators or wildcards. Multiple values create an OR filter. For a complete list of tracked individuals and their names, refer to the /people endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personName")]
    public IReadOnlyList<string>? PersonName { get; init; }

    /// <summary>
    /// Exclude articles mentioning specific people by name. Accepts either a single name or an array. Multiple values create an AND-exclude filter. For a complete list of tracked individuals and their names, refer to the /people endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludePersonName")]
    public IReadOnlyList<string>? ExcludePersonName { get; init; }

    /// <summary>
    /// Adds additional AND filter objects. These objects must be of the same type as the original filter object and will be combined with the existing filter using the AND logical operator.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AND")]
    public IReadOnlyList<ArticleSearchFilter>? And { get; init; }

    /// <summary>
    /// Adds additional OR filter objects. These objects must be of the same type as the original filter object and will be combined with the existing filter using the OR logical operator.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OR")]
    public IReadOnlyList<ArticleSearchFilter>? Or { get; init; }

    /// <summary>
    /// A filter object for logical NOT operations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NOT")]
    public IReadOnlyList<ArticleSearchFilter>? Not { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
