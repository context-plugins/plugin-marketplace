import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { hskCreateResponseSchema, type HskCreateResponse } from "../models/hsk-create-response.js";
import { hskDeleteResponseSchema, type HskDeleteResponse } from "../models/hsk-delete-response.js";
import { hskGetListResponseSchema, type HskGetListResponse } from "../models/hsk-get-list-response.js";
import { resultSchema, type Result } from "../models/result.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for managing hardware security keys (HSK).
 */
export class HardwareSecurityKey {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Security Key
   *
   * @returns HSK created successfully
   *
   * @throws {@link HardwareSecurityKey.HskCreateApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hskCreateApi(
    request: HardwareSecurityKey.HskCreateApiRequest,
    options?: RequestOptions,
  ): ApiPromise<HskCreateResponse, HardwareSecurityKey.HskCreateApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/hsk/create"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "kty", value: request.kty, schema: s.optional(s.string()) },
            { name: "use", value: request.use, schema: s.optional(s.string()) },
            { name: "kid", value: request.kid, schema: s.optional(s.string()) },
            { name: "hsmName", value: request.hsmName, schema: s.optional(s.string()) },
            { name: "alg", value: request.alg, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: hskCreateResponseSchema },
        errorFactory: HardwareSecurityKey.HskCreateApiError,
      },
      options,
    );
  }

  /**
   * Delete Security Key
   *
   * @returns HSK deleted successfully
   *
   * @throws {@link HardwareSecurityKey.HskDeleteApiError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hskDeleteApi(
    request: HardwareSecurityKey.HskDeleteApiRequest,
    options?: RequestOptions,
  ): ApiPromise<HskDeleteResponse, HardwareSecurityKey.HskDeleteApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/{serviceId}/hsk/delete/{handle}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "handle", value: request.handle, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: hskDeleteResponseSchema },
        errorFactory: HardwareSecurityKey.HskDeleteApiError,
      },
      options,
    );
  }

  /**
   * Get Security Key
   *
   * @throws {@link HardwareSecurityKey.HskGetApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hskGetApi(
    request: HardwareSecurityKey.HskGetApiRequest,
    options?: RequestOptions,
  ): ApiPromise<HskDeleteResponse, HardwareSecurityKey.HskGetApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/hsk/get/{handle}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "serviceId", value: request.serviceId, schema: s.string() },
          { name: "handle", value: request.handle, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: hskDeleteResponseSchema },
        errorFactory: HardwareSecurityKey.HskGetApiError,
      },
      options,
    );
  }

  /**
   * List Security Keys
   *
   * @returns HSK list retrieved successfully
   *
   * @throws {@link HardwareSecurityKey.HskGetListApiError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  hskGetListApi(
    request: HardwareSecurityKey.HskGetListApiRequest,
    options?: RequestOptions,
  ): ApiPromise<HskGetListResponse, HardwareSecurityKey.HskGetListApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/{serviceId}/hsk/get/list"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: hskGetListResponseSchema },
        errorFactory: HardwareSecurityKey.HskGetListApiError,
      },
      options,
    );
  }
}

export namespace HardwareSecurityKey {
  export type HskCreateApiRequest = {
    /** A service ID. */
    serviceId: string;
    /** The key type (EC or RSA) */
    kty?: string;
    /**
     * The key on the HSM. When the key use is "sig" (signature), the private key on the HSM is used
     * to sign data and the corresponding public key is used to verify the signature. When the key
     * use is "enc" (encryption), the private key on the HSM is used to decrypt encrypted data which
     * have been encrypted with the corresponding public key
     */
    use?: string;
    /** Key ID for the key on the HSM. */
    kid?: string;
    /**
     * The name of the HSM. The identifier for the HSM that sits behind the Authlete server. For
     * example, "google".
     */
    hsmName?: string;
    /**
     * The algorithm of the key on the HSM. When the key use is `"sig"`, the algorithm represents a
     * signing algorithm such as `"ES256"`. When the key use is `"enc"`, the algorithm represents an
     * encryption algorithm such as `"RSA-OAEP-256"`.
     *
     * It is rare that HSMs support all the algorithms listed in [RFC 7518 JSON Web Algorithms
     * (JWA)](https://www.rfc-editor.org/rfc/rfc7518.html). When the specified algorithm is not
     * supported by the HSM, the request to the `/hsk/create` API fails.
     */
    alg?: string;
  };

  export class HskCreateApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<HskCreateApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type HskDeleteApiRequest = {
    /** A service ID. */
    serviceId: string;
    handle: string;
  };

  export class HskDeleteApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<HskDeleteApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type HskGetApiRequest = {
    /** A service ID. */
    serviceId: string;
    handle: string;
  };

  export class HskGetApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<HskGetApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type HskGetListApiRequest = {
    /** A service ID. */
    serviceId: string;
  };

  export class HskGetListApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<HskGetListApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
