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
  getMarketQuoteLastTradedPriceResponseV3Schema,
  type GetMarketQuoteLastTradedPriceResponseV3,
} from "../models/get-market-quote-last-traded-price-response-v3.js";
import {
  getMarketQuoteOhlcResponseV3Schema,
  type GetMarketQuoteOhlcResponseV3,
} from "../models/get-market-quote-ohlc-response-v3.js";
import {
  getMarketQuoteOptionGreekResponseV3Schema,
  type GetMarketQuoteOptionGreekResponseV3,
} from "../models/get-market-quote-option-greek-response-v3.js";
import type { Servers } from "../servers.js";

export class MarketQuoteV3 {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Market quotes and instruments - LTP quotes
   *
   * @remarks
   * This API provides the functionality to retrieve the LTP quotes for one or more instruments.This
   * API returns the LTPs of up to 500 instruments in one go.
   *
   * @returns Successful
   *
   * @throws {@link MarketQuoteV3.GetLtpError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLtp(
    request: MarketQuoteV3.GetLtpRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetMarketQuoteLastTradedPriceResponseV3, MarketQuoteV3.GetLtpError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/market-quote/ltp"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [{ name: "instrument_key", value: request.instrumentKey, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMarketQuoteLastTradedPriceResponseV3Schema },
        errorFactory: MarketQuoteV3.GetLtpError,
      },
      options,
    );
  }

  /**
   * Market quotes and instruments - OHLC quotes
   *
   * @remarks
   * This API provides the functionality to retrieve the OHLC quotes for one or more
   * instruments.This API returns the OHLC snapshots of up to 500 instruments in one go.
   *
   * @returns Successful
   *
   * @throws {@link MarketQuoteV3.GetMarketQuoteOhlcv3Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMarketQuoteOhlcv3(
    request: MarketQuoteV3.GetMarketQuoteOhlcv3Request,
    options?: RequestOptions,
  ): ApiPromise<GetMarketQuoteOhlcResponseV3, MarketQuoteV3.GetMarketQuoteOhlcv3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/market-quote/ohlc"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "interval", value: request.interval, schema: s.string() },
          { name: "instrument_key", value: request.instrumentKey, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMarketQuoteOhlcResponseV3Schema },
        errorFactory: MarketQuoteV3.GetMarketQuoteOhlcv3Error,
      },
      options,
    );
  }

  /**
   * Market quotes and instruments - Option Greek
   *
   * @remarks
   * This API provides the functionality to retrieve the Option Greek data for one or more
   * instruments.This API returns the Option Greek data of up to 500 instruments in one go.
   *
   * @returns Successful
   *
   * @throws {@link MarketQuoteV3.GetMarketQuoteOptionGreekError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMarketQuoteOptionGreek(
    request: MarketQuoteV3.GetMarketQuoteOptionGreekRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetMarketQuoteOptionGreekResponseV3, MarketQuoteV3.GetMarketQuoteOptionGreekError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/market-quote/option-greek"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [{ name: "instrument_key", value: request.instrumentKey, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMarketQuoteOptionGreekResponseV3Schema },
        errorFactory: MarketQuoteV3.GetMarketQuoteOptionGreekError,
      },
      options,
    );
  }
}

export namespace MarketQuoteV3 {
  export type GetLtpRequest = {
    /** Comma separated list of instrument keys */
    instrumentKey?: string;
  };

  export class GetLtpError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLtpError> = [
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

  export type GetMarketQuoteOhlcv3Request = {
    /** Interval to get ohlc data */
    interval: string;
    /** Comma separated list of instrument keys */
    instrumentKey?: string;
  };

  export const getMarketQuoteOhlcv3RequestSchema: Schema<GetMarketQuoteOhlcv3Request> = s.lazySchema(() =>
    s.object<GetMarketQuoteOhlcv3Request>({
      interval: s.string().check(s.minLength(1), s.pattern("^(1d|I1|I30)$")),
      instrumentKey: s.optional(s.string()),
    }),
  );

  export class GetMarketQuoteOhlcv3Error extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMarketQuoteOhlcv3Error> = [
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

  export type GetMarketQuoteOptionGreekRequest = {
    /** Comma separated list of instrument keys */
    instrumentKey?: string;
  };

  export class GetMarketQuoteOptionGreekError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMarketQuoteOptionGreekError> = [
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
