import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  companyLookalikesRequestInternalSchema,
  type CompanyLookalikesRequest,
} from "../models/company-lookalikes-request.js";
import {
  companyLookalikesRequest2InternalSchema,
  type CompanyLookalikesRequest2,
} from "../models/company-lookalikes-request2.js";
import {
  companyLookalikesResponseSchema,
  type CompanyLookalikesResponse,
} from "../models/company-lookalikes-response.js";
import {
  companyLookalikesResponse2InternalSchema,
  type CompanyLookalikesResponse2,
} from "../models/company-lookalikes-response2.js";
import {
  contactLookalikesRequestInternalSchema,
  type ContactLookalikesRequest,
} from "../models/contact-lookalikes-request.js";
import {
  contactLookalikesRequest2InternalSchema,
  type ContactLookalikesRequest2,
} from "../models/contact-lookalikes-request2.js";
import {
  contactLookalikesResponseSchema,
  type ContactLookalikesResponse,
} from "../models/contact-lookalikes-response.js";
import {
  contactLookalikesResponse2InternalSchema,
  type ContactLookalikesResponse2,
} from "../models/contact-lookalikes-response2.js";
import {
  dedupeSessionInvalidErrorSchema,
  type DedupeSessionInvalidError,
} from "../models/dedupe-session-invalid-error.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * **Lookalike APIs:** Use AI-powered recommendations to discover contacts and companies similar to
 * your best existing customers. The Contact Lookalikes and Company Lookalikes endpoints return
 * paginated results you can pipe directly into Enrich for full data.
 *
 * Pass `tableId` to also persist matching results into an existing table. See Contacts Tables or
 * Companies Tables.
 */
