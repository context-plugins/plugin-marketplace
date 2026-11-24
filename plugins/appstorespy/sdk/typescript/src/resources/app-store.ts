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
  apiResponseListModelsResponsesResponseIosRankingItemSchema,
  type ApiResponseListModelsResponsesResponseIosRankingItem,
} from "../models/api-response-list-models-responses-response-ios-ranking-item.js";
import { AppCountries, appCountriesSchema } from "../models/app-countries.js";
import { AppLanguages, appLanguagesSchema } from "../models/app-languages.js";
import { appsEstimatesSchema, type AppsEstimates } from "../models/apps-estimates.js";
import { collectionSchema, type Collection } from "../models/collection.js";
import { devAppsEstimatesSchema, type DevAppsEstimates } from "../models/dev-apps-estimates.js";
import {
  devCountryAggregatesResponseSchema,
  type DevCountryAggregatesResponse,
} from "../models/dev-country-aggregates-response.js";
import { errorSchema, type Error } from "../models/error.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import {
  iosAggregatesCountries401Error1Schema,
  type IosAggregatesCountries401Error1,
} from "../models/ios-aggregates-countries401-error1.js";
import { iosAppListResponseSchema, type IosAppListResponse } from "../models/ios-app-list-response.js";
import { iosAppSearchBodySchema, type IosAppSearchBody } from "../models/ios-app-search-body.js";
import { iosAppSchema, type IosApp } from "../models/ios-app.js";
import {
  iosAppsQuery401Error1Schema,
  type IosAppsQuery401Error1,
} from "../models/ios-apps-query401-error1.js";
import {
  iosAppsRecrawl401Error1Schema,
  type IosAppsRecrawl401Error1,
} from "../models/ios-apps-recrawl401-error1.js";
import {
  iosAppsReviews401Error1Schema,
  type IosAppsReviews401Error1,
} from "../models/ios-apps-reviews401-error1.js";
import {
  iosAppsSimilar401Error1Schema,
  type IosAppsSimilar401Error1,
} from "../models/ios-apps-similar401-error1.js";
import {
  iosAppsSummary401Error1Schema,
  type IosAppsSummary401Error1,
} from "../models/ios-apps-summary401-error1.js";
import { iosApps401Error1Schema, type IosApps401Error1 } from "../models/ios-apps401-error1.js";
import { iosCategorySchema, type IosCategory } from "../models/ios-category.js";
import { iosDevListResponseSchema, type IosDevListResponse } from "../models/ios-dev-list-response.js";
import { iosDevSearchBodySchema, type IosDevSearchBody } from "../models/ios-dev-search-body.js";
import { iosDevSchema, type IosDev } from "../models/ios-dev.js";
import {
  iosDevelopersEstimates401Error1Schema,
  type IosDevelopersEstimates401Error1,
} from "../models/ios-developers-estimates401-error1.js";
import {
  iosDevelopersQuery401Error1Schema,
  type IosDevelopersQuery401Error1,
} from "../models/ios-developers-query401-error1.js";
import {
  iosDevelopers401Error1Schema,
  type IosDevelopers401Error1,
} from "../models/ios-developers401-error1.js";
import {
  iosEstimates401Error1Schema,
  type IosEstimates401Error1,
} from "../models/ios-estimates401-error1.js";
import {
  iosInfoCountries401Error1Schema,
  type IosInfoCountries401Error1,
} from "../models/ios-info-countries401-error1.js";
import {
  iosInfoLanguages401Error1Schema,
  type IosInfoLanguages401Error1,
} from "../models/ios-info-languages401-error1.js";
import { iosPlatformSchema, type IosPlatform } from "../models/ios-platform.js";
import { iosRankings401Error1Schema, type IosRankings401Error1 } from "../models/ios-rankings401-error1.js";
import { iosReviewSchema, type IosReview } from "../models/ios-review.js";
import { iosSimilarSearchBodySchema, type IosSimilarSearchBody } from "../models/ios-similar-search-body.js";
import { iosSummarySearchBodySchema, type IosSummarySearchBody } from "../models/ios-summary-search-body.js";
import { storeCountriesSchema, type StoreCountries } from "../models/store-countries.js";
import { storeLanguagesSchema, type StoreLanguages } from "../models/store-languages.js";
import { summaryResponseSchema, type SummaryResponse } from "../models/summary-response.js";
import { typeEnumSchema, type TypeEnum } from "../models/type-enum.js";
import type { Servers } from "../servers.js";

