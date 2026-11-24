import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import type { Servers } from "../servers.js";

/**
 * Financial statements, original filings and financial statistics of one company.
 */
export class Financials {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Financial document inventory
   *
   * @remarks
   * Metadata list of financial documents for the company (periods, types, names). Returns metadata
   * only. Structured metrics and `esf_statement_lines` are on the profile and financial-statements
   * endpoints.
   *
   * @returns Document metadata page.
   *
   * @throws {@link Financials.GetCompaniesKrsByKrsFinancialDocumentsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsFinancialDocuments(
    request: Financials.GetCompaniesKrsByKrsFinancialDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Financials.GetCompaniesKrsByKrsFinancialDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/financial-documents"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 25) },
          { name: "offset", value: request.offset, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Financials.GetCompaniesKrsByKrsFinancialDocumentsError,
      },
      options,
    );
  }

  /**
   * Financial statements
   *
   * @remarks
   * Returns financial metrics only (without company profile or document files), grouped by
   * statement year. Values include PLN/USD/EUR columns from `entity_financial_metrics` and
   * structured `esf_statement_lines` when extracted. XML files are on the documents endpoint.
   *
   * @returns Financial metrics grouped by year.
   *
   * @throws {@link Financials.GetCompaniesKrsByKrsFinancialStatementsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsFinancialStatements(
    request: Financials.GetCompaniesKrsByKrsFinancialStatementsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Financials.GetCompaniesKrsByKrsFinancialStatementsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/financial-statements"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Financials.GetCompaniesKrsByKrsFinancialStatementsError,
      },
      options,
    );
  }

  /**
   * Peer statistics & rankings
   *
   * @remarks
   * Industry / region / country peer benchmarks and the company's rank positions. Use when
   * `hasStatistics` on the full profile is `true`.
   *
   * Response shape:
   * - `company` – latest indexed figures (PLN/EUR/USD) for the company
   * - `scopes` – rank in each peer group (`pkd_full`, `pkd_division`, `pkd_section`, `region`,
   *   `country`)
   * - `benchmarks` – peer distribution per scope key (`median`, `p25`/`p75`/`p90`, `n_companies`,
   *   …)
   *
   * @returns Rankings (`scopes`) plus peer distributions (`benchmarks` keyed by
   * `scope_type::scope_key`). Company figures are the latest indexed snapshot.
   *
   * @throws {@link Financials.GetCompaniesKrsByKrsStatisticsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CompabaseError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompaniesKrsByKrsStatistics(
    request: Financials.GetCompaniesKrsByKrsStatisticsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Financials.GetCompaniesKrsByKrsStatisticsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/companies/krs/{krs}/statistics"),
        auth: anyAuth(this.#auth.apiKeyAuth, this.#auth.bearerAuth),
        pathParams: [{ name: "krs", value: request.krs, schema: s.string() }],
        query: [{ name: "locale", value: request.locale, schema: s.defaulted(s.string(), "en") }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Financials.GetCompaniesKrsByKrsStatisticsError,
      },
      options,
    );
  }
}

export namespace Financials {
  export type GetCompaniesKrsByKrsFinancialDocumentsRequest = {
    krs: string;
    /** @default 25 */
    limit?: number;
    /** @default 0 */
    offset?: number;
  };

  export const getCompaniesKrsByKrsFinancialDocumentsRequestSchema: Schema<GetCompaniesKrsByKrsFinancialDocumentsRequest> =
    s.lazySchema(() =>
      s.object<GetCompaniesKrsByKrsFinancialDocumentsRequest>({
        krs: s.string(),
        limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 25),
        offset: s.defaulted(s.int().check(s.gte(0)), 0),
      }),
    );

  export class GetCompaniesKrsByKrsFinancialDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsFinancialDocumentsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsFinancialStatementsRequest = {
    /**
     * KRS input is normalized by stripping non-digits and left-padding to 10 digits. After
     * normalization, KRS must contain exactly 10 digits; otherwise request fails with `400
     * INVALID_KRS`.
     */
    krs: string;
  };

  export class GetCompaniesKrsByKrsFinancialStatementsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsFinancialStatementsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetCompaniesKrsByKrsStatisticsRequest = {
    krs: string;
    /** @default "en" */
    locale?: string;
  };

  export class GetCompaniesKrsByKrsStatisticsError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompaniesKrsByKrsStatisticsError> = [
      { on: 404, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 400, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
