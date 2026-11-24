import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiGatewayErrorResponseSchema,
  type ApiGatewayErrorResponse,
} from "../models/api-gateway-error-response.js";
import { balanceSheetResponseSchema, type BalanceSheetResponse } from "../models/balance-sheet-response.js";
import { cashFlowResponseSchema, type CashFlowResponse } from "../models/cash-flow-response.js";
import {
  companyProfileResponseSchema,
  type CompanyProfileResponse,
} from "../models/company-profile-response.js";
import { competitorsResponseSchema, type CompetitorsResponse } from "../models/competitors-response.js";
import {
  corporateActionsResponseSchema,
  type CorporateActionsResponse,
} from "../models/corporate-actions-response.js";
import {
  incomeStatementResponseSchema,
  type IncomeStatementResponse,
} from "../models/income-statement-response.js";
import { keyRatiosResponseSchema, type KeyRatiosResponse } from "../models/key-ratios-response.js";
import {
  shareHoldingsResponseSchema,
  type ShareHoldingsResponse,
} from "../models/share-holdings-response.js";
import type { Servers } from "../servers.js";

export class Fundamentals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Balance Sheet
   *
   * @remarks
   * Fetches balance sheet data for the given ISIN.
   *
   * @returns Successful
   *
   * @throws {@link Fundamentals.GetBalanceSheetError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBalanceSheet(
    request: Fundamentals.GetBalanceSheetRequest,
    options?: RequestOptions,
  ): ApiPromise<BalanceSheetResponse, Fundamentals.GetBalanceSheetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/fundamentals/{isin}/balance-sheet"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "isin", value: request.isin, schema: s.string() }],
        query: [
          { name: "type", value: request.type, schema: s.defaulted(s.string(), "consolidated") },
          { name: "fs", value: request.fs, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: balanceSheetResponseSchema },
        errorFactory: Fundamentals.GetBalanceSheetError,
      },
      options,
    );
  }

  /**
   * Get Cash Flow
   *
   * @remarks
   * Fetches cash flow data for the given ISIN.
   *
   * @returns Successful
   *
   * @throws {@link Fundamentals.GetCashFlowError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCashFlow(
    request: Fundamentals.GetCashFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<CashFlowResponse, Fundamentals.GetCashFlowError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/fundamentals/{isin}/cash-flow"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "isin", value: request.isin, schema: s.string() }],
        query: [
          { name: "type", value: request.type, schema: s.defaulted(s.string(), "consolidated") },
          { name: "fs", value: request.fs, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cashFlowResponseSchema },
        errorFactory: Fundamentals.GetCashFlowError,
      },
      options,
    );
  }

  /**
   * Get Company Profile
   *
   * @remarks
   * Fetches company profile information for the given ISIN.
   *
   * @returns Successful
   *
   * @throws {@link Fundamentals.GetCompanyProfileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompanyProfile(
    request: Fundamentals.GetCompanyProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<CompanyProfileResponse, Fundamentals.GetCompanyProfileError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/fundamentals/{isin}/profile"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "isin", value: request.isin, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: companyProfileResponseSchema },
        errorFactory: Fundamentals.GetCompanyProfileError,
      },
      options,
    );
  }

  /**
   * Get Competitors
   *
   * @remarks
   * Fetches the list of competitors for the given instrument_key.
   *
   * @returns Successful
   *
   * @throws {@link Fundamentals.GetCompetitorsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCompetitors(
    request: Fundamentals.GetCompetitorsRequest,
    options?: RequestOptions,
  ): ApiPromise<CompetitorsResponse, Fundamentals.GetCompetitorsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/fundamentals/{instrument_key}/competitors"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "instrument_key", value: request.instrumentKey, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: competitorsResponseSchema },
        errorFactory: Fundamentals.GetCompetitorsError,
      },
      options,
    );
  }

  /**
   * Get Corporate Actions
   *
   * @remarks
   * Fetches corporate actions for the given ISIN.
   *
   * @returns Successful
   *
   * @throws {@link Fundamentals.GetCorporateActionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCorporateActions(
    request: Fundamentals.GetCorporateActionsRequest,
    options?: RequestOptions,
  ): ApiPromise<CorporateActionsResponse, Fundamentals.GetCorporateActionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/fundamentals/{isin}/corporate-actions"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "isin", value: request.isin, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: corporateActionsResponseSchema },
        errorFactory: Fundamentals.GetCorporateActionsError,
      },
      options,
    );
  }

  /**
   * Get Income Statement
   *
   * @remarks
   * Fetches income statement data for the given ISIN.
   *
   * @returns Successful
   *
   * @throws {@link Fundamentals.GetIncomeStatementError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIncomeStatement(
    request: Fundamentals.GetIncomeStatementRequest,
    options?: RequestOptions,
  ): ApiPromise<IncomeStatementResponse, Fundamentals.GetIncomeStatementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/fundamentals/{isin}/income-statement"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "isin", value: request.isin, schema: s.string() }],
        query: [
          { name: "type", value: request.type, schema: s.defaulted(s.string(), "consolidated") },
          { name: "time_period", value: request.timePeriod, schema: s.defaulted(s.string(), "yearly") },
          { name: "fs", value: request.fs, schema: s.defaulted(s.boolean(), false) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: incomeStatementResponseSchema },
        errorFactory: Fundamentals.GetIncomeStatementError,
      },
      options,
    );
  }

  /**
   * Get Key Ratios
   *
   * @remarks
   * Fetches key financial ratios for the given ISIN.
   *
   * @returns Successful
   *
   * @throws {@link Fundamentals.GetKeyRatiosError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getKeyRatios(
    request: Fundamentals.GetKeyRatiosRequest,
    options?: RequestOptions,
  ): ApiPromise<KeyRatiosResponse, Fundamentals.GetKeyRatiosError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/fundamentals/{isin}/key-ratios"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "isin", value: request.isin, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: keyRatiosResponseSchema },
        errorFactory: Fundamentals.GetKeyRatiosError,
      },
      options,
    );
  }

  /**
   * Get Share Holdings
   *
   * @remarks
   * Fetches shareholding pattern for the given ISIN.
   *
   * @returns Successful
   *
   * @throws {@link Fundamentals.GetShareHoldingsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getShareHoldings(
    request: Fundamentals.GetShareHoldingsRequest,
    options?: RequestOptions,
  ): ApiPromise<ShareHoldingsResponse, Fundamentals.GetShareHoldingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/fundamentals/{isin}/share-holdings"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "isin", value: request.isin, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: shareHoldingsResponseSchema },
        errorFactory: Fundamentals.GetShareHoldingsError,
      },
      options,
    );
  }
}

export namespace Fundamentals {
  export type GetBalanceSheetRequest = {
    /** ISIN of the company */
    isin: string;
    /** Report type. Allowed values: consolidated or standalone @default "consolidated" */
    type?: string;
    /** Whether to include the full financial statement @default false */
    fs?: boolean;
  };

  export const getBalanceSheetRequestSchema: Schema<GetBalanceSheetRequest> = s.lazySchema(() =>
    s.object<GetBalanceSheetRequest>({
      isin: s.string().check(s.pattern("^[A-Z]{2}[A-Z0-9]{9}[0-9]$")),
      type: s.defaulted(s.string().check(s.pattern("^(consolidated|standalone)$")), "consolidated"),
      fs: s.defaulted(s.boolean(), false),
    }),
  );

  export class GetBalanceSheetError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetBalanceSheetError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 401,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetCashFlowRequest = {
    /** ISIN of the company */
    isin: string;
    /** Report type. Allowed values: consolidated, standalone @default "consolidated" */
    type?: string;
    /** Whether to include the full financial statement @default false */
    fs?: boolean;
  };

  export const getCashFlowRequestSchema: Schema<GetCashFlowRequest> = s.lazySchema(() =>
    s.object<GetCashFlowRequest>({
      isin: s.string().check(s.pattern("^[A-Z]{2}[A-Z0-9]{9}[0-9]$")),
      type: s.defaulted(s.string().check(s.pattern("^(consolidated|standalone)$")), "consolidated"),
      fs: s.defaulted(s.boolean(), false),
    }),
  );

  export class GetCashFlowError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCashFlowError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 401,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetCompanyProfileRequest = {
    /** ISIN of the company */
    isin: string;
  };

  export const getCompanyProfileRequestSchema: Schema<GetCompanyProfileRequest> = s.lazySchema(() =>
    s.object<GetCompanyProfileRequest>({
      isin: s.string().check(s.pattern("^[A-Z]{2}[A-Z0-9]{9}[0-9]$")),
    }),
  );

  export class GetCompanyProfileError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompanyProfileError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 401,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetCompetitorsRequest = {
    /** Instrument key of the company */
    instrumentKey: string;
  };

  export const getCompetitorsRequestSchema: Schema<GetCompetitorsRequest> = s.lazySchema(() =>
    s.object<GetCompetitorsRequest>({
      instrumentKey: s
        .string()
        .check(
          s.pattern(
            "^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$",
          ),
        ),
    }),
  );

  export class GetCompetitorsError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCompetitorsError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 401,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetCorporateActionsRequest = {
    /** ISIN of the company */
    isin: string;
  };

  export const getCorporateActionsRequestSchema: Schema<GetCorporateActionsRequest> = s.lazySchema(() =>
    s.object<GetCorporateActionsRequest>({
      isin: s.string().check(s.pattern("^[A-Z]{2}[A-Z0-9]{9}[0-9]$")),
    }),
  );

  export class GetCorporateActionsError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCorporateActionsError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 401,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetIncomeStatementRequest = {
    /** ISIN of the company */
    isin: string;
    /** Report type. Allowed values: consolidated or standalone @default "consolidated" */
    type?: string;
    /** Time period. Allowed values: yearly, quarterly @default "yearly" */
    timePeriod?: string;
    /** Whether to include the full financial statement @default false */
    fs?: boolean;
  };

  export const getIncomeStatementRequestSchema: Schema<GetIncomeStatementRequest> = s.lazySchema(() =>
    s.object<GetIncomeStatementRequest>({
      isin: s.string().check(s.pattern("^[A-Z]{2}[A-Z0-9]{9}[0-9]$")),
      type: s.defaulted(s.string().check(s.pattern("^(consolidated|standalone)$")), "consolidated"),
      timePeriod: s.defaulted(s.string().check(s.pattern("^(yearly|quarterly)$")), "yearly"),
      fs: s.defaulted(s.boolean(), false),
    }),
  );

  export class GetIncomeStatementError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIncomeStatementError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 401,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetKeyRatiosRequest = {
    /** ISIN of the company */
    isin: string;
  };

  export const getKeyRatiosRequestSchema: Schema<GetKeyRatiosRequest> = s.lazySchema(() =>
    s.object<GetKeyRatiosRequest>({
      isin: s.string().check(s.pattern("^[A-Z]{2}[A-Z0-9]{9}[0-9]$")),
    }),
  );

  export class GetKeyRatiosError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetKeyRatiosError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 401,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }

  export type GetShareHoldingsRequest = {
    /** ISIN of the company */
    isin: string;
  };

  export const getShareHoldingsRequestSchema: Schema<GetShareHoldingsRequest> = s.lazySchema(() =>
    s.object<GetShareHoldingsRequest>({
      isin: s.string().check(s.pattern("^[A-Z]{2}[A-Z0-9]{9}[0-9]$")),
    }),
  );

  export class GetShareHoldingsError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse8", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetShareHoldingsError> = [
      {
        on: 405,
        kind: "apiGatewayErrorResponse",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 400,
        kind: "apiGatewayErrorResponse2",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 500,
        kind: "apiGatewayErrorResponse3",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 403,
        kind: "apiGatewayErrorResponse4",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 423,
        kind: "apiGatewayErrorResponse5",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 422,
        kind: "apiGatewayErrorResponse6",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 429,
        kind: "apiGatewayErrorResponse7",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
      {
        on: 401,
        kind: "apiGatewayErrorResponse8",
        decode: { kind: "json", schema: apiGatewayErrorResponseSchema },
      },
    ];
  }
}
