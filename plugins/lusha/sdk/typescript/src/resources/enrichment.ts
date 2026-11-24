import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bulkPersonResponseSchema, type BulkPersonResponse } from "../models/bulk-person-response.js";
import { companiesBulkRequestSchema, type CompaniesBulkRequest } from "../models/companies-bulk-request.js";
import {
  companyBulkResponseInternalSchema,
  type CompanyBulkResponse,
} from "../models/company-bulk-response.js";
import {
  companySingleResponseInternalSchema,
  type CompanySingleResponse,
} from "../models/company-single-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { filterBySchema, type FilterBy } from "../models/filter-by.js";
import {
  searchBulkContactsRequestSchema,
  type SearchBulkContactsRequest,
} from "../models/search-bulk-contacts-request.js";
import { signalSchema, type Signal } from "../models/signal.js";
import { signal1Schema, type Signal1 } from "../models/signal1.js";
import {
  singleContactResponseSchema,
  type SingleContactResponse,
} from "../models/single-contact-response.js";
import type { Servers } from "../servers.js";

/**
 * **What is enrichment?**
 *
 * Enrichment is the process of adding missing or updated data to existing contact or company
 * records.
 */
export class Enrichment {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search Multiple Companies
   *
   * @remarks
   * Search for multiple companies in a single request. Provide a list of companies with identifiers
   * like domain names or company IDs. >##### Endpoint:
   * ```
   * POST https://api.lusha.com/bulk/company/v2
   * ```
   *
   * >##### Notes:
   * - At least one of `domain`, `company`, or `companyId` is required.
   * - You can process up to 100 companies per request.
   *
   * @returns Bulk company search results
   *
   * @throws {@link Enrichment.SearchMultipleCompaniesV2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchMultipleCompaniesV2(
    request: Enrichment.SearchMultipleCompaniesV2Request,
    options?: RequestOptions,
  ): ApiPromise<Record<string, CompanyBulkResponse>, Enrichment.SearchMultipleCompaniesV2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/company"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companiesBulkRequestSchema },
      },
      {
        success: {
          kind: "json",
          schema: s.record(
            s.string(),
            s.lazy(() => companyBulkResponseInternalSchema),
          ),
        },
        errorFactory: Enrichment.SearchMultipleCompaniesV2Error,
      },
      options,
    );
  }

  /**
   * Search Multiple Contacts
   *
   * @remarks
   * Enrich multiple contacts in a single request. This endpoint allows you to submit a list of
   * contacts and receive enriched data for each one, including company information.
   *
   * >##### Endpoint:
   * ```
   * POST https://api.lusha.com/v2/person
   * ```
   *
   * >##### Notes
   * - You can process up to 100 contacts per request.
   * - Using `personId` provides the most direct way to retrieve contact information.
   * - At least one of `email`, `linkedinUrl`, or `company`/`domain` with `fullName` is required.
   *
   * ---
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
   * @returns The list of enriched contacts with their company details
   *
   * @throws {@link Enrichment.SearchMultipleContactsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchMultipleContacts(
    request: Enrichment.SearchMultipleContactsRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkPersonResponse, Enrichment.SearchMultipleContactsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/person"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchBulkContactsRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkPersonResponseSchema },
        errorFactory: Enrichment.SearchMultipleContactsError,
      },
      options,
    );
  }

  /**
   * Search Single Company
   *
   * @remarks
   * Find detailed information about a single company by using different paramaters. >#####
   * Endpoint:
   * ```
   * GET https://api.lusha.com/v2/company
   * ```
   *
   * >##### Notes:
   * - At least one of `domain`, `company`, or `companyId` is required.
   * - Signal sub-filters (`newsEventTypes`, `hiringByDepartments`, `hiringByLocations`) are not
   *   supported on this endpoint. Use `POST /bulk/company/v2` with the `signalsFilters` parameter
   *   for filtered signal retrieval.
   *
   * @returns Company information retrieved successfully
   *
   * @throws {@link Enrichment.SearchSingleCompanyV2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchSingleCompanyV2(
    request: Enrichment.SearchSingleCompanyV2Request = {},
    options?: RequestOptions,
  ): ApiPromise<CompanySingleResponse, Enrichment.SearchSingleCompanyV2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/company"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "company", value: request.company, schema: s.optional(s.string()) },
          { name: "companyId", value: request.companyId, schema: s.optional(s.string()) },
          {
            name: "signals",
            value: request.signals,
            schema: s.optional(s.array(s.lazy(() => signal1Schema))),
          },
          { name: "signalsStartDate", value: request.signalsStartDate, schema: s.optional(s.dateOnly()) },
          { name: "partialCompany", value: request.partialCompany, schema: s.defaulted(s.boolean(), true) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companySingleResponseInternalSchema },
        errorFactory: Enrichment.SearchSingleCompanyV2Error,
      },
      options,
    );
  }

  /**
   * Search Single Contact
   *
   * @remarks
   * Find and enrich a single contact using various search criteria. You can search by name, email,
   * LinkedIn URL, or Person Id. >##### Endpoint
   * ```
   * GET https://api.lusha.com/v2/person
   * ```
   *
   * >##### Search Requirements You must provide either:
   * - `personId` OR
   * - `email` OR
   * - `linkedinUrl` OR
   * - `firstName` AND `lastName` AND (`companyName` OR `companyDomain`)
   *
   * >##### Notes:
   * - Provide as much information as possible for better results
   * - Using `personId` provides the most direct way to retrieve contact information, as it uniquely
   *   identifies a contact in Lusha's database.
   * - Use `refreshJobInfo=true` to get the latest employment data
   * - Use `filterBy` parameter to specify what contact details you need
   * - Include the `signals` parameter to retriever contact signals (If no signals data is found for
   *   the specified period, the `signals` object will be empty but still present in the response.)
   * - When requesting signals, you can optionally specify a start date using `signalsStartDate`.
   * - Signals data is optional. If you don't include the `signals` parameter, no signals data will
   *   be returned.
   *
   * ---
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
   * @returns Successfully found contact information
   *
   * @throws {@link Enrichment.SearchSingleContactError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchSingleContact(
    request: Enrichment.SearchSingleContactRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SingleContactResponse, Enrichment.SearchSingleContactError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/person"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "firstName", value: request.firstName, schema: s.optional(s.string()) },
          { name: "lastName", value: request.lastName, schema: s.optional(s.string()) },
          { name: "personId", value: request.personId, schema: s.optional(s.string()) },
          { name: "companyName", value: request.companyName, schema: s.optional(s.string()) },
          { name: "companyDomain", value: request.companyDomain, schema: s.optional(s.string()) },
          { name: "email", value: request.email, schema: s.optional(s.string()) },
          { name: "linkedinUrl", value: request.linkedinUrl, schema: s.optional(s.string()) },
          { name: "refreshJobInfo", value: request.refreshJobInfo, schema: s.defaulted(s.boolean(), false) },
          { name: "filterBy", value: request.filterBy, schema: s.optional(s.lazy(() => filterBySchema)) },
          { name: "revealEmails", value: request.revealEmails, schema: s.defaulted(s.boolean(), true) },
          { name: "revealPhones", value: request.revealPhones, schema: s.defaulted(s.boolean(), true) },
          {
            name: "signals",
            value: request.signals,
            schema: s.optional(s.array(s.lazy(() => signalSchema))),
          },
          { name: "signalsStartDate", value: request.signalsStartDate, schema: s.optional(s.dateOnly()) },
          { name: "partialProfile", value: request.partialProfile, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: singleContactResponseSchema },
        errorFactory: Enrichment.SearchSingleContactError,
      },
      options,
    );
  }
}

export namespace Enrichment {
  export type SearchMultipleCompaniesV2Request = {
    body: CompaniesBulkRequest;
  };

  export class SearchMultipleCompaniesV2Error extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchMultipleCompaniesV2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchMultipleContactsRequest = {
    /** The list of contacts to enrich */
    body: SearchBulkContactsRequest;
  };

  export class SearchMultipleContactsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchMultipleContactsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchSingleCompanyV2Request = {
    /** The domain name associated with the company */
    domain?: string;
    /** The name of the company */
    company?: string;
    /** A unique identifier for a Lusha company. */
    companyId?: string;
    /**
     * Array of signal types to retrieve for the company.
     * - `allSignals`: All available signal types
     *
     * > See the Signal Options endpoint for complete list of available signals and their categories
     */
    signals?: Signal1[];
    /**
     * Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not
     * specified.
     */
    signalsStartDate?: string;
    /** Expand coverage with partial company profiles @default true */
    partialCompany?: boolean;
  };

  export class SearchSingleCompanyV2Error extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchSingleCompanyV2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchSingleContactRequest = {
    /** The first name of the person */
    firstName?: string;
    /** The last name of the person */
    lastName?: string;
    /** The unique person identifier in Lusha */
    personId?: string;
    /** The name of the company the person works at */
    companyName?: string;
    /** The domain name of the company */
    companyDomain?: string;
    /** The email address of the person */
    email?: string;
    /** The LinkedIn URL of the person */
    linkedinUrl?: string;
    /**
     * Set to true to refresh and update the job details for the person. This ensures that outdated
     * job information is replaced with the most recent data.
     *
     * @default false
     */
    refreshJobInfo?: boolean;
    /**
     * Filters results based on specific contact details. Available options:
     * - `phoneNumbers`: Only return contacts with phone numbers
     * - `emailAddresses`: Only return contacts with email addresses
     *
     * By default, results will include contacts with at least one contact detail.
     */
    filterBy?: FilterBy;
    /** Set `revealEmails=true` to retrieve only the email address of the contact. @default true */
    revealEmails?: boolean;
    /** Set `revealPhones=true` to retrieve only the phone number of the contact. @default true */
    revealPhones?: boolean;
    /**
     * Array of signal types to retrieve for the contact.
     * - `allSignals`: All available signal types
     * - `promotion`: Promotion signals
     * - `companyChange`: Company change signals
     */
    signals?: Signal[];
    /**
     * Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not
     * specified.
     */
    signalsStartDate?: string;
    /** Search for a single contact with the option to receive a partial profile. @default false */
    partialProfile?: boolean;
  };

  export class SearchSingleContactError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Declared<"errorResponse7", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchSingleContactError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 451, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse7", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
