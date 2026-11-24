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
  searchInstrumentResponseSchema,
  type SearchInstrumentResponse,
} from "../models/search-instrument-response.js";
import type { Servers } from "../servers.js";

export class Instruments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Search instruments
   *
   * @remarks
   * This API provides the functionality to retrieve the instrument details for searched query
   *
   * @returns Successful
   *
   * @throws {@link Instruments.SearchInstrumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link UpstoxError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchInstrument(
    request: Instruments.SearchInstrumentRequest,
    options?: RequestOptions,
  ): ApiPromise<SearchInstrumentResponse, Instruments.SearchInstrumentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/instruments/search"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "query", value: request.query, schema: s.string() },
          { name: "exchanges", value: request.exchanges, schema: s.optional(s.string()) },
          { name: "segments", value: request.segments, schema: s.optional(s.string()) },
          { name: "instrument_types", value: request.instrumentTypes, schema: s.optional(s.string()) },
          { name: "expiry", value: request.expiry, schema: s.optional(s.string()) },
          { name: "atm_offset", value: request.atmOffset, schema: s.optional(s.int()) },
          { name: "page_number", value: request.pageNumber, schema: s.defaulted(s.int(), 1) },
          { name: "records", value: request.records, schema: s.defaulted(s.int(), 10) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: searchInstrumentResponseSchema },
        errorFactory: Instruments.SearchInstrumentError,
      },
      options,
    );
  }
}

export namespace Instruments {
  export type SearchInstrumentRequest = {
    /** natural language query */
    query: string;
    /** Comma separated exchanges */
    exchanges?: string;
    /** Comma separated segments */
    segments?: string;
    /** Comma separated instrument types */
    instrumentTypes?: string;
    /** expiry in format: yyyy-MM-dd */
    expiry?: string;
    /** page number greater than or equal to 1 */
    atmOffset?: number;
    /** ATM offset number for queries like ATM, ATM+1, ATM-1, etc. @default 1 */
    pageNumber?: number;
    /** no of records in a single page @default 10 */
    records?: number;
  };

  export const searchInstrumentRequestSchema: Schema<SearchInstrumentRequest> = s.lazySchema(() =>
    s.object<SearchInstrumentRequest>({
      query: s.string().check(s.minLength(1)),
      exchanges: s.optional(s.string().check(s.pattern("^(ALL|NSE|BSE|MCX)(,(ALL|NSE|BSE|MCX))*$"))),
      segments: s.optional(
        s
          .string()
          .check(
            s.pattern(
              "^(ALL|EQ|FO|CURR|COMM|INDEX|OPT|FUT|OPTION_CHAIN)(,(ALL|EQ|FO|CURR|COMM|INDEX|OPT|FUT|OPTION_CHAIN))*$",
            ),
          ),
      ),
      instrumentTypes: s.optional(s.string()),
      expiry: s.optional(s.string()),
      atmOffset: s.optional(s.int()),
      pageNumber: s.defaulted(s.int(), 1),
      records: s.defaulted(s.int(), 10),
    }),
  );

  export class SearchInstrumentError extends ApiError {
    declare readonly payload:
      | Declared<"apiGatewayErrorResponse", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse2", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse3", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse4", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse5", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse6", ApiGatewayErrorResponse>
      | Declared<"apiGatewayErrorResponse7", ApiGatewayErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchInstrumentError> = [
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
