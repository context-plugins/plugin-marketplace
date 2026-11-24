using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;
using Perigon.Models.Enums;

namespace Perigon.Models;

/// <summary>
/// Article search filters that determine which content the monitor evaluates.
/// </summary>
public record ComplexAllEndpointQuery
{
    /// <summary>
    /// Search article title, description, and content using keywords or Boolean syntax.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("q")]
    public string? Q { get; init; }

    /// <summary>
    /// Filter for an exact article URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    public string? Url { get; init; }

    /// <summary>
    /// Filter for articles with this image URL.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageUrl")]
    public string? ImageUrl { get; init; }

    /// <summary>
    /// Filter for articles containing this text in the title.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Filter for articles containing this text in the body content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("content")]
    public string? Content { get; init; }

    /// <summary>
    /// Filter for articles containing this text in the description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("desc")]
    public string? Desc { get; init; }

    /// <summary>
    /// Filter by Perigon article IDs. Multiple values are combined with OR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("articleId")]
    public IReadOnlyList<string>? ArticleId { get; init; }

    /// <summary>
    /// Filter by Perigon story cluster IDs. Multiple values are combined with OR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clusterId")]
    public IReadOnlyList<string>? ClusterId { get; init; }

    /// <summary>
    /// Return the original article and known reprints in a reprint group. Must be a 32-character group ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reprintGroupId")]
    public string? ReprintGroupId { get; init; }

    /// <summary>
    /// Filter by journalist IDs. Each ID must be exactly 32 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("journalistId")]
    public IReadOnlyList<string>? JournalistId { get; init; }

    /// <summary>
    /// Filter by medium type, such as Article or Video. Multiple values are combined with OR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("medium")]
    public IReadOnlyList<string>? Medium { get; init; }

    /// <summary>
    /// Filter by Perigon source groups. Multiple values are combined with OR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceGroup")]
    public IReadOnlyList<string>? SourceGroup { get; init; }

    /// <summary>
    /// Exclude articles from Perigon source groups. Multiple values exclude matches from any listed group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeSourceGroup")]
    public IReadOnlyList<string>? ExcludeSourceGroup { get; init; }

    /// <summary>
    /// Filter by publisher domains or subdomains. Supports * and ? wildcards.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public IReadOnlyList<string>? Source { get; init; }

    /// <summary>
    /// Exclude publisher domains or subdomains. Supports * and ? wildcards.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeSource")]
    public IReadOnlyList<string>? ExcludeSource { get; init; }

    /// <summary>
    /// Filter by article country codes. Use two-character codes such as us or gb; multiple values are combined with OR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public IReadOnlyList<string>? Country { get; init; }

    /// <summary>
    /// Exclude articles with the specified country codes. Use two-character codes such as us or gb.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCountry")]
    public IReadOnlyList<string>? ExcludeCountry { get; init; }

    /// <summary>
    /// Filter by ISO 639 two-letter language codes, such as en or es.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("language")]
    public IReadOnlyList<string>? Language { get; init; }

    /// <summary>
    /// Exclude articles in the specified ISO 639 two-letter languages.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeLanguage")]
    public IReadOnlyList<string>? ExcludeLanguage { get; init; }

    /// <summary>
    /// Filter by editorial labels, such as Opinion, Paid-news, or Press Release.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public IReadOnlyList<string>? Label { get; init; }

    /// <summary>
    /// Exclude articles with any of the specified editorial labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeLabel")]
    public IReadOnlyList<string>? ExcludeLabel { get; init; }

    /// <summary>
    /// Filter by exact author bylines. Multiple values are combined with OR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("byline")]
    public IReadOnlyList<string>? Byline { get; init; }

    /// <summary>
    /// Search within article author bylines.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bylineQ")]
    public string? BylineQ { get; init; }

    /// <summary>
    /// Filter for articles containing this text in the summary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public string? Summary { get; init; }

    /// <summary>
    /// Filter for articles mentioning entities from the specified watchlists.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("watchlist")]
    public IReadOnlyList<string>? Watchlist { get; init; }

    /// <summary>
    /// Exclude articles mentioning entities from the specified watchlists.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeWatchlist")]
    public IReadOnlyList<string>? ExcludeWatchlist { get; init; }

    /// <summary>
    /// Exclude articles written by journalists with these IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeJournalistId")]
    public IReadOnlyList<string>? ExcludeJournalistId { get; init; }

    /// <summary>
    /// Exclude articles published by sources in the specified cities.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeSourceCity")]
    public IReadOnlyList<string>? ExcludeSourceCity { get; init; }

    /// <summary>
    /// Exclude articles published by sources in the specified states.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeSourceState")]
    public IReadOnlyList<string>? ExcludeSourceState { get; init; }

    /// <summary>
    /// Latitude of the location used to filter places. Must be between -90 and 90.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lat")]
    public double? Lat { get; init; }

