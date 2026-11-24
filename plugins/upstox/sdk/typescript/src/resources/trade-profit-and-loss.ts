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
import {
  getProfitAndLossChargesResponseSchema,
  type GetProfitAndLossChargesResponse,
} from "../models/get-profit-and-loss-charges-response.js";
import {
  getTradeWiseProfitAndLossDataResponseSchema,
  type GetTradeWiseProfitAndLossDataResponse,
} from "../models/get-trade-wise-profit-and-loss-data-response.js";
import {
  getTradeWiseProfitAndLossMetaDataResponseSchema,
  type GetTradeWiseProfitAndLossMetaDataResponse,
} from "../models/get-trade-wise-profit-and-loss-meta-data-response.js";
import type { Servers } from "../servers.js";

export class TradeProfitAndLoss {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get profit and loss on trades
   *
   * @remarks
   * This API gives the charges incurred by users for their trades
   *
   * @returns Successful
   *
   * @throws {@link TradeProfitAndLoss.GetProfitAndLossChargesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getProfitAndLossCharges(
    request: TradeProfitAndLoss.GetProfitAndLossChargesRequest,
    options?: RequestOptions,
  ): ApiPromise<GetProfitAndLossChargesResponse, TradeProfitAndLoss.GetProfitAndLossChargesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/trade/profit-loss/charges"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "segment", value: request.segment, schema: s.string() },
          { name: "financial_year", value: request.financialYear, schema: s.string() },
          { name: "from_date", value: request.fromDate, schema: s.optional(s.string()) },
          { name: "to_date", value: request.toDate, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getProfitAndLossChargesResponseSchema },
        errorFactory: TradeProfitAndLoss.GetProfitAndLossChargesError,
      },
      options,
    );
  }

  /**
   * Get Trade-wise Profit and Loss Report Data
   *
   * @remarks
   * This API gives the data of the realised Profit and Loss report requested by a user
   *
   * @returns Successful
   *
   * @throws {@link TradeProfitAndLoss.GetTradeWiseProfitAndLossDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTradeWiseProfitAndLossData(
    request: TradeProfitAndLoss.GetTradeWiseProfitAndLossDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GetTradeWiseProfitAndLossDataResponse,
    TradeProfitAndLoss.GetTradeWiseProfitAndLossDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/trade/profit-loss/data"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "segment", value: request.segment, schema: s.string() },
          { name: "financial_year", value: request.financialYear, schema: s.string() },
          { name: "page_number", value: request.pageNumber, schema: s.int() },
          { name: "page_size", value: request.pageSize, schema: s.int() },
          { name: "from_date", value: request.fromDate, schema: s.optional(s.string()) },
          { name: "to_date", value: request.toDate, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTradeWiseProfitAndLossDataResponseSchema },
        errorFactory: TradeProfitAndLoss.GetTradeWiseProfitAndLossDataError,
      },
      options,
    );
  }

  /**
   * Get profit and loss meta data on trades
   *
   * @remarks
   * This API gives the data of the realised Profit and Loss report requested by a user
   *
   * @returns Successful
   *
   * @throws {@link TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTradeWiseProfitAndLossMetaData(
    request: TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataRequest,
    options?: RequestOptions,
  ): ApiPromise<
    GetTradeWiseProfitAndLossMetaDataResponse,
    TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/trade/profit-loss/metadata"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "segment", value: request.segment, schema: s.string() },
          { name: "financial_year", value: request.financialYear, schema: s.string() },
          { name: "from_date", value: request.fromDate, schema: s.optional(s.string()) },
          { name: "to_date", value: request.toDate, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTradeWiseProfitAndLossMetaDataResponseSchema },
        errorFactory: TradeProfitAndLoss.GetTradeWiseProfitAndLossMetaDataError,
      },
      options,
    );
  }
}

export namespace TradeProfitAndLoss {
  export type GetProfitAndLossChargesRequest = {
    /**
     * Segment for which data is requested can be from the following options EQ - Equity, FO -
     * Futures and Options, COM - Commodity, CD - Currency Derivatives
     */
    segment: string;
    /**
     * Financial year for which data has been requested. Concatenation of last 2 digits of from year
     * and to year Sample:for 2021-2022, financial_year will be 2122
     */
    financialYear: string;
    /**
     * Date from which data needs to be fetched. from_date and to_date should fall under the same
     * financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
     */
    fromDate?: string;
    /**
     * Date till which data needs to be fetched. from_date and to_date should fall under the same
     * financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
     */
    toDate?: string;
  };

  export const getProfitAndLossChargesRequestSchema: Schema<GetProfitAndLossChargesRequest> = s.lazySchema(
    () =>
      s.object<GetProfitAndLossChargesRequest>({
        segment: s.string(),
        financialYear: s.string().check(s.pattern("^(0|[1-9][0-9]*)$")),
        fromDate: s.optional(s.string()),
        toDate: s.optional(s.string()),
      }),
  );

  export class GetProfitAndLossChargesError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProfitAndLossChargesError> = [
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
    ];
  }

  export type GetTradeWiseProfitAndLossDataRequest = {
    /**
     * Segment for which data is requested can be from the following options EQ - Equity, FO -
     * Futures and Options, COM - Commodity, CD - Currency Derivatives
     */
    segment: string;
    /**
     * Financial year for which data has been requested. Concatenation of last 2 digits of from year
     * and to year Sample:for 2021-2022, financial_year will be 2122
     */
    financialYear: string;
    /** Page Number, the pages are starting from 1 */
    pageNumber: number;
    /**
     * Page size for pagination. The maximum page size value is obtained from P and L report
     * metadata API.
     */
    pageSize: number;
    /**
     * Date from which data needs to be fetched. from_date and to_date should fall under the same
     * financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
     */
    fromDate?: string;
    /**
     * Date till which data needs to be fetched. from_date and to_date should fall under the same
     * financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
     */
    toDate?: string;
  };

  export const getTradeWiseProfitAndLossDataRequestSchema: Schema<GetTradeWiseProfitAndLossDataRequest> =
    s.lazySchema(() =>
      s.object<GetTradeWiseProfitAndLossDataRequest>({
        segment: s.string(),
        financialYear: s.string().check(s.pattern("^(0|[1-9][0-9]*)$")),
        pageNumber: s.int(),
        pageSize: s.int().check(s.gte(1), s.lte(5000)),
        fromDate: s.optional(s.string()),
        toDate: s.optional(s.string()),
      }),
    );

  export class GetTradeWiseProfitAndLossDataError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTradeWiseProfitAndLossDataError> = [
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
    ];
  }

  export type GetTradeWiseProfitAndLossMetaDataRequest = {
    /**
     * Segment for which data is requested can be from the following options EQ - Equity, FO -
     * Futures and Options, COM - Commodity, CD - Currency Derivatives
     */
    segment: string;
    /**
     * Financial year for which data has been requested. Concatenation of last 2 digits of from year
     * and to year Sample:for 2021-2022, financial_year will be 2122
     */
    financialYear: string;
    /**
     * Date from which data needs to be fetched. from_date and to_date should fall under the same
     * financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
     */
    fromDate?: string;
    /**
     * Date till which data needs to be fetched. from_date and to_date should fall under the same
     * financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
     */
    toDate?: string;
  };

  export const getTradeWiseProfitAndLossMetaDataRequestSchema: Schema<GetTradeWiseProfitAndLossMetaDataRequest> =
    s.lazySchema(() =>
      s.object<GetTradeWiseProfitAndLossMetaDataRequest>({
        segment: s.string(),
        financialYear: s.string().check(s.pattern("^(0|[1-9][0-9]*)$")),
        fromDate: s.optional(s.string()),
        toDate: s.optional(s.string()),
      }),
    );

  export class GetTradeWiseProfitAndLossMetaDataError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTradeWiseProfitAndLossMetaDataError> = [
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
    ];
  }
}