/**
 * App Store apps and developers: lookup, search, reviews, rankings, similar apps, download and
 * revenue estimates and reference data.
 */
export class AppStore {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search App Store developers by structured filter
   *
   * @remarks
   * Searches App Store developers by a structured JSON filter, with paging and sorting. `GET
   * /ios/developers` covers the free-text equivalent.
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.DevFilterSearchIosDevelopersQueryPostError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  devFilterSearchIosDevelopersQueryPost(
    request: AppStore.DevFilterSearchIosDevelopersQueryPostRequest,
    options?: RequestOptions,
  ): ApiPromise<IosDevListResponse, AppStore.DevFilterSearchIosDevelopersQueryPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ios/developers/query"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: iosDevSearchBodySchema },
      },
      {
        success: { kind: "json", schema: iosDevListResponseSchema },
        errorFactory: AppStore.DevFilterSearchIosDevelopersQueryPostError,
      },
      options,
    );
  }

  /**
   * Search App Store developers by query
   *
   * @remarks
   * Free-text search across App Store developers using a `field:value` query such as
   * `hq_country:US`. To filter on structured criteria, use `POST /ios/developers/query`.
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.DevSearchIosDevelopersGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  devSearchIosDevelopersGet(
    request: AppStore.DevSearchIosDevelopersGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<IosDev[], AppStore.DevSearchIosDevelopersGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ios/developers"),
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
        success: { kind: "json", schema: s.array(s.lazy(() => iosDevSchema)) },
        errorFactory: AppStore.DevSearchIosDevelopersGetError,
      },
      options,
    );
  }

  /**
   * Get App Store app by ID
   *
   * @remarks
   * Returns the full App Store listing for a single app, looked up by its numeric App Store id. Use
   * `country` to select the storefront and `language` for the metadata language; `fields` limits
   * the response to the columns you need.
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.GetAppDetailsIosAppsIdGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAppDetailsIosAppsIdGet(
    request: AppStore.GetAppDetailsIosAppsIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<IosApp, AppStore.GetAppDetailsIosAppsIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ios/apps/{id}"),
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
        success: { kind: "json", schema: iosAppSchema },
        errorFactory: AppStore.GetAppDetailsIosAppsIdGetError,
      },
      options,
    );
  }

  /**
   * Search App Store apps by query
   *
   * @remarks
   * Free-text search across App Store listings, returning a ranked list of matching apps. To filter
   * on structured criteria such as revenue, downloads or category, use `POST /ios/apps/query`.
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.GetAppSearchIosAppsGetError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAppSearchIosAppsGet(
    request: AppStore.GetAppSearchIosAppsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<IosApp[], AppStore.GetAppSearchIosAppsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ios/apps"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "country", value: request.country, schema: s.optional(s.lazy(() => appCountriesSchema)) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => iosAppSchema)) },
        errorFactory: AppStore.GetAppSearchIosAppsGetError,
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
   * @throws {@link AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAppsEstimatesIosDevelopersIdEstimatesGet(
    request: AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<DevAppsEstimates[], AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ios/developers/{id}/estimates"),
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
        errorFactory: AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetError,
      },
      options,
    );
  }

  /**
   * Get Apps Estimates
   *
   * @remarks
   * Get App Store apps estimates
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.GetAppsEstimatesIosEstimatesGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAppsEstimatesIosEstimatesGet(
    request: AppStore.GetAppsEstimatesIosEstimatesGetRequest,
    options?: RequestOptions,
  ): ApiPromise<AppsEstimates[], AppStore.GetAppsEstimatesIosEstimatesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ios/estimates"),
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
        errorFactory: AppStore.GetAppsEstimatesIosEstimatesGetError,
      },
      options,
    );
  }

  /**
   * Aggregate App Store developers by HQ country
   *
   * @remarks
   * Per-country totals over all App Store developers: developer count, published apps, and sums of
   * monthly downloads/revenue estimates. The category_type split assigns each developer's totals to
   * their dominant category type. Sorted by downloads descending.
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.GetCountryAggregatesIosAggregatesCountriesGetError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCountryAggregatesIosAggregatesCountriesGet(
    request: AppStore.GetCountryAggregatesIosAggregatesCountriesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DevCountryAggregatesResponse, AppStore.GetCountryAggregatesIosAggregatesCountriesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ios/aggregates/countries"),
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
        errorFactory: AppStore.GetCountryAggregatesIosAggregatesCountriesGetError,
      },
      options,
    );
  }

  /**
   * Get App Store developer by ID
   *
   * @remarks
   * Returns the App Store developer record for a single developer id, including the developer's
   * publisher identifiers and headquarters country.
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.GetDeveloperIosDevelopersIdGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDeveloperIosDevelopersIdGet(
    request: AppStore.GetDeveloperIosDevelopersIdGetRequest,
    options?: RequestOptions,
  ): ApiPromise<IosDev, AppStore.GetDeveloperIosDevelopersIdGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ios/developers/{id}"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "fields", value: request.fields, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: iosDevSchema },
        errorFactory: AppStore.GetDeveloperIosDevelopersIdGetError,
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
   * |description_full |string |- |Full Description|
   * |published |boolean |- |Published|
   * |listing_visible |boolean |- |Published in request country|
   * |category |string |- |Сategory|
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
   * |screenshots_duo_inner|[]string|- |iPhone Duo inner display screenshots|
   * |screenshots_duo_outer|[]string|- |iPhone Duo outer display screenshots|
   * |removal_date |date ISO8601|+ |Removal date|
   * |version |string |- |Version|
   * |size |float |- |Size|
   * |rating_count |integer |+ |Ratings|
   * |rating_value |float |+ |Rating in request country|
   * |review_count |integer |+ |Reviews|
   * |rating_avg |float |+ |Rating|
   * |iap |boolean |- |Inapp|
   * |copyright |string |- |Copyright|
   * |seller |string |- |Seller|
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
   * |active_countries|[]string|["US", "DE", "FR"] - List of countries where app is available (At least one country)|
   * |category|string|App Store category: "TRAVEL", "EDUCATION", "GAMES_STRATEGY", "LIFESTYLE" etc|
   * |review_count|ValueRange|{"gte": 1000, "lte": 5000}|
   * |rating_avg|ValueRange|{"gte": 3.5, "lte": 5.0}|
   * |with_ads|boolean|With Ads|
   * |advertised|boolean|Advertised|
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.GetFilterSearchIosAppsQueryPostError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFilterSearchIosAppsQueryPost(
    request: AppStore.GetFilterSearchIosAppsQueryPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<IosAppListResponse, AppStore.GetFilterSearchIosAppsQueryPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ios/apps/query"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => iosAppSearchBodySchema)) },
      },
      {
        success: { kind: "json", schema: iosAppListResponseSchema },
        errorFactory: AppStore.GetFilterSearchIosAppsQueryPostError,
      },
      options,
    );
  }

  /**
   * Get App Store rankings data
   *
   * @remarks
   * Returns App Store chart positions over a date range, filtered by storefront, category,
   * collection and platform. One row per app per chart per day.
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.GetIosRankingsIosRankingsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIosRankingsIosRankingsGet(
    request: AppStore.GetIosRankingsIosRankingsGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<
    ApiResponseListModelsResponsesResponseIosRankingItem,
    AppStore.GetIosRankingsIosRankingsGetError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ios/rankings"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "date_start", value: request.dateStart, schema: s.optional(s.dateOnly()) },
          { name: "date_end", value: request.dateEnd, schema: s.optional(s.dateOnly()) },
          { name: "app", value: request.app, schema: s.optional(s.array(s.int())) },
          {
            name: "platform",
            value: request.platform,
            schema: s.optional(s.array(s.lazy(() => iosPlatformSchema))),
          },
          {
            name: "country",
            value: request.country,
            schema: s.optional(s.array(s.lazy(() => appCountriesSchema))),
          },
          {
            name: "category",
            value: request.category,
            schema: s.optional(s.array(s.lazy(() => iosCategorySchema))),
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
        success: { kind: "json", schema: apiResponseListModelsResponsesResponseIosRankingItemSchema },
        errorFactory: AppStore.GetIosRankingsIosRankingsGetError,
      },
      options,
    );
  }

  /**
   * Get Ios app available countries
   *
   * @remarks
   * This query returns the list of App Store storefronts available as a `country` parameter.
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.GetPlayAppCountriesIosInfoCountriesGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlayAppCountriesIosInfoCountriesGet(
    options?: RequestOptions,
  ): ApiPromise<StoreCountries, AppStore.GetPlayAppCountriesIosInfoCountriesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ios/info/countries"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storeCountriesSchema },
        errorFactory: AppStore.GetPlayAppCountriesIosInfoCountriesGetError,
      },
      options,
    );
  }

  /**
   * Get Ios app available languages
   *
   * @remarks
   * This query returns the list of metadata languages available as a `language` parameter.
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.GetPlayAppLanguagesIosInfoLanguagesGetError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPlayAppLanguagesIosInfoLanguagesGet(
    options?: RequestOptions,
  ): ApiPromise<StoreLanguages, AppStore.GetPlayAppLanguagesIosInfoLanguagesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ios/info/languages"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: storeLanguagesSchema },
        errorFactory: AppStore.GetPlayAppLanguagesIosInfoLanguagesGetError,
      },
      options,
    );
  }

  /**
   * Queue a recrawl of an App Store app
   *
   * @remarks
   * Queues a fresh crawl of one App Store app for the given storefront and language. Returns 200
   * once the job is accepted; the updated data appears on the app endpoints after the crawl
   * completes.
   *
   * @returns The recrawl is queued; the body is empty
   *
   * @throws {@link AppStore.GetRecrawlIosAppsIdRecrawlGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecrawlIosAppsIdRecrawlGet(
    request: AppStore.GetRecrawlIosAppsIdRecrawlGetRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AppStore.GetRecrawlIosAppsIdRecrawlGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ios/apps/{id}/recrawl"),
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
        errorFactory: AppStore.GetRecrawlIosAppsIdRecrawlGetError,
      },
      options,
    );
  }

  /**
   * Get App Store app reviews by app ID
   *
   * @remarks
   * Returns user reviews for a single App Store app. Reviews are storefront-specific, so `country`
   * changes which set is returned.
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.GetReviewsIosAppsIdReviewsGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getReviewsIosAppsIdReviewsGet(
    request: AppStore.GetReviewsIosAppsIdReviewsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<IosReview[], AppStore.GetReviewsIosAppsIdReviewsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/ios/apps/{id}/reviews"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "country", value: request.country, schema: s.optional(s.lazy(() => appCountriesSchema)) },
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 10) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => iosReviewSchema)) },
        errorFactory: AppStore.GetReviewsIosAppsIdReviewsGetError,
      },
      options,
    );
  }

  /**
   * Get similar App Store apps
   *
   * @remarks
   * Returns the apps App Store lists as similar to the given app. Set `link` to the reverse
   * direction to get the apps that list the given app as similar to them instead.
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.GetSimilarIosAppsSimilarPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSimilarIosAppsSimilarPost(
    request: AppStore.GetSimilarIosAppsSimilarPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<IosAppListResponse, AppStore.GetSimilarIosAppsSimilarPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ios/apps/similar"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => iosSimilarSearchBodySchema)),
        },
      },
      {
        success: { kind: "json", schema: iosAppListResponseSchema },
        errorFactory: AppStore.GetSimilarIosAppsSimilarPostError,
      },
      options,
    );
  }

  /**
   * Summarise App Store apps matching a filter
   *
   * @remarks
   * Returns aggregate totals for the set of App Store apps matching a structured filter, without
   * returning the apps themselves. Takes the same filter body as `POST /ios/apps/query`.
   *
   * @returns Successful Response
   *
   * @throws {@link AppStore.GetSummaryIosAppsSummaryPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSummaryIosAppsSummaryPost(
    request: AppStore.GetSummaryIosAppsSummaryPostRequest,
    options?: RequestOptions,
  ): ApiPromise<SummaryResponse, AppStore.GetSummaryIosAppsSummaryPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/ios/apps/summary"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: iosSummarySearchBodySchema },
      },
      {
        success: { kind: "json", schema: summaryResponseSchema },
        errorFactory: AppStore.GetSummaryIosAppsSummaryPostError,
      },
      options,
    );
  }
}

export namespace AppStore {
  export type DevFilterSearchIosDevelopersQueryPostRequest = {
    body: IosDevSearchBody;
  };

  export class DevFilterSearchIosDevelopersQueryPostError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosDevelopersQuery401Error1", IosDevelopersQuery401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<DevFilterSearchIosDevelopersQueryPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "iosDevelopersQuery401Error1",
        decode: { kind: "json", schema: iosDevelopersQuery401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type DevSearchIosDevelopersGetRequest = {
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

  export const devSearchIosDevelopersGetRequestSchema: Schema<DevSearchIosDevelopersGetRequest> =
    s.lazySchema(() =>
      s.object<DevSearchIosDevelopersGetRequest>({
        q: s.optional(s.string()),
        fields: s.optional(s.string()),
        sort: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.lte(1000)), 10),
        page: s.defaulted(s.int(), 1),
      }),
    );

  export class DevSearchIosDevelopersGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosDevelopers401Error1", IosDevelopers401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<DevSearchIosDevelopersGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "iosDevelopers401Error1",
        decode: { kind: "json", schema: iosDevelopers401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetAppDetailsIosAppsIdGetRequest = {
    /**
     * App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A
     * store link cannot be passed in the path; pass the id from it
     */
    id: string;
    /** Fields to return separated by comma(,) */
    fields?: string;
    /** Country for which return data. By default: US. */
    country?: AppCountries;
    /** Language of meta data. By default: store default language. */
    language?: AppLanguages;
  };

  export class GetAppDetailsIosAppsIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosApps401Error1", IosApps401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAppDetailsIosAppsIdGetError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 401, kind: "iosApps401Error1", decode: { kind: "json", schema: iosApps401Error1Schema } },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetAppSearchIosAppsGetRequest = {
    /** Word or phrase for search. */
    q?: string;
    /** Country for specific country fields. Default - US. */
    country?: AppCountries;
    /** Fields to return separated by comma(,) */
    fields?: string;
    /** Sort params separated by comma(,) */
    sort?: string;
    /** Count per page @default 10 */
    limit?: number;
    /** Page @default 1 */
    page?: number;
  };

  export const getAppSearchIosAppsGetRequestSchema: Schema<GetAppSearchIosAppsGetRequest> = s.lazySchema(() =>
    s.object<GetAppSearchIosAppsGetRequest>({
      q: s.optional(s.string()),
      country: s.optional(s.lazy(() => appCountriesSchema)),
      fields: s.optional(s.string()),
      sort: s.optional(s.string()),
      limit: s.defaulted(s.int().check(s.lte(1000)), 10),
      page: s.defaulted(s.int(), 1),
    }),
  );

  export class GetAppSearchIosAppsGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosApps401Error1", IosApps401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAppSearchIosAppsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 401, kind: "iosApps401Error1", decode: { kind: "json", schema: iosApps401Error1Schema } },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetAppsEstimatesIosDevelopersIdEstimatesGetRequest = {
    /** Developer's ids to return separated by comma(,) */
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

  export class GetAppsEstimatesIosDevelopersIdEstimatesGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosDevelopersEstimates401Error1", IosDevelopersEstimates401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAppsEstimatesIosDevelopersIdEstimatesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "iosDevelopersEstimates401Error1",
        decode: { kind: "json", schema: iosDevelopersEstimates401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetAppsEstimatesIosEstimatesGetRequest = {
    /**
     * App Store app ids separated by comma(,). Each id is the numeric id (447188370), the id as the
     * store shows it (id447188370) or an App Store link
     * (https://apps.apple.com/us/app/name/id447188370, URL-encoded); whitespace around an id is
     * ignored, and an empty or unrecognised id answers 422
     */
    id: string;
    /** Start date. Format YYYY-MM-DD */
    start?: string;
    /** Start date. Format YYYY-MM-DD */
    end?: string;
  };

  export class GetAppsEstimatesIosEstimatesGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosEstimates401Error1", IosEstimates401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAppsEstimatesIosEstimatesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "iosEstimates401Error1",
        decode: { kind: "json", schema: iosEstimates401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetCountryAggregatesIosAggregatesCountriesGetRequest = {
    /** Restrict to developers with this dominant category type */
    categoryType?: TypeEnum;
  };

  export class GetCountryAggregatesIosAggregatesCountriesGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosAggregatesCountries401Error1", IosAggregatesCountries401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCountryAggregatesIosAggregatesCountriesGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "iosAggregatesCountries401Error1",
        decode: { kind: "json", schema: iosAggregatesCountries401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetDeveloperIosDevelopersIdGetRequest = {
    /** Developer ID */
    id: string;
    /** Fields to return separated by comma(,) */
    fields?: string;
  };

  export class GetDeveloperIosDevelopersIdGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosDevelopers401Error1", IosDevelopers401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDeveloperIosDevelopersIdGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "iosDevelopers401Error1",
        decode: { kind: "json", schema: iosDevelopers401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetFilterSearchIosAppsQueryPostRequest = {
    body?: IosAppSearchBody;
  };

  export class GetFilterSearchIosAppsQueryPostError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosAppsQuery401Error1", IosAppsQuery401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFilterSearchIosAppsQueryPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "iosAppsQuery401Error1",
        decode: { kind: "json", schema: iosAppsQuery401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetIosRankingsIosRankingsGetRequest = {
    /** Start date (YYYY-MM-DD) */
    dateStart?: string;
    /** End date (YYYY-MM-DD) */
    dateEnd?: string;
    /** App IDs (comma-separated) */
    app?: number[];
    /** Platforms (iPhone/iPad, comma-separated) */
    platform?: IosPlatform[];
    /** Country codes (comma-separated) */
    country?: AppCountries[];
    /** App categories (comma-separated) */
    category?: IosCategory[];
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

  export const getIosRankingsIosRankingsGetRequestSchema: Schema<GetIosRankingsIosRankingsGetRequest> =
    s.lazySchema(() =>
      s.object<GetIosRankingsIosRankingsGetRequest>({
        dateStart: s.optional(s.dateOnly()),
        dateEnd: s.optional(s.dateOnly()),
        app: s.optional(s.array(s.int())),
        platform: s.optional(s.array(s.lazy(() => iosPlatformSchema))),
        country: s.optional(s.array(s.lazy(() => appCountriesSchema))),
        category: s.optional(s.array(s.lazy(() => iosCategorySchema))),
        collection: s.optional(s.array(s.lazy(() => collectionSchema))),
        rankStart: s.optional(s.int().check(s.gte(1))),
        rankEnd: s.optional(s.int().check(s.lte(10000))),
        limit: s.defaulted(s.int().check(s.lte(1000)), 10),
        page: s.defaulted(s.int(), 1),
      }),
    );

  export class GetIosRankingsIosRankingsGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosRankings401Error1", IosRankings401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIosRankingsIosRankingsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 401, kind: "iosRankings401Error1", decode: { kind: "json", schema: iosRankings401Error1Schema } },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export class GetPlayAppCountriesIosInfoCountriesGetError extends ApiError {
    declare readonly payload:
      | Declared<"iosInfoCountries401Error1", IosInfoCountries401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlayAppCountriesIosInfoCountriesGetError> = [
      {
        on: 401,
        kind: "iosInfoCountries401Error1",
        decode: { kind: "json", schema: iosInfoCountries401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export class GetPlayAppLanguagesIosInfoLanguagesGetError extends ApiError {
    declare readonly payload:
      | Declared<"iosInfoLanguages401Error1", IosInfoLanguages401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPlayAppLanguagesIosInfoLanguagesGetError> = [
      {
        on: 401,
        kind: "iosInfoLanguages401Error1",
        decode: { kind: "json", schema: iosInfoLanguages401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetRecrawlIosAppsIdRecrawlGetRequest = {
    /**
     * App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A
     * store link cannot be passed in the path; pass the id from it
     */
    id: string;
    /** Country for which return data. By default: US. @default AppCountries.Us */
    country?: AppCountries;
    /** Language of meta data. By default: en_US @default AppLanguages.EnUs */
    language?: AppLanguages;
  };

  export class GetRecrawlIosAppsIdRecrawlGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosAppsRecrawl401Error1", IosAppsRecrawl401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRecrawlIosAppsIdRecrawlGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "iosAppsRecrawl401Error1",
        decode: { kind: "json", schema: iosAppsRecrawl401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetReviewsIosAppsIdReviewsGetRequest = {
    /**
     * App Store app id: the numeric id (447188370) or the id as the store shows it (id447188370). A
     * store link cannot be passed in the path; pass the id from it
     */
    id: string;
    /** App storefront */
    country?: AppCountries;
    /** Fields to return separated by comma(,) */
    fields?: string;
    /** Count of reviews per page @default 10 */
    limit?: number;
    /** Sort params separated by comma(,) */
    sort?: string;
  };

  export const getReviewsIosAppsIdReviewsGetRequestSchema: Schema<GetReviewsIosAppsIdReviewsGetRequest> =
    s.lazySchema(() =>
      s.object<GetReviewsIosAppsIdReviewsGetRequest>({
        id: s.string(),
        country: s.optional(s.lazy(() => appCountriesSchema)),
        fields: s.optional(s.string()),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(1000)), 10),
        sort: s.optional(s.string()),
      }),
    );

  export class GetReviewsIosAppsIdReviewsGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosAppsReviews401Error1", IosAppsReviews401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetReviewsIosAppsIdReviewsGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "iosAppsReviews401Error1",
        decode: { kind: "json", schema: iosAppsReviews401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetSimilarIosAppsSimilarPostRequest = {
    body?: IosSimilarSearchBody;
  };

  export class GetSimilarIosAppsSimilarPostError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosAppsSimilar401Error1", IosAppsSimilar401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSimilarIosAppsSimilarPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "iosAppsSimilar401Error1",
        decode: { kind: "json", schema: iosAppsSimilar401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetSummaryIosAppsSummaryPostRequest = {
    body: IosSummarySearchBody;
  };

  export class GetSummaryIosAppsSummaryPostError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosAppsSummary401Error1", IosAppsSummary401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSummaryIosAppsSummaryPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "iosAppsSummary401Error1",
        decode: { kind: "json", schema: iosAppsSummary401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
