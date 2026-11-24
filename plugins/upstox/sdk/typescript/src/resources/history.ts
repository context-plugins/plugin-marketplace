import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiGatewayErrorResponseSchema,
  type ApiGatewayErrorResponse,
} from "../models/api-gateway-error-response.js";
import {
  getHistoricalCandleResponseSchema,
  type GetHistoricalCandleResponse,
} from "../models/get-historical-candle-response.js";
import {
  getIntraDayCandleResponseSchema,
  type GetIntraDayCandleResponse,
} from "../models/get-intra-day-candle-response.js";
import type { Servers } from "../servers.js";

export class History {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Historical candle data
   *
   * @remarks
   * Get OHLC values for all instruments across various timeframes. Historical data can be fetched
   * for the following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year
   * candles till endDate day: last 1 year candles till endDate week: last 10 year candles till
   * endDate month: last 10 year candles till endDate
   *
   * @returns Successful
   *
   * @throws {@link History.GetHistoricalCandleData2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHistoricalCandleData2(
    request: History.GetHistoricalCandleData2Request,
    options?: RequestOptions,
  ): ApiPromise<GetHistoricalCandleResponse, History.GetHistoricalCandleData2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/historical-candle/{instrumentKey}/{interval}/{to_date}"),
        auth: noneAuth,
        pathParams: [
          { name: "instrumentKey", value: request.instrumentKey, schema: s.string() },
          { name: "interval", value: request.interval, schema: s.string() },
          { name: "to_date", value: request.toDate, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getHistoricalCandleResponseSchema },
        errorFactory: History.GetHistoricalCandleData2Error,
      },
      options,
    );
  }

  /**
   * Historical candle data
   *
   * @remarks
   * Get OHLC values for all instruments across various timeframes. Historical data can be fetched
   * for the following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year
   * candles till endDate day: last 1 year candles till endDate week: last 10 year candles till
   * endDate month: last 10 year candles till endDate
   *
   * @returns Successful
   *
   * @throws {@link History.GetHistoricalCandleData3Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHistoricalCandleData3(
    request: History.GetHistoricalCandleData3Request,
    options?: RequestOptions,
  ): ApiPromise<GetHistoricalCandleResponse, History.GetHistoricalCandleData3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v2/historical-candle/{instrumentKey}/{interval}/{to_date}/{from_date}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "instrumentKey", value: request.instrumentKey, schema: s.string() },
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
        errorFactory: History.GetHistoricalCandleData3Error,
      },
      options,
    );
  }

  /**
   * Intra day candle data
   *
   * @remarks
   * Get OHLC values for all instruments for the present trading day
   *
   * @returns Successful
   *
   * @throws {@link History.GetIntraDayCandleData1Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIntraDayCandleData1(
    request: History.GetIntraDayCandleData1Request,
    options?: RequestOptions,
  ): ApiPromise<GetIntraDayCandleResponse, History.GetIntraDayCandleData1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/historical-candle/intraday/{instrumentKey}/{interval}"),
        auth: noneAuth,
        pathParams: [
          { name: "instrumentKey", value: request.instrumentKey, schema: s.string() },
          { name: "interval", value: request.interval, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getIntraDayCandleResponseSchema },
        errorFactory: History.GetIntraDayCandleData1Error,
      },
      options,
    );
  }
}

export namespace History {
  export type GetHistoricalCandleData2Request = {
    instrumentKey: string;
    interval: string;
    toDate: string;
  };

  export const getHistoricalCandleData2RequestSchema: Schema<GetHistoricalCandleData2Request> = s.lazySchema(
    () =>
      s.object<GetHistoricalCandleData2Request>({
        instrumentKey: s
          .string()
          .check(
            s.pattern(
              "^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$",
            ),
          ),
        interval: s.string().check(s.pattern("^(1minute|30minute|day|week|month)$")),
        toDate: s.string(),
      }),
  );

  export class GetHistoricalCandleData2Error extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetHistoricalCandleData2Error> = [
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

  export type GetHistoricalCandleData3Request = {
    instrumentKey: string;
    interval: string;
    toDate: string;
    fromDate: string;
  };

  export const getHistoricalCandleData3RequestSchema: Schema<GetHistoricalCandleData3Request> = s.lazySchema(
    () =>
      s.object<GetHistoricalCandleData3Request>({
        instrumentKey: s
          .string()
          .check(
            s.pattern(
              "^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$",
            ),
          ),
        interval: s.string().check(s.pattern("^(1minute|30minute|day|week|month)$")),
        toDate: s.string(),
        fromDate: s.string(),
      }),
  );

  export class GetHistoricalCandleData3Error extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetHistoricalCandleData3Error> = [
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

  export type GetIntraDayCandleData1Request = {
    instrumentKey: string;
    interval: string;
  };

  export const getIntraDayCandleData1RequestSchema: Schema<GetIntraDayCandleData1Request> = s.lazySchema(() =>
    s.object<GetIntraDayCandleData1Request>({
      instrumentKey: s
        .string()
        .check(
          s.pattern(
            "^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$",
          ),
        ),
      interval: s.string().check(s.pattern("^(1minute|30minute)$")),
    }),
  );

  export class GetIntraDayCandleData1Error extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIntraDayCandleData1Error> = [
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
