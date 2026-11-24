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
  v3ProspectingCompaniesRequestInternalSchema,
  type V3ProspectingCompaniesRequest,
} from "../models/v3-prospecting-companies-request.js";
import {
  v3ProspectingCompaniesResponseSchema,
  type V3ProspectingCompaniesResponse,
} from "../models/v3-prospecting-companies-response.js";
import {
  v3ProspectingContactsRequestInternalSchema,
  type V3ProspectingContactsRequest,
} from "../models/v3-prospecting-contacts-request.js";
import {
  v3ProspectingContactsResponseSchema,
  type V3ProspectingContactsResponse,
} from "../models/v3-prospecting-contacts-response.js";
import type { Servers } from "../servers.js";

/**
 * **Prospecting APIs:** Filter-based search for contacts and companies.
 */
export class Prospecting {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Prospecting Companies
   *
   * @remarks
   * Search for companies that match your target market using rich filter criteria.
   *
   * **Filter by:**
   * - Size, revenue range, industry, sub-industry
   * - Technologies in use
   * - Locations (HQ country, state, city)
   * - SIC and NAICS codes
   * - Buyer intent topics
   * - Signal activity (headcount changes, hiring surges, news events, LinkedIn activity intent)
   *
   * Use the returned company `id` values with Enrich Companies to get full firmographic data.
   *
   * > **Billing:** Charged per result via `api_search`. If signals are requested, an additional
   * charge applies per matched signal per result.
   *
   * > **Persisting to a table:** Pass `tableId` to also persist matching results into an existing
   * table. This is additive — the primary response is unchanged, and a `tableWrite` object is added
   * showing what happened on the table side. See Companies Tables.
   *
   * @returns Successful response
   *
   * @throws {@link Prospecting.ProspectingCompaniesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  prospectingCompanies(
    request: Prospecting.ProspectingCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ProspectingCompaniesResponse, Prospecting.ProspectingCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/companies/prospecting"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3ProspectingCompaniesRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3ProspectingCompaniesResponseSchema },
        errorFactory: Prospecting.ProspectingCompaniesError,
      },
      options,
    );
  }

  /**
   * Prospecting Contacts
   *
   * @remarks
   * Search for contacts that match your Ideal Customer Profile using rich filter criteria.
   *
   * **Filter by contact attributes:**
   * - Job title, seniority, department
   * - Location (city, state, country, continent)
   * - Existing data points (e.g. only contacts with a known work email)
   * - Signal activity (promotion, job change)
   *
   * **Filter by company attributes:**
   * - Size, revenue, industry, technologies
   * - Location, intent topics, funding
   *
   * Use the returned contact `id` values with Enrich Contacts to reveal emails and phones.
   *
   * > **Billing:** Charged per result via `api_search`. If signals are requested, an additional
   * charge applies per matched signal per result.
   *
   * > **Persisting to a table:** Pass `tableId` to also persist matching results into an existing
   * table. This is additive — the primary response is unchanged, and a `tableWrite` object is added
   * showing what happened on the table side. See Contacts Tables.
   *
   * @returns Successful response
   *
   * @throws {@link Prospecting.ProspectingContactsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  prospectingContacts(
    request: Prospecting.ProspectingContactsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ProspectingContactsResponse, Prospecting.ProspectingContactsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/contacts/prospecting"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3ProspectingContactsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3ProspectingContactsResponseSchema },
        errorFactory: Prospecting.ProspectingContactsError,
      },
      options,
    );
  }
}

export namespace Prospecting {
  export type ProspectingCompaniesRequest = {
    body: V3ProspectingCompaniesRequest;
  };

  export class ProspectingCompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProspectingCompaniesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ProspectingContactsRequest = {
    body: V3ProspectingContactsRequest;
  };

  export class ProspectingContactsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ProspectingContactsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
