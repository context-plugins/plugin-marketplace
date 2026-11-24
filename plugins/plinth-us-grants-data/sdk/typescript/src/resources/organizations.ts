import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiErrorModelSchema, type ApiErrorModel } from "../models/api-error-model.js";
import {
  bulkComplianceResponseSchema,
  type BulkComplianceResponse,
} from "../models/bulk-compliance-response.js";
import { bulkComplianceSchema, type BulkCompliance } from "../models/bulk-compliance.js";
import { complianceResponseSchema, type ComplianceResponse } from "../models/compliance-response.js";
import { essentialsResponseSchema, type EssentialsResponse } from "../models/essentials-response.js";
import {
  essentialsSearchResponseSchema,
  type EssentialsSearchResponse,
} from "../models/essentials-search-response.js";
import { essentialsSearchSchema, type EssentialsSearch } from "../models/essentials-search.js";
import {
  examplePlinthUsGrantsDataOrganizationsApiSchema,
  type ExamplePlinthUsGrantsDataOrganizationsApi,
} from "../models/example-plinth-us-grants-data-organizations-api.js";
import { example1Schema, type Example1 } from "../models/example1.js";
import { govFundingResponseSchema, type GovFundingResponse } from "../models/gov-funding-response.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { premierResponseSchema, type PremierResponse } from "../models/premier-response.js";
import { compatSchema, type Compat } from "../models/unions/compat.js";
import { fiscalYearSchema, type FiscalYear } from "../models/unions/fiscal-year.js";
import { format1Schema, type Format1 } from "../models/unions/format1.js";
import { jurisdictionSchema, type Jurisdiction } from "../models/unions/jurisdiction.js";
import { kindVariantYqwpszSchema, type KindVariantYqwpsz } from "../models/unions/kind-variant-yqwpsz.js";
import { state1Schema, type State1 } from "../models/unions/state1.js";
import { verifyReportSchema, type VerifyReport } from "../models/verify-report.js";
import type { Servers } from "../servers.js";

/**
 * Per-organization profiles, financials and IRS compliance facets.
 */
