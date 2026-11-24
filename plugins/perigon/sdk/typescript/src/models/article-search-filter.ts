import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { coordinateFilterSchema, type CoordinateFilter } from "./coordinate-filter.js";

/**
 * Complex filter structure for article searches that supports nested logical operations (AND, OR,
 * NOT) and multiple filtering criteria.
 */
export type ArticleSearchFilter = {
  /**
   * Filter by specific article identifiers. Accepts either a single ID or an array of IDs. Returns
   * only articles matching these IDs.
   */
  articleId?: string[] | null;
  /**
   * Filter by specific story identifiers. Accepts either a single ID or an array of IDs. Returns
   * only articles belonging to these stories.
   */
  clusterId?: string[] | null;
  /**
   * Filter articles by specific publisher domains or subdomains. Accepts either a single domain or
   * an array of domains. Multiple values create an OR filter.
   */
  source?: string[] | null;
  /**
   * Exclude articles from specific publisher domains or subdomains. Accepts either a single domain
   * or an array of domains. Multiple values create an AND-exclude filter.
   */
  excludeSource?: string[] | null;
  /**
   * Filter articles using Perigon's curated publisher bundles (e.g., top100, top25tech). Accepts
   * either a single source group or an array. Multiple values create an OR filter to include
   * articles from any of the specified bundles.
   */
  sourceGroup?: string[] | null;
  /**
   * Filter articles by their language using ISO-639 two-letter codes in lowercase (e.g., en, es,
   * fr). Accepts either a single language code or an array. Multiple values create an OR filter.
   */
  language?: string[] | null;
  /**
   * Exclude articles in specific languages using ISO-639 two-letter codes in lowercase. Accepts
   * either a single language code or an array. Multiple values create an AND-exclude filter.
   */
  excludeLanguage?: string[] | null;
  /**
   * Filter articles by editorial labels such as Opinion, Paid-news, Non-news, Fact Check, or Press
   * Release. View our docs for an exhaustive list of labels. Accepts either a single label or an
   * array. Multiple values create an OR filter.
   */
  label?: string[] | null;
  /**
   * Exclude articles with specific editorial labels. Accepts either a single label or an array.
   * Multiple values create an AND-exclude filter, removing all content with any of these labels.
   */
  excludeLabel?: string[] | null;
  /**
   * Filter by Google Content Categories. Must pass the full hierarchical path of the category.
   * Accepts either a single path or an array. Example:
   * taxonomy=/Finance/Banking/Other,/Finance/Investing/Funds. Multiple values create an OR filter.
   */
  taxonomy?: string[] | null;
  /**
   * Filter by broad content categories such as Politics, Tech, Sports, Business, or Finance.
   * Accepts either a single category or an array. Use none to find uncategorized articles. Multiple
   * values create an OR filter.
   */
  category?: string[] | null;
  /**
   * Filter by specific topics such as Markets, Crime, Cryptocurrency, or College Sports. Accepts
   * either a single topic or an array. Topics are more granular than categories, and articles can
   * have multiple topics. Multiple values create an OR filter.
   */
  topic?: string[] | null;
  /**
   * Exclude articles with specific topics. Accepts either a single topic or an array. Multiple
   * values create an AND-exclude filter, removing all content with any of these topics.
   */
  excludeTopic?: string[] | null;
  /**
   * Filter articles by countries they mention using two-letter country codes in lowercase (e.g.,
   * us, gb, jp). Accepts either a single country code or an array. Multiple values create an OR
   * filter. See documentation for supported country codes.
   */
  country?: string[] | null;
  /**
   * Exclude articles from specific countries using two-letter country codes in lowercase. Accepts
   * either a single country code or an array. Multiple values create an AND-exclude filter. See
   * documentation for supported country codes.
   */
  excludeCountry?: string[] | null;
  /**
   * Filter articles where specified countries play a central role in the content, not just
   * mentioned. Uses two-letter country codes in lowercase. Accepts either a single country code or
   * an array. Multiple values create an OR filter. See documentation for supported country codes.
   */
  locationsCountry?: string[] | null;
  /**
   * Exclude articles where specified countries play a central role in the content. Accepts either a
   * single country code or an array. Multiple values create an AND-exclude filter, removing
   * articles focused on any of these countries. See documentation for supported country codes.
   */
  excludeLocationsCountry?: string[] | null;
  /**
   * Filter articles where specified states play a central role in the content. Accepts either a
   * single state code or an array. Multiple values create an OR filter. Uses two-letter state codes
   * in lowercase. See documentation for supported state codes.
   */
  state?: string[] | null;
  /**
   * Exclude articles where specified states play a central role. Accepts either a single state code
   * or an array. Multiple values create an AND-exclude filter, removing articles focused on any of
   * these states. See documentation for supported state codes.
   */
  excludeState?: string[] | null;
  /**
   * Filter articles that mention or are related to specific counties. Accepts either a single
   * county name or an array. Multiple values create an OR filter. County names typically include
   * the word 'County' (e.g., Los Angeles County).
   */
  county?: string[] | null;
  /**
   * Exclude articles that mention or are related to specific counties. Accepts either a single
   * county name or an array. Multiple values create an AND-exclude filter. County names should
   * match the format in article metadata (e.g., Los Angeles County, Cook County).
   */
  excludeCounty?: string[] | null;
  /**
   * Filter articles that mention or are related to specific cities. Accepts either a single city
   * name or an array. Multiple values create an OR filter.
   */
  city?: string[] | null;
  /**
   * Exclude articles that mention or are related to specific cities. Accepts either a single city
   * name or an array. Multiple values create an AND-exclude filter.
   */
  excludeCity?: string[] | null;
  /**
   * Filter for articles from publishers based in specific countries. Accepts either a single
   * country code or an array. Uses two-letter country codes in lowercase (e.g., us, gb). See
   * documentation for supported country codes.
   */
  sourceCountry?: string[] | null;
  /**
   * Filter for articles from publishers based in specific states or regions. Accepts either a
   * single state code or an array. Uses two-letter state codes in lowercase. See documentation for
   * supported state codes.
   */
  sourceState?: string[] | null;
  /**
   * Filter for articles from publishers based in specific counties. Accepts either a single county
   * name or an array. Multiple values create an OR filter.
   */
  sourceCounty?: string[] | null;
  /**
   * Filter for articles from publishers based in specific cities. Accepts either a single city name
   * or an array. Multiple values create an OR filter.
   */
  sourceCity?: string[] | null;
  coordinates?: CoordinateFilter;
  sourceCoordinates?: CoordinateFilter;
  /**
   * Filter articles by company identifiers. Accepts either a single ID or an array. Multiple values
   * create an OR filter. For a complete list of tracked companies and their IDs, refer to the
   * /companies endpoint.
   */
  companyId?: string[] | null;
  /**
   * Exclude articles mentioning companies with specific identifiers. Accepts either a single ID or
   * an array. Multiple values create an AND-exclude filter. For a complete list of tracked
   * companies and their IDs, refer to the /companies endpoint.
   */
  excludeCompanyId?: string[] | null;
  /**
   * Filter articles by company domains (e.g., apple.com). Accepts either a single domain or an
   * array. Multiple values create an OR filter. For a complete list of tracked companies and their
   * domains, refer to the /companies endpoint.
   */
  companyDomain?: string[] | null;
  /**
   * Exclude articles related to companies with specific domains. Accepts either a single domain or
   * an array. Multiple values create an AND-exclude filter. For a complete list of tracked
   * companies and their domains, refer to the /companies endpoint.
   */
  excludeCompanyDomain?: string[] | null;
  /**
   * Filter articles by company stock symbols (e.g., AAPL, MSFT). Accepts either a single symbol or
   * an array. Multiple values create an OR filter. For a complete list of tracked companies and
   * their symbols, refer to the /companies endpoint.
   */
  companySymbol?: string[] | null;
  /**
   * Exclude articles related to companies with specific stock symbols. Accepts either a single
   * symbol or an array. Multiple values create an AND-exclude filter. For a complete list of
   * tracked companies and their symbols, refer to the /companies endpoint.
   */
  excludeCompanySymbol?: string[] | null;
  /**
   * Filter articles by company name mentions. Accepts either a single name or an array. Performs
   * exact matching on company names. Multiple values create an OR filter. For a complete list of
   * tracked companies and their names, refer to the /companies endpoint.
   */
  companyName?: string[] | null;
  /**
   * Filter articles by Wikidata IDs of mentioned people. Accepts either a single ID or an array.
   * Multiple values create an OR filter. For a complete list of tracked individuals and their
   * Wikidata IDs, refer to the /people endpoint.
   */
  personWikidataId?: string[] | null;
  /**
   * Exclude articles mentioning people with specific Wikidata IDs. Accepts either a single ID or an
   * array. Multiple values create an AND-exclude filter. For a complete list of tracked individuals
   * and their Wikidata IDs, refer to the /people endpoint.
   */
  excludePersonWikidataId?: string[] | null;
  /**
   * Filter articles by exact person name matches. Accepts either a single name or an array. Does
   * not support Boolean operators or wildcards. Multiple values create an OR filter. For a complete
   * list of tracked individuals and their names, refer to the /people endpoint.
   */
  personName?: string[] | null;
  /**
   * Exclude articles mentioning specific people by name. Accepts either a single name or an array.
   * Multiple values create an AND-exclude filter. For a complete list of tracked individuals and
   * their names, refer to the /people endpoint.
   */
  excludePersonName?: string[] | null;
  /**
   * Adds additional AND filter objects. These objects must be of the same type as the original
   * filter object and will be combined with the existing filter using the AND logical operator.
   */
  and?: ArticleSearchFilter[] | null;
  /**
   * Adds additional OR filter objects. These objects must be of the same type as the original
   * filter object and will be combined with the existing filter using the OR logical operator.
   */
  or?: ArticleSearchFilter[] | null;
  /** A filter object for logical NOT operations */
  not?: ArticleSearchFilter[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const articleSearchFilterSchema: Schema<ArticleSearchFilter> = s.object<ArticleSearchFilter>(
  {
    articleId: s.optionalNullable(s.array(s.string())),
    clusterId: s.optionalNullable(s.array(s.string())),
    source: s.optionalNullable(s.array(s.string())),
    excludeSource: s.optionalNullable(s.array(s.string())),
    sourceGroup: s.optionalNullable(s.array(s.string())),
    language: s.optionalNullable(s.array(s.string())),
    excludeLanguage: s.optionalNullable(s.array(s.string())),
    label: s.optionalNullable(s.array(s.string())),
    excludeLabel: s.optionalNullable(s.array(s.string())),
    taxonomy: s.optionalNullable(s.array(s.string())),
    category: s.optionalNullable(s.array(s.string())),
    topic: s.optionalNullable(s.array(s.string())),
    excludeTopic: s.optionalNullable(s.array(s.string())),
    country: s.optionalNullable(s.array(s.string())),
    excludeCountry: s.optionalNullable(s.array(s.string())),
    locationsCountry: s.optionalNullable(s.array(s.string())),
    excludeLocationsCountry: s.optionalNullable(s.array(s.string())),
    state: s.optionalNullable(s.array(s.string())),
    excludeState: s.optionalNullable(s.array(s.string())),
    county: s.optionalNullable(s.array(s.string())),
    excludeCounty: s.optionalNullable(s.array(s.string())),
    city: s.optionalNullable(s.array(s.string())),
    excludeCity: s.optionalNullable(s.array(s.string())),
    sourceCountry: s.optionalNullable(s.array(s.string())),
    sourceState: s.optionalNullable(s.array(s.string())),
    sourceCounty: s.optionalNullable(s.array(s.string())),
    sourceCity: s.optionalNullable(s.array(s.string())),
    coordinates: s.optional(s.lazy(() => coordinateFilterSchema)),
    sourceCoordinates: s.optional(s.lazy(() => coordinateFilterSchema)),
    companyId: s.optionalNullable(s.array(s.string())),
    excludeCompanyId: s.optionalNullable(s.array(s.string())),
    companyDomain: s.optionalNullable(s.array(s.string())),
    excludeCompanyDomain: s.optionalNullable(s.array(s.string())),
    companySymbol: s.optionalNullable(s.array(s.string())),
    excludeCompanySymbol: s.optionalNullable(s.array(s.string())),
    companyName: s.optionalNullable(s.array(s.string())),
    personWikidataId: s.optionalNullable(s.array(s.string())),
    excludePersonWikidataId: s.optionalNullable(s.array(s.string())),
    personName: s.optionalNullable(s.array(s.string())),
    excludePersonName: s.optionalNullable(s.array(s.string())),
    and: s.optionalNullable(s.array(s.lazy(() => articleSearchFilterSchema))),
    or: s.optionalNullable(s.array(s.lazy(() => articleSearchFilterSchema))),
    not: s.optionalNullable(s.array(s.lazy(() => articleSearchFilterSchema))),
    _keysMap: {
      and: "AND",
      or: "OR",
      not: "NOT",
    },
  },
  { additionalProperties: s.json() },
);