    /// <summary>
    /// Longitude of the location used to filter places. Must be between -180 and 180.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lon")]
    public double? Lon { get; init; }

    /// <summary>
    /// Maximum distance in kilometers from lat and lon. Must be between 1 and 300.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxDistance")]
    public double? MaxDistance { get; init; }

    /// <summary>
    /// Latitude used to find nearby publishers. Must be between -90 and 90.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLat")]
    public double? SourceLat { get; init; }

    /// <summary>
    /// Longitude used to find nearby publishers. Must be between -180 and 180.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLon")]
    public double? SourceLon { get; init; }

    /// <summary>
    /// Maximum distance in kilometers from sourceLat and sourceLon. Must be between 1 and 300.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceMaxDistance")]
    public double? SourceMaxDistance { get; init; }

    /// <summary>
    /// Filter for articles with at least this many words.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minWordCount")]
    public int? MinWordCount { get; init; }

    /// <summary>
    /// Filter for articles with no more than this many words.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxWordCount")]
    public int? MaxWordCount { get; init; }

    /// <summary>
    /// Filter by detected event types. Multiple values are combined with OR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventType")]
    public IReadOnlyList<string>? EventType { get; init; }

    /// <summary>
    /// Filter by extractor names that processed the article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extractorName")]
    public IReadOnlyList<string>? ExtractorName { get; init; }

    /// <summary>
    /// Exclude articles processed by the specified extractor names.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeExtractorName")]
    public IReadOnlyList<string>? ExcludeExtractorName { get; init; }

    /// <summary>
    /// Exclude articles published by sources in the specified countries. Use two-character country codes such as us or gb.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeSourceCountry")]
    public IReadOnlyList<string>? ExcludeSourceCountry { get; init; }

    /// <summary>
    /// Exclude articles published by sources in the specified counties.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeSourceCounty")]
    public IReadOnlyList<string>? ExcludeSourceCounty { get; init; }

    /// <summary>
    /// Filter by exact author names. Multiple values are combined with OR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("author")]
    public IReadOnlyList<string>? Author { get; init; }

    /// <summary>
    /// Exclude articles written by any of the specified authors.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeAuthor")]
    public IReadOnlyList<string>? ExcludeAuthor { get; init; }

    /// <summary>
    /// Filter by article topics. Multiple values are combined with OR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("topic")]
    public IReadOnlyList<string>? Topic { get; init; }

    /// <summary>
    /// Exclude articles assigned any of the specified topics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeTopic")]
    public IReadOnlyList<string>? ExcludeTopic { get; init; }

    /// <summary>
    /// Filter by article categories. Multiple values are combined with OR; use none for uncategorized articles.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public IReadOnlyList<string>? Category { get; init; }

    /// <summary>
    /// Filter by full Google Content Category paths. Multiple values are combined with OR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taxonomy")]
    public IReadOnlyList<string>? Taxonomy { get; init; }

    /// <summary>
    /// Filter by a Google Content Category path prefix, such as /Finance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prefixTaxonomy")]
    public string? PrefixTaxonomy { get; init; }

    /// <summary>
    /// Filter by Perigon company IDs. Multiple values are combined with OR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyId")]
    public IReadOnlyList<string>? CompanyId { get; init; }

    /// <summary>
    /// Filter by an exact company name mention.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyName")]
    public string? CompanyName { get; init; }

    /// <summary>
    /// Filter by company domains, such as apple.com.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyDomain")]
    public IReadOnlyList<string>? CompanyDomain { get; init; }

    /// <summary>
    /// Filter by company stock symbols.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companySymbol")]
    public IReadOnlyList<string>? CompanySymbol { get; init; }

    /// <summary>
    /// Exclude articles mentioning companies with these Perigon IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCompanyId")]
    public IReadOnlyList<string>? ExcludeCompanyId { get; init; }

    /// <summary>
    /// Exclude articles related to companies with these domains.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCompanyDomain")]
    public IReadOnlyList<string>? ExcludeCompanyDomain { get; init; }

    /// <summary>
    /// Exclude articles related to companies with these stock symbols.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCompanySymbol")]
    public IReadOnlyList<string>? ExcludeCompanySymbol { get; init; }

    /// <summary>
    /// Filter by Wikidata IDs of people mentioned in articles.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personWikidataId")]
    public IReadOnlyList<string>? PersonWikidataId { get; init; }

    /// <summary>
    /// Filter by exact person name mentions. Multiple values are combined with OR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personName")]
    public IReadOnlyList<string>? PersonName { get; init; }

    /// <summary>
    /// Exclude articles mentioning people with these Wikidata IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludePersonWikidataId")]
    public IReadOnlyList<string>? ExcludePersonWikidataId { get; init; }

