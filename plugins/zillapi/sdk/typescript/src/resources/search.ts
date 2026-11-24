import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  jobAcceptedZillapiZillowPropertyDataListingsApiSchema,
  type JobAcceptedZillapiZillowPropertyDataListingsApi,
} from "../models/job-accepted-zillapi-zillow-property-data-listings-api.js";
import { searchResultsOkSchema, type SearchResultsOk } from "../models/search-results-ok.js";
import {
  searchWithDetailsRequestInternalSchema,
  type SearchWithDetailsRequest,
} from "../models/search-with-details-request.js";
import { searchRequest2InternalSchema, type SearchRequest2 } from "../models/unions/search-request2.js";
import type { Servers } from "../servers.js";

export class Search {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search listings with filters
   *
   * @remarks
   * Structured listing search using normalized filters (option A) or a pre-built Zillow
   * searchQueryState URL (option B). A `bbox` or `searchUrls` is REQUIRED — a free-text location
   * alone is rejected with 400 invalid_filters and never hits upstream. Sync when maxItems ≤ 50,
   * async (202/job) otherwise. Billed at 1 credit per result returned; failed calls are free.
   *
   * @returns Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as
   * the detail Property shape returned by the property endpoints.
   *
   * @throws {@link Search.SearchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  search(
    request: Search.SearchRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchResultsOk, Search.SearchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: searchResultsOkSchema },
        errorFactory: Search.SearchError,
      },
      options,
    );
  }

  /**
   * Search then enrich with details
   *
   * @remarks
   * Run a search and enrich every matched zpid with the full property-detail record in one chained
   * async job. Always async; the results returned by GET /v1/jobs/{id}/results are detail rows
   * (Property shape), not search rows. Billed per stage: 1 credit per search result plus 1 credit
   * per detail record. Failed calls are free.
   *
   * @returns Async job accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link ZillapiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchWithDetails(
    request: Search.SearchWithDetailsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<JobAcceptedZillapiZillowPropertyDataListingsApi, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/search/with-details"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchWithDetailsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: jobAcceptedZillapiZillowPropertyDataListingsApiSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchRequestParams = {
    body: SearchRequest2;
  };

  export class SearchError extends ApiError {
    declare readonly payload: Declared<"apiErrorModel", ApiErrorModel> | Undeclared;

    static readonly errors: ErrorDecoders<SearchError> = [
      { on: 400, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
    ];
  }

  export type SearchWithDetailsRequestParams = {
    body: SearchWithDetailsRequest;
  };
}
