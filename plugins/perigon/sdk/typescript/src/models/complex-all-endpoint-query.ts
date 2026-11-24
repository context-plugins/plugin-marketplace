import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { qfieldSchema, type Qfield } from "./qfield.js";
import { typePerigonMonitorsApiSchema, type TypePerigonMonitorsApi } from "./type-perigon-monitors-api.js";

/** Article search filters that determine which content the monitor evaluates. */
export type ComplexAllEndpointQuery = {
  /** Search article title, description, and content using keywords or Boolean syntax. */
  q?: string | null;
  /** Filter for an exact article URL. */
  url?: string | null;
  /** Filter for articles with this image URL. */
  imageUrl?: string | null;
  /** Filter for articles containing this text in the title. */
  title?: string | null;
  /** Filter for articles containing this text in the body content. */
  content?: string | null;
  /** Filter for articles containing this text in the description. */
  desc?: string | null;
  /** Filter by Perigon article IDs. Multiple values are combined with OR. */
  articleId?: string[] | null;
  /** Filter by Perigon story cluster IDs. Multiple values are combined with OR. */
  clusterId?: string[] | null;
  /**
   * Return the original article and known reprints in a reprint group. Must be a 32-character group
   * ID.
   */
  reprintGroupId?: string | null;
  /** Filter by journalist IDs. Each ID must be exactly 32 characters. */
  journalistId?: string[] | null;
  /** Filter by medium type, such as Article or Video. Multiple values are combined with OR. */
  medium?: string[] | null;
  /** Filter by Perigon source groups. Multiple values are combined with OR. */
  sourceGroup?: string[] | null;
  /**
   * Exclude articles from Perigon source groups. Multiple values exclude matches from any listed
   * group.
   */
  excludeSourceGroup?: string[] | null;
  /** Filter by publisher domains or subdomains. Supports * and ? wildcards. */
  source?: string[] | null;
  /** Exclude publisher domains or subdomains. Supports * and ? wildcards. */
  excludeSource?: string[] | null;
  /**
   * Filter by article country codes. Use two-character codes such as us or gb; multiple values are
   * combined with OR.
   */
  country?: string[] | null;
  /**
   * Exclude articles with the specified country codes. Use two-character codes such as us or gb.
   */
  excludeCountry?: string[] | null;
  /** Filter by ISO 639 two-letter language codes, such as en or es. */
  language?: string[] | null;
  /** Exclude articles in the specified ISO 639 two-letter languages. */
  excludeLanguage?: string[] | null;
  /** Filter by editorial labels, such as Opinion, Paid-news, or Press Release. */
  label?: string[] | null;
  /** Exclude articles with any of the specified editorial labels. */
  excludeLabel?: string[] | null;
  /** Filter by exact author bylines. Multiple values are combined with OR. */
  byline?: string[] | null;
  /** Search within article author bylines. */
  bylineQ?: string | null;
  /** Filter for articles containing this text in the summary. */
  summary?: string | null;
  /** Filter for articles mentioning entities from the specified watchlists. */
  watchlist?: string[] | null;
  /** Exclude articles mentioning entities from the specified watchlists. */
  excludeWatchlist?: string[] | null;
  /** Exclude articles written by journalists with these IDs. */
  excludeJournalistId?: string[] | null;
  /** Exclude articles published by sources in the specified cities. */
  excludeSourceCity?: string[] | null;
  /** Exclude articles published by sources in the specified states. */
  excludeSourceState?: string[] | null;
  /** Latitude of the location used to filter places. Must be between -90 and 90. */
  lat?: number | null;
  /** Longitude of the location used to filter places. Must be between -180 and 180. */
  lon?: number | null;
  /** Maximum distance in kilometers from lat and lon. Must be between 1 and 300. */
  maxDistance?: number | null;
  /** Latitude used to find nearby publishers. Must be between -90 and 90. */
  sourceLat?: number | null;
  /** Longitude used to find nearby publishers. Must be between -180 and 180. */
  sourceLon?: number | null;
  /** Maximum distance in kilometers from sourceLat and sourceLon. Must be between 1 and 300. */
  sourceMaxDistance?: number | null;
  /** Filter for articles with at least this many words. */
  minWordCount?: number | null;
  /** Filter for articles with no more than this many words. */
  maxWordCount?: number | null;
  /** Filter by detected event types. Multiple values are combined with OR. */
  eventType?: string[] | null;
  /** Filter by extractor names that processed the article. */
  extractorName?: string[] | null;
  /** Exclude articles processed by the specified extractor names. */
  excludeExtractorName?: string[] | null;
  /**
   * Exclude articles published by sources in the specified countries. Use two-character country
   * codes such as us or gb.
   */
  excludeSourceCountry?: string[] | null;
  /** Exclude articles published by sources in the specified counties. */
  excludeSourceCounty?: string[] | null;
  /** Filter by exact author names. Multiple values are combined with OR. */
  author?: string[] | null;
  /** Exclude articles written by any of the specified authors. */
  excludeAuthor?: string[] | null;
  /** Filter by article topics. Multiple values are combined with OR. */
  topic?: string[] | null;
  /** Exclude articles assigned any of the specified topics. */
  excludeTopic?: string[] | null;
  /**
   * Filter by article categories. Multiple values are combined with OR; use none for uncategorized
   * articles.
   */
  category?: string[] | null;
  /** Filter by full Google Content Category paths. Multiple values are combined with OR. */
  taxonomy?: string[] | null;
  /** Filter by a Google Content Category path prefix, such as /Finance. */
  prefixTaxonomy?: string | null;
  /** Filter by Perigon company IDs. Multiple values are combined with OR. */
  companyId?: string[] | null;
  /** Filter by an exact company name mention. */
  companyName?: string | null;
  /** Filter by company domains, such as apple.com. */
  companyDomain?: string[] | null;
  /** Filter by company stock symbols. */
  companySymbol?: string[] | null;
  /** Exclude articles mentioning companies with these Perigon IDs. */
  excludeCompanyId?: string[] | null;
  /** Exclude articles related to companies with these domains. */
  excludeCompanyDomain?: string[] | null;
  /** Exclude articles related to companies with these stock symbols. */
  excludeCompanySymbol?: string[] | null;
  /** Filter by Wikidata IDs of people mentioned in articles. */
  personWikidataId?: string[] | null;
  /** Filter by exact person name mentions. Multiple values are combined with OR. */
  personName?: string[] | null;
  /** Exclude articles mentioning people with these Wikidata IDs. */
  excludePersonWikidataId?: string[] | null;
  /** Exclude articles mentioning any of the specified people by name. */
  excludePersonName?: string[] | null;
  /** Filter for articles containing links that match this URL pattern. */
  linkTo?: string | null;
  /** Filter for articles primarily associated with the specified countries. */
  locationsCountry?: string[] | null;
  /** Filter for articles primarily associated with the specified states. */
  state?: string[] | null;
  /** Filter for articles primarily associated with the specified cities. */
  city?: string[] | null;
  /**
   * Filter for articles primarily associated with the specified areas, such as neighborhoods or
   * districts.
   */
  area?: string[] | null;
  /** Filter for articles primarily associated with the specified counties. */
  county?: string[] | null;
  /**
   * Filter for articles published by sources in these countries. Use two-character country codes
   * such as us or gb.
   */
  sourceCountry?: string[] | null;
  /** Filter for articles published by sources in the specified states. */
  sourceState?: string[] | null;
  /** Filter for articles published by sources in the specified counties. */
  sourceCounty?: string[] | null;
  /** Filter for articles published by sources in the specified cities. */
  sourceCity?: string[] | null;
  /** Exclude articles primarily associated with any of the specified countries. */
  excludeLocationsCountry?: string[] | null;
  /** Exclude articles primarily associated with any of the specified states. */
  excludeState?: string[] | null;
  /** Exclude articles primarily associated with any of the specified counties. */
  excludeCounty?: string[] | null;
  /** Exclude articles primarily associated with any of the specified cities. */
  excludeCity?: string[] | null;
  /** Exclude articles primarily associated with any of the specified areas. */
  excludeArea?: string[] | null;
  /**
   * Filter by structured location attributes using key:value pairs separated by ::, such as
   * city:New York::state:NY.
   */
  location?: string[] | null;
  /** Filter by structured publisher location attributes. */
  sourceLocation?: string[] | null;
  /** Exclude articles assigned any of the specified categories. */
  excludeCategory?: string[] | null;
  /** Exclude articles assigned any of the specified Google Content Categories. */
  excludeTaxonomy?: string[] | null;
  /** Minimum positive sentiment score, inclusive. Accepts values from 0 to 1. */
  positiveSentimentFrom?: number | null;
  /** Maximum positive sentiment score, inclusive. Accepts values from 0 to 1. */
  positiveSentimentTo?: number | null;
  /** Minimum negative sentiment score, inclusive. Accepts values from 0 to 1. */
  negativeSentimentFrom?: number | null;
  /** Maximum negative sentiment score, inclusive. Accepts values from 0 to 1. */
  negativeSentimentTo?: number | null;
  /** Minimum neutral sentiment score, inclusive. Accepts values from 0 to 1. */
  neutralSentimentFrom?: number | null;
  /** Maximum neutral sentiment score, inclusive. Accepts values from 0 to 1. */
  neutralSentimentTo?: number | null;
  /**
   * Search translated title, description, and content for non-English articles. Defaults to false.
   */
  searchTranslation?: boolean | null;
  /** Filter by whether the publisher has a paywall. */
  paywall?: boolean | null;
  /** Filter by geographic content scope. Accepts all, local, or world. */
  type?: TypePerigonMonitorsApi | null;
  qfield?: Qfield[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const complexAllEndpointQuerySchema: Schema<ComplexAllEndpointQuery> =
  s.object<ComplexAllEndpointQuery>(
    {
      q: s.optionalNullable(s.string()),
      url: s.optionalNullable(s.string()),
      imageUrl: s.optionalNullable(s.string()),
      title: s.optionalNullable(s.string()),
      content: s.optionalNullable(s.string()),
      desc: s.optionalNullable(s.string()),
      articleId: s.optionalNullable(s.array(s.string())),
      clusterId: s.optionalNullable(s.array(s.string())),
      reprintGroupId: s.optionalNullable(s.string()),
      journalistId: s.optionalNullable(s.array(s.string())),
      medium: s.optionalNullable(s.array(s.string())),
      sourceGroup: s.optionalNullable(s.array(s.string())),
      excludeSourceGroup: s.optionalNullable(s.array(s.string())),
      source: s.optionalNullable(s.array(s.string())),
      excludeSource: s.optionalNullable(s.array(s.string())),
      country: s.optionalNullable(s.array(s.string())),
      excludeCountry: s.optionalNullable(s.array(s.string())),
      language: s.optionalNullable(s.array(s.string())),
      excludeLanguage: s.optionalNullable(s.array(s.string())),
      label: s.optionalNullable(s.array(s.string())),
      excludeLabel: s.optionalNullable(s.array(s.string())),
      byline: s.optionalNullable(s.array(s.string())),
      bylineQ: s.optionalNullable(s.string()),
      summary: s.optionalNullable(s.string()),
      watchlist: s.optionalNullable(s.array(s.string())),
      excludeWatchlist: s.optionalNullable(s.array(s.string())),
      excludeJournalistId: s.optionalNullable(s.array(s.string())),
      excludeSourceCity: s.optionalNullable(s.array(s.string())),
      excludeSourceState: s.optionalNullable(s.array(s.string())),
      lat: s.optionalNullable(s.float64()),
      lon: s.optionalNullable(s.float64()),
      maxDistance: s.optionalNullable(s.float64()),
      sourceLat: s.optionalNullable(s.float64()),
      sourceLon: s.optionalNullable(s.float64()),
      sourceMaxDistance: s.optionalNullable(s.float64()),
      minWordCount: s.optionalNullable(s.int()),
      maxWordCount: s.optionalNullable(s.int()),
      eventType: s.optionalNullable(s.array(s.string())),
      extractorName: s.optionalNullable(s.array(s.string())),
      excludeExtractorName: s.optionalNullable(s.array(s.string())),
      excludeSourceCountry: s.optionalNullable(s.array(s.string())),
      excludeSourceCounty: s.optionalNullable(s.array(s.string())),
      author: s.optionalNullable(s.array(s.string())),
      excludeAuthor: s.optionalNullable(s.array(s.string())),
      topic: s.optionalNullable(s.array(s.string())),
      excludeTopic: s.optionalNullable(s.array(s.string())),
      category: s.optionalNullable(s.array(s.string())),
      taxonomy: s.optionalNullable(s.array(s.string())),
      prefixTaxonomy: s.optionalNullable(s.string()),
      companyId: s.optionalNullable(s.array(s.string())),
      companyName: s.optionalNullable(s.string()),
      companyDomain: s.optionalNullable(s.array(s.string())),
      companySymbol: s.optionalNullable(s.array(s.string())),
      excludeCompanyId: s.optionalNullable(s.array(s.string())),
      excludeCompanyDomain: s.optionalNullable(s.array(s.string())),
      excludeCompanySymbol: s.optionalNullable(s.array(s.string())),
      personWikidataId: s.optionalNullable(s.array(s.string())),
      personName: s.optionalNullable(s.array(s.string())),
      excludePersonWikidataId: s.optionalNullable(s.array(s.string())),
      excludePersonName: s.optionalNullable(s.array(s.string())),
      linkTo: s.optionalNullable(s.string()),
      locationsCountry: s.optionalNullable(s.array(s.string())),
      state: s.optionalNullable(s.array(s.string())),
      city: s.optionalNullable(s.array(s.string())),
      area: s.optionalNullable(s.array(s.string())),
      county: s.optionalNullable(s.array(s.string())),
      sourceCountry: s.optionalNullable(s.array(s.string())),
      sourceState: s.optionalNullable(s.array(s.string())),
      sourceCounty: s.optionalNullable(s.array(s.string())),
      sourceCity: s.optionalNullable(s.array(s.string())),
      excludeLocationsCountry: s.optionalNullable(s.array(s.string())),
      excludeState: s.optionalNullable(s.array(s.string())),
      excludeCounty: s.optionalNullable(s.array(s.string())),
      excludeCity: s.optionalNullable(s.array(s.string())),
      excludeArea: s.optionalNullable(s.array(s.string())),
      location: s.optionalNullable(s.array(s.string())),
      sourceLocation: s.optionalNullable(s.array(s.string())),
      excludeCategory: s.optionalNullable(s.array(s.string())),
      excludeTaxonomy: s.optionalNullable(s.array(s.string())),
      positiveSentimentFrom: s.optionalNullable(s.float64()),
      positiveSentimentTo: s.optionalNullable(s.float64()),
      negativeSentimentFrom: s.optionalNullable(s.float64()),
      negativeSentimentTo: s.optionalNullable(s.float64()),
      neutralSentimentFrom: s.optionalNullable(s.float64()),
      neutralSentimentTo: s.optionalNullable(s.float64()),
      searchTranslation: s.optionalNullable(s.boolean()),
      paywall: s.optionalNullable(s.boolean()),
      type: s.optionalNullable(s.lazy(() => typePerigonMonitorsApiSchema)),
      qfield: s.optionalNullable(s.array(s.lazy(() => qfieldSchema))),
    },
    { additionalProperties: s.json() },
  );
