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
  getFullMarketQuoteResponseSchema,
  type GetFullMarketQuoteResponse,
} from "../models/get-full-market-quote-response.js";
import {
  getMarketQuoteLastTradedPriceResponseSchema,
  type GetMarketQuoteLastTradedPriceResponse,
} from "../models/get-market-quote-last-traded-price-response.js";
import {
  getMarketQuoteOhlcResponseSchema,
  type GetMarketQuoteOhlcResponse,
} from "../models/get-market-quote-ohlc-response.js";
import type { Servers } from "../servers.js";

export class MarketQuote {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Market quotes and instruments - Full market quotes
   *
   * @remarks
   * This API provides the functionality to retrieve the full market quotes for one or more
   * instruments.This API returns the complete market data snapshot of up to 500 instruments in one
   * go.
   *
   * @returns Successful
   *
   * @throws {@link MarketQuote.GetFullMarketQuoteError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFullMarketQuote(
    request: MarketQuote.GetFullMarketQuoteRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetFullMarketQuoteResponse, MarketQuote.GetFullMarketQuoteError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market-quote/quotes"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "instrument_key", value: request.instrumentKey, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getFullMarketQuoteResponseSchema },
        errorFactory: MarketQuote.GetFullMarketQuoteError,
      },
      options,
    );
  }

  /**
   * Market quotes and instruments - OHLC quotes
   *
   * @remarks
   * This API provides the functionality to retrieve the OHLC quotes for one or more
   * instruments.This API returns the OHLC snapshots of up to 1000 instruments in one go.
   *
   * @returns Successful
   *
   * @throws {@link MarketQuote.GetMarketQuoteOhlcError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMarketQuoteOhlc(
    request: MarketQuote.GetMarketQuoteOhlcRequest,
    options?: RequestOptions,
  ): ApiPromise<GetMarketQuoteOhlcResponse, MarketQuote.GetMarketQuoteOhlcError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market-quote/ohlc"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "interval", value: request.interval, schema: s.string() },
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "instrument_key", value: request.instrumentKey, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMarketQuoteOhlcResponseSchema },
        errorFactory: MarketQuote.GetMarketQuoteOhlcError,
      },
      options,
    );
  }

  /**
   * Market quotes and instruments - LTP quotes
   *
   * @remarks
   * This API provides the functionality to retrieve the LTP quotes for one or more instruments.This
   * API returns the LTPs of up to 1000 instruments in one go.
   *
   * @returns Successful
   *
   * @throws {@link MarketQuote.LtpError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ltp(
    request: MarketQuote.LtpRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetMarketQuoteLastTradedPriceResponse, MarketQuote.LtpError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market-quote/ltp"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "symbol", value: request.symbol, schema: s.optional(s.string()) },
          { name: "instrument_key", value: request.instrumentKey, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMarketQuoteLastTradedPriceResponseSchema },
        errorFactory: MarketQuote.LtpError,
      },
      options,
    );
  }
}

export namespace MarketQuote {
  export type GetFullMarketQuoteRequest = {
    /**
     * Comma separated list of symbols
     *
     * @deprecated
     */
    symbol?: string;
    /** Comma separated list of instrument keys */
    instrumentKey?: string;
  };

  export class GetFullMarketQuoteError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetFullMarketQuoteError> = [
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

  export type GetMarketQuoteOhlcRequest = {
    /** Interval to get ohlc data */
    interval: string;
    /**
     * Comma separated list of symbols
     *
     * @deprecated
     */
    symbol?: string;
    /** Comma separated list of instrument keys */
    instrumentKey?: string;
  };

  export const getMarketQuoteOhlcRequestSchema: Schema<GetMarketQuoteOhlcRequest> = s.lazySchema(() =>
    s.object<GetMarketQuoteOhlcRequest>({
      interval: s.string().check(s.minLength(1), s.pattern("^(1d|I1|I30)$")),
      symbol: s.optional(s.string()),
      instrumentKey: s.optional(s.string()),
    }),
  );

  export class GetMarketQuoteOhlcError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMarketQuoteOhlcError> = [
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

  export type LtpRequest = {
    /**
     * Comma separated list of symbols
     *
     * @deprecated
     */
    symbol?: string;
    /** Comma separated list of instrument keys */
    instrumentKey?: string;
  };

  export class LtpError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<LtpError> = [
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
