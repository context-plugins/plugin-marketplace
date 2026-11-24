import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bulkDnsResponseSchema, type BulkDnsResponse } from "../models/bulk-dns-response.js";
import { dnsResponseSchema, type DnsResponse } from "../models/dns-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { Format, formatSchema } from "../models/format.js";
import {
  historicalDnsResponseSchema,
  type HistoricalDnsResponse,
} from "../models/historical-dns-response.js";
import { reverseDnsResponseSchema, type ReverseDnsResponse } from "../models/reverse-dns-response.js";
import { typeSchema, type Type } from "../models/type.js";
import {
  v20DnsBulkLiveRequestSchema,
  type V20DnsBulkLiveRequest,
} from "../models/v20-dns-bulk-live-request.js";
import type { Servers } from "../servers.js";

/**
 * DNS lookup APIs (live, historical, reverse, bulk)
 */
export class Dns {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk DNS Lookup
   *
   * @remarks
   * Up to 100 domains + 100 IPs in one request.
   *
   * @returns Successful response
   *
   * @throws {@link Dns.DnsBulkError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dnsBulk(
    request: Dns.DnsBulkRequest,
    options?: RequestOptions,
  ): ApiPromise<BulkDnsResponse, Dns.DnsBulkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2.0/dns/bulk/live"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.defaulted(s.string(), "all") },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v20DnsBulkLiveRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkDnsResponseSchema },
        errorFactory: Dns.DnsBulkError,
      },
      options,
    );
  }

  /**
   * Historical DNS Lookup
   *
   * @remarks
   * All historical DNS records. 2 credits per page (100 records/page).
   *
   * @returns Successful response
   *
   * @throws {@link Dns.DnsHistoricalError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dnsHistorical(
    request: Dns.DnsHistoricalRequest,
    options?: RequestOptions,
  ): ApiPromise<HistoricalDnsResponse, Dns.DnsHistoricalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2.0/dns/historical"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "domainName", value: request.domainName, schema: s.string() },
          { name: "type", value: request.type, schema: s.defaulted(s.string(), "all") },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: historicalDnsResponseSchema },
        errorFactory: Dns.DnsHistoricalError,
      },
      options,
    );
  }

  /**
   * Live DNS Lookup
   *
   * @remarks
   * Real-time DNS record lookup. 1 credit per query.
   *
   * @returns Successful response
   *
   * @throws {@link Dns.DnsLiveError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dnsLive(
    request: Dns.DnsLiveRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DnsResponse, Dns.DnsLiveError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2.0/dns/live"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: s.defaulted(s.string(), "all") },
          { name: "domainName", value: request.domainName, schema: s.optional(s.string()) },
          { name: "ipAddress", value: request.ipAddress, schema: s.optional(s.string()) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dnsResponseSchema },
        errorFactory: Dns.DnsLiveError,
      },
      options,
    );
  }

  /**
   * Reverse DNS Lookup
   *
   * @remarks
   * Search domains by IP or DNS value. 5 credits per page.
   *
   * @returns Successful response
   *
   * @throws {@link Dns.DnsReverseError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dnsReverse(
    request: Dns.DnsReverseRequest,
    options?: RequestOptions,
  ): ApiPromise<ReverseDnsResponse, Dns.DnsReverseError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2.1/dns/reverse"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "value", value: request.value, schema: s.string() },
          { name: "type", value: request.type, schema: typeSchema },
          { name: "exact", value: request.exact, schema: s.defaulted(s.boolean(), true) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: reverseDnsResponseSchema },
        errorFactory: Dns.DnsReverseError,
      },
      options,
    );
  }
}

export namespace Dns {
  export type DnsBulkRequest = {
    /** @default "all" */
    type?: string;
    /** @default Format.Json */
    format?: Format;
    body: V20DnsBulkLiveRequest;
  };

  export class DnsBulkError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DnsBulkError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DnsHistoricalRequest = {
    domainName: string;
    /** @default "all" */
    type?: string;
    /** @default 1 */
    page?: number;
    /** @default Format.Json */
    format?: Format;
  };

  export class DnsHistoricalError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DnsHistoricalError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DnsLiveRequest = {
    /** all or comma-separated: A,MX,NS,TXT,SOA,SPF,AAAA,CNAME @default "all" */
    type?: string;
    domainName?: string;
    /** Use for PTR lookups */
    ipAddress?: string;
    /** @default Format.Json */
    format?: Format;
  };

  export class DnsLiveError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DnsLiveError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DnsReverseRequest = {
    /** IP, CIDR, or record value */
    value: string;
    type: Type;
    /** @default true */
    exact?: boolean;
    /** @default 1 */
    page?: number;
    /** @default Format.Json */
    format?: Format;
  };

  export class DnsReverseError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<DnsReverseError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
