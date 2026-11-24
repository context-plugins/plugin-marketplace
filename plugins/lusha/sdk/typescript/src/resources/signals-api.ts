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
  apiSignalsFiltersResponseSchema,
  type ApiSignalsFiltersResponse,
} from "../models/api-signals-filters-response.js";
import {
  companySignalTypesResponseSchema,
  type CompanySignalTypesResponse,
} from "../models/company-signal-types-response.js";
import {
  companySignalsByIdRequestInternalSchema,
  type CompanySignalsByIdRequest,
} from "../models/company-signals-by-id-request.js";
import {
  companySignalsByIdResponseInternalSchema,
  type CompanySignalsByIdResponse,
} from "../models/company-signals-by-id-response.js";
import {
  companySignalsSearchRequestInternalSchema,
  type CompanySignalsSearchRequest,
} from "../models/company-signals-search-request.js";
import {
  contactSignalTypesResponseSchema,
  type ContactSignalTypesResponse,
} from "../models/contact-signal-types-response.js";
import {
  contactSignalsByIdRequestInternalSchema,
  type ContactSignalsByIdRequest,
} from "../models/contact-signals-by-id-request.js";
import {
  contactSignalsByIdResponseSchema,
  type ContactSignalsByIdResponse,
} from "../models/contact-signals-by-id-response.js";
import {
  contactSignalsSearchRequestInternalSchema,
  type ContactSignalsSearchRequest,
} from "../models/contact-signals-search-request.js";
import {
  contactSignalsSearchResponseSchema,
  type ContactSignalsSearchResponse,
} from "../models/contact-signals-search-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  filterTypeLushaSignalsApiSchema,
  type FilterTypeLushaSignalsApi,
} from "../models/filter-type-lusha-signals-api.js";
import {
  filterTypesDiscoveryResponseSchema,
  type FilterTypesDiscoveryResponse,
} from "../models/filter-types-discovery-response.js";
import { filterValuesResponseSchema, type FilterValuesResponse } from "../models/filter-values-response.js";
import { objectTypeSchema, type ObjectType } from "../models/object-type.js";
import {
  v3CompanySignalsRequestInternalSchema,
  type V3CompanySignalsRequest,
} from "../models/v3-company-signals-request.js";
import {
  v3CompanySignalsResponseSchema,
  type V3CompanySignalsResponse,
} from "../models/v3-company-signals-response.js";
import {
  v3ContactSignalsRequestInternalSchema,
  type V3ContactSignalsRequest,
} from "../models/v3-contact-signals-request.js";
import {
  v3ContactSignalsResponseSchema,
  type V3ContactSignalsResponse,
} from "../models/v3-contact-signals-response.js";
import {
  v3SignalScoreCompaniesRequestInternalSchema,
  type V3SignalScoreCompaniesRequest,
} from "../models/v3-signal-score-companies-request.js";
import {
  v3SignalScoreCompaniesResponseInternalSchema,
  type V3SignalScoreCompaniesResponse,
} from "../models/v3-signal-score-companies-response.js";
import {
  v3SignalScoreContactsRequestInternalSchema,
  type V3SignalScoreContactsRequest,
} from "../models/v3-signal-score-contacts-request.js";
import {
  v3SignalScoreContactsResponseInternalSchema,
  type V3SignalScoreContactsResponse,
} from "../models/v3-signal-score-contacts-response.js";
import type { Servers } from "../servers.js";

/**
 * Real-world activity data for contacts and companies.
 */
