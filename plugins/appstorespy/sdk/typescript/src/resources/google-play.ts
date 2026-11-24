import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiResponseListModelsResponsesResponsePlayRankingItemSchema,
  type ApiResponseListModelsResponsesResponsePlayRankingItem,
} from "../models/api-response-list-models-responses-response-play-ranking-item.js";
import { AppCountries, appCountriesSchema } from "../models/app-countries.js";
import { AppLanguages, appLanguagesSchema } from "../models/app-languages.js";
import { appsDailyInstallsSchema, type AppsDailyInstalls } from "../models/apps-daily-installs.js";
import { appsEstimatesSchema, type AppsEstimates } from "../models/apps-estimates.js";
import { CacheTime, cacheTimeSchema } from "../models/cache-time.js";
import { collectionSchema, type Collection } from "../models/collection.js";
import { devAppsEstimatesSchema, type DevAppsEstimates } from "../models/dev-apps-estimates.js";
import {
  devCountryAggregatesResponseSchema,
  type DevCountryAggregatesResponse,
} from "../models/dev-country-aggregates-response.js";
import { eventSchema, type Event } from "../models/event.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  playAggregatesCountries401Error1Schema,
  type PlayAggregatesCountries401Error1,
} from "../models/play-aggregates-countries401-error1.js";
import { playAppListResponseSchema, type PlayAppListResponse } from "../models/play-app-list-response.js";
import { playAppSearchBodySchema, type PlayAppSearchBody } from "../models/play-app-search-body.js";
import { playAppSchema, type PlayApp } from "../models/play-app.js";
import {
  playAppsInstallsDaily401Error1Schema,
  type PlayAppsInstallsDaily401Error1,
} from "../models/play-apps-installs-daily401-error1.js";
import {
  playAppsListing401Error1Schema,
  type PlayAppsListing401Error1,
} from "../models/play-apps-listing401-error1.js";
import {
  playAppsListing429Error1Schema,
  type PlayAppsListing429Error1,
} from "../models/play-apps-listing429-error1.js";
import {
  playAppsQuery401Error1Schema,
  type PlayAppsQuery401Error1,
} from "../models/play-apps-query401-error1.js";
import {
  playAppsRecrawl401Error1Schema,
  type PlayAppsRecrawl401Error1,
} from "../models/play-apps-recrawl401-error1.js";
import {
  playAppsReviews401Error1Schema,
  type PlayAppsReviews401Error1,
} from "../models/play-apps-reviews401-error1.js";
import {
  playAppsSimilar401Error1Schema,
  type PlayAppsSimilar401Error1,
} from "../models/play-apps-similar401-error1.js";
import {
  playAppsSummary401Error1Schema,
  type PlayAppsSummary401Error1,
} from "../models/play-apps-summary401-error1.js";
import { playApps401Error1Schema, type PlayApps401Error1 } from "../models/play-apps401-error1.js";
import { playCategorySchema, type PlayCategory } from "../models/play-category.js";
import { playDevListResponseSchema, type PlayDevListResponse } from "../models/play-dev-list-response.js";
import { playDevSearchBodySchema, type PlayDevSearchBody } from "../models/play-dev-search-body.js";
import { playDevSchema, type PlayDev } from "../models/play-dev.js";
import {
  playDevelopersEstimates401Error1Schema,
  type PlayDevelopersEstimates401Error1,
} from "../models/play-developers-estimates401-error1.js";
import {
  playDevelopersQuery401Error1Schema,
  type PlayDevelopersQuery401Error1,
} from "../models/play-developers-query401-error1.js";
import {
  playDevelopers401Error1Schema,
  type PlayDevelopers401Error1,
} from "../models/play-developers401-error1.js";
import {
  playEstimates401Error1Schema,
  type PlayEstimates401Error1,
} from "../models/play-estimates401-error1.js";
import {
  playInfoCountries401Error1Schema,
  type PlayInfoCountries401Error1,
} from "../models/play-info-countries401-error1.js";
import {
  playInfoLanguages401Error1Schema,
  type PlayInfoLanguages401Error1,
} from "../models/play-info-languages401-error1.js";
import { PlayListingLanguages, playListingLanguagesSchema } from "../models/play-listing-languages.js";
import { playListingSchema, type PlayListing } from "../models/play-listing.js";
import { playLiveops401Error1Schema, type PlayLiveops401Error1 } from "../models/play-liveops401-error1.js";
import {
  playRankings401Error1Schema,
  type PlayRankings401Error1,
} from "../models/play-rankings401-error1.js";
import { playReviewSchema, type PlayReview } from "../models/play-review.js";
import {
  playSuggestions401Error1Schema,
  type PlaySuggestions401Error1,
} from "../models/play-suggestions401-error1.js";
import { similarSearchBodySchema, type SimilarSearchBody } from "../models/similar-search-body.js";
import { storeCountriesSchema, type StoreCountries } from "../models/store-countries.js";
import { storeLanguagesSchema, type StoreLanguages } from "../models/store-languages.js";
import { suggestSchema, type Suggest } from "../models/suggest.js";
import { summaryResponseSchema, type SummaryResponse } from "../models/summary-response.js";
import { summarySearchBodySchema, type SummarySearchBody } from "../models/summary-search-body.js";
import { typeEnumSchema, type TypeEnum } from "../models/type-enum.js";
import type { Servers } from "../servers.js";

