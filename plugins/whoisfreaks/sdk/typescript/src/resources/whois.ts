import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bulkWhoisResponseSchema, type BulkWhoisResponse } from "../models/bulk-whois-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { Format, formatSchema } from "../models/format.js";
import { reverseWhoisResponseSchema, type ReverseWhoisResponse } from "../models/reverse-whois-response.js";
import {
  v20BulkwhoisLiveRequestInternalSchema,
  type V20BulkwhoisLiveRequest,
} from "../models/v20-bulkwhois-live-request.js";
import {
  whoisHistoricalResponseSchema,
  type WhoisHistoricalResponse,
} from "../models/whois-historical-response.js";
import { whoisResponseSchema, type WhoisResponse } from "../models/whois-response.js";
import type { Servers } from "../servers.js";

/**
 * WHOIS lookup APIs (live, historical, reverse, bulk)
 */
export class Whois {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk WHOIS Lookup
   *
   * @remarks
   * Up to 100 domains in one request. 1 credit per successful domain.
   *
   * @returns Successful response
   *
   * @throws {@link Whois.BulkWhoisError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkWhois(
    request: Whois.BulkWhoisRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkWhoisResponse, Whois.BulkWhoisError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2.0/bulkwhois/live"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v20BulkwhoisLiveRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: bulkWhoisResponseSchema },
        errorFactory: Whois.BulkWhoisError,
      },
      options,
    );
  }

  /**
   * Historical WHOIS records for a domain
   *
   * @returns Historical WHOIS records
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  whoisHistory(
    request: Whois.WhoisHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<WhoisHistoricalResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2.0/whois/history"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "domainName", value: request.domainName, schema: s.string() },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => formatSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: whoisHistoricalResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Live WHOIS Lookup
   *
   * @remarks
   * Real-time WHOIS lookup from authoritative servers. Cost 1 credit.
   *
   * @returns Successful response
   *
   * @throws {@link Whois.WhoisLiveError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  whoisLive(
    request: Whois.WhoisLiveRequest,
    options?: RequestOptions,
  ): ApiPromise<WhoisResponse, Whois.WhoisLiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2.0/whois/live"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "domainName", value: request.domainName, schema: s.string() },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: whoisResponseSchema },
        errorFactory: Whois.WhoisLiveError,
      },
      options,
    );
  }

  /**
   * Reverse WHOIS lookup by keyword
   *
   * @returns Reverse WHOIS results (paginated)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  whoisReverse(
    request: Whois.WhoisReverseRequest,
    options?: RequestOptions,
  ): ApiPromise<ReverseWhoisResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2.0/whois/reverse"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "keyword", value: request.keyword, schema: s.string() },
          { name: "page", value: request.page, schema: s.optional(s.int()) },
          { name: "format", value: request.format, schema: s.optional(s.lazy(() => formatSchema)) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reverseWhoisResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Whois {
  export type BulkWhoisRequest = {
    /** @default Format.Json */
    format?: Format;
    body: V20BulkwhoisLiveRequest;
  };

  export class BulkWhoisError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<BulkWhoisError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type WhoisHistoryRequest = {
    /** Domain to fetch historical WHOIS records for */
    domainName: string;
    /** Page number */
    page?: number;
    format?: Format;
  };

  export type WhoisLiveRequest = {
    domainName: string;
    /** @default Format.Json */
    format?: Format;
  };

  export class WhoisLiveError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<WhoisLiveError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type WhoisReverseRequest = {
    /** Keyword to search across WHOIS records */
    keyword: string;
    /** Page number */
    page?: number;
    format?: Format;
  };
}
