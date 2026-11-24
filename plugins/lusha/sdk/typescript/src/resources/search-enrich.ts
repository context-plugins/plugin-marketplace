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
  v3CompaniesSearchAndEnrichRequestInternalSchema,
  type V3CompaniesSearchAndEnrichRequest,
} from "../models/v3-companies-search-and-enrich-request.js";
import {
  v3CompaniesSearchAndEnrichResponseInternalSchema,
  type V3CompaniesSearchAndEnrichResponse,
} from "../models/v3-companies-search-and-enrich-response.js";
import {
  v3ContactsSearchAndEnrichRequestInternalSchema,
  type V3ContactsSearchAndEnrichRequest,
} from "../models/v3-contacts-search-and-enrich-request.js";
import {
  v3ContactsSearchAndEnrichResponseInternalSchema,
  type V3ContactsSearchAndEnrichResponse,
} from "../models/v3-contacts-search-and-enrich-response.js";
import type { Servers } from "../servers.js";

/**
 * **Search & Enrich APIs:** Find and retrieve full contact or company data in a single call.
 *
 * Combines Search and Enrich into one request. Provide identifiers and control what gets revealed
 * via the `reveal` field.
 *
 * > **Billing:** Two charges apply — one for the search (`api_search`) and one per revealed field.
 */
export class SearchEnrich {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search and Enrich Companies
   *
   * @remarks
   * Find companies and reveal their full data in a single call. Combines Search and Enrich into one
   * request.
   *
   * Provide company identifiers the same way you would for Search Companies. Up to 100 companies
   * per request.
   *
   * > **Billing:** Same as Enrich Companies — charged per successful result via the
   * `reveal_company` action.
   *
   * @returns Successful response
   *
   * @throws {@link SearchEnrich.SearchAndEnrichCompaniesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchAndEnrichCompanies(
    request: SearchEnrich.SearchAndEnrichCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<V3CompaniesSearchAndEnrichResponse, SearchEnrich.SearchAndEnrichCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/companies/search-and-enrich"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3CompaniesSearchAndEnrichRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3CompaniesSearchAndEnrichResponseInternalSchema },
        errorFactory: SearchEnrich.SearchAndEnrichCompaniesError,
      },
      options,
    );
  }

  /**
   * Search and Enrich Contacts
   *
   * @remarks
   * Find contacts and reveal their full data in a single call. Combines Search and Enrich into one
   * request.
   *
   * Provide contact identifiers the same way you would for Search Contacts. Use the `reveal` field
   * to control what gets unlocked (`emails`, `phones`, or both).
   *
   * Up to 100 contacts per request.
   *
   * > **Billing:** Two charges apply — one for the search (`api_search`) and one per revealed
   * field. The `billing.creditsCharged` in the response reflects the total.
   *
   * @returns Successful response
   *
   * @throws {@link SearchEnrich.SearchAndEnrichContactsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchAndEnrichContacts(
    request: SearchEnrich.SearchAndEnrichContactsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ContactsSearchAndEnrichResponse, SearchEnrich.SearchAndEnrichContactsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/contacts/search-and-enrich"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3ContactsSearchAndEnrichRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3ContactsSearchAndEnrichResponseInternalSchema },
        errorFactory: SearchEnrich.SearchAndEnrichContactsError,
      },
      options,
    );
  }
}

export namespace SearchEnrich {
  export type SearchAndEnrichCompaniesRequest = {
    body: V3CompaniesSearchAndEnrichRequest;
  };

  export class SearchAndEnrichCompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchAndEnrichCompaniesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchAndEnrichContactsRequest = {
    body: V3ContactsSearchAndEnrichRequest;
  };

  export class SearchAndEnrichContactsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchAndEnrichContactsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
