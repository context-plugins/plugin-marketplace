import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkDomainAvailabilityRequestInternalSchema,
  type BulkDomainAvailabilityRequest,
} from "../models/bulk-domain-availability-request.js";
import {
  bulkDomainAvailabilityResponseSchema,
  type BulkDomainAvailabilityResponse,
} from "../models/bulk-domain-availability-response.js";
import {
  domainAvailabilityResponseSchema,
  type DomainAvailabilityResponse,
} from "../models/domain-availability-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { Format, formatSchema } from "../models/format.js";
import type { Servers } from "../servers.js";

/**
 * Check domain availability
 */
export class DomainAvailability {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk Domain Availability Check
   *
   * @remarks
   * Two bulk modes. Mode 1: POST domainNames array. Mode 2: POST tld array plus domain query param.
   * Max 100 domains per request. 1 credit per domain checked.
   *
   * @returns Successful response
   *
   * @throws {@link DomainAvailability.BulkDomainAvailabilityV2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkDomainAvailabilityV2(
    request: DomainAvailability.BulkDomainAvailabilityV2Request,
    options?: RequestOptions,
  ): ApiPromise<BulkDomainAvailabilityResponse, DomainAvailability.BulkDomainAvailabilityV2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2.0/domain/availability"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "domain", value: request.domain, schema: s.optional(s.string()) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkDomainAvailabilityRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: bulkDomainAvailabilityResponseSchema },
        errorFactory: DomainAvailability.BulkDomainAvailabilityV2Error,
      },
      options,
    );
  }

  /**
   * Domain Availability Check with Suggestions
   *
   * @remarks
   * Check availability of a single domain and optionally get suggestions across multiple TLDs. 1
   * credit per domain checked. sug=false checks only the queried domain; sug=true returns up to
   * `count` (max 100) TLD suggestions.
   *
   * @returns Successful response
   *
   * @throws {@link DomainAvailability.DomainAvailabilityV2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  domainAvailabilityV2(
    request: DomainAvailability.DomainAvailabilityV2Request,
    options?: RequestOptions,
  ): ApiPromise<DomainAvailabilityResponse, DomainAvailability.DomainAvailabilityV2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2.0/domain/availability"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "domain", value: request.domain, schema: s.string() },
          { name: "sug", value: request.sug, schema: s.defaulted(s.boolean(), false) },
          { name: "count", value: request.count, schema: s.defaulted(s.int(), 5) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: domainAvailabilityResponseSchema },
        errorFactory: DomainAvailability.DomainAvailabilityV2Error,
      },
      options,
    );
  }
}

export namespace DomainAvailability {
  export type BulkDomainAvailabilityV2Request = {
    /** Required for TLD-mode bulk check (base domain). */
    domain?: string;
    /** @default Format.Json */
    format?: Format;
    body: BulkDomainAvailabilityRequest;
  };

  export class BulkDomainAvailabilityV2Error extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkDomainAvailabilityV2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type DomainAvailabilityV2Request = {
    /** The domain name to check */
    domain: string;
    /** Whether to return TLD suggestions alongside the queried domain. @default false */
    sug?: boolean;
    /** Number of TLD suggestions to return when sug=true. Maximum is 100. @default 5 */
    count?: number;
    /** @default Format.Json */
    format?: Format;
  };

  export const domainAvailabilityV2RequestSchema: Schema<DomainAvailabilityV2Request> = s.lazySchema(() =>
    s.object<DomainAvailabilityV2Request>({
      domain: s.string(),
      sug: s.defaulted(s.boolean(), false),
      count: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 5),
      format: s.defaulted(formatSchema, Format.Json),
    }),
  );

  export class DomainAvailabilityV2Error extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DomainAvailabilityV2Error> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
