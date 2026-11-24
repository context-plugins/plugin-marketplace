import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { allEndpointSortBySchema, type AllEndpointSortBy } from "../models/all-endpoint-sort-by.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { summaryBodyInternalSchema, summaryBodySchema, type SummaryBody } from "../models/summary-body.js";
import { summarySearchResultSchema, type SummarySearchResult } from "../models/summary-search-result.js";
import type { Servers } from "../servers.js";

/**
 * These endpoints enable semantic search beyond traditional keyword matching, content
 * summarization, and advanced information retrieval across articles
 */
export class AiAdvancedSearch {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search Summarizer
   *
   * @remarks
   * Produce one concise summary from up to 100 articles matching the supplied filters. Use the
   * prompt and summarization fields to control which insights are highlighted. When method is
   * CLUSTERS, article-only parameters such as articleId, page, sortBy, watchlist, reprintGroupId,
   * exclusion filters, prefixTaxonomy, and highlighting options are ignored.
   *
   * @returns 200 - Success
   *
   * @throws {@link AiAdvancedSearch.SearchSummarizerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PerigonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchSummarizer(
    request: AiAdvancedSearch.SearchSummarizerRequest,
    options?: RequestOptions,
  ): ApiPromise<SummarySearchResult, AiAdvancedSearch.SearchSummarizerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/summarize"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "title", value: request.title, schema: s.optional(s.string()) },
          { name: "desc", value: request.desc, schema: s.optional(s.string()) },
          { name: "content", value: request.content, schema: s.optional(s.string()) },
          { name: "summary", value: request.summary, schema: s.optional(s.string()) },
          { name: "url", value: request.url, schema: s.optional(s.string()) },
          { name: "articleId", value: request.articleId, schema: s.optional(s.array(s.string())) },
          { name: "clusterId", value: request.clusterId, schema: s.optional(s.array(s.string())) },
          {
            name: "sortBy",
            value: request.sortBy,
            schema: s.optional(s.lazy(() => allEndpointSortBySchema)),
          },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "from", value: request.from, schema: s.optional(s.dateTime()) },
          { name: "to", value: request.to, schema: s.optional(s.dateTime()) },
          { name: "addDateFrom", value: request.addDateFrom, schema: s.optional(s.dateTime()) },
          { name: "addDateTo", value: request.addDateTo, schema: s.optional(s.dateTime()) },
          { name: "refreshDateFrom", value: request.refreshDateFrom, schema: s.optional(s.dateTime()) },
          { name: "refreshDateTo", value: request.refreshDateTo, schema: s.optional(s.dateTime()) },
          { name: "medium", value: request.medium, schema: s.optional(s.array(s.string())) },
          { name: "source", value: request.source, schema: s.optional(s.array(s.string())) },
          { name: "sourceGroup", value: request.sourceGroup, schema: s.optional(s.array(s.string())) },
          {
            name: "excludeSourceGroup",
            value: request.excludeSourceGroup,
            schema: s.optional(s.array(s.string())),
          },
          { name: "excludeSource", value: request.excludeSource, schema: s.optional(s.array(s.string())) },
          { name: "watchlist", value: request.watchlist, schema: s.optional(s.array(s.string())) },
          {
            name: "excludeWatchlist",
            value: request.excludeWatchlist,
            schema: s.optional(s.array(s.string())),
          },
          { name: "paywall", value: request.paywall, schema: s.optional(s.boolean()) },
          { name: "byline", value: request.byline, schema: s.optional(s.array(s.string())) },
          { name: "author", value: request.author, schema: s.optional(s.array(s.string())) },
          { name: "excludeAuthor", value: request.excludeAuthor, schema: s.optional(s.array(s.string())) },
          { name: "journalistId", value: request.journalistId, schema: s.optional(s.array(s.string())) },
          {
            name: "excludeJournalistId",
            value: request.excludeJournalistId,
            schema: s.optional(s.array(s.string())),
          },
          { name: "language", value: request.language, schema: s.optional(s.array(s.string())) },
          {
            name: "excludeLanguage",
            value: request.excludeLanguage,
            schema: s.optional(s.array(s.string())),
          },
          { name: "searchTranslation", value: request.searchTranslation, schema: s.optional(s.boolean()) },
          { name: "label", value: request.label, schema: s.optional(s.array(s.string())) },
          { name: "excludeLabel", value: request.excludeLabel, schema: s.optional(s.array(s.string())) },
          { name: "category", value: request.category, schema: s.optional(s.array(s.string())) },
          {
            name: "excludeCategory",
            value: request.excludeCategory,
            schema: s.optional(s.array(s.string())),
          },
          { name: "topic", value: request.topic, schema: s.optional(s.array(s.string())) },
          { name: "excludeTopic", value: request.excludeTopic, schema: s.optional(s.array(s.string())) },
          { name: "linkTo", value: request.linkTo, schema: s.optional(s.string()) },
          { name: "showReprints", value: request.showReprints, schema: s.optional(s.boolean()) },
          { name: "reprintGroupId", value: request.reprintGroupId, schema: s.optional(s.string()) },
          { name: "city", value: request.city, schema: s.optional(s.array(s.string())) },
          { name: "excludeCity", value: request.excludeCity, schema: s.optional(s.array(s.string())) },
          { name: "area", value: request.area, schema: s.optional(s.array(s.string())) },
          { name: "state", value: request.state, schema: s.optional(s.array(s.string())) },
          { name: "excludeState", value: request.excludeState, schema: s.optional(s.array(s.string())) },
          { name: "county", value: request.county, schema: s.optional(s.array(s.string())) },
          { name: "excludeCounty", value: request.excludeCounty, schema: s.optional(s.array(s.string())) },
          {
            name: "locationsCountry",
            value: request.locationsCountry,
            schema: s.optional(s.array(s.string())),
          },
          { name: "country", value: request.country, schema: s.optional(s.array(s.string())) },
          {
            name: "excludeLocationsCountry",
            value: request.excludeLocationsCountry,
            schema: s.optional(s.array(s.string())),
          },
          { name: "location", value: request.location, schema: s.optional(s.array(s.string())) },
          { name: "lat", value: request.lat, schema: s.optional(s.float64()) },
          { name: "lon", value: request.lon, schema: s.optional(s.float64()) },
          { name: "maxDistance", value: request.maxDistance, schema: s.optional(s.float64()) },
          { name: "sourceCity", value: request.sourceCity, schema: s.optional(s.array(s.string())) },
          {
            name: "excludeSourceCity",
            value: request.excludeSourceCity,
            schema: s.optional(s.array(s.string())),
          },
          { name: "sourceCounty", value: request.sourceCounty, schema: s.optional(s.array(s.string())) },
          {
            name: "excludeSourceCounty",
            value: request.excludeSourceCounty,
            schema: s.optional(s.array(s.string())),
          },
          { name: "sourceCountry", value: request.sourceCountry, schema: s.optional(s.array(s.string())) },
          {
            name: "excludeSourceCountry",
            value: request.excludeSourceCountry,
            schema: s.optional(s.array(s.string())),
          },
          { name: "sourceState", value: request.sourceState, schema: s.optional(s.array(s.string())) },
          {
            name: "excludeSourceState",
            value: request.excludeSourceState,
            schema: s.optional(s.array(s.string())),
          },
          { name: "sourceLat", value: request.sourceLat, schema: s.optional(s.float64()) },
          { name: "sourceLon", value: request.sourceLon, schema: s.optional(s.float64()) },
          { name: "sourceMaxDistance", value: request.sourceMaxDistance, schema: s.optional(s.float64()) },
          {
            name: "personWikidataId",
            value: request.personWikidataId,
            schema: s.optional(s.array(s.string())),
          },
          {
            name: "excludePersonWikidataId",
            value: request.excludePersonWikidataId,
            schema: s.optional(s.array(s.string())),
          },
          { name: "personName", value: request.personName, schema: s.optional(s.array(s.string())) },
          {
            name: "excludePersonName",
            value: request.excludePersonName,
            schema: s.optional(s.array(s.string())),
          },
          { name: "companyId", value: request.companyId, schema: s.optional(s.array(s.string())) },
          {
            name: "excludeCompanyId",
            value: request.excludeCompanyId,
            schema: s.optional(s.array(s.string())),
          },
          { name: "companyName", value: request.companyName, schema: s.optional(s.string()) },
          { name: "companyDomain", value: request.companyDomain, schema: s.optional(s.array(s.string())) },
          {
            name: "excludeCompanyDomain",
            value: request.excludeCompanyDomain,
            schema: s.optional(s.array(s.string())),
          },
          { name: "companySymbol", value: request.companySymbol, schema: s.optional(s.array(s.string())) },
          { name: "companyIsin", value: request.companyIsin, schema: s.optional(s.array(s.string())) },
          {
            name: "companySymbolIsin",
            value: request.companySymbolIsin,
            schema: s.optional(s.array(s.string())),
          },
          {
            name: "excludeCompanyIsin",
            value: request.excludeCompanyIsin,
            schema: s.optional(s.array(s.string())),
          },
          {
            name: "excludeCompanySymbolIsin",
            value: request.excludeCompanySymbolIsin,
            schema: s.optional(s.array(s.string())),
          },
          {
            name: "excludeCompanySymbol",
            value: request.excludeCompanySymbol,
            schema: s.optional(s.array(s.string())),
          },
          {
            name: "positiveSentimentFrom",
            value: request.positiveSentimentFrom,
            schema: s.optional(s.float64()),
          },
          {
            name: "positiveSentimentTo",
            value: request.positiveSentimentTo,
            schema: s.optional(s.float64()),
          },
          {
            name: "neutralSentimentFrom",
            value: request.neutralSentimentFrom,
            schema: s.optional(s.float64()),
          },
          { name: "neutralSentimentTo", value: request.neutralSentimentTo, schema: s.optional(s.float64()) },
          {
            name: "negativeSentimentFrom",
            value: request.negativeSentimentFrom,
            schema: s.optional(s.float64()),
          },
          {
            name: "negativeSentimentTo",
            value: request.negativeSentimentTo,
            schema: s.optional(s.float64()),
          },
          { name: "taxonomy", value: request.taxonomy, schema: s.optional(s.array(s.string())) },
          { name: "prefixTaxonomy", value: request.prefixTaxonomy, schema: s.optional(s.string()) },
          { name: "showHighlighting", value: request.showHighlighting, schema: s.optional(s.boolean()) },
          {
            name: "highlightFragmentSize",
            value: request.highlightFragmentSize,
            schema: s.optional(s.int()),
          },
          {
            name: "highlightNumFragments",
            value: request.highlightNumFragments,
            schema: s.optional(s.int()),
          },
          { name: "highlightPreTag", value: request.highlightPreTag, schema: s.optional(s.string()) },
          { name: "highlightPostTag", value: request.highlightPostTag, schema: s.optional(s.string()) },
          { name: "highlightQ", value: request.highlightQ, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: summaryBodyInternalSchema },
      },
      {
        success: { kind: "json", schema: summarySearchResultSchema },
        errorFactory: AiAdvancedSearch.SearchSummarizerError,
      },
      options,
    );
  }
}

