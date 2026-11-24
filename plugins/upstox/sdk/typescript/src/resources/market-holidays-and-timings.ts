import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { analyticsResponseSchema, type AnalyticsResponse } from "../models/analytics-response.js";
import {
  apiGatewayErrorResponseSchema,
  type ApiGatewayErrorResponse,
} from "../models/api-gateway-error-response.js";
import {
  getExchangeTimingResponseSchema,
  type GetExchangeTimingResponse,
} from "../models/get-exchange-timing-response.js";
import { getHolidayResponseSchema, type GetHolidayResponse } from "../models/get-holiday-response.js";
import {
  getMarketStatusResponseSchema,
  type GetMarketStatusResponse,
} from "../models/get-market-status-response.js";
import type { Servers } from "../servers.js";

export class MarketHolidaysAndTimings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Change in OI Data
   *
   * @remarks
   * Fetches change in OI data for the given instrument key, expiry, date and interval.
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetChangeOiDataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getChangeOiData(
    request: MarketHolidaysAndTimings.GetChangeOiDataRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetChangeOiDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/change-oi"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "instrument_key", value: request.instrumentKey, schema: s.string() },
          { name: "expiry", value: request.expiry, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
          { name: "interval", value: request.interval, schema: s.int() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetChangeOiDataError,
      },
      options,
    );
  }

  /**
   * Get DII Data
   *
   * @remarks
   * Fetches DII activity data for the given interval.
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetDiiDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDiiData(
    request: MarketHolidaysAndTimings.GetDiiDataRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetDiiDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/dii"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "data_type", value: request.dataType, schema: s.string() },
          { name: "interval", value: request.interval, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetDiiDataError,
      },
      options,
    );
  }

  /**
   * Get Exchange Timings on particular date
   *
   * @remarks
   * This API provides the functionality to retrieve the exchange timings on particular date
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetExchangeTimingsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExchangeTimings(
    request: MarketHolidaysAndTimings.GetExchangeTimingsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetExchangeTimingResponse, MarketHolidaysAndTimings.GetExchangeTimingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/timings/{date}"),
        auth: noneAuth,
        pathParams: [{ name: "date", value: request.date, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getExchangeTimingResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetExchangeTimingsError,
      },
      options,
    );
  }

  /**
   * Get FII Data
   *
   * @remarks
   * Fetches FII activity data for the given data type and interval.
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetFiiDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getFiiData(
    request: MarketHolidaysAndTimings.GetFiiDataRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetFiiDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/fii"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "data_type", value: request.dataType, schema: s.string() },
          { name: "interval", value: request.interval, schema: s.string() },
          { name: "from", value: request.from, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetFiiDataError,
      },
      options,
    );
  }

  /**
   * Get Holiday on particular date
   *
   * @remarks
   * This API provides the functionality to retrieve the holiday on particular date
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetHolidayError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHoliday(
    request: MarketHolidaysAndTimings.GetHolidayRequest,
    options?: RequestOptions,
  ): ApiPromise<GetHolidayResponse, MarketHolidaysAndTimings.GetHolidayError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/holidays/{date}"),
        auth: noneAuth,
        pathParams: [{ name: "date", value: request.date, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getHolidayResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetHolidayError,
      },
      options,
    );
  }

  /**
   * Get Holiday list of current year
   *
   * @remarks
   * This API provides the functionality to retrieve the holiday list of current year
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetHolidaysError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHolidays(
    options?: RequestOptions,
  ): ApiPromise<GetHolidayResponse, MarketHolidaysAndTimings.GetHolidaysError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/holidays"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getHolidayResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetHolidaysError,
      },
      options,
    );
  }

  /**
   * Get Market status for particular exchange
   *
   * @remarks
   * This API provides the functionality to retrieve the market status for particular exchange
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetMarketStatusError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMarketStatus(
    request: MarketHolidaysAndTimings.GetMarketStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<GetMarketStatusResponse, MarketHolidaysAndTimings.GetMarketStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/status/{exchange}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "exchange", value: request.exchange, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMarketStatusResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetMarketStatusError,
      },
      options,
    );
  }

  /**
   * Get Max Pain Data
   *
   * @remarks
   * Fetches Max Pain data for the given instrument key, expiry, date and bucket interval.
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetMaxPainDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMaxPainData(
    request: MarketHolidaysAndTimings.GetMaxPainDataRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetMaxPainDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/max-pain"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "instrument_key", value: request.instrumentKey, schema: s.string() },
          { name: "expiry", value: request.expiry, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
          { name: "bucket_interval", value: request.bucketInterval, schema: s.int() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetMaxPainDataError,
      },
      options,
    );
  }

  /**
   * Get OI Data
   *
   * @remarks
   * Fetches OI data for the given instrument key, expiry and date.
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetOiDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOiData(
    request: MarketHolidaysAndTimings.GetOiDataRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetOiDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/oi"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "instrument_key", value: request.instrumentKey, schema: s.string() },
          { name: "expiry", value: request.expiry, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetOiDataError,
      },
      options,
    );
  }

  /**
   * Get PCR Data
   *
   * @remarks
   * Fetches PCR (Put-Call Ratio) data for the given instrument key, expiry, date and bucket
   * interval.
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetPcrDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPcrData(
    request: MarketHolidaysAndTimings.GetPcrDataRequest,
    options?: RequestOptions,
  ): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetPcrDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/pcr"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "instrument_key", value: request.instrumentKey, schema: s.string() },
          { name: "expiry", value: request.expiry, schema: s.string() },
          { name: "date", value: request.date, schema: s.string() },
          { name: "bucket_interval", value: request.bucketInterval, schema: s.int() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetPcrDataError,
      },
      options,
    );
  }

  /**
   * Get Smartlist Futures
   *
   * @remarks
   * Fetches the smartlist of futures for the given asset type and category.
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetSmartlistFuturesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSmartlistFutures(
    request: MarketHolidaysAndTimings.GetSmartlistFuturesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetSmartlistFuturesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/smartlist/futures"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "asset_type", value: request.assetType, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "page_number", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetSmartlistFuturesError,
      },
      options,
    );
  }

  /**
   * Get Smartlist MTF
   *
   * @remarks
   * Fetches the smartlist of MTF (Margin Trade Funding) stocks. Prices are enriched with live LTP
   * data.
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetSmartlistMtfError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSmartlistMtf(
    request: MarketHolidaysAndTimings.GetSmartlistMtfRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetSmartlistMtfError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/smartlist/mtf"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "page_number", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetSmartlistMtfError,
      },
      options,
    );
  }

  /**
   * Get Smartlist Options
   *
   * @remarks
   * Fetches the smartlist of options for the given asset type and category.
   *
   * @returns Successful
   *
   * @throws {@link MarketHolidaysAndTimings.GetSmartlistOptionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSmartlistOptions(
    request: MarketHolidaysAndTimings.GetSmartlistOptionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AnalyticsResponse, MarketHolidaysAndTimings.GetSmartlistOptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/market/smartlist/options"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "asset_type", value: request.assetType, schema: s.optional(s.string()) },
          { name: "category", value: request.category, schema: s.optional(s.string()) },
          { name: "page_number", value: request.pageNumber, schema: s.optional(s.int()) },
          { name: "page_size", value: request.pageSize, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: analyticsResponseSchema },
        errorFactory: MarketHolidaysAndTimings.GetSmartlistOptionsError,
      },
      options,
    );
  }
}

export namespace MarketHolidaysAndTimings {
  export type GetChangeOiDataRequest = {
    /** Underlying asset instrument key */
    instrumentKey: string;
    /** Expiry date in YYYY-MM-DD format */
    expiry: string;
    /** Date in YYYY-MM-DD format for which change OI data is required */
    date: string;
    /** Number of days for which difference in OI is required */
    interval: number;
  };

  export class GetChangeOiDataError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetChangeOiDataError> = [
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

  export type GetDiiDataRequest = {
    /** Data type. Allowed value: NSE_EQ|CASH */
    dataType: string;
    /** Interval. Allowed values: 1D, 1M */
    interval: string;
    /** Start date in YYYY-MM-DD format (optional) */
    from?: string;
  };

  export class GetDiiDataError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetDiiDataError> = [
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

  export type GetExchangeTimingsRequest = {
    date: string;
  };

  export const getExchangeTimingsRequestSchema: Schema<GetExchangeTimingsRequest> = s.lazySchema(() =>
    s.object<GetExchangeTimingsRequest>({
      date: s.string().check(s.pattern("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")),
    }),
  );

  export class GetExchangeTimingsError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExchangeTimingsError> = [
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

  export type GetFiiDataRequest = {
    /**
     * Data type. Allowed values: NSE_FO|INDEX_FUTURES, NSE_FO|STOCK_FUTURES, NSE_FO|INDEX_OPTIONS,
     * NSE_FO|STOCK_OPTIONS, NSE_EQ|CASH
     */
    dataType: string;
    /** Interval. Allowed values: 1D, 1M */
    interval: string;
    /** Start date in YYYY-MM-DD format (optional) */
    from?: string;
  };

  export class GetFiiDataError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetFiiDataError> = [
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

  export type GetHolidayRequest = {
    date: string;
  };

  export const getHolidayRequestSchema: Schema<GetHolidayRequest> = s.lazySchema(() =>
    s.object<GetHolidayRequest>({
      date: s.string().check(s.pattern("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")),
    }),
  );

  export class GetHolidayError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetHolidayError> = [
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

  export class GetHolidaysError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetHolidaysError> = [
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

  export type GetMarketStatusRequest = {
    exchange: string;
  };

  export const getMarketStatusRequestSchema: Schema<GetMarketStatusRequest> = s.lazySchema(() =>
    s.object<GetMarketStatusRequest>({
      exchange: s.string().check(s.pattern("^(\\s*|(?:NSE|NFO|CDS|BSE|BFO|BCD|MCX|NSCOM)+)$")),
    }),
  );

  export class GetMarketStatusError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMarketStatusError> = [
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

  export type GetMaxPainDataRequest = {
    /** Underlying asset instrument key */
    instrumentKey: string;
    /** Expiry date in YYYY-MM-DD format */
    expiry: string;
    /** Date in YYYY-MM-DD format for which Max Pain data is required */
    date: string;
    /** Bucket interval in minutes for the insights list */
    bucketInterval: number;
  };

  export class GetMaxPainDataError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetMaxPainDataError> = [
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

  export type GetOiDataRequest = {
    /** Underlying asset instrument key */
    instrumentKey: string;
    /** Expiry date in YYYY-MM-DD format */
    expiry: string;
    /** Date in YYYY-MM-DD format for which OI data is required */
    date: string;
  };

  export class GetOiDataError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetOiDataError> = [
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

  export type GetPcrDataRequest = {
    /** Underlying asset instrument key */
    instrumentKey: string;
    /** Expiry date in YYYY-MM-DD format */
    expiry: string;
    /** Date in YYYY-MM-DD format for which PCR data is required */
    date: string;
    /** Bucket interval in minutes for the insights list */
    bucketInterval: number;
  };

  export class GetPcrDataError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetPcrDataError> = [
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

  export type GetSmartlistFuturesRequest = {
    /** Asset type. Allowed values: INDEX, STOCK, COMMODITY */
    assetType?: string;
    /**
     * Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS,
     * PRICE_LOSERS, PREMIUM, DISCOUNT (COMMODITY supports only: TOP_TRADED, MOST_ACTIVE,
     * OI_GAINERS, OI_LOSERS)
     */
    category?: string;
    /** Page number (optional, 1-indexed) */
    pageNumber?: number;
    /** Page size (optional, max 50) */
    pageSize?: number;
  };

  export class GetSmartlistFuturesError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetSmartlistFuturesError> = [
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

  export type GetSmartlistMtfRequest = {
    /** Page number (optional, 1-indexed) */
    pageNumber?: number;
    /** Page size (optional, max 50) */
    pageSize?: number;
  };

  export class GetSmartlistMtfError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetSmartlistMtfError> = [
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

  export type GetSmartlistOptionsRequest = {
    /** Asset type. Allowed values: INDEX, STOCK, COMMODITY */
    assetType?: string;
    /**
     * Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS,
     * PRICE_LOSERS, IV_GAINERS, IV_LOSERS, UNDER_5000, UNDER_10000 (COMMODITY supports only:
     * TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS)
     */
    category?: string;
    /** Page number (optional, 1-indexed) */
    pageNumber?: number;
    /** Page size (optional, max 50) */
    pageSize?: number;
  };

  export class GetSmartlistOptionsError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetSmartlistOptionsError> = [
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