/**
 * Google Play apps and developers: lookup, search, reviews, rankings, similar apps, daily installs,
 * download and revenue estimates, live store listings and reference data.
 */
export class GooglePlay {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search Google Play developers by structured filter
   *
   * @remarks
   * Searches Google Play developers by a structured JSON filter, with paging and sorting. `GET
   * /play/developers` covers the free-text equivalent.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.DevFilterSearchPlayDevelopersQueryPostError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  devFilterSearchPlayDevelopersQueryPost(
    request: GooglePlay.DevFilterSearchPlayDevelopersQueryPostRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayDevListResponse, GooglePlay.DevFilterSearchPlayDevelopersQueryPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/play/developers/query"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: playDevSearchBodySchema },
      },
      {
        success: { kind: "json", schema: playDevListResponseSchema },
        errorFactory: GooglePlay.DevFilterSearchPlayDevelopersQueryPostError,
      },
      options,
    );
  }

  /**
   * Search Google Play developers by query
   *
   * @remarks
   * Free-text search across Google Play developers using a `field:value` query such as
   * `hq_country:US`. To filter on structured criteria, use `POST /play/developers/query`.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.DevSearchPlayDevelopersGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  devSearchPlayDevelopersGet(
    request: GooglePlay.DevSearchPlayDevelopersGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PlayDev[], GooglePlay.DevSearchPlayDevelopersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/developers"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playDevSchema)) },
        errorFactory: GooglePlay.DevSearchPlayDevelopersGetError,
      },
      options,
    );
  }

  /**
   * Get Google Play app by ID
   *
   * @remarks
   * Returns the full Google Play listing for a single app, looked up by its bundle id. Use
   * `country` to select the storefront and `language` for the metadata language; `fields` limits
   * the response to the columns you need.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetAppDetailsPlayAppsIdGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAppDetailsPlayAppsIdGet(
    request: GooglePlay.GetAppDetailsPlayAppsIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayApp, GooglePlay.GetAppDetailsPlayAppsIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/apps/{id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "country", value: request.country, schema: s.optional(s.lazy(() => appCountriesSchema)) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => appLanguagesSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playAppSchema },
        errorFactory: GooglePlay.GetAppDetailsPlayAppsIdGetError,
      },
      options,
    );
  }

  /**
   * Search Google Play apps by query
   *
   * @remarks
   * Free-text search across Google Play listings, returning a ranked list of matching apps. To
   * filter on structured criteria such as revenue, installs or category, use `POST
   * /play/apps/query`.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetAppSearchPlayAppsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAppSearchPlayAppsGet(
    request: GooglePlay.GetAppSearchPlayAppsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PlayApp[], GooglePlay.GetAppSearchPlayAppsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/apps"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "published", value: request.published, schema: s.optional(s.boolean()) },
          { name: "country", value: request.country, schema: s.optional(s.lazy(() => appCountriesSchema)) },
          { name: "language", value: request.language, schema: s.optional(s.lazy(() => appLanguagesSchema)) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playAppSchema)) },
        errorFactory: GooglePlay.GetAppSearchPlayAppsGetError,
      },
      options,
    );
  }

  /**
   * Get Apps Estimates
   *
   * @remarks
   * Get Google Play apps estimates
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAppsEstimatesPlayDevelopersIdEstimatesGet(
    request: GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<DevAppsEstimates[], GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/developers/{id}/estimates"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.dateOnly()) },
          { name: "end", value: request.end, schema: s.optional(s.dateOnly()) },
          { name: "fill_gaps", value: request.fillGaps, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => devAppsEstimatesSchema)) },
        errorFactory: GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetError,
      },
      options,
    );
  }

  /**
   * Get Apps Estimates
   *
   * @remarks
   * Get Google Play apps estimates
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetAppsEstimatesPlayEstimatesGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAppsEstimatesPlayEstimatesGet(
    request: GooglePlay.GetAppsEstimatesPlayEstimatesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsEstimates[], GooglePlay.GetAppsEstimatesPlayEstimatesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/estimates"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "start", value: request.start, schema: s.optional(s.dateOnly()) },
          { name: "end", value: request.end, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => appsEstimatesSchema)) },
        errorFactory: GooglePlay.GetAppsEstimatesPlayEstimatesGetError,
      },
      options,
    );
  }

  /**
   * Get Apps Installs Daily
   *
   * @remarks
   * Get Google Play apps daily installs.
   *
   * `ipd` is derived from the cumulative install total: each increase is spread evenly across the
   * elapsed days since the total last changed, so collection gaps and lagging reports are amortised
   * rather than reported as a single-day spike. Values are raw and never negative.
   *
   * By default these are unsmoothed figures. AppstoreSpy's Daily Installs chart additionally
   * applies a moving average for readability. Pass `smooth=true` to get that series: a centered,
   * triangular-weighted 9-day moving average of `ipd` (weights 1,2,3,4,5,4,3,2,1; days without data
   * are skipped and the weights renormalised). Neighbouring days outside `start`/`end` are included
   * in the window, so the first and last days are smoothed the same way as the rest.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAppsInstallsDailyPlayAppsIdInstallsDailyGet(
    request: GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsDailyInstalls[], GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/apps/{id}/installs_daily"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "start", value: request.start, schema: s.optional(s.dateOnly()) },
          { name: "end", value: request.end, schema: s.optional(s.dateOnly()) },
          { name: "smooth", value: request.smooth, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => appsDailyInstallsSchema)) },
        errorFactory: GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError,
      },
      options,
    );
  }

  /**
   * Aggregate Google Play developers by HQ country
   *
   * @remarks
   * Per-country totals over all Google Play developers: developer count, published apps, and sums
   * of monthly downloads/revenue estimates. The category_type split assigns each developer's totals
   * to their dominant category type. Sorted by downloads descending.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCountryAggregatesPlayAggregatesCountriesGet(
    request: GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    DevCountryAggregatesResponse,
    GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/aggregates/countries"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          {
            name: "category_type",
            value: request.categoryType,
            schema: s.optional(s.lazy(() => typeEnumSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: devCountryAggregatesResponseSchema },
        errorFactory: GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetError,
      },
      options,
    );
  }

  /**
   * Get Google Play developer by ID
   *
   * @remarks
   * Returns the Google Play developer record for a single developer id, including the developer's
   * publisher identifiers and headquarters country.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetDeveloperPlayDevelopersIdGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeveloperPlayDevelopersIdGet(
    request: GooglePlay.GetDeveloperPlayDevelopersIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayDev, GooglePlay.GetDeveloperPlayDevelopersIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/developers/{id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "fields", value: request.fields, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playDevSchema },
        errorFactory: GooglePlay.GetDeveloperPlayDevelopersIdGetError,
      },
      options,
    );
  }

  /**
   * Get Google Play LiveOps events for an app
   *
   * @remarks
   * Returns the LiveOps events (sales, tournaments, updates, new content) Google Play shows for one
   * app in one country. Responds 202 while a fresh crawl is in progress.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetEventsPlayLiveopsGet2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEventsPlayLiveopsGet2(
    request: GooglePlay.GetEventsPlayLiveopsGet2Request,
    options?: RequestOptions,
  ): ApiPromise<Event[], GooglePlay.GetEventsPlayLiveopsGet2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/liveops"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "app", value: request.app, schema: s.string() },
          {
            name: "country",
            value: request.country,
            schema: s.defaulted(appCountriesSchema, AppCountries.Us),
          },
          {
            name: "freshness",
            value: request.freshness,
            schema: s.defaulted(cacheTimeSchema, CacheTime._7D),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => eventSchema)) },
        errorFactory: GooglePlay.GetEventsPlayLiveopsGet2Error,
      },
      options,
    );
  }

  /**
   * Get Filter Search
   *
   * @remarks
   * |**Fields**||||
   * |---|---|---|---|
   * |**Name** |**Type** |**Sort**|**Description**|
   * |name |string |- |Name|
   * |bundle |string |- |Bundle|
   * |description_full |string |- |Description|
   * |published |boolean |- |Published|
   * |listing_visible |boolean |- |Published in request country|
   * |category |string |- |Category|
   * |category_type |string |- |Type|
   * |revenue_month |integer |+ |Monthly Revenue|
   * |revenue_lifetime |integer |- |Lifetime Revenue|
   * |downloads_month |integer |+ |Monthly Downloads|
   * |downloads_lifetime|integer |- |Lifetime Downloads|
   * |update_date |date ISO8601|+ |Last Updated|
   * |release_date |date ISO8601|+ |Release date|
   * |developer_name |string |- |Developer name|
   * |description_short|string |- |Short description|
   * |whatsnew |string |- |Whatsnew|
   * |icon |string |- |Image|
   * |video |string |- |Trailer|
   * |screenshots |[]string |- |Screenshots|
   * |feature_graphic |string |- |Feature graphic|
   * |removal_date |date ISO8601|+ |Removal date|
   * |version |string |- |Version|
   * |size |float |- |Size|
   * |downloads_daily |integer |+ |Daily Installs|
   * |downloads_exact |integer |+ |Total Installs|
   * |downloads_mark |integer |+ |Installs|
   * |rating_count |integer |+ |Ratings|
   * |rating_value |float |+ |Rating in request country|
   * |review_count |integer |+ |Reviews|
   * |rating_avg |float |+ |Rating|
   * |iap |boolean |- |Inapp|
   * |editorial |boolean |- |Editor's choise|
   * |hosts |[]string |- |Hosts|
   * |chart_info |object |+ |App's chart info: category, collection, country, position for today|
   *
   * |**Filters**|||
   * |---|---|---|
   * |**Name**|**Type**|**Description**|
   * |name|string|Name|
   * |published|boolean|Published|
   * |category_type|string|APP or GAME|
   * |revenue_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
   * |downloads_month|ValueRange|{"gte": 100, "lte": 500} (In this field you need write values in thousands: 100 = 100000, 500 = 500000)|
   * |update_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
   * |release_date|DateRange|{"gte": "2021-01-01", "lte": "2022-01-01"}|
   * |rating_count|ValueRange|{"gte": 1000, "lte": 5000}|
   * |developer|string|Developer name|
   * |developer_id|string|Developer id|
   * |editorial|boolean|Editor's choise|
   * |iap|boolean|Inapp|
   * |active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
   * |category|string|Google Play category: "GAME_ARCADE", "SOCIAL", "ART_AND_DESIGN", "LIFESTYLE" etc|
   * |downloads_mark|integer|100, 500, 1000, 5000, 10000 etc|
   * |downloads_daily|ValueRange|{"gte": 1000, "lte": 5000}|
   * |downloads_exact|ValueRange|{"gte": 1000, "lte": 5000}|
   * |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
   * |similar_apps|string|"com.twitter.android" - Twitter similar apps|
   * |reverse_similar_apps|string|"com.twitter.android" - Apps with Twitter in similar's list|
   * |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}|
   * |hosts|string||
   * |with_ads|boolean|With Ads|
   * |advertised|boolean|Advertised|
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetFilterSearchPlayAppsQueryPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFilterSearchPlayAppsQueryPost(
    request: GooglePlay.GetFilterSearchPlayAppsQueryPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PlayAppListResponse, GooglePlay.GetFilterSearchPlayAppsQueryPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/play/apps/query"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => playAppSearchBodySchema)),
        },
      },
      {
        success: { kind: "json", schema: playAppListResponseSchema },
        errorFactory: GooglePlay.GetFilterSearchPlayAppsQueryPostError,
      },
      options,
    );
  }

  /**
   * Get the Google Play listing of an app in any language
   *
   * @remarks
   * Returns the store listing of one app for a country and language exactly as Google Play serves
   * it: title, short and full description, what's new, icon, feature graphic, trailer and
   * screenshots. Any language Google Play Console accepts can be requested. The listing is crawled
   * on demand and kept; `freshness` sets how old a kept listing may be before it is crawled again.
   * A call waits for a running crawl for up to about 30 seconds and answers 202 with the crawl
   * state if it is still running; repeat the same request to get the listing. Pass `wait=false` to
   * get the 202 immediately. Repeated requests for the same listing share one crawl. `translated`
   * tells whether Google Play machine-translated the texts instead of showing a translation the
   * developer supplied. The call that queues a crawl costs the crawl price, even when it answers
   * 202; a call served from a kept listing, including a kept not-found, costs the read price; a 202
   * to a call that found the crawl already running costs nothing, and so do a 400, a 422, a 429 and
   * any 5xx, a failed crawl (502) included.
   *
   * @returns The listing
   *
   * @throws {@link GooglePlay.GetListingPlayAppsIdListingGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getListingPlayAppsIdListingGet(
    request: GooglePlay.GetListingPlayAppsIdListingGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayListing, GooglePlay.GetListingPlayAppsIdListingGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/apps/{id}/listing"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          {
            name: "country",
            value: request.country,
            schema: s.defaulted(appCountriesSchema, AppCountries.Us),
          },
          {
            name: "language",
            value: request.language,
            schema: s.defaulted(playListingLanguagesSchema, PlayListingLanguages.EnUs),
          },
          {
            name: "freshness",
            value: request.freshness,
            schema: s.defaulted(cacheTimeSchema, CacheTime._1D),
          },
          { name: "wait", value: request.wait, schema: s.defaulted(s.boolean(), true) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: playListingSchema },
        errorFactory: GooglePlay.GetListingPlayAppsIdListingGetError,
      },
      options,
    );
  }

  /**
   * Get Google Play app available countries
   *
   * @remarks
   * This query returns the list of Google Play app available countries.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetPlayAppCountriesPlayInfoCountriesGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlayAppCountriesPlayInfoCountriesGet(
    options?: RequestOptions,
  ): ApiPromise<StoreCountries, GooglePlay.GetPlayAppCountriesPlayInfoCountriesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/info/countries"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storeCountriesSchema },
        errorFactory: GooglePlay.GetPlayAppCountriesPlayInfoCountriesGetError,
      },
      options,
    );
  }

  /**
   * Get Google Play app available languages
   *
   * @remarks
   * This query returns the list of Google Play app available languages.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetPlayAppLanguagesPlayInfoLanguagesGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlayAppLanguagesPlayInfoLanguagesGet(
    options?: RequestOptions,
  ): ApiPromise<StoreLanguages, GooglePlay.GetPlayAppLanguagesPlayInfoLanguagesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/info/languages"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storeLanguagesSchema },
        errorFactory: GooglePlay.GetPlayAppLanguagesPlayInfoLanguagesGetError,
      },
      options,
    );
  }

  /**
   * Get Google Play rankings data
   *
   * @remarks
   * Returns Google Play chart positions over a date range, filtered by country, category and
   * collection. One row per app per chart per day.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetPlayRankingsPlayRankingsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlayRankingsPlayRankingsGet(
    request: GooglePlay.GetPlayRankingsPlayRankingsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiResponseListModelsResponsesResponsePlayRankingItem,
    GooglePlay.GetPlayRankingsPlayRankingsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/rankings"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "date_start", value: request.dateStart, schema: s.optional(s.dateOnly()) },
          { name: "date_end", value: request.dateEnd, schema: s.optional(s.dateOnly()) },
          { name: "app", value: request.app, schema: s.optional(s.array(s.string())) },
          {
            name: "country",
            value: request.country,
            schema: s.optional(s.array(s.lazy(() => appCountriesSchema))),
          },
          {
            name: "category",
            value: request.category,
            schema: s.optional(s.array(s.lazy(() => playCategorySchema))),
          },
          {
            name: "collection",
            value: request.collection,
            schema: s.optional(s.array(s.lazy(() => collectionSchema))),
          },
          { name: "rank_start", value: request.rankStart, schema: s.optional(s.int()) },
          { name: "rank_end", value: request.rankEnd, schema: s.optional(s.int()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiResponseListModelsResponsesResponsePlayRankingItemSchema },
        errorFactory: GooglePlay.GetPlayRankingsPlayRankingsGetError,
      },
      options,
    );
  }

  /**
   * Queue a recrawl of a Google Play app
   *
   * @remarks
   * Queues a fresh crawl of one Google Play app for the given country and language. Returns 200
   * once the job is accepted; the updated data appears on the app endpoints after the crawl
   * completes.
   *
   * @returns The recrawl is queued; the body is empty
   *
   * @throws {@link GooglePlay.GetRecrawlPlayAppsIdRecrawlGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecrawlPlayAppsIdRecrawlGet(
    request: GooglePlay.GetRecrawlPlayAppsIdRecrawlGetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, GooglePlay.GetRecrawlPlayAppsIdRecrawlGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/apps/{id}/recrawl"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          {
            name: "country",
            value: request.country,
            schema: s.defaulted(appCountriesSchema, AppCountries.Us),
          },
          {
            name: "language",
            value: request.language,
            schema: s.defaulted(appLanguagesSchema, AppLanguages.EnUs),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: GooglePlay.GetRecrawlPlayAppsIdRecrawlGetError,
      },
      options,
    );
  }

  /**
   * Get Google Play app reviews by app ID
   *
   * @remarks
   * Returns user reviews for a single Google Play app. Reviews are country- and language-specific,
   * so `country` and `language` change which set is returned.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetReviewsPlayAppsIdReviewsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReviewsPlayAppsIdReviewsGet(
    request: GooglePlay.GetReviewsPlayAppsIdReviewsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<PlayReview[], GooglePlay.GetReviewsPlayAppsIdReviewsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/apps/{id}/reviews"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "language", value: request.language, schema: appLanguagesSchema },
          { name: "country", value: request.country, schema: s.optional(s.lazy(() => appCountriesSchema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => playReviewSchema)) },
        errorFactory: GooglePlay.GetReviewsPlayAppsIdReviewsGetError,
      },
      options,
    );
  }

  /**
   * Get similar Google Play apps
   *
   * @remarks
   * Returns the apps Google Play lists as similar to the given app. Set `link` to the reverse
   * direction to get the apps that list the given app as similar to them instead.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetSimilarPlayAppsSimilarPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSimilarPlayAppsSimilarPost(
    request: GooglePlay.GetSimilarPlayAppsSimilarPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PlayAppListResponse, GooglePlay.GetSimilarPlayAppsSimilarPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/play/apps/similar"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => similarSearchBodySchema)),
        },
      },
      {
        success: { kind: "json", schema: playAppListResponseSchema },
        errorFactory: GooglePlay.GetSimilarPlayAppsSimilarPostError,
      },
      options,
    );
  }

  /**
   * Get Google Play keyword suggestions
   *
   * @remarks
   * Returns Google Play search autocomplete suggestions for a term in one country and language.
   * Responds 202 with a partial result while a fresh crawl is in progress; `freshness` sets how old
   * a cached result may be before it is recrawled.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetSuggestsPlaySuggestionsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSuggestsPlaySuggestionsGet(
    request: GooglePlay.GetSuggestsPlaySuggestionsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<Suggest, GooglePlay.GetSuggestsPlaySuggestionsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/play/suggestions"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          {
            name: "country",
            value: request.country,
            schema: s.defaulted(appCountriesSchema, AppCountries.Us),
          },
          { name: "lang", value: request.lang, schema: s.defaulted(appLanguagesSchema, AppLanguages.EnUs) },
          {
            name: "freshness",
            value: request.freshness,
            schema: s.defaulted(cacheTimeSchema, CacheTime._7D),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: suggestSchema },
        errorFactory: GooglePlay.GetSuggestsPlaySuggestionsGetError,
      },
      options,
    );
  }

  /**
   * Summarise Google Play apps matching a filter
   *
   * @remarks
   * Returns aggregate totals for the set of Google Play apps matching a structured filter, without
   * returning the apps themselves. Takes the same filter body as `POST /play/apps/query`.
   *
   * @returns Successful Response
   *
   * @throws {@link GooglePlay.GetSummaryPlayAppsSummaryPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSummaryPlayAppsSummaryPost(
    request: GooglePlay.GetSummaryPlayAppsSummaryPostRequest,
    options?: RequestOptions,
  ): ApiPromise<SummaryResponse, GooglePlay.GetSummaryPlayAppsSummaryPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/play/apps/summary"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: summarySearchBodySchema },
      },
      {
        success: { kind: "json", schema: summaryResponseSchema },
        errorFactory: GooglePlay.GetSummaryPlayAppsSummaryPostError,
      },
      options,
    );
  }
}

export namespace GooglePlay {
  export type DevFilterSearchPlayDevelopersQueryPostRequest = {
    body: PlayDevSearchBody;
  };

  export class DevFilterSearchPlayDevelopersQueryPostError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playDevelopersQuery401Error1", PlayDevelopersQuery401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<DevFilterSearchPlayDevelopersQueryPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playDevelopersQuery401Error1",
        decode: { kind: "json", schema: playDevelopersQuery401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type DevSearchPlayDevelopersGetRequest = {
    /** Query for search */
    q?: string;
    /** Fields to return separated by comma(,) */
    fields?: string;
    /** Sort params separated by comma(,) */
    sort?: string;
    /** Count per page @default 10 */
    limit?: number;
    /** Page @default 1 */
    page?: number;
  };

  export const devSearchPlayDevelopersGetRequestSchema: Schema<DevSearchPlayDevelopersGetRequest> =
    s.lazySchema(() =>
      s.object<DevSearchPlayDevelopersGetRequest>({
        q: s.optional(s.string()),
        fields: s.optional(s.string()),
        sort: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.lte(1000)), 10),
        page: s.defaulted(s.int(), 1),
      }),
    );

  export class DevSearchPlayDevelopersGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playDevelopers401Error1", PlayDevelopers401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<DevSearchPlayDevelopersGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playDevelopers401Error1",
        decode: { kind: "json", schema: playDevelopers401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetAppDetailsPlayAppsIdGetRequest = {
    /**
     * Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass
     * the `id` value from it
     */
    id: string;
    /** Fields to return separated by comma(,) */
    fields?: string;
    /** Country for which return data. By default: US. */
    country?: AppCountries;
    /** Language of meta data. By default: store default language. */
    language?: AppLanguages;
  };

  export class GetAppDetailsPlayAppsIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playApps401Error1", PlayApps401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAppDetailsPlayAppsIdGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 401, kind: "playApps401Error1", decode: { kind: "json", schema: playApps401Error1Schema } },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetAppSearchPlayAppsGetRequest = {
    /** Word or phrase for search. */
    q?: string;
    /** Empty for all. */
    published?: boolean;
    /** Country for specific country fields. Default - US. */
    country?: AppCountries;
    /** Language of meta data. By default: store default language. */
    language?: AppLanguages;
    /** Fields to return separated by comma(,) */
    fields?: string;
    /** Sort params separated by comma(,) */
    sort?: string;
    /** Count per page @default 10 */
    limit?: number;
    /** Page @default 1 */
    page?: number;
  };

  export const getAppSearchPlayAppsGetRequestSchema: Schema<GetAppSearchPlayAppsGetRequest> = s.lazySchema(
    () =>
      s.object<GetAppSearchPlayAppsGetRequest>({
        q: s.optional(s.string()),
        published: s.optional(s.boolean()),
        country: s.optional(s.lazy(() => appCountriesSchema)),
        language: s.optional(s.lazy(() => appLanguagesSchema)),
        fields: s.optional(s.string()),
        sort: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.lte(1000)), 10),
        page: s.defaulted(s.int(), 1),
      }),
  );

  export class GetAppSearchPlayAppsGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playApps401Error1", PlayApps401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAppSearchPlayAppsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 401, kind: "playApps401Error1", decode: { kind: "json", schema: playApps401Error1Schema } },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest = {
    /** Developer's id */
    id: string;
    /** Start date. Format YYYY-MM-DD */
    start?: string;
    /** Start date. Format YYYY-MM-DD */
    end?: string;
    /**
     * Return every month from the developer's earliest to its latest month with estimates within
     * start..end, newest first: a month without estimates appears with downloads and revenue null,
     * so a gap is not read as a zero. Off by default, which leaves such months out.
     *
     * @default false
     */
    fillGaps?: boolean;
  };

  export class GetAppsEstimatesPlayDevelopersIdEstimatesGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playDevelopersEstimates401Error1", PlayDevelopersEstimates401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAppsEstimatesPlayDevelopersIdEstimatesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playDevelopersEstimates401Error1",
        decode: { kind: "json", schema: playDevelopersEstimates401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetAppsEstimatesPlayEstimatesGetRequest = {
    /**
     * Google Play app ids separated by comma(,). Each id is the bundle id (com.example.app) or a
     * Google Play link (https://play.google.com/store/apps/details?id=com.example.app or
     * market://details?id=com.example.app, URL-encoded); an unrecognised id or an id holding
     * whitespace answers 422
     */
    id: string;
    /** Start date. Format YYYY-MM-DD */
    start?: string;
    /** Start date. Format YYYY-MM-DD */
    end?: string;
  };

  export class GetAppsEstimatesPlayEstimatesGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playEstimates401Error1", PlayEstimates401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAppsEstimatesPlayEstimatesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playEstimates401Error1",
        decode: { kind: "json", schema: playEstimates401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest = {
    /**
     * Google Play bundle ids separated by comma(,), e.g. com.example.app. A store link cannot be
     * passed in the path; pass the `id` value from it. An unrecognised id answers 422
     */
    id: string;
    /** Start date. Format YYYY-MM-DD. Defaults to the 30 days ending at `end` */
    start?: string;
    /** End date. Format YYYY-MM-DD */
    end?: string;
    /** Return `ipd` smoothed as on the website chart @default false */
    smooth?: boolean;
  };

  export class GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playAppsInstallsDaily401Error1", PlayAppsInstallsDaily401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playAppsInstallsDaily401Error1",
        decode: { kind: "json", schema: playAppsInstallsDaily401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetCountryAggregatesPlayAggregatesCountriesGetRequest = {
    /** Restrict to developers with this dominant category type */
    categoryType?: TypeEnum;
  };

  export class GetCountryAggregatesPlayAggregatesCountriesGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playAggregatesCountries401Error1", PlayAggregatesCountries401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCountryAggregatesPlayAggregatesCountriesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playAggregatesCountries401Error1",
        decode: { kind: "json", schema: playAggregatesCountries401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetDeveloperPlayDevelopersIdGetRequest = {
    /** Developer ID */
    id: string;
    /** Fields to return separated by comma(,) */
    fields?: string;
  };

  export class GetDeveloperPlayDevelopersIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playDevelopers401Error1", PlayDevelopers401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDeveloperPlayDevelopersIdGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playDevelopers401Error1",
        decode: { kind: "json", schema: playDevelopers401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetEventsPlayLiveopsGet2Request = {
    app: string;
    /** @default AppCountries.Us */
    country?: AppCountries;
    /** @default CacheTime._7D */
    freshness?: CacheTime;
  };

  export class GetEventsPlayLiveopsGet2Error extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playLiveops401Error1", PlayLiveops401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEventsPlayLiveopsGet2Error> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 401, kind: "playLiveops401Error1", decode: { kind: "json", schema: playLiveops401Error1Schema } },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetFilterSearchPlayAppsQueryPostRequest = {
    body?: PlayAppSearchBody;
  };

  export class GetFilterSearchPlayAppsQueryPostError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playAppsQuery401Error1", PlayAppsQuery401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFilterSearchPlayAppsQueryPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playAppsQuery401Error1",
        decode: { kind: "json", schema: playAppsQuery401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetListingPlayAppsIdListingGetRequest = {
    /**
     * Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass
     * the `id` value from it
     */
    id: string;
    /** Country of the listing (Google Play `gl`). By default: US. @default AppCountries.Us */
    country?: AppCountries;
    /**
     * Language of the listing (Google Play `hl`), any Google Play Console locale. By default:
     * en_US.
     *
     * @default PlayListingLanguages.EnUs
     */
    language?: PlayListingLanguages;
    /** How old a kept listing may be before it is crawled again. @default CacheTime._1D */
    freshness?: CacheTime;
    /** Wait for a running crawl, or answer 202 right away. @default true */
    wait?: boolean;
  };

  export class GetListingPlayAppsIdListingGetError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error502", undefined>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playAppsListing401Error1", PlayAppsListing401Error1>
      | Declared<"playAppsListing429Error1", PlayAppsListing429Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetListingPlayAppsIdListingGetError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playAppsListing401Error1",
        decode: { kind: "json", schema: playAppsListing401Error1Schema },
      },
      {
        on: 429,
        kind: "playAppsListing429Error1",
        decode: { kind: "json", schema: playAppsListing429Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export class GetPlayAppCountriesPlayInfoCountriesGetError extends ApiError {
    declare readonly payload:
      | Declared<"playInfoCountries401Error1", PlayInfoCountries401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlayAppCountriesPlayInfoCountriesGetError> = [
      {
        on: 401,
        kind: "playInfoCountries401Error1",
        decode: { kind: "json", schema: playInfoCountries401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export class GetPlayAppLanguagesPlayInfoLanguagesGetError extends ApiError {
    declare readonly payload:
      | Declared<"playInfoLanguages401Error1", PlayInfoLanguages401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlayAppLanguagesPlayInfoLanguagesGetError> = [
      {
        on: 401,
        kind: "playInfoLanguages401Error1",
        decode: { kind: "json", schema: playInfoLanguages401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetPlayRankingsPlayRankingsGetRequest = {
    /** Start date (YYYY-MM-DD) */
    dateStart?: string;
    /** End date (YYYY-MM-DD) */
    dateEnd?: string;
    /** App IDs (comma-separated) */
    app?: string[];
    /** Country codes (comma-separated) */
    country?: AppCountries[];
    /** App categories (comma-separated) */
    category?: PlayCategory[];
    /** Collection types (comma-separated) */
    collection?: Collection[];
    /** Minimum rank */
    rankStart?: number;
    /** Maximum rank */
    rankEnd?: number;
    /** Count per page @default 10 */
    limit?: number;
    /** Page @default 1 */
    page?: number;
  };

  export const getPlayRankingsPlayRankingsGetRequestSchema: Schema<GetPlayRankingsPlayRankingsGetRequest> =
    s.lazySchema(() =>
      s.object<GetPlayRankingsPlayRankingsGetRequest>({
        dateStart: s.optional(s.dateOnly()),
        dateEnd: s.optional(s.dateOnly()),
        app: s.optional(s.array(s.string())),
        country: s.optional(s.array(s.lazy(() => appCountriesSchema))),
        category: s.optional(s.array(s.lazy(() => playCategorySchema))),
        collection: s.optional(s.array(s.lazy(() => collectionSchema))),
        rankStart: s.optional(s.int().check(s.gte(1))),
        rankEnd: s.optional(s.int().check(s.lte(10000))),
        limit: s.defaulted(s.int().check(s.lte(1000)), 10),
        page: s.defaulted(s.int(), 1),
      }),
    );

  export class GetPlayRankingsPlayRankingsGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playRankings401Error1", PlayRankings401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlayRankingsPlayRankingsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playRankings401Error1",
        decode: { kind: "json", schema: playRankings401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetRecrawlPlayAppsIdRecrawlGetRequest = {
    /**
     * Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass
     * the `id` value from it
     */
    id: string;
    /** Country for which return data. By default: US. @default AppCountries.Us */
    country?: AppCountries;
    /** Language of meta data. By default: en_US @default AppLanguages.EnUs */
    language?: AppLanguages;
  };

  export class GetRecrawlPlayAppsIdRecrawlGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playAppsRecrawl401Error1", PlayAppsRecrawl401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRecrawlPlayAppsIdRecrawlGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playAppsRecrawl401Error1",
        decode: { kind: "json", schema: playAppsRecrawl401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetReviewsPlayAppsIdReviewsGetRequest = {
    /**
     * Google Play bundle id, e.g. com.example.app. A store link cannot be passed in the path; pass
     * the `id` value from it
     */
    id: string;
    /** Review language */
    language: AppLanguages;
    country?: AppCountries;
    /** Count of reviews per page @default 10 */
    limit?: number;
    /** Sort params separated by comma(,) */
    sort?: string;
  };

  export const getReviewsPlayAppsIdReviewsGetRequestSchema: Schema<GetReviewsPlayAppsIdReviewsGetRequest> =
    s.lazySchema(() =>
      s.object<GetReviewsPlayAppsIdReviewsGetRequest>({
        id: s.string(),
        language: appLanguagesSchema,
        country: s.optional(s.lazy(() => appCountriesSchema)),
        limit: s.defaulted(s.int().check(s.lte(1000)), 10),
        sort: s.optional(s.string()),
      }),
    );

  export class GetReviewsPlayAppsIdReviewsGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playAppsReviews401Error1", PlayAppsReviews401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReviewsPlayAppsIdReviewsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playAppsReviews401Error1",
        decode: { kind: "json", schema: playAppsReviews401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetSimilarPlayAppsSimilarPostRequest = {
    body?: SimilarSearchBody;
  };

  export class GetSimilarPlayAppsSimilarPostError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playAppsSimilar401Error1", PlayAppsSimilar401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSimilarPlayAppsSimilarPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playAppsSimilar401Error1",
        decode: { kind: "json", schema: playAppsSimilar401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetSuggestsPlaySuggestionsGetRequest = {
    q: string;
    /** @default AppCountries.Us */
    country?: AppCountries;
    /** @default AppLanguages.EnUs */
    lang?: AppLanguages;
    /** @default CacheTime._7D */
    freshness?: CacheTime;
  };

  export class GetSuggestsPlaySuggestionsGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playSuggestions401Error1", PlaySuggestions401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSuggestsPlaySuggestionsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playSuggestions401Error1",
        decode: { kind: "json", schema: playSuggestions401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetSummaryPlayAppsSummaryPostRequest = {
    body: SummarySearchBody;
  };

  export class GetSummaryPlayAppsSummaryPostError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"playAppsSummary401Error1", PlayAppsSummary401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSummaryPlayAppsSummaryPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "playAppsSummary401Error1",
        decode: { kind: "json", schema: playAppsSummary401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
