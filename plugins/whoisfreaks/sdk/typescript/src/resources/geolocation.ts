import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { geolocationResponseSchema, type GeolocationResponse } from "../models/geolocation-response.js";
import {
  v10GeolocationRequestInternalSchema,
  type V10GeolocationRequest,
} from "../models/v10-geolocation-request.js";
import type { Servers } from "../servers.js";

/**
 * IP geolocation lookup
 */
export class Geolocation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk IP Geolocation
   *
   * @remarks
   * Up to 100 IPs.
   *
   * @returns Successful response
   *
   * @throws {@link Geolocation.BulkGeolocationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkGeolocation(
    request: Geolocation.BulkGeolocationRequest,
    options?: RequestOptions,
  ): ApiPromise<GeolocationResponse[], Geolocation.BulkGeolocationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1.0/geolocation"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v10GeolocationRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => geolocationResponseSchema)) },
        errorFactory: Geolocation.BulkGeolocationError,
      },
      options,
    );
  }

  /**
   * IP Geolocation Lookup
   *
   * @remarks
   * Get location, ASN, currency for an IP. 1 credit.
   *
   * @returns Successful response
   *
   * @throws {@link Geolocation.GeolocationError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  geolocation(
    request: Geolocation.GeolocationRequest,
    options?: RequestOptions,
  ): ApiPromise<GeolocationResponse, Geolocation.GeolocationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1.0/geolocation"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "ip", value: request.ip, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: geolocationResponseSchema },
        errorFactory: Geolocation.GeolocationError,
      },
      options,
    );
  }
}

export namespace Geolocation {
  export type BulkGeolocationRequest = {
    body: V10GeolocationRequest;
  };

  export class BulkGeolocationError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<BulkGeolocationError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GeolocationRequest = {
    ip: string;
  };

  export class GeolocationError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<GeolocationError> = [
      { on: [400, 499], kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