export namespace AiAdvancedSearch {
  export type SearchSummarizerRequest = {
    /**
     * String. Primary search query for filtering articles based on their title, description, and
     * content. Supports Boolean operators (AND, OR, NOT), exact phrases with quotes, and wildcards
     * (* and ?) for flexible searching.
     */
    q?: string;
    /**
     * String. Search specifically within article headlines/titles. Supports Boolean operators,
     * exact phrases with quotes, and wildcards for matching title variations.
     */
    title?: string;
    /**
     * String. Search within article description fields. Supports Boolean expressions, exact phrase
     * matching with quotes, and wildcards for flexible pattern matching.
     */
    desc?: string;
    /**
     * String. Search within the full article body content. Supports Boolean logic, exact phrase
     * matching with quotes, and wildcards for comprehensive content searching.
     */
    content?: string;
    /**
     * String. Search within article summary fields. Supports Boolean expressions, exact phrase
     * matching with quotes, and wildcards for flexible pattern matching.
     */
    summary?: string;
    /**
     * String. Search query on the url field. Semantic similar to q parameter. E.g. could be used
     * for querying certain website sections, e.g. source=cnn.com&url=travel.
     */
    url?: string;
    /**
     * String Array. Retrieve specific news articles by their unique article identifiers. Multiple
     * IDs can be provided to return a collection of specific articles.
     */
    articleId?: string[];
    /**
     * String Array. Filter results to only show content within a specific related content cluster.
     * Returns articles grouped together as part of Perigon Stories based on topic relevance.
     */
    clusterId?: string[];
    /**
     * String. Determines the article sorting order. Options include relevance (default),
     * date/pubDate (newest publication date first), reverseDate (oldest publication date first),
     * addDate (newest ingestion date first), reverseAddDate (oldest ingestion date first), and
     * refreshDate (most recently updated in system first, often identical to addDate).
     */
    sortBy?: AllEndpointSortBy;
    /** Integer. The specific page of results to retrieve in the paginated response. Starts at 0. */
    page?: number;
    /**
     * Date. Filter for articles published after this date. Accepts ISO 8601 format (e.g.,
     * 2023-03-01T00:00:00) or yyyy-mm-dd format.
     */
    from?: Date;
    /**
     * Date. Filter for articles published before this date. Accepts ISO 8601 format (e.g.,
     * 2022-02-01T23:59:59) or yyyy-mm-dd format.
     */
    to?: Date;
    /**
     * Date. Filter for articles added to Perigon's system after this date. Accepts ISO 8601 format
     * (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.
     */
    addDateFrom?: Date;
    /**
     * Date. Filter for articles added to Perigon's system before this date. Accepts ISO 8601 format
     * (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
     */
    addDateTo?: Date;
    /**
     * Date. Filter for articles refreshed/updated in Perigon's system after this date. In most
     * cases yields similar results to addDateFrom but can differ for updated content. Accepts ISO
     * 8601 format (e.g., 2022-02-01T00:00:00) or yyyy-mm-dd format.
     */
    refreshDateFrom?: Date;
    /**
     * Date. Filter for articles refreshed/updated in Perigon's system before this date. In most
     * cases yields similar results to addDateTo but can differ for updated content. Accepts ISO
     * 8601 format (e.g., 2022-02-01T23:59:59) or yyyy-mm-dd format.
     */
    refreshDateTo?: Date;
    /**
     * String Array. Filter articles by their primary medium type. Accepts Article for written
     * content or Video for video-based stories. Multiple values create an OR filter.
     */
    medium?: string[];
    /**
     * String Array. Filter articles by specific publisher domains or subdomains. Supports wildcards
     * (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an OR filter.
     */
    source?: string[];
    /**
     * String Array. Filter articles using Perigon's curated publisher bundles (e.g., top100,
     * top25crypto). Multiple values create an OR filter to include articles from any of the
     * specified bundles.
     */
    sourceGroup?: string[];
    /**
     * String Array. Exclude articles from specified Perigon source groups. Multiple values create
     * an AND-exclude filter, removing content from publishers in any of the specified bundles
     * (e.g., top10, top100).
     */
    excludeSourceGroup?: string[];
    /**
     * String Array. Exclude articles from specific publisher domains or subdomains. Supports
     * wildcards (* and ?) for pattern matching (e.g., *.cnn.com). Multiple values create an
     * AND-exclude filter.
     */
    excludeSource?: string[];
    /**
     * String Array. Filter articles using watchlists of people and companies. Multiple values
     * create an OR filter to include articles mentioning any entity from the specified watchlists.
     */
    watchlist?: string[];
    /**
     * String Array. Exclude articles mentioning entities from specified watchlists. Multiple values
     * create an AND-exclude filter, removing content mentioning any entity from the specified
     * watchlists.
     */
    excludeWatchlist?: string[];
    /**
     * Boolean. Filter to show only results where the source has a paywall (true) or does not have a
     * paywall (false).
     */
    paywall?: boolean;
    /**
     * String Array. Filter articles by author bylines. Works as an exact match for each author name
     * provided. Multiple values create an OR filter to find articles by any of the specified
     * authors.
     */
    byline?: string[];
    /**
     * String Array. Filter articles by specific author names. Works as an exact match for each
     * name. Multiple values create an OR filter to find articles by any of the specified authors.
     */
    author?: string[];
    /**
     * String Array. Exclude articles written by specific authors. Any article with an author name
     * matching an entry in this list will be omitted from results. Multiple values create an
     * AND-exclude filter.
     */
    excludeAuthor?: string[];
    /**
     * String Array. Filter by unique journalist identifiers which can be found through the
     * Journalist API or in the matchedAuthors field. Multiple values create an OR filter.
     */
    journalistId?: string[];
    /**
     * String Array. Exclude articles written by specific journalists identified by their unique
     * IDs. Multiple values create an AND-exclude filter.
     */
    excludeJournalistId?: string[];
    /**
     * String Array. Filter articles by their language using ISO-639 two-letter codes (e.g., en, es,
     * fr). Multiple values create an OR filter.
     */
    language?: string[];
    /**
     * String Array. Exclude articles in specific languages using ISO-639 two-letter codes. Multiple
     * values create an AND-exclude filter.
     */
    excludeLanguage?: string[];
    /**
     * Boolean. Expand search to include translated content fields for non-English articles. When
     * true, searches translated title, description, and content fields.
     */
    searchTranslation?: boolean;
    /**
     * String Array. Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact
     * Check, or Press Release. Multiple values create an OR filter.
     */
    label?: string[];
    /**
     * String Array. Exclude articles with specific editorial labels. Multiple values create an
     * AND-exclude filter, removing all content with any of these labels.
     */
    excludeLabel?: string[];
    /**
     * String Array. Filter by categories. Categories are general themes that the article is about.
     * Examples of categories: Tech, Politics, etc. If multiple parameters are passed, they will be
     * applied as OR operations. Use 'none' to search uncategorized articles.
     */
    category?: string[];
    /**
     * String Array. Exclude articles with specific categories. Multiple values create an
     * AND-exclude filter, removing all content with any of these categories.
     */
    excludeCategory?: string[];
    /**
     * String Array. Filter by specific topics such as Markets, Crime, Cryptocurrency, or College
     * Sports. Topics are more granular than categories, and articles can have multiple topics. Use
     * the /topics endpoint for a complete list of available topics. Multiple values create an OR
     * filter.
     */
    topic?: string[];
    /**
     * String Array. Exclude articles with specific topics. Multiple values create an AND-exclude
     * filter, removing all content with any of these topics.
     */
    excludeTopic?: string[];
    /**
     * String. Returns only articles that contain links to the specified URL pattern. Matches
     * against the 'links' field in article responses.
     */
    linkTo?: string;
    /**
     * Boolean. Controls whether to include reprinted content in results. When true (default), shows
     * syndicated articles from wire services like AP or Reuters that appear on multiple sites.
     */
    showReprints?: boolean;
    /**
     * String. Returns all articles in a specific reprint group, including the original article and
     * all its known reprints. Use when you want to see all versions of the same content.
     */
    reprintGroupId?: string;
    /**
     * String Array. Filters articles where a specified city plays a central role in the content,
     * beyond mere mentions, to ensure the results are deeply relevant to the urban area in
     * question. If multiple parameters are passed, they will be applied as OR operations.
     */
    city?: string[];
    /**
     * String Array. A list of cities to exclude from the results. Articles that are associated with
     * any of the specified cities will be filtered out.
     */
    excludeCity?: string[];
    /**
     * String Array. Filters articles where a specified area, such as a neighborhood, borough, or
     * district, plays a central role in the content, beyond mere mentions, to ensure the results
     * are deeply relevant to the area in question. If multiple parameters are passed, they will be
     * applied as OR operations.
     */
    area?: string[];
    /**
     * String Array. Filters articles where a specified state plays a central role in the content,
     * beyond mere mentions, to ensure the results are deeply relevant to the state in question. If
     * multiple parameters are passed, they will be applied as OR operations.
     */
    state?: string[];
    /**
     * String Array. A list of states to exclude. Articles that include, or are associated with, any
     * of the states provided here will be filtered out. This is especially useful if you want to
     * ignore news tied to certain geographical areas (e.g., US states).
     */
    excludeState?: string[];
    /**
     * String Array. A list of counties to include (or specify) in the search results. This field
     * filters the returned articles based on the county associated with the event or news. Only
     * articles tagged with one of these counties will be included.
     */
    county?: string[];
    /**
     * String Array. Excludes articles from specific counties or administrative divisions in the
     * search results. Accepts either a single county name or a list of county names. County names
     * should match the format used in article metadata (e.g., 'Los Angeles County', 'Cook County').
     * This parameter allows for more granular geographic filter
     */
    excludeCounty?: string[];
    /**
     * String Array. Filters articles where a specified country plays a central role in the content,
     * beyond mere mentions, to ensure the results are deeply relevant to the country in question.
     * If multiple parameters are passed, they will be applied as OR operations.
     */
    locationsCountry?: string[];
    /**
     * String Array. Country code to filter by country. If multiple parameters are passed, they will
     * be applied as OR operations.
     */
    country?: string[];
    /**
     * String Array. Excludes articles where a specified country plays a central role in the
     * content, ensuring results are not deeply relevant to the country in question. If multiple
     * parameters are passed, they will be applied as AND operations, excluding articles relevant to
     * any of the specified countries.
     */
    excludeLocationsCountry?: string[];
    /**
     * String Array. Return all articles that have the specified location. Location attributes are
     * delimited by ':' between key and value, and '::' between attributes. Example: 'city:New
     * York::state:NY'.
     */
    location?: string[];
    /** Float. Latitude of the center point to search places */
    lat?: number;
    /** Float. Longitude of the center point to search places */
    lon?: number;
    /** Float. Maximum distance (in km) from starting point to search articles by tagged places */
    maxDistance?: number;
    /** String Array. Find articles published by sources that are located within a given city. */
    sourceCity?: string[];
    /**
     * String Array. Excludes articles published by sources that are located within the specified
     * cities.
     */
    excludeSourceCity?: string[];
    /** String Array. Find articles published by sources that are located within a given county. */
    sourceCounty?: string[];
    /**
     * String Array. Excludes articles published by sources that are located within the specified
     * counties.
     */
    excludeSourceCounty?: string[];
    /**
     * String Array. Find articles published by sources that are located within a given country.
     * Must be 2 character country code (i.e. us, gb, etc).
     */
    sourceCountry?: string[];
    /**
     * String Array. Excludes articles published by sources that are located within the specified
     * countries. Must be 2 character country codes (e.g., us, gb).
     */
    excludeSourceCountry?: string[];
    /** String Array. Find articles published by sources that are located within a given state. */
    sourceState?: string[];
    /**
     * String Array. Excludes articles published by sources that are located within the specified
     * states.
     */
    excludeSourceState?: string[];
    /** Float. Latitude of the center point to search articles created by local publications. */
    sourceLat?: number;
    /** Float. Longitude of the center point to search articles created by local publications. */
    sourceLon?: number;
    /**
     * Float. Maximum distance from starting point to search articles created by local publications.
     */
    sourceMaxDistance?: number;
    /**
     * String Array. Filter articles by Wikidata IDs of mentioned people. Refer to the /people
     * endpoint for a complete list of tracked individuals.
     */
    personWikidataId?: string[];
    /**
     * String Array. Exclude articles mentioning people with specific Wikidata IDs. Creates an
     * AND-exclude filter to remove content about these individuals. Uses precise identifiers to
     * avoid name ambiguity.
     */
    excludePersonWikidataId?: string[];
    /**
     * String Array. Filter articles by exact person name matches. Does not support Boolean or
     * complex logic. For available person entities, consult the /people endpoint.
     */
    personName?: string[];
    /**
     * String Array. Exclude articles mentioning specific people by name. Creates an AND-exclude
     * filter to remove content about these individuals.
     */
    excludePersonName?: string[];
    /**
     * String Array. Filter articles by company identifiers. For a complete list of tracked
     * companies, refer to the /companies endpoint.
     */
    companyId?: string[];
    /**
     * String Array. Exclude articles mentioning companies with specific identifiers. Creates an
     * AND-exclude filter to remove content about these corporate entities.
     */
    excludeCompanyId?: string[];
    /**
     * String. Filter articles by company name mentions. Performs an exact match on company names.
     */
    companyName?: string;
    /**
     * String Array. Filter articles by company domains (e.g., apple.com). For available company
     * entities, consult the /companies endpoint.
     */
    companyDomain?: string[];
    /**
     * String Array. Exclude articles related to companies with specific domains. Creates an
     * AND-exclude filter to remove content about these companies.
     */
    excludeCompanyDomain?: string[];
    /**
     * String Array. Filter articles by company stock symbols. For available company entities and
     * their symbols, consult the /companies endpoint.
     */
    companySymbol?: string[];
    /**
     * String Array. Filter articles by company ISIN codes (International Securities Identification
     * Numbers). For available company entities and their ISINs, consult the /companies endpoint.
     */
    companyIsin?: string[];
    /**
     * String Array. Filter articles by ISIN codes on company ticker listings (symbols.isin).
     * Distinct from companyIsin, which matches the company-level ISIN. For available company
     * entities and their listing ISINs, consult the /companies endpoint.
     */
    companySymbolIsin?: string[];
    /**
     * String Array. Exclude articles related to companies with specific ISIN codes. Creates an
     * AND-exclude filter to remove content about these companies. For available company entities
     * and their ISINs, consult the /companies endpoint.
     */
    excludeCompanyIsin?: string[];
    /**
     * String Array. Exclude articles related to companies whose ticker listings have these ISIN
     * codes (symbols.isin). Distinct from excludeCompanyIsin, which matches the company-level ISIN.
     * For available company entities and their listing ISINs, consult the /companies endpoint.
     */
    excludeCompanySymbolIsin?: string[];
    /**
     * String Array. A list of stock symbols (ticker symbols) that identify companies to be
     * excluded. Articles related to companies using any of these symbols will be omitted, which is
     * useful for targeting or avoiding specific public companies.
     */
    excludeCompanySymbol?: string[];
    /**
     * Float. Filter articles with a positive sentiment score greater than or equal to the specified
     * value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
     */
    positiveSentimentFrom?: number;
    /**
     * Float. Filter articles with a positive sentiment score less than or equal to the specified
     * value. Scores range from 0 to 1, with higher values indicating stronger positive tone.
     */
    positiveSentimentTo?: number;
    /**
     * Float. Filter articles with a neutral sentiment score greater than or equal to the specified
     * value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
     */
    neutralSentimentFrom?: number;
    /**
     * Float. Filter articles with a neutral sentiment score less than or equal to the specified
     * value. Scores range from 0 to 1, with higher values indicating stronger neutral tone.
     */
    neutralSentimentTo?: number;
    /**
     * Float. Filter articles with a negative sentiment score greater than or equal to the specified
     * value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
     */
    negativeSentimentFrom?: number;
    /**
     * Float. Filter articles with a negative sentiment score less than or equal to the specified
     * value. Scores range from 0 to 1, with higher values indicating stronger negative tone.
     */
    negativeSentimentTo?: number;
    /**
     * String Array. Filters by Google Content Categories. This field will accept 1 or more
     * categories, must pass the full name of the category. Example:
     * taxonomy=/Finance/Banking/Other, /Finance/Investing/Funds. [Full
     * list](https://docs.cloud.google.com/natural-language/docs/categories#version_2)
     */
    taxonomy?: string[];
    /**
     * String. Filters by Google Content Categories. This field will filter by the category prefix
     * only. Example: prefixTaxonomy=/Finance
     */
    prefixTaxonomy?: string;
    /** Boolean. When set to true, enables text highlighting in search results. */
    showHighlighting?: boolean;
    /**
     * Integer. Specifies the size in characters of each highlighted text fragment. Defaults to 100
     * if not specified.
     */
    highlightFragmentSize?: number;
    /** Integer. Controls the maximum number of highlighted fragments to return per field. */
    highlightNumFragments?: number;
    /**
     * String. Defines the HTML tag that appears before highlighted text. Defaults to '<em>' if not
     * specified.
     */
    highlightPreTag?: string;
    /**
     * String. Defines the HTML tag that appears after highlighted text. Defaults to '</em>' if not
     * specified.
     */
    highlightPostTag?: string;
    /**
     * String. Specifies a separate query for highlighting, allowing highlights based on terms
     * different from the main search query. Example: main query 'q=climate change' with
     * 'highlightQ=renewable OR solar' will highlight terms 'renewable' and 'solar' in results about
     * climate change.
     */
    highlightQ?: string;
    body: SummaryBody;
  };

