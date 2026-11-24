import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { Format, formatSchema } from "../models/format.js";
import { statusSchema, type Status } from "../models/status.js";
import { subdomainsResponseSchema, type SubdomainsResponse } from "../models/subdomains-response.js";
import type { Servers } from "../servers.js";

/**
 * Subdomain enumeration
 */
export class Subdomains {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Subdomains Lookup
   *
   * @remarks
   * All subdomains including nested. 2 credits per query.
   *
   * @returns Successful response
   *
   * @throws {@link Subdomains.SubdomainsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  subdomains(
    request: Subdomains.SubdomainsRequest,
    options?: RequestOptions,
  ): ApiPromise<SubdomainsResponse, Subdomains.SubdomainsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1.0/subdomains"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "domain", value: request.domain, schema: s.string() },
          { name: "after", value: request.after, schema: s.optional(s.dateOnly()) },
          { name: "before", value: request.before, schema: s.optional(s.dateOnly()) },
          { name: "status", value: request.status, schema: s.optional(s.lazy(() => statusSchema)) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: subdomainsResponseSchema },
        errorFactory: Subdomains.SubdomainsError,
      },
      options,
    );
  }
}

export namespace Subdomains {
  export type SubdomainsRequest = {
    domain: string;
    after?: string;
    before?: string;
    status?: Status;
    /** @default 1 */
    page?: number;
    /** @default Format.Json */
    format?: Format;
  };

  export class SubdomainsError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SubdomainsError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