export class Organizations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Core profile for one organization
   *
   * @remarks
   * Name, location, NTEE classification and a financials summary from the latest filing we have
   * parsed.
   *
   * @returns Identity and headline financials for one organization.
   *
   * @throws {@link Organizations.GetApiV1EssentialsByEinError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1EssentialsByEin(
    request: Organizations.GetApiV1EssentialsByEinRequest,
    options?: RequestOptions,
  ): ApiPromise<EssentialsResponse, Organizations.GetApiV1EssentialsByEinError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/essentials/{ein}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "ein", value: request.ein, schema: s.string() }],
        query: [
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) },
          { name: "example", value: request.example, schema: s.optional(s.lazy(() => example1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: essentialsResponseSchema },
        errorFactory: Organizations.GetApiV1EssentialsByEinError,
      },
      options,
    );
  }

  /**
   * Full profile for one organization
   *
   * @remarks
   * Everything in essentials plus full financials and the resolved geographic service footprint.
   *
   * @returns The full record for one organization.
   *
   * @throws {@link Organizations.GetApiV1PremierByEinError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1PremierByEin(
    request: Organizations.GetApiV1PremierByEinRequest,
    options?: RequestOptions,
  ): ApiPromise<PremierResponse, Organizations.GetApiV1PremierByEinError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/premier/{ein}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "ein", value: request.ein, schema: s.string() }],
        query: [
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) },
          { name: "example", value: request.example, schema: s.optional(s.lazy(() => example1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: premierResponseSchema },
        errorFactory: Organizations.GetApiV1PremierByEinError,
      },
      options,
    );
  }

  /**
   * IRS status and sanctions screen for one organization
   *
   * @remarks
   * Exemption subsection, deductibility, foundation type, NTEE and IRS auto-revocation status, plus
   * name screens against the OFAC sanctions lists (SDN and Consolidated, primary and alias names),
   * the Internal Revenue Bulletin's §170 deletion announcements, and California registration (AG
   * Registry + FTB). Every screen reports whether it RAN: a source that is unavailable comes back
   * `not screened`, never `clear`.
   *
   * `compliance.reliance` carries the Rev. Proc. 2018-32 §8.01 elements — the checklist the IRS
   * publishes for relying on EO BMF data from a third party — element by element, with the EO BMF
   * Extract revision date and whether it is the current one. `?format=pdf` returns the same screen
   * as a one-page retainable report for the grant file (paid keys; §8.01(2) puts the retention
   * obligation on the grantor).
   *
   * The name screens are triage signals, not determinations.
   *
   * @returns A compliance screen for one organization.
   *
   * @throws {@link Organizations.GetApiV1ScreeningByEinError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getApiV1ScreeningByEin(
    request: Organizations.GetApiV1ScreeningByEinRequest,
    options?: RequestOptions,
  ): ApiPromise<ComplianceResponse, Organizations.GetApiV1ScreeningByEinError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/screening/{ein}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "ein", value: request.ein, schema: s.string() }],
        query: [
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) },
          { name: "compat", value: request.compat, schema: s.optional(s.lazy(() => compatSchema)) },
          {
            name: "example",
            value: request.example,
            schema: s.optional(s.lazy(() => examplePlinthUsGrantsDataOrganizationsApiSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: complianceResponseSchema },
        errorFactory: Organizations.GetApiV1ScreeningByEinError,
      },
      options,
    );
  }

  /**
   * IRS status and sanctions screen for one organization
   *
   * @remarks
   * Exemption subsection, deductibility, foundation type, NTEE, IRS auto-revocation status and an
   * OFAC (Treasury SDN) name screen. Refreshed monthly, so fresher than the 990 financials. The
   * OFAC field is a triage signal — an entity NAME screen, not a sanctions determination.
   *
   * @returns Successful Response
   *
   * @throws {@link Organizations.GetComplianceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCompliance(
    request: Organizations.GetComplianceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Organizations.GetComplianceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/compliance/{ein}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "ein", value: request.ein, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Organizations.GetComplianceError,
      },
      options,
    );
  }

  /**
   * Screen up to 100 organizations in one call
   *
   * @remarks
   * The bulk form of `/screening/{ein}`, running byte-identical logic per EIN — a bulk screen that
   * disagreed with the single-EIN screen would be worse than none. Candid's bulk Charity Check
   * takes 25 organizations; this takes 100. Costs ONE call from your monthly allowance, not one per
   * EIN. `report_date` and `sources` are returned once for the batch, since every row is screened
   * against the same reference files.
   *
   * @returns Screens for every valid EIN in the request.
   *
   * @throws {@link Organizations.GetComplianceBulkError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getComplianceBulk(
    request: Organizations.GetComplianceBulkRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkComplianceResponse, Organizations.GetComplianceBulkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/screening/bulk"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "compat", value: request.compat, schema: s.optional(s.lazy(() => compatSchema)) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkComplianceSchema },
      },
      {
        success: { kind: "json", schema: bulkComplianceResponseSchema },
        errorFactory: Organizations.GetComplianceBulkError,
      },
      options,
    );
  }

  /**
   * Core profile for one organization
   *
   * @remarks
   * Name, location, NTEE classification and a financials summary from the latest filing we have
   * parsed.
   *
   * @returns Successful Response
   *
   * @throws {@link Organizations.GetEssentialsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getEssentials(
    request: Organizations.GetEssentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Organizations.GetEssentialsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/essentials/{ein}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "ein", value: request.ein, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Organizations.GetEssentialsError,
      },
      options,
    );
  }

  /**
   * Federal and state government funding an organization receives
   *
   * @remarks
   * Award-level federal obligations (USASpending) and state checkbook payments for one EIN, with
   * agency and state rollups computed over every matching row. Pro plan. Obligations are money
   * committed, not paid; state coverage is nine checkbooks, not national.
   *
   * @returns Federal and state government funding for one organization.
   *
   * @throws {@link Organizations.GetGovFundingError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getGovFunding(
    request: Organizations.GetGovFundingRequest,
    options?: RequestOptions,
  ): ApiPromise<GovFundingResponse, Organizations.GetGovFundingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/gov-funding/{ein}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "ein", value: request.ein, schema: s.string() }],
        query: [
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => format1Schema)) },
          {
            name: "fiscal_year",
            value: request.fiscalYear,
            schema: s.optional(s.lazy(() => fiscalYearSchema)),
          },
          { name: "kind", value: request.kind, schema: s.optional(s.lazy(() => kindVariantYqwpszSchema)) },
          { name: "state", value: request.state, schema: s.optional(s.lazy(() => state1Schema)) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 200) },
          { name: "example", value: request.example, schema: s.optional(s.lazy(() => example1Schema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: govFundingResponseSchema },
        errorFactory: Organizations.GetGovFundingError,
      },
      options,
    );
  }

  /**
   * Full profile for one organization
   *
   * @remarks
   * Everything in essentials plus full financials and the resolved geographic service footprint.
   *
   * @returns Successful Response
   *
   * @throws {@link Organizations.GetPremierError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPremier(
    request: Organizations.GetPremierRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Organizations.GetPremierError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/premier/{ein}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "ein", value: request.ein, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Organizations.GetPremierError,
      },
      options,
    );
  }

  /**
   * Search organizations (Candid Essentials-shaped)
   *
   * @remarks
   * Nonprofit SEARCH, in the POST-with-a-body shape a Candid Essentials v4 client already builds:
   * `search_terms`, `from`, `size`, `filters`, `sort`. This is the endpoint that corresponds to
   * Candid's `/essentials/v4` — `GET /api/essentials/{ein}` is the single-record lookup, and
   * mapping a search API onto it is the migration mistake worth avoiding.
   *
   * Use `jurisdiction=ca` for Canadian organizations; the default is `us`. Financial filters use
   * the filing currency, identified in `x_plinth.dataset`; currencies are never combined. Filters
   * cover geography, IRS classification and financial ranges, all read from the organization's own
   * filing. Candid's PCS subject, profile-participation and demographic filters have no
   * counterpart; send one and it comes back named in `x_plinth.warnings` rather than being dropped.
   *
   * @returns Organizations matching the search.
   *
   * @throws {@link Organizations.SearchEssentialsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchEssentials(
    request: Organizations.SearchEssentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<EssentialsSearchResponse, Organizations.SearchEssentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/essentials"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          {
            name: "jurisdiction",
            value: request.jurisdiction,
            schema: s.optional(s.lazy(() => jurisdictionSchema)),
          },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: essentialsSearchSchema },
      },
      {
        success: { kind: "json", schema: essentialsSearchResponseSchema },
        errorFactory: Organizations.SearchEssentialsError,
      },
      options,
    );
  }

  /**
   * Check a retained report against its signature
   *
   * @remarks
   * Recomputes the identifier and checks the signature over a compliance report you kept. **Keyless
   * and unmetered** — a grantor confirming a filed document should not spend a screen doing it, and
   * their auditor should not need a credential at all.
   *
   * Reports also state `report_format`, which versions what the document ASSERTS: which limitations
   * apply, which section governs a conflict, what the summary concludes. An older format is not
   * wrong, but today's may describe the same organization differently, and the response says which
   * you are holding.
   *
   * Offline verification is equivalent and needs nothing from us: the Ed25519 public key is
   * published on `/meta`. Note this is a detached signature over the report data, not an
   * X.509/PAdES PDF signature — a PDF reader shows no signature panel.
   *
   * @returns Successful Response
   *
   * @throws {@link Organizations.VerifyComplianceReportError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PlinthUsGrantsDataError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  verifyComplianceReport(
    request: Organizations.VerifyComplianceReportRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Organizations.VerifyComplianceReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/screening/verify"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: verifyReportSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Organizations.VerifyComplianceReportError,
      },
      options,
    );
  }
}

export namespace Organizations {
  export type GetApiV1EssentialsByEinRequest = {
    ein: string;
    /** json (default) or xml. */
    format?: Format1;
    /**
     * Return a canned example instead of querying the corpus. **Needs no API key and is not
     * metered.** `1` is the plain success case; `list` enumerates what each named case
     * demonstrates. The organizations in an example are invented — only the shape is real.
     */
    example?: Example1;
  };

  export class GetApiV1EssentialsByEinError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1EssentialsByEinError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetApiV1PremierByEinRequest = {
    ein: string;
    /** json (default) or xml. */
    format?: Format1;
    /**
     * Return a canned example instead of querying the corpus. **Needs no API key and is not
     * metered.** `1` is the plain success case; `list` enumerates what each named case
     * demonstrates. The organizations in an example are invented — only the shape is real.
     */
    example?: Example1;
  };

  export class GetApiV1PremierByEinError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1PremierByEinError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetApiV1ScreeningByEinRequest = {
    ein: string;
    /** json (default) or xml. */
    format?: Format1;
    /**
     * Set to `candid` to render this record the way Candid's documentation describes it — notably
     * booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records
     * match, or what they say.
     */
    compat?: Compat;
    /**
     * Return a canned example instead of querying the corpus. **Needs no API key and is not
     * metered.** `1` is the plain success case; `list` enumerates what each named case
     * demonstrates. The organizations in an example are invented — only the shape is real.
     */
    example?: ExamplePlinthUsGrantsDataOrganizationsApi;
  };

  export class GetApiV1ScreeningByEinError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetApiV1ScreeningByEinError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetComplianceRequest = {
    ein: string;
  };

  export class GetComplianceError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetComplianceError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetComplianceBulkRequest = {
    /**
     * Set to `candid` to render this record the way Candid's documentation describes it — notably
     * booleans as the strings "True"/"False". A RENDERING flag only: it never changes which records
     * match, or what they say.
     */
    compat?: Compat;
    body: BulkCompliance;
  };

  export class GetComplianceBulkError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetComplianceBulkError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetEssentialsRequest = {
    ein: string;
  };

  export class GetEssentialsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEssentialsError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetGovFundingRequest = {
    ein: string;
    /** json (default) or xml. */
    format?: Format1;
    /** Restrict to one federal fiscal year of awards (October–September), e.g. 2023. */
    fiscalYear?: FiscalYear;
    /** `federal` for USAspending awards or `state` for the state checkbooks; omit for both. */
    kind?: KindVariantYqwpsz;
    /**
     * Two-letter state code, for the state-checkbook side only — whose books the money came from,
     * not where the recipient sits.
     */
    state?: State1;
    /** Maximum rows to return. @default 200 */
    limit?: number;
    /**
     * Return a canned example instead of querying the corpus. **Needs no API key and is not
     * metered.** `1` is the plain success case; `list` enumerates what each named case
     * demonstrates. The organizations in an example are invented — only the shape is real.
     */
    example?: Example1;
  };

  export class GetGovFundingError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetGovFundingError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type GetPremierRequest = {
    ein: string;
  };

  export class GetPremierError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetPremierError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type SearchEssentialsRequest = {
    /**
     * Filing jurisdiction of the GRANT: us (default) | ca. Never mixed — amounts stay in the
     * currency the filing was made in and are never converted, so every total is a
     * single-jurisdiction total. `x_plinth.dataset` names the source, licence and currency behind
     * the answer. Distinct from `country`, which is where the RECIPIENT sits.
     */
    jurisdiction?: Jurisdiction;
    body: EssentialsSearch;
  };

  export class SearchEssentialsError extends ApiError {
    declare readonly payload:
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"httpValidationError", HttpValidationError>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchEssentialsError> = [
      { on: 401, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 402, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelSchema } },
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type VerifyComplianceReportRequest = {
    body: VerifyReport;
  };

  export class VerifyComplianceReportError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<VerifyComplianceReportError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