  export const searchSummarizerRequestSchema: Schema<SearchSummarizerRequest> = s.lazySchema(() =>
    s.object<SearchSummarizerRequest>({
      q: s.optional(s.string()),
      title: s.optional(s.string()),
      desc: s.optional(s.string()),
      content: s.optional(s.string()),
      summary: s.optional(s.string()),
      url: s.optional(s.string()),
      articleId: s.optional(s.array(s.string())),
      clusterId: s.optional(s.array(s.string())),
      sortBy: s.optional(s.lazy(() => allEndpointSortBySchema)),
      page: s.optional(s.int().check(s.gte(0), s.lte(10000))),
      from: s.optional(s.dateTime()),
      to: s.optional(s.dateTime()),
      addDateFrom: s.optional(s.dateTime()),
      addDateTo: s.optional(s.dateTime()),
      refreshDateFrom: s.optional(s.dateTime()),
      refreshDateTo: s.optional(s.dateTime()),
      medium: s.optional(s.array(s.string())),
      source: s.optional(s.array(s.string())),
      sourceGroup: s.optional(s.array(s.string())),
      excludeSourceGroup: s.optional(s.array(s.string())),
      excludeSource: s.optional(s.array(s.string())),
      watchlist: s.optional(s.array(s.string())),
      excludeWatchlist: s.optional(s.array(s.string())),
      paywall: s.optional(s.boolean()),
      byline: s.optional(s.array(s.string())),
      author: s.optional(s.array(s.string())),
      excludeAuthor: s.optional(s.array(s.string())),
      journalistId: s.optional(s.array(s.string())),
      excludeJournalistId: s.optional(s.array(s.string())),
      language: s.optional(s.array(s.string())),
      excludeLanguage: s.optional(s.array(s.string())),
      searchTranslation: s.optional(s.boolean()),
      label: s.optional(s.array(s.string())),
      excludeLabel: s.optional(s.array(s.string())),
      category: s.optional(s.array(s.string())),
      excludeCategory: s.optional(s.array(s.string())),
      topic: s.optional(s.array(s.string())),
      excludeTopic: s.optional(s.array(s.string())),
      linkTo: s.optional(s.string()),
      showReprints: s.optional(s.boolean()),
      reprintGroupId: s.optional(s.string()),
      city: s.optional(s.array(s.string())),
      excludeCity: s.optional(s.array(s.string())),
      area: s.optional(s.array(s.string())),
      state: s.optional(s.array(s.string())),
      excludeState: s.optional(s.array(s.string())),
      county: s.optional(s.array(s.string())),
      excludeCounty: s.optional(s.array(s.string())),
      locationsCountry: s.optional(s.array(s.string())),
      country: s.optional(s.array(s.string())),
      excludeLocationsCountry: s.optional(s.array(s.string())),
      location: s.optional(s.array(s.string())),
      lat: s.optional(s.float64().check(s.gte(-90), s.lte(90))),
      lon: s.optional(s.float64().check(s.gte(-180), s.lte(180))),
      maxDistance: s.optional(s.float64().check(s.gte(1), s.lte(300))),
      sourceCity: s.optional(s.array(s.string())),
      excludeSourceCity: s.optional(s.array(s.string())),
      sourceCounty: s.optional(s.array(s.string())),
      excludeSourceCounty: s.optional(s.array(s.string())),
      sourceCountry: s.optional(s.array(s.string())),
      excludeSourceCountry: s.optional(s.array(s.string())),
      sourceState: s.optional(s.array(s.string())),
      excludeSourceState: s.optional(s.array(s.string())),
      sourceLat: s.optional(s.float64().check(s.gte(-90), s.lte(90))),
      sourceLon: s.optional(s.float64().check(s.gte(-180), s.lte(180))),
      sourceMaxDistance: s.optional(s.float64().check(s.gte(1), s.lte(300))),
      personWikidataId: s.optional(s.array(s.string())),
      excludePersonWikidataId: s.optional(s.array(s.string())),
      personName: s.optional(s.array(s.string())),
      excludePersonName: s.optional(s.array(s.string())),
      companyId: s.optional(s.array(s.string())),
      excludeCompanyId: s.optional(s.array(s.string())),
      companyName: s.optional(s.string()),
      companyDomain: s.optional(s.array(s.string())),
      excludeCompanyDomain: s.optional(s.array(s.string())),
      companySymbol: s.optional(s.array(s.string())),
      companyIsin: s.optional(s.array(s.string()).check(s.minLength(0), s.maxLength(300))),
      companySymbolIsin: s.optional(s.array(s.string()).check(s.minLength(0), s.maxLength(300))),
      excludeCompanyIsin: s.optional(s.array(s.string()).check(s.minLength(0), s.maxLength(300))),
      excludeCompanySymbolIsin: s.optional(s.array(s.string()).check(s.minLength(0), s.maxLength(300))),
      excludeCompanySymbol: s.optional(s.array(s.string())),
      positiveSentimentFrom: s.optional(s.float64()),
      positiveSentimentTo: s.optional(s.float64()),
      neutralSentimentFrom: s.optional(s.float64()),
      neutralSentimentTo: s.optional(s.float64()),
      negativeSentimentFrom: s.optional(s.float64()),
      negativeSentimentTo: s.optional(s.float64()),
      taxonomy: s.optional(s.array(s.string())),
      prefixTaxonomy: s.optional(s.string()),
      showHighlighting: s.optional(s.boolean()),
      highlightFragmentSize: s.optional(s.int()),
      highlightNumFragments: s.optional(s.int()),
      highlightPreTag: s.optional(s.string()),
      highlightPostTag: s.optional(s.string()),
      highlightQ: s.optional(s.string()),
      body: summaryBodySchema,
    }),
  );

  export class SearchSummarizerError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchSummarizerError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
