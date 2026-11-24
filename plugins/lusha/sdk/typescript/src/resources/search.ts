import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  v3CompaniesSearchRequestInternalSchema,
  type V3CompaniesSearchRequest,
} from "../models/v3-companies-search-request.js";
import {
  v3CompaniesSearchResponseSchema,
  type V3CompaniesSearchResponse,
} from "../models/v3-companies-search-response.js";
import {
  v3ContactsSearchRequestInternalSchema,
  type V3ContactsSearchRequest,
} from "../models/v3-contacts-search-request.js";
import {
  v3ContactsSearchResponseSchema,
  type V3ContactsSearchResponse,
} from "../models/v3-contacts-search-response.js";
import type { Servers } from "../servers.js";

/**
 * **Search APIs:** Find contacts or companies using known identifiers.
 *
 * Look up contacts by `id`, `linkedinUrl`, `email`, or `firstName` + `lastName` +
 * `companyName`/`companyDomain`. Look up companies by `id`, `name`, or `domain`.
 *
 * Returns a non-PII preview of each profile with a `has` field listing available data points and a
 * `canReveal` field showing what can be unlocked via Enrich.
 *
 * > **Billing:** Charged per successful result via the `api_search` action.
 */
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
   * Search Companies
   *
   * @remarks
   * Look up companies by identifier. Returns a preview of each company profile.
   *
   * **Accepted identifiers (at least one required per company):**
   * - Lusha company `id`
   * - `name`
   * - `domain`
   *
   * Up to 100 companies per request. Each result includes a `has` field listing the data available
   * via Enrich Companies.
   *
   * Pass a `signals` filter to narrow results to companies showing specific activity (e.g.
   * headcount growth, hiring surge).
   *
   * > **Billing:** Charged per successful result via the `api_search` action.
   *
   * @returns Successful response
   *
   * @throws {@link Search.SearchCompaniesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCompanies(
    request: Search.SearchCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<V3CompaniesSearchResponse, Search.SearchCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/companies/search"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3CompaniesSearchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3CompaniesSearchResponseSchema },
        errorFactory: Search.SearchCompaniesError,
      },
      options,
    );
  }

  /**
   * Search Contacts
   *
   * @remarks
   * Look up contacts by identifier. Returns a non-PII preview of each profile — no emails or phone
   * numbers.
   *
   * **Accepted identifiers (one required per contact):**
   * - Lusha contact `id`
   * - `linkedinUrl`
   * - `email`
   * - `firstName` + `lastName` + `companyName` or `companyDomain`
   *
   * Up to 100 contacts per request. Each result includes:
   * - `has` — data points available on this profile
   * - `canReveal` — what you can unlock via Enrich Contacts, and the credit cost
   *
   * Pass a `signals` filter to narrow results to contacts with recent activity (e.g. promotion, job
   * change).
   *
   * > **Billing:** Charged per successful result via the `api_search` action.
   *
   * @returns Successful response
   *
   * @throws {@link Search.SearchContactsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchContacts(
    request: Search.SearchContactsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ContactsSearchResponse, Search.SearchContactsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/contacts/search"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3ContactsSearchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3ContactsSearchResponseSchema },
        errorFactory: Search.SearchContactsError,
      },
      options,
    );
  }
}

export namespace Search {
  export type SearchCompaniesRequest = {
    body: V3CompaniesSearchRequest;
  };

  export class SearchCompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchCompaniesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchContactsRequest = {
    body: V3ContactsSearchRequest;
  };

  export class SearchContactsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchContactsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
