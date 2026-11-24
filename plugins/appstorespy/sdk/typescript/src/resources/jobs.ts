import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { jobsSearch401Error1Schema, type JobsSearch401Error1 } from "../models/jobs-search401-error1.js";
import { searchCreateInternalSchema, type SearchCreate } from "../models/search-create.js";
import { searchResultInternalSchema, type SearchResult } from "../models/search-result.js";
import { storeSchema, type Store } from "../models/store.js";
import type { Servers } from "../servers.js";

/**
 * Asynchronous keyword crawl jobs: submit a term for a store and country, then poll for the
 * results.
 */
export class Jobs {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a keyword crawl job
   *
   * @remarks
   * Submits a keyword crawl job for one search term in one store and country. Returns the created
   * job immediately; poll `GET /jobs/search` with the returned id to collect the results.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.CreateSearchJobsSearchPostError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSearchJobsSearchPost(
    request: Jobs.CreateSearchJobsSearchPostRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchResult, Jobs.CreateSearchJobsSearchPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/jobs/search"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchCreateInternalSchema },
      },
      {
        success: { kind: "json", schema: searchResultInternalSchema },
        errorFactory: Jobs.CreateSearchJobsSearchPostError,
      },
      options,
    );
  }

  /**
   * List keyword crawl jobs
   *
   * @remarks
   * Lists the keyword crawl jobs you have submitted, filtered by store, term, country or
   * last-updated window. Each result carries the job's current state and, once finished, its
   * results.
   *
   * @returns Successful Response
   *
   * @throws {@link Jobs.GetSearchJobsSearchGetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AppstoreSpyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSearchJobsSearchGet(
    request: Jobs.GetSearchJobsSearchGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SearchResult[], Jobs.GetSearchJobsSearchGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/jobs/search"),
        auth: this.#auth.apiKeyHeader,
        pathParams: [],
        query: [
          { name: "store", value: request.store, schema: s.optional(s.lazy(() => storeSchema)) },
          { name: "term", value: request.term, schema: s.optional(s.string()) },
          { name: "id_user", value: request.idUser, schema: s.optional(s.string()) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "search_id", value: request.searchId, schema: s.optional(s.string()) },
          { name: "updated_gte", value: request.updatedGte, schema: s.optional(s.dateTime()) },
          { name: "updated_lte", value: request.updatedLte, schema: s.optional(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => searchResultInternalSchema)) },
        errorFactory: Jobs.GetSearchJobsSearchGetError,
      },
      options,
    );
  }
}

export namespace Jobs {
  export type CreateSearchJobsSearchPostRequest = {
    body: SearchCreate;
  };

  export class CreateSearchJobsSearchPostError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"jobsSearch401Error1", JobsSearch401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSearchJobsSearchPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 401, kind: "jobsSearch401Error1", decode: { kind: "json", schema: jobsSearch401Error1Schema } },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetSearchJobsSearchGetRequest = {
    store?: Store;
    term?: string;
    idUser?: string;
    country?: string;
    searchId?: string;
    updatedGte?: Date;
    updatedLte?: Date;
  };

  export class GetSearchJobsSearchGetError extends ApiError {
    declare readonly payload:
      | Declared<"httpValidationError", HttpValidationError>
      | Declared<"jobsSearch401Error1", JobsSearch401Error1>
      | Declared<"error402", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSearchJobsSearchGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
      { on: 401, kind: "jobsSearch401Error1", decode: { kind: "json", schema: jobsSearch401Error1Schema } },
      { on: 402, kind: "error402", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
