import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  companyEnrichmentRequestInternalSchema,
  type CompanyEnrichmentRequest,
} from "../models/company-enrichment-request.js";
import {
  companyEnrichmentResultSchema,
  type CompanyEnrichmentResult,
} from "../models/company-enrichment-result.js";
import {
  companySearchRequestInternalSchema,
  type CompanySearchRequest,
} from "../models/company-search-request.js";
import {
  companySearchResponseSchema,
  type CompanySearchResponse,
} from "../models/company-search-response.js";
import {
  enrichmentJobAcceptedInternalSchema,
  type EnrichmentJobAccepted,
} from "../models/enrichment-job-accepted.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Search and enrich organizations.
 */
export class Companies {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Enrich companies (get)
   *
   * @remarks
   * Retrieve the status and results of a company enrichment job by ID. Poll until status is
   * COMPLETED, or use a webhook to be notified.
   *
   * @returns Enrichment job status and enriched companies.
   *
   * @throws {@link Companies.GetCompanyEnrichmentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SurfeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanyEnrichment(
    request: Companies.GetCompanyEnrichmentRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyEnrichmentResult, Companies.GetCompanyEnrichmentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/enrich/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyEnrichmentResultSchema },
        errorFactory: Companies.GetCompanyEnrichmentError,
      },
      options,
    );
  }

  /**
   * Search companies
   *
   * @remarks
   * Search for companies against Ideal Customer Profile filters (industry, employee count, revenue,
   * location, keywords). When credit charging is enabled the call deducts ICP search credits and
   * returns 402 when the balance is insufficient.
   *
   * @returns Matching companies.
   *
   * @throws {@link Companies.SearchCompaniesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link SurfeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCompanies(
    request: Companies.SearchCompaniesRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanySearchResponse, Companies.SearchCompaniesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/companies/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companySearchRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: companySearchResponseSchema },
        errorFactory: Companies.SearchCompaniesError,
      },
      options,
    );
  }

  /**
   * Enrich companies (start)
   *
   * @remarks
   * Start an asynchronous bulk enrichment job for companies identified by domain. Returns an
   * enrichment ID for polling or a webhook callback.
   *
   * @returns Enrichment job accepted.
   *
   * @throws {@link Companies.StartCompanyEnrichmentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link SurfeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  startCompanyEnrichment(
    request: Companies.StartCompanyEnrichmentRequest,
    options?: RequestOptions,
  ): ApiPromise<EnrichmentJobAccepted, Companies.StartCompanyEnrichmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/companies/enrich"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: companyEnrichmentRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: enrichmentJobAcceptedInternalSchema },
        errorFactory: Companies.StartCompanyEnrichmentError,
      },
      options,
    );
  }
}

export namespace Companies {
  export type GetCompanyEnrichmentRequest = {
    /** The enrichment job ID returned by the start operation. */
    id: string;
  };

  export class GetCompanyEnrichmentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanyEnrichmentError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type SearchCompaniesRequest = {
    body: CompanySearchRequest;
  };

  export class SearchCompaniesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchCompaniesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type StartCompanyEnrichmentRequest = {
    body: CompanyEnrichmentRequest;
  };

  export class StartCompanyEnrichmentError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<StartCompanyEnrichmentError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
