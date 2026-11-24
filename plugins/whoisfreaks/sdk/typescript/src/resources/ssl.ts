import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { Format, formatSchema } from "../models/format.js";
import { sslResponseSchema, type SslResponse } from "../models/ssl-response.js";
import type { Servers } from "../servers.js";

/**
 * SSL certificate lookup
 */
export class Ssl {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * SSL Certificate Lookup
   *
   * @remarks
   * Real-time SSL cert with optional chain.
   *
   * @returns Successful response
   *
   * @throws {@link Ssl.SslLookupError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sslLookup(
    request: Ssl.SslLookupRequest,
    options?: RequestOptions,
  ): ApiPromise<SslResponse, Ssl.SslLookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1.0/ssl/live"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "domainName", value: request.domainName, schema: s.string() },
          { name: "chain", value: request.chain, schema: s.defaulted(s.boolean(), false) },
          { name: "sslRaw", value: request.sslRaw, schema: s.defaulted(s.boolean(), false) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sslResponseSchema },
        errorFactory: Ssl.SslLookupError,
      },
      options,
    );
  }
}

export namespace Ssl {
  export type SslLookupRequest = {
    domainName: string;
    /** @default false */
    chain?: boolean;
    /** @default false */
    sslRaw?: boolean;
    /** @default Format.Json */
    format?: Format;
  };

  export class SslLookupError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<SslLookupError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
