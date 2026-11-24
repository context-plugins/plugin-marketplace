import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { ipReputationResponseSchema, type IpReputationResponse } from "../models/ip-reputation-response.js";
import { v10SecurityRequestInternalSchema, type V10SecurityRequest } from "../models/v10-security-request.js";
import type { Servers } from "../servers.js";

/**
 * IP threat intelligence
 */
export class IpReputation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk IP Reputation
   *
   * @remarks
   * Up to 100 IPs.
   *
   * @returns Successful response
   *
   * @throws {@link IpReputation.BulkIpReputationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkIpReputation(
    request: IpReputation.BulkIpReputationRequest,
    options?: RequestOptions,
  ): ApiPromise<IpReputationResponse[], IpReputation.BulkIpReputationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1.0/security"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v10SecurityRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => ipReputationResponseSchema)) },
        errorFactory: IpReputation.BulkIpReputationError,
      },
      options,
    );
  }

  /**
   * IP Reputation Lookup
   *
   * @remarks
   * Threat intel for IP — VPN, proxy, Tor, bots. 1 credit.
   *
   * @returns Successful response
   *
   * @throws {@link IpReputation.IpReputationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ipReputation(
    request: IpReputation.IpReputationRequest,
    options?: RequestOptions,
  ): ApiPromise<IpReputationResponse, IpReputation.IpReputationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1.0/security"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "ip", value: request.ip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ipReputationResponseSchema },
        errorFactory: IpReputation.IpReputationError,
      },
      options,
    );
  }
}

export namespace IpReputation {
  export type BulkIpReputationRequest = {
    body: V10SecurityRequest;
  };

  export class BulkIpReputationError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<BulkIpReputationError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type IpReputationRequest = {
    ip: string;
  };

  export class IpReputationError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<IpReputationError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
