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
import { tradeHistoryResponseSchema, type TradeHistoryResponse } from "../models/trade-history-response.js";
import type { Servers } from "../servers.js";

export class PostTrade {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get historical trades
   *
   * @remarks
   * This API retrieves the trade history for a specified time interval.
   *
   * @returns OK
   *
   * @throws {@link PostTrade.GetTradesByDateRangeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTradesByDateRange(
    request: PostTrade.GetTradesByDateRangeRequest,
    options?: RequestOptions,
  ): ApiPromise<TradeHistoryResponse, PostTrade.GetTradesByDateRangeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/charges/historical-trades"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "start_date", value: request.startDate, schema: s.string() },
          { name: "end_date", value: request.endDate, schema: s.string() },
          { name: "page_number", value: request.pageNumber, schema: s.int() },
          { name: "page_size", value: request.pageSize, schema: s.int() },
          { name: "segment", value: request.segment, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: tradeHistoryResponseSchema },
        errorFactory: PostTrade.GetTradesByDateRangeError,
      },
      options,
    );
  }
}

export namespace PostTrade {
  export type GetTradesByDateRangeRequest = {
    /** Date from which trade history needs to be fetched. Date in YYYY-mm-dd format */
    startDate: string;
    /** Date till which history needs needs to be fetched. Date in YYYY-mm-dd format */
    endDate: string;
    /** Page number for which you want to fetch trade history */
    pageNumber: number;
    /** How many records you want for a page */
    pageSize: number;
    /**
     * Segment for which data is requested can be from the following options EQ - Equity, FO -
     * Futures and Options, COM - Commodity, CD - Currency Derivatives MF - Mutual Funds
     */
    segment?: string;
  };

  export const getTradesByDateRangeRequestSchema: Schema<GetTradesByDateRangeRequest> = s.lazySchema(() =>
    s.object<GetTradesByDateRangeRequest>({
      startDate: s.string(),
      endDate: s.string(),
      pageNumber: s.int().check(s.gte(1)),
      pageSize: s.int().check(s.gte(1), s.lte(5000)),
      segment: s.optional(s.string()),
    }),
  );

  export class GetTradesByDateRangeError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetTradesByDateRangeError> = [
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
