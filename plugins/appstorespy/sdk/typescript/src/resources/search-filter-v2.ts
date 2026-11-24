import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { iosAppListResponseSchema, type IosAppListResponse } from "../models/ios-app-list-response.js";
import { iosAppSearchBodySchema, type IosAppSearchBody } from "../models/ios-app-search-body.js";
import {
  iosAppsQuery401Error1Schema,
  type IosAppsQuery401Error1,
} from "../models/ios-apps-query401-error1.js";
import type { Servers } from "../servers.js";

/**
 * Structured filter search: a JSON filter body with field selection, paging and sorting.
 */
export class SearchFilterV2 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
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
   * @throws {@link SearchFilterV2.GetFilterSearchIosAppsQueryPost2Error} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFilterSearchIosAppsQueryPost2(
    request: SearchFilterV2.GetFilterSearchIosAppsQueryPost2Request = {},
    options?: RequestOptions,
  ): ApiPromise<IosAppListResponse, SearchFilterV2.GetFilterSearchIosAppsQueryPost2Error> {
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
        errorFactory: SearchFilterV2.GetFilterSearchIosAppsQueryPost2Error,
      },
      options,
    );
  }
}

export namespace SearchFilterV2 {
  export type GetFilterSearchIosAppsQueryPost2Request = {
    body?: IosAppSearchBody;
  };

  export class GetFilterSearchIosAppsQueryPost2Error extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"iosAppsQuery401Error1", IosAppsQuery401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFilterSearchIosAppsQueryPost2Error> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      {
        on: 401,
        kind: "iosAppsQuery401Error1",
        decode: { kind: "json", schema: iosAppsQuery401Error1Schema },
      },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