export class Lookalikes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Company Lookalikes
   *
   * @remarks
   * Find companies similar to a set of seed companies using AI-powered recommendations.
   *
   * Provide 5-100 seed companies via domains or LinkedIn URLs. The API returns companies with
   * similar size, industry, and profile.
   *
   * **Pagination without duplicates:** On your first request, omit `dedupeSessionId` — the server
   * generates one and returns it. Pass it on every subsequent request to get more results without
   * repeating companies already seen. Sessions are retained for 30 days.
   *
   * Use the `exclude` field to always filter out specific companies (e.g. existing customers or
   * competitors).
   *
   * Results are lightweight previews. Use Enrich Companies with the returned `id` to get full
   * firmographic data.
   *
   * > **Billing:** Charged per result via the `lookalikeCompany` action.
   *
   * > **Persisting to a table:** Pass `tableId` to also persist matching results into an existing
   * table. See Companies Tables.
   *
   * @returns Successfully retrieved company lookalikes
   *
   * @throws {@link Lookalikes.GetCompanyLookalikesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanyLookalikes(
    request: Lookalikes.GetCompanyLookalikesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyLookalikesResponse, Lookalikes.GetCompanyLookalikesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/companies/lookalike"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companyLookalikesRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: companyLookalikesResponseSchema },
        errorFactory: Lookalikes.GetCompanyLookalikesError,
      },
      options,
    );
  }

  /**
   * Contact Lookalikes
   *
   * @remarks
   * Find contacts similar to a set of seed contacts using AI-powered recommendations.
   *
   * Provide 5-100 seed contacts via LinkedIn URLs, emails, Lusha IDs, or name + company. The API
   * returns contacts who share similar roles, seniority, and company profiles.
   *
   * **Pagination without duplicates:** On your first request, omit `dedupeSessionId` — the server
   * generates one and returns it. Pass it on every subsequent request to get more results without
   * repeating contacts already seen. Sessions are retained for 30 days.
   *
   * Use the `exclude` field to always filter out specific contacts (e.g. existing customers).
   *
   * Results are lightweight previews. Use Enrich Contacts with the returned `id` to get emails and
   * phones.
   *
   * > **Billing:** Charged per result via the `lookalikeContact` action.
   *
   * > **Persisting to a table:** Pass `tableId` to also persist matching results into an existing
   * table. See Contacts Tables.
   *
   * @returns Successfully retrieved contact lookalikes
   *
   * @throws {@link Lookalikes.GetContactLookalikesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactLookalikes(
    request: Lookalikes.GetContactLookalikesRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactLookalikesResponse, Lookalikes.GetContactLookalikesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/contacts/lookalike"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactLookalikesRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: contactLookalikesResponseSchema },
        errorFactory: Lookalikes.GetContactLookalikesError,
      },
      options,
    );
  }

  /**
   * Company Lookalikes
   *
   * @remarks
   * Returns company lookalikes based on seed companies.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/v3/lookalike/companies**
   *
   * #### How It Works
   *
   * **First Request (Start a New Run):**
   * - Do not send `dedupeSessionId`
   * - Server generates one and returns it in the response
   * - Use returned `dedupeSessionId` for subsequent "get more" requests
   *
   * **Subsequent Requests ("Get More"):**
   * - Send the returned `dedupeSessionId` to fetch more results without duplicates
   * - Server uses `dedupeSessionId` to deduplicate companies already returned
   * - Session history retained for 30 days from last activity (sliding window) ---
   *
   * @returns Successfully retrieved company lookalikes
   *
   * @throws {@link Lookalikes.PostV3LookalikeCompaniesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postV3LookalikeCompanies(
    request: Lookalikes.PostV3LookalikeCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyLookalikesResponse2, Lookalikes.PostV3LookalikeCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/lookalike/companies"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companyLookalikesRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: companyLookalikesResponse2InternalSchema },
        errorFactory: Lookalikes.PostV3LookalikeCompaniesError,
      },
      options,
    );
  }

  /**
   * Contact Lookalikes
   *
   * @remarks
   * Returns contact lookalikes based on seed contacts.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/v3/lookalike/contacts**
   *
   * #### How It Works
   *
   * **First Request (Start a New Run):**
   * - Do not send `dedupeSessionId`
   * - Server generates one and returns it in the response
   * - Use returned `dedupeSessionId` for subsequent "get more" requests
   *
   * **Subsequent Requests ("Get More"):**
   * - Send the returned `dedupeSessionId` to fetch more results without duplicates
   * - Server dedupes against all contacts previously returned for the `dedupeSessionId`
   * - User-provided `exclude.*` is applied on every request and combined with server-side dedupe
   * - Session history retained for 30 days from last activity (sliding window) ---
   *
   * @returns Successfully retrieved contact lookalikes
   *
   * @throws {@link Lookalikes.PostV3LookalikeContactsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postV3LookalikeContacts(
    request: Lookalikes.PostV3LookalikeContactsRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactLookalikesResponse2, Lookalikes.PostV3LookalikeContactsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/lookalike/contacts"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactLookalikesRequest2InternalSchema },
      },
      {
        success: { kind: "json", schema: contactLookalikesResponse2InternalSchema },
        errorFactory: Lookalikes.PostV3LookalikeContactsError,
      },
      options,
    );
  }
}

export namespace Lookalikes {
  export type GetCompanyLookalikesRequest = {
    body: CompanyLookalikesRequest;
  };

  export class GetCompanyLookalikesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error402", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanyLookalikesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 410, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetContactLookalikesRequest = {
    body: ContactLookalikesRequest;
  };

  export class GetContactLookalikesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error402", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"dedupeSessionInvalidError", DedupeSessionInvalidError>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContactLookalikesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 410,
        kind: "dedupeSessionInvalidError",
        decode: { kind: "json", schema: dedupeSessionInvalidErrorSchema },
      },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostV3LookalikeCompaniesRequest = {
    body: CompanyLookalikesRequest2;
  };

  export class PostV3LookalikeCompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error402", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostV3LookalikeCompaniesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 410, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostV3LookalikeContactsRequest = {
    body: ContactLookalikesRequest2;
  };

  export class PostV3LookalikeContactsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"error402", undefined>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"dedupeSessionInvalidError", DedupeSessionInvalidError>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostV3LookalikeContactsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "error402", decode: { kind: "empty" } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      {
        on: 410,
        kind: "dedupeSessionInvalidError",
        decode: { kind: "json", schema: dedupeSessionInvalidErrorSchema },
      },
      { on: 500, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
