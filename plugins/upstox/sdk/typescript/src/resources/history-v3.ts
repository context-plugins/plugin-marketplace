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

/**
 * Historical Candle Data V3
 */
export class HistoryV3 {
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
   * Get OHLC values for all instruments for the present trading day with expanded interval options.
   *
   * @returns Successful
   *
   * @throws {@link HistoryV3.GetHistoricalCandleDataError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHistoricalCandleData(
    request: HistoryV3.GetHistoricalCandleDataRequest,
    options?: RequestOptions,
  ): ApiPromise<GetHistoricalCandleResponse, HistoryV3.GetHistoricalCandleDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/historical-candle/{instrumentKey}/{unit}/{interval}/{to_date}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "instrumentKey", value: request.instrumentKey, schema: s.string() },
          { name: "unit", value: request.unit, schema: s.string() },
          { name: "interval", value: request.interval, schema: s.int() },
          { name: "to_date", value: request.toDate, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getHistoricalCandleResponseSchema },
        errorFactory: HistoryV3.GetHistoricalCandleDataError,
      },
      options,
    );
  }

  /**
   * Historical candle data
   *
   * @remarks
   * Get OHLC values for all instruments for the present trading day with expanded interval options
   *
   * @returns Successful
   *
   * @throws {@link HistoryV3.GetHistoricalCandleData1Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getHistoricalCandleData1(
    request: HistoryV3.GetHistoricalCandleData1Request,
    options?: RequestOptions,
  ): ApiPromise<GetHistoricalCandleResponse, HistoryV3.GetHistoricalCandleData1Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/historical-candle/{instrumentKey}/{unit}/{interval}/{to_date}/{from_date}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "instrumentKey", value: request.instrumentKey, schema: s.string() },
          { name: "unit", value: request.unit, schema: s.string() },
          { name: "interval", value: request.interval, schema: s.int() },
          { name: "to_date", value: request.toDate, schema: s.string() },
          { name: "from_date", value: request.fromDate, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getHistoricalCandleResponseSchema },
        errorFactory: HistoryV3.GetHistoricalCandleData1Error,
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
   * @throws {@link HistoryV3.GetIntraDayCandleDataError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIntraDayCandleData(
    request: HistoryV3.GetIntraDayCandleDataRequest,
    options?: RequestOptions,
  ): ApiPromise<GetIntraDayCandleResponse, HistoryV3.GetIntraDayCandleDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/v3/historical-candle/intraday/{instrumentKey}/{unit}/{interval}",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "instrumentKey", value: request.instrumentKey, schema: s.string() },
          { name: "unit", value: request.unit, schema: s.string() },
          { name: "interval", value: request.interval, schema: s.int() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getIntraDayCandleResponseSchema },
        errorFactory: HistoryV3.GetIntraDayCandleDataError,
      },
      options,
    );
  }
}

export namespace HistoryV3 {
  export type GetHistoricalCandleDataRequest = {
    instrumentKey: string;
    unit: string;
    interval: number;
    toDate: string;
  };

  export const getHistoricalCandleDataRequestSchema: Schema<GetHistoricalCandleDataRequest> = s.lazySchema(
    () =>
      s.object<GetHistoricalCandleDataRequest>({
        instrumentKey: s
          .string()
          .check(
            s.pattern(
              "^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$",
            ),
          ),
        unit: s.string().check(s.pattern("^(minutes|hours|days|weeks|months)$")),
        interval: s.int(),
        toDate: s.string().check(s.pattern("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")),
      }),
  );

  export class GetHistoricalCandleDataError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetHistoricalCandleDataError> = [
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

  export type GetHistoricalCandleData1Request = {
    instrumentKey: string;
    unit: string;
    interval: number;
    toDate: string;
    fromDate: string;
  };

  export const getHistoricalCandleData1RequestSchema: Schema<GetHistoricalCandleData1Request> = s.lazySchema(
    () =>
      s.object<GetHistoricalCandleData1Request>({
        instrumentKey: s
          .string()
          .check(
            s.pattern(
              "^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$",
            ),
          ),
        unit: s.string().check(s.pattern("^(minutes|hours|days|weeks|months)$")),
        interval: s.int(),
        toDate: s.string().check(s.pattern("^(\\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")),
        fromDate: s.string(),
      }),
  );

  export class GetHistoricalCandleData1Error extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetHistoricalCandleData1Error> = [
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

  export type GetIntraDayCandleDataRequest = {
    instrumentKey: string;
    unit: string;
    interval: number;
  };

  export const getIntraDayCandleDataRequestSchema: Schema<GetIntraDayCandleDataRequest> = s.lazySchema(() =>
    s.object<GetIntraDayCandleDataRequest>({
      instrumentKey: s
        .string()
        .check(
          s.pattern(
            "^(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+(,(?:NSE_EQ|NSE_FO|NCD_FO|BSE_EQ|BSE_FO|BCD_FO|MCX_FO|NSE_INDEX|BSE_INDEX|MCX_INDEX|NSE_COM|GLOBAL_INDEX|GLOBAL_INDICATOR)\\|[\\w ^]+)*?$",
          ),
        ),
      unit: s.string().check(s.pattern("^(minutes|hours|days)$")),
      interval: s.int(),
    }),
  );

  export class GetIntraDayCandleDataError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIntraDayCandleDataError> = [
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
