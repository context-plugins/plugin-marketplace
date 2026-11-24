import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  domainReputationResponseSchema,
  type DomainReputationResponse,
} from "../models/domain-reputation-response.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { Format, formatSchema } from "../models/format.js";
import type { Servers } from "../servers.js";

/**
 * Real-time domain threat assessment and trust scoring
 */
export class DomainReputation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Domain Reputation Lookup
   *
   * @remarks
   * Real-time domain threat assessment. Returns risk verdict, trust score, DGA analysis, threat
   * intelligence matches, and security signals. 1 credit.
   *
   * @returns Successful response
   *
   * @throws {@link DomainReputation.DomainReputationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  domainReputation(
    request: DomainReputation.DomainReputationRequest,
    options?: RequestOptions,
  ): ApiPromise<DomainReputationResponse, DomainReputation.DomainReputationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/domain/security"),
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
        success: { kind: "json", schema: domainReputationResponseSchema },
        errorFactory: DomainReputation.DomainReputationError,
      },
      options,
    );
  }
}

export namespace DomainReputation {
  export type DomainReputationRequest = {
    /** The domain name to assess */
    domainName: string;
    /** @default Format.Json */
    format?: Format;
  };

  export class DomainReputationError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<DomainReputationError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