export class SignalsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Company Signal Filter Values
   *
   * @remarks
   * Returns valid values for a single company signal filter type.
   *
   * | Filter type | Query required? |
   * |---|---|
   * | `newsEventTypes` | No |
   * | `hiringByDepartments` | No |
   * | `hiringByLocations` | Yes (2-256 chars) |
   * | `intentCategories` | No — the `query` parameter is not supported for this filter type; passing one returns `400` |
   *
   * @returns Successful response
   *
   * @throws {@link SignalsApi.GetCompanySignalFilterValuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanySignalFilterValues(
    request: SignalsApi.GetCompanySignalFilterValuesRequest,
    options?: RequestOptions,
  ): ApiPromise<FilterValuesResponse, SignalsApi.GetCompanySignalFilterValuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/companies/signals/filters/{filterType}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [
          { name: "filterType", value: request.filterType, schema: filterTypeLushaSignalsApiSchema },
        ],
        query: [{ name: "query", value: request.query, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: filterValuesResponseSchema },
        errorFactory: SignalsApi.GetCompanySignalFilterValuesError,
      },
      options,
    );
  }

  /**
   * Get Company Signal Filters (Discovery)
   *
   * @remarks
   * Returns all available filter types for company signals and whether each requires a search
   * query.
   *
   * @returns Successful response
   *
   * @throws {@link SignalsApi.GetCompanySignalFiltersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanySignalFilters(
    options?: RequestOptions,
  ): ApiPromise<FilterTypesDiscoveryResponse, SignalsApi.GetCompanySignalFiltersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/companies/signals/filters"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: filterTypesDiscoveryResponseSchema },
        errorFactory: SignalsApi.GetCompanySignalFiltersError,
      },
      options,
    );
  }

  /**
   * Score Companies by Signal Activity
   *
   * @remarks
   * Score companies by their active buying signals. Returns the aggregate Signal Score - a `[0, 1]`
   * value reflecting the fraction of the company's active signals - plus the active signal
   * breakdown.
   *
   * Accepts up to 100 companies, each identified by exactly one of `id`, `domain`, `name`, or
   * `email`. All identifiers are resolved to Lusha company IDs server-side before scoring.
   *
   * Each result is one of:
   * - A **scored entry** - `signalScore`, `signalTypes`, and `noActiveSignals`.
   * - A **`NOT_FOUND`** entry - the company service could not resolve the supplied identifier.
   * - A **`NO_SCORE`** entry - the company resolved, but the scoring engine returned nothing for
   *   it.
   *
   * > **Billing:** 1 credit is charged per scored row via `signal_score_company_reveal`. This
   * action is currently limited-availability - while it isn't yet seeded on an account's pricebook,
   * the endpoint stays free (`billing.creditsCharged` is `0`). Error rows (`NOT_FOUND` /
   * `NO_SCORE`) are never charged.
   *
   * @returns Successful response
   *
   * @throws {@link SignalsApi.GetCompanySignalScoresError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanySignalScores(
    request: SignalsApi.GetCompanySignalScoresRequest,
    options?: RequestOptions,
  ): ApiPromise<V3SignalScoreCompaniesResponse, SignalsApi.GetCompanySignalScoresError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/companies/signal-score"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3SignalScoreCompaniesRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3SignalScoreCompaniesResponseInternalSchema },
        errorFactory: SignalsApi.GetCompanySignalScoresError,
      },
      options,
    );
  }

  /**
   * Get Company Signal Types
   *
   * @remarks
   * Returns the full list of supported signal types for companies.
   *
   * @returns Successful response
   *
   * @throws {@link SignalsApi.GetCompanySignalTypesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanySignalTypes(
    options?: RequestOptions,
  ): ApiPromise<CompanySignalTypesResponse, SignalsApi.GetCompanySignalTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/companies/signals/types"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companySignalTypesResponseSchema },
        errorFactory: SignalsApi.GetCompanySignalTypesError,
      },
      options,
    );
  }

  /**
   * Company Signals
   *
   * @remarks
   * Retrieve signal events for a list of companies — hiring activity, headcount changes, web
   * traffic, IT spend, and news.
   *
   * Pass up to 100 company `ids`. Use `signalTypes` to specify which signals to return (or use
   * `allSignals`). Optionally set a `startDate` to limit results to recent activity.
   *
   * > **Billing:** Charged per matched signal per result via the `showSignalsCompany` action.
   *
   * > **Persisting to a table:** Pass `tableId` to also add these companies to an existing table
   * and populate the Signals column. See Companies Tables.
   *
   * @returns Successful response
   *
   * @throws {@link SignalsApi.GetCompanySignalsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanySignals(
    request: SignalsApi.GetCompanySignalsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3CompanySignalsResponse, SignalsApi.GetCompanySignalsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/companies/signals"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3CompanySignalsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3CompanySignalsResponseSchema },
        errorFactory: SignalsApi.GetCompanySignalsError,
      },
      options,
    );
  }

  /**
   * Get Company Signals by IDs
   *
   * @remarks
   * Retrieve signals data for a list of company IDs. This endpoint allows you to get recent
   * activities and signals for up to 100 companies per request.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/api/signals/companies**
   *
   * **Default Behavior:**
   * - Returns signals from the last 6 months by default
   * - Use `startDate` to customize the timeframe
   *
   * @returns Company signals retrieved successfully
   *
   * @throws {@link SignalsApi.GetCompanySignalsByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanySignalsById(
    request: SignalsApi.GetCompanySignalsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanySignalsByIdResponse, SignalsApi.GetCompanySignalsByIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/signals/companies"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companySignalsByIdRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: companySignalsByIdResponseInternalSchema },
        errorFactory: SignalsApi.GetCompanySignalsByIdError,
      },
      options,
    );
  }

  /**
   * Score Contacts by Signal Activity
   *
   * @remarks
   * Score contacts by their active buying signals. Returns the aggregate Signal Score - a `[0, 1]`
   * value - plus the active signal breakdown per contact.
   *
   * Accepts up to 100 contacts. Each contact is resolved to a Lusha person ID and company ID
   * server-side (identity only - no PII is revealed) before scoring. Provide one of:
   * - `id` (encrypted Lusha contact ID)
   * - `linkedinUrl`
   * - `email`
   * - `firstName` + `lastName` + (`companyName` or `companyDomain`)
   *
   * Each result is one of:
   * - A **scored entry** - `signalScore`, `signalTypes`, and `noActiveSignals`.
   * - A **`NOT_FOUND`** entry - identity resolution failed for the supplied identifier.
   * - A **`NO_SCORE`** entry - the contact resolved, but the scoring engine returned nothing for
   *   it.
   *
   * > **Note:** A full outage of the identity-resolution provider is never masked as `NOT_FOUND` -
   * it returns a retryable `502` instead, so callers can retry rather than treating the batch as
   * authoritatively unresolved.
   *
   * > **Billing:** 1 credit is charged per scored row via `signal_score_contact_reveal`. This
   * action is currently limited-availability - while it isn't yet seeded on an account's pricebook,
   * the endpoint stays free (`billing.creditsCharged` is `0`). Error rows (`NOT_FOUND` /
   * `NO_SCORE`) are never charged.
   *
   * @returns Successful response
   *
   * @throws {@link SignalsApi.GetContactSignalScoresError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactSignalScores(
    request: SignalsApi.GetContactSignalScoresRequest,
    options?: RequestOptions,
  ): ApiPromise<V3SignalScoreContactsResponse, SignalsApi.GetContactSignalScoresError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/contacts/signal-score"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3SignalScoreContactsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3SignalScoreContactsResponseInternalSchema },
        errorFactory: SignalsApi.GetContactSignalScoresError,
      },
      options,
    );
  }

  /**
   * Get Contact Signal Types
   *
   * @remarks
   * Returns the full list of supported signal types for contacts.
   *
   * @returns Successful response
   *
   * @throws {@link SignalsApi.GetContactSignalTypesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactSignalTypes(
    options?: RequestOptions,
  ): ApiPromise<ContactSignalTypesResponse, SignalsApi.GetContactSignalTypesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/contacts/signals/types"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contactSignalTypesResponseSchema },
        errorFactory: SignalsApi.GetContactSignalTypesError,
      },
      options,
    );
  }

  /**
   * Contact Signals
   *
   * @remarks
   * Retrieve signal events for a list of contacts — job changes and promotions.
   *
   * Pass up to 100 contact `ids`. Use `signalTypes` to specify which events to return (`promotion`,
   * `companyChange`, or `allSignals`). Optionally set a `startDate` to limit results to recent
   * activity.
   *
   * > **Billing:** Charged per matched signal per result via the `showSignalsContact` action.
   *
   * > **Persisting to a table:** Pass `tableId` to also add these contacts to an existing table and
   * populate the Signals column. See Contacts Tables.
   *
   * @returns Successful response
   *
   * @throws {@link SignalsApi.GetContactSignalsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactSignals(
    request: SignalsApi.GetContactSignalsRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ContactSignalsResponse, SignalsApi.GetContactSignalsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/contacts/signals"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v3ContactSignalsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v3ContactSignalsResponseSchema },
        errorFactory: SignalsApi.GetContactSignalsError,
      },
      options,
    );
  }

  /**
   * Get Contact Signals by IDs
   *
   * @remarks
   * Retrieve signals data for a list of contact IDs. This endpoint allows you to get recent
   * activities and signals for up to 100 contacts per request.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/api/signals/contacts**
   *
   * **Default Behavior:**
   * - Returns signals from the last 6 months by default
   * - Use `startDate` to customize the timeframe
   * - Each signal type requested counts towards credit usage
   *
   * @returns Contact signals retrieved successfully
   *
   * @throws {@link SignalsApi.GetContactSignalsByIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getContactSignalsById(
    request: SignalsApi.GetContactSignalsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactSignalsByIdResponse, SignalsApi.GetContactSignalsByIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/signals/contacts"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactSignalsByIdRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: contactSignalsByIdResponseSchema },
        errorFactory: SignalsApi.GetContactSignalsByIdError,
      },
      options,
    );
  }

  /**
   * Get Signal Options
   *
   * @remarks
   * Retrieve available signal options for a specific entity type (contact or company). This
   * endpoint returns the list of signal types you can filter by when enriching contacts or
   * companies.
   *
   * **Endpoints:**
   *
   * * **Contacts:** `GET /api/signals/filters/contact`
   * * **Companies:** `GET /api/signals/filters/company`
   *
   * #### Available Signal Types
   *
   * #### For contacts:
   *
   * * **`allSignals`** - All available contact signal types
   * * **`promotion`** - Job title promotions
   * * **`companyChange`** - Company changes
   *
   * ---
   *
   * #### For companies:
   *
   * * **`allSignals`** - All available company signal types
   *
   * **Hiring & Workforce:**
   *
   * * **`surgeInHiring`** - Overall hiring activity increase
   * * **`surgeInHiringByDepartment`** - Department-specific hiring surges
   * * **`surgeInHiringByLocation`** - Location-specific hiring surges
   *
   * **Headcount Trends:**
   *
   * | Signal | Description |
   * |--------|-------------|
   * | `headcountIncrease1m` / `headcountDecrease1m` | 1-month employee count changes |
   * | `headcountIncrease3m` / `headcountDecrease3m` | 3-month employee count changes |
   * | `headcountIncrease6m` / `headcountDecrease6m` | 6-month employee count changes |
   * | `headcountIncrease12m` / `headcountDecrease12m` | 12-month employee count changes |
   *
   * **Technology & Digital Presence:**
   *
   * * **`websiteTrafficIncrease`** - Website traffic growth
   * * **`websiteTrafficDecrease`** - Website traffic decline
   * * **`itSpendIncrease`** - IT spending increase
   * * **`itSpendDecrease`** - IT spending decrease
   *
   * **News Events:**
   *
   * To retrieve company news, use one or more of the following category values:
   *
   * | Signal | Included Events |
   * |--------|-----------------|
   * | `commercialActivityNews` | Partnership, New Customer, New Vendor |
   * | `corporateStrategyNews` | M&A, Facilities Expansion, New Location, Facility Closure, Asset Sale, Lawsuit Filed |
   * | `financialEventsNews` | Funding Round, Asset Investment, Strategic Investment, IPO |
   * | `marketIntelligenceNews` | Event Participation, Recognition, Competitor Activity |
   * | `peopleNews` | Executive Hire, Executive Departure, Executive Promotion, Headcount Increase, Headcount Decrease |
   * | `productActivityNews` | Product Launch, Product Development, Product Integration |
   * | `riskNews` | Security Issue, Lawsuit Faced |
   *
   * > The response also includes available values for signal sub-filters:
   *
   * * `newsEventTypes` — available event type values for news signal filtering
   * * `hiringByDepartments` — available department values for hiring surge filtering
   * * `hiringByLocations` — available location values for hiring surge filtering (array of `{
   *   country, state }` objects)
   *
   * @returns List of available signal types for the specified object type
   *
   * @throws {@link SignalsApi.GetSignalOptionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSignalOptions(
    request: SignalsApi.GetSignalOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiSignalsFiltersResponse, SignalsApi.GetSignalOptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/signals/filters/{objectType}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "objectType", value: request.objectType, schema: objectTypeSchema }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiSignalsFiltersResponseSchema },
        errorFactory: SignalsApi.GetSignalOptionsError,
      },
      options,
    );
  }

  /**
   * Search Company Signals
   *
   * @remarks
   * Search for company signals using identifiers like domain, company name, or ID. This endpoint
   * combines search and signal enrichment in a single request.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/api/signals/companies/search**
   *
   * **Search Requirements:** Each company must have at least one identifier:
   * - Company ID (as string)
   * - Company name
   * - Company domain
   *
   * **Default Behavior:**
   * - Returns signals from the last 6 months by default
   * - Companies are matched based on provided identifiers
   *
   * @returns Company signals search results
   *
   * @throws {@link SignalsApi.SearchCompanySignalsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCompanySignals(
    request: SignalsApi.SearchCompanySignalsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanySignalsByIdResponse, SignalsApi.SearchCompanySignalsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/signals/companies/search"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companySignalsSearchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: companySignalsByIdResponseInternalSchema },
        errorFactory: SignalsApi.SearchCompanySignalsError,
      },
      options,
    );
  }

  /**
   * Search Contact Signals
   *
   * @remarks
   * Search for contact signals using identifiers like LinkedIn URL, email, or name + company. This
   * endpoint combines search and signal enrichment in a single request.
   *
   * *Endpoint*: **(POST) https://api.lusha.com/api/signals/contacts/search**
   *
   * **Search Requirements:** Each contact can be identified by:
   * - Contact ID
   * - LinkedIn URL
   * - Email address
   * - Full name + Company (name or domain)
   *
   * **Default Behavior:**
   * - Returns signals from the last 6 months by default
   * - Contacts are matched based on provided identifiers
   * - Returns both contact data and associated signals
   *
   * @returns Contact signals search results
   *
   * @throws {@link SignalsApi.SearchContactSignalsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LushaError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchContactSignals(
    request: SignalsApi.SearchContactSignalsRequest,
    options?: RequestOptions,
  ): ApiPromise<ContactSignalsSearchResponse, SignalsApi.SearchContactSignalsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/signals/contacts/search"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contactSignalsSearchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: contactSignalsSearchResponseSchema },
        errorFactory: SignalsApi.SearchContactSignalsError,
      },
      options,
    );
  }
}

export namespace SignalsApi {
  export type GetCompanySignalFilterValuesRequest = {
    filterType: FilterTypeLushaSignalsApi;
    query?: string;
  };

  export const getCompanySignalFilterValuesRequestSchema: Schema<GetCompanySignalFilterValuesRequest> =
    s.lazySchema(() =>
      s.object<GetCompanySignalFilterValuesRequest>({
        filterType: filterTypeLushaSignalsApiSchema,
        query: s.optional(s.string().check(s.minLength(2), s.maxLength(256))),
      }),
    );

  export class GetCompanySignalFilterValuesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanySignalFilterValuesError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetCompanySignalFiltersError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanySignalFiltersError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompanySignalScoresRequest = {
    body: V3SignalScoreCompaniesRequest;
  };

  export class GetCompanySignalScoresError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanySignalScoresError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetCompanySignalTypesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanySignalTypesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompanySignalsRequest = {
    body: V3CompanySignalsRequest;
  };

  export class GetCompanySignalsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanySignalsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompanySignalsByIdRequest = {
    body: CompanySignalsByIdRequest;
  };

  export class GetCompanySignalsByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanySignalsByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetContactSignalScoresRequest = {
    body: V3SignalScoreContactsRequest;
  };

  export class GetContactSignalScoresError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContactSignalScoresError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 502, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export class GetContactSignalTypesError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContactSignalTypesError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetContactSignalsRequest = {
    body: V3ContactSignalsRequest;
  };

  export class GetContactSignalsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContactSignalsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 402, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetContactSignalsByIdRequest = {
    body: ContactSignalsByIdRequest;
  };

  export class GetContactSignalsByIdError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContactSignalsByIdError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetSignalOptionsRequest = {
    /** The type of object to get signal options for */
    objectType: ObjectType;
  };

  export class GetSignalOptionsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSignalOptionsError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchCompanySignalsRequest = {
    body: CompanySignalsSearchRequest;
  };

  export class SearchCompanySignalsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchCompanySignalsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type SearchContactSignalsRequest = {
    body: ContactSignalsSearchRequest;
  };

  export class SearchContactSignalsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchContactSignalsError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