    /// <summary>
    /// Exclude articles mentioning any of the specified people by name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludePersonName")]
    public IReadOnlyList<string>? ExcludePersonName { get; init; }

    /// <summary>
    /// Filter for articles containing links that match this URL pattern.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("linkTo")]
    public string? LinkTo { get; init; }

    /// <summary>
    /// Filter for articles primarily associated with the specified countries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("locationsCountry")]
    public IReadOnlyList<string>? LocationsCountry { get; init; }

    /// <summary>
    /// Filter for articles primarily associated with the specified states.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public IReadOnlyList<string>? State { get; init; }

    /// <summary>
    /// Filter for articles primarily associated with the specified cities.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("city")]
    public IReadOnlyList<string>? City { get; init; }

    /// <summary>
    /// Filter for articles primarily associated with the specified areas, such as neighborhoods or districts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("area")]
    public IReadOnlyList<string>? Area { get; init; }

    /// <summary>
    /// Filter for articles primarily associated with the specified counties.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("county")]
    public IReadOnlyList<string>? County { get; init; }

    /// <summary>
    /// Filter for articles published by sources in these countries. Use two-character country codes such as us or gb.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceCountry")]
    public IReadOnlyList<string>? SourceCountry { get; init; }

    /// <summary>
    /// Filter for articles published by sources in the specified states.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceState")]
    public IReadOnlyList<string>? SourceState { get; init; }

    /// <summary>
    /// Filter for articles published by sources in the specified counties.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceCounty")]
    public IReadOnlyList<string>? SourceCounty { get; init; }

    /// <summary>
    /// Filter for articles published by sources in the specified cities.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceCity")]
    public IReadOnlyList<string>? SourceCity { get; init; }

    /// <summary>
    /// Exclude articles primarily associated with any of the specified countries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeLocationsCountry")]
    public IReadOnlyList<string>? ExcludeLocationsCountry { get; init; }

    /// <summary>
    /// Exclude articles primarily associated with any of the specified states.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeState")]
    public IReadOnlyList<string>? ExcludeState { get; init; }

    /// <summary>
    /// Exclude articles primarily associated with any of the specified counties.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCounty")]
    public IReadOnlyList<string>? ExcludeCounty { get; init; }

    /// <summary>
    /// Exclude articles primarily associated with any of the specified cities.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCity")]
    public IReadOnlyList<string>? ExcludeCity { get; init; }

    /// <summary>
    /// Exclude articles primarily associated with any of the specified areas.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeArea")]
    public IReadOnlyList<string>? ExcludeArea { get; init; }

    /// <summary>
    /// Filter by structured location attributes using key:value pairs separated by ::, such as city:New York::state:NY.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public IReadOnlyList<string>? Location { get; init; }

    /// <summary>
    /// Filter by structured publisher location attributes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceLocation")]
    public IReadOnlyList<string>? SourceLocation { get; init; }

    /// <summary>
    /// Exclude articles assigned any of the specified categories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeCategory")]
    public IReadOnlyList<string>? ExcludeCategory { get; init; }

    /// <summary>
    /// Exclude articles assigned any of the specified Google Content Categories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excludeTaxonomy")]
    public IReadOnlyList<string>? ExcludeTaxonomy { get; init; }

    /// <summary>
    /// Minimum positive sentiment score, inclusive. Accepts values from 0 to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("positiveSentimentFrom")]
    public double? PositiveSentimentFrom { get; init; }

    /// <summary>
    /// Maximum positive sentiment score, inclusive. Accepts values from 0 to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("positiveSentimentTo")]
    public double? PositiveSentimentTo { get; init; }

    /// <summary>
    /// Minimum negative sentiment score, inclusive. Accepts values from 0 to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("negativeSentimentFrom")]
    public double? NegativeSentimentFrom { get; init; }

    /// <summary>
    /// Maximum negative sentiment score, inclusive. Accepts values from 0 to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("negativeSentimentTo")]
    public double? NegativeSentimentTo { get; init; }

    /// <summary>
    /// Minimum neutral sentiment score, inclusive. Accepts values from 0 to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("neutralSentimentFrom")]
    public double? NeutralSentimentFrom { get; init; }

    /// <summary>
    /// Maximum neutral sentiment score, inclusive. Accepts values from 0 to 1.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("neutralSentimentTo")]
    public double? NeutralSentimentTo { get; init; }

    /// <summary>
    /// Search translated title, description, and content for non-English articles. Defaults to false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("searchTranslation")]
    public bool? SearchTranslation { get; init; }

    /// <summary>
    /// Filter by whether the publisher has a paywall.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paywall")]
    public bool? Paywall { get; init; }

    /// <summary>
    /// Filter by geographic content scope. Accepts all, local, or world.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypePerigonMonitorsApi? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qfield")]
    public IReadOnlyList<Qfield>? Qfield { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
