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
  getExpiredFuturesContractResponseSchema,
  type GetExpiredFuturesContractResponse,
} from "../models/get-expired-futures-contract-response.js";
import { getExpiriesResponseSchema, type GetExpiriesResponse } from "../models/get-expiries-response.js";
import {
  getHistoricalCandleResponseSchema,
  type GetHistoricalCandleResponse,
} from "../models/get-historical-candle-response.js";
import {
  getOptionContractResponseSchema,
  type GetOptionContractResponse,
} from "../models/get-option-contract-response.js";
import type { Servers } from "../servers.js";

export class ExpiredInstrument {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Expired instruments - Get future contracts
   *
   * @remarks
   * This API provides the functionality to retrieve expired future contracts for a given instrument
   * key and expiry date.
   *
   * @returns Successful
   *
   * @throws {@link ExpiredInstrument.GetExpiredFutureContractsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExpiredFutureContracts(
    request: ExpiredInstrument.GetExpiredFutureContractsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetExpiredFuturesContractResponse, ExpiredInstrument.GetExpiredFutureContractsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/expired-instruments/future/contract"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "instrument_key", value: request.instrumentKey, schema: s.string() },
          { name: "expiry_date", value: request.expiryDate, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getExpiredFuturesContractResponseSchema },
        errorFactory: ExpiredInstrument.GetExpiredFutureContractsError,
      },
      options,
    );
  }

  /**
   * Expired Historical candle data
   *
   * @remarks
   * Get Expired OHLC values for all instruments across various timeframes. Expired Historical data
   * can be fetched for the following durations. 1minute: last 1 month candles till endDate
   * 30minute: last 1 year candles till endDate day: last 1 year candles till endDate week: last 10
   * year candles till endDate month: last 10 year candles till endDate
   *
   * @returns Successful
   *
   * @throws {@link ExpiredInstrument.GetExpiredHistoricalCandleDataError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExpiredHistoricalCandleData(
    request: ExpiredInstrument.GetExpiredHistoricalCandleDataRequest,
    options?: RequestOptions,
  ): ApiPromise<GetHistoricalCandleResponse, ExpiredInstrument.GetExpiredHistoricalCandleDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/expired-instruments/historical-candle/{expired_instrument_key}/{interval}/{to_date}/{from_date}",
        ),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "expired_instrument_key", value: request.expiredInstrumentKey, schema: s.string() },
          { name: "interval", value: request.interval, schema: s.string() },
          { name: "to_date", value: request.toDate, schema: s.string() },
          { name: "from_date", value: request.fromDate, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getHistoricalCandleResponseSchema },
        errorFactory: ExpiredInstrument.GetExpiredHistoricalCandleDataError,
      },
      options,
    );
  }

  /**
   * Get expired option contracts
   *
   * @remarks
   * This API provides the functionality to retrieve the expired option contracts
   *
   * @returns Successful
   *
   * @throws {@link ExpiredInstrument.GetExpiredOptionContractsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExpiredOptionContracts(
    request: ExpiredInstrument.GetExpiredOptionContractsRequest,
    options?: RequestOptions,
  ): ApiPromise<GetOptionContractResponse, ExpiredInstrument.GetExpiredOptionContractsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/expired-instruments/option/contract"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "instrument_key", value: request.instrumentKey, schema: s.string() },
          { name: "expiry_date", value: request.expiryDate, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getOptionContractResponseSchema },
        errorFactory: ExpiredInstrument.GetExpiredOptionContractsError,
      },
      options,
    );
  }

  /**
   * Expired instruments - Get expiries
   *
   * @remarks
   * This API provides the functionality to retrieve expiry dates for a given instrument key.
   *
   * @returns Successful
   *
   * @throws {@link ExpiredInstrument.GetExpiriesResponseError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getExpiriesResponse(
    request: ExpiredInstrument.GetExpiriesResponseRequest,
    options?: RequestOptions,
  ): ApiPromise<GetExpiriesResponse, ExpiredInstrument.GetExpiriesResponseError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/expired-instruments/expiries"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [{ name: "instrument_key", value: request.instrumentKey, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getExpiriesResponseSchema },
        errorFactory: ExpiredInstrument.GetExpiriesResponseError,
      },
      options,
    );
  }
}

export namespace ExpiredInstrument {
  export type GetExpiredFutureContractsRequest = {
    /** Instrument Key of asset */
    instrumentKey: string;
    /** Expiry date of the instrument */
    expiryDate: string;
  };

  export const getExpiredFutureContractsRequestSchema: Schema<GetExpiredFutureContractsRequest> =
    s.lazySchema(() =>
      s.object<GetExpiredFutureContractsRequest>({
        instrumentKey: s
          .string()
          .check(
            s.pattern(
              "^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$",
            ),
          ),
        expiryDate: s.string().check(s.pattern("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")),
      }),
    );

  export class GetExpiredFutureContractsError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExpiredFutureContractsError> = [
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

  export type GetExpiredHistoricalCandleDataRequest = {
    /** Expired Instrument Key of asset */
    expiredInstrumentKey: string;
    /** Interval to get expired ohlc data */
    interval: string;
    /** to date */
    toDate: string;
    /** from date */
    fromDate: string;
  };

  export const getExpiredHistoricalCandleDataRequestSchema: Schema<GetExpiredHistoricalCandleDataRequest> =
    s.lazySchema(() =>
      s.object<GetExpiredHistoricalCandleDataRequest>({
        expiredInstrumentKey: s
          .string()
          .check(
            s.pattern(
              "^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM)\\|[\\w\\d\\-]+\\|(0[1-9]|[12]\\d|3[01])-(0[1-9]|1[012])-(\\d{4})$",
            ),
          ),
        interval: s.string().check(s.pattern("^(1minute|3minute|5minute|15minute|30minute|day)$")),
        toDate: s.string().check(s.pattern("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")),
        fromDate: s.string().check(s.pattern("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")),
      }),
    );

  export class GetExpiredHistoricalCandleDataError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExpiredHistoricalCandleDataError> = [
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

  export type GetExpiredOptionContractsRequest = {
    /** Instrument key for an underlying symbol */
    instrumentKey: string;
    /** Expiry date in format: YYYY-mm-dd */
    expiryDate: string;
  };

  export const getExpiredOptionContractsRequestSchema: Schema<GetExpiredOptionContractsRequest> =
    s.lazySchema(() =>
      s.object<GetExpiredOptionContractsRequest>({
        instrumentKey: s
          .string()
          .check(
            s.pattern(
              "^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$",
            ),
          ),
        expiryDate: s.string().check(s.pattern("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")),
      }),
    );

  export class GetExpiredOptionContractsError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExpiredOptionContractsError> = [
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

  export type GetExpiriesResponseRequest = {
    /** Instrument Key of asset */
    instrumentKey: string;
  };

  export const getExpiriesResponseRequestSchema: Schema<GetExpiriesResponseRequest> = s.lazySchema(() =>
    s.object<GetExpiriesResponseRequest>({
      instrumentKey: s
        .string()
        .check(
          s.pattern(
            "^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$",
          ),
        ),
    }),
  );

  export class GetExpiriesResponseError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetExpiriesResponseError> = [
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
