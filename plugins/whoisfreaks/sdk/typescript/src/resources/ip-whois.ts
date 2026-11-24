import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { Format, formatSchema } from "../models/format.js";
import { ipWhoisResponseSchema, type IpWhoisResponse } from "../models/ip-whois-response.js";
import type { Servers } from "../servers.js";

/**
 * IP address WHOIS
 */
export class IpWhois {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * IP WHOIS Lookup
   *
   * @remarks
   * WHOIS for an IP address. 1 credit.
   *
   * @returns Successful response
   *
   * @throws {@link IpWhois.IpWhoisError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ipWhois(
    request: IpWhois.IpWhoisRequest,
    options?: RequestOptions,
  ): ApiPromise<IpWhoisResponse, IpWhois.IpWhoisError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1.0/ip-whois"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "ip", value: request.ip, schema: s.string() },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ipWhoisResponseSchema },
        errorFactory: IpWhois.IpWhoisError,
      },
      options,
    );
  }
}

export namespace IpWhois {
  export type IpWhoisRequest = {
    ip: string;
    /** @default Format.Json */
    format?: Format;
  };

  export class IpWhoisError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<IpWhoisError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
