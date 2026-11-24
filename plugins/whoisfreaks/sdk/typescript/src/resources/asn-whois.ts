import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { asnWhoisResponseSchema, type AsnWhoisResponse } from "../models/asn-whois-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { Format, formatSchema } from "../models/format.js";
import type { Servers } from "../servers.js";

/**
 * Autonomous System Number WHOIS
 */
export class AsnWhois {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * ASN WHOIS Lookup
   *
   * @remarks
   * WHOIS for an ASN. 1 credit.
   *
   * @returns Successful response
   *
   * @throws {@link AsnWhois.AsnWhoisError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  asnWhois(
    request: AsnWhois.AsnWhoisRequest,
    options?: RequestOptions,
  ): ApiPromise<AsnWhoisResponse, AsnWhois.AsnWhoisError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2.0/asn-whois"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "asn", value: request.asn, schema: s.string() },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: asnWhoisResponseSchema },
        errorFactory: AsnWhois.AsnWhoisError,
      },
      options,
    );
  }
}

export namespace AsnWhois {
  export type AsnWhoisRequest = {
    asn: string;
    /** @default Format.Json */
    format?: Format;
  };

  export class AsnWhoisError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<AsnWhoisError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
