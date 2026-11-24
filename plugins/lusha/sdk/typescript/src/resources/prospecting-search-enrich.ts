import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { companyEnrichRequestSchema, type CompanyEnrichRequest } from "../models/company-enrich-request.js";
import {
  companyEnrichResponseInternalSchema,
  type CompanyEnrichResponse,
} from "../models/company-enrich-response.js";
import {
  companySearchRequestInternalSchema,
  type CompanySearchRequest,
} from "../models/company-search-request.js";
import {
  companySearchResponseSchema,
  type CompanySearchResponse,
} from "../models/company-search-response.js";
import { contactEnrichRequestSchema, type ContactEnrichRequest } from "../models/contact-enrich-request.js";
import {
  contactEnrichResponseSchema,
  type ContactEnrichResponse,
} from "../models/contact-enrich-response.js";
import {
  contactSearchRequestInternalSchema,
  type ContactSearchRequest,
} from "../models/contact-search-request.js";
import {
  contactSearchResponseSchema,
  type ContactSearchResponse,
} from "../models/contact-search-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * With Lusha's Prospecting API, you can query Lusha's extensive database based on specific criteria
 * (such as job title, seniority, location, and more) to retrieve detailed contact and company
 * information.
 */
export class ProspectingSearchEnrich {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Enrich Companies
   *
   * @remarks
   * Enrich companies from search results. This is step 3 of the prospecting process.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/prospecting/company/enrich**
   *
   * @returns Enriched company data
   *
   * @throws {@link ProspectingSearchEnrich.EnrichProspectingCompaniesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enrichProspectingCompanies(
    request: ProspectingSearchEnrich.EnrichProspectingCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyEnrichResponse, ProspectingSearchEnrich.EnrichProspectingCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/prospecting/company/enrich"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companyEnrichRequestSchema },
      },
      {
        success: { kind: "json", schema: companyEnrichResponseInternalSchema },
        errorFactory: ProspectingSearchEnrich.EnrichProspectingCompaniesError,
      },
      options,
    );
  }

  /**
   * Enrich Contacts
   *
   * @remarks
   * Enrich contacts from search results. This is step 3 of the prospecting process.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/prospecting/contact/enrich** ---
   *
   * ⚠️ **Important Notice - Unified Credits Plan Required**
   *
   * | Parameter | Requirement |
   * |-----------|-------------|
   * | `revealEmails` and `revealPhones` | Only available to customers on the **Unified Credits** pricing plan |
   * | Plan Restriction | Attempting to use these parameters on other plans will result in a **403 Unauthorized** error |
   * | Default Behavior | When neither parameter is used, the API returns **both email addresses and phone numbers**, if available |
   *
   * ---
   *
   * @returns Enriched contact data
   *
   * @throws {@link ProspectingSearchEnrich.EnrichProspectingContactsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  enrichProspectingContacts(
    request: ProspectingSearchEnrich.EnrichProspectingContactsRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactEnrichResponse, ProspectingSearchEnrich.EnrichProspectingContactsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/prospecting/contact/enrich"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactEnrichRequestSchema },
      },
      {
        success: { kind: "json", schema: contactEnrichResponseSchema },
        errorFactory: ProspectingSearchEnrich.EnrichProspectingContactsError,
      },
      options,
    );
  }

  /**
   * Search Companies
   *
   * @remarks
   * Search for companies using various filters. This is step 2 of the prospecting process.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/prospecting/company/search** ---
   *
   * ##### Signal Filtering (Premium Feature)
   * Filter companies by signal types to identify those with recent business events and changes.
   *
   * > **Note:** This is a premium feature. Credits are charged for each signal type that returns
   * results.
   *
   * @returns Search results with company IDs
   *
   * @throws {@link ProspectingSearchEnrich.SearchProspectingCompaniesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchProspectingCompanies(
    request: ProspectingSearchEnrich.SearchProspectingCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanySearchResponse, ProspectingSearchEnrich.SearchProspectingCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/prospecting/company/search"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companySearchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: companySearchResponseSchema },
        errorFactory: ProspectingSearchEnrich.SearchProspectingCompaniesError,
      },
      options,
    );
  }

  /**
   * Search Contacts
   *
   * @remarks
   * Search for contacts using various filters. This is step 2 of the prospecting process.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/prospecting/contact/search** ---
   * ##### Signal Filtering (Premium Feature)
   * Filter contacts by signal types to find prospects at key career moments.
   *
   * > **Note:** This is a premium feature. Credits are charged for each signal type that returns
   * results.
   *
   * ---
   * ##### DNC Filtering (Scale Feature)
   * Use `excludeDnc: true` at the top level of the request body to filter out contacts whose phone
   * numbers are all marked Do Not Call.
   * - Contacts with **at least one callable phone** appear in results - Only callable phones are
   *   shown — DNC phones are hidden - Contacts with **only DNC phones** are excluded entirely >
   *   **Note**: Returns **403** on unsupported plans.
   *
   * @returns Search results with contact IDs
   *
   * @throws {@link ProspectingSearchEnrich.SearchProspectingContactsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchProspectingContacts(
    request: ProspectingSearchEnrich.SearchProspectingContactsRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactSearchResponse, ProspectingSearchEnrich.SearchProspectingContactsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/prospecting/contact/search"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactSearchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: contactSearchResponseSchema },
        errorFactory: ProspectingSearchEnrich.SearchProspectingContactsError,
      },
      options,
    );
  }
}

export namespace ProspectingSearchEnrich {
  export type EnrichProspectingCompaniesRequest = {
    body: CompanyEnrichRequest;
  };

  export class EnrichProspectingCompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnrichProspectingCompaniesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type EnrichProspectingContactsRequest = {
    body: ContactEnrichRequest;
  };

  export class EnrichProspectingContactsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<EnrichProspectingContactsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchProspectingCompaniesRequest = {
    body: CompanySearchRequest;
  };

  export class SearchProspectingCompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchProspectingCompaniesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchProspectingContactsRequest = {
    body: ContactSearchRequest;
  };

  export class SearchProspectingContactsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchProspectingContactsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
