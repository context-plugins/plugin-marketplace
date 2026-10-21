import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  nativeSsoLogoutRequestSchema,
  type NativeSsoLogoutRequest,
} from "../models/native-sso-logout-request.js";
import {
  nativeSsoLogoutResponseSchema,
  type NativeSsoLogoutResponse,
} from "../models/native-sso-logout-response.js";
import { nativeSsoRequestSchema, type NativeSsoRequest } from "../models/native-sso-request.js";
import { nativeSsoResponseSchema, type NativeSsoResponse } from "../models/native-sso-response.js";
import { resultSchema, type Result } from "../models/result.js";
import type { Servers } from "../servers.js";

/**
 * API endpoints for Native SSO
 */
export class NativeSso {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Native SSO Processing
   *
   * @remarks
   * This API should be called by the implementation of a token endpoint to generate the ID token
   * and token response that comply with [OpenID Connect Native SSO for Mobile Apps
   * 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html) (Native SSO) when Authlete’s
   * `/auth/token` response indicates `action = NATIVE_SSO` (after you validate the session id and
   * verify or generate the device secret as required by the flow). The token endpoint
   * implementation should retrieve the value of `action` from the response and take the following
   * steps according to the value.
   *
   * @returns Native SSO processing completed successfully
   *
   * @throws {@link NativeSso.NativeSsoApiError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nativeSsoApi(
    request: NativeSso.NativeSsoApiRequest,
    options?: RequestOptions,
  ): ApiPromise<NativeSsoResponse, NativeSso.NativeSsoApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/nativesso"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: nativeSsoRequestSchema },
      },
      {
        success: { kind: "json", schema: nativeSsoResponseSchema },
        errorFactory: NativeSso.NativeSsoApiError,
      },
      options,
    );
  }

  /**
   * Native SSO Logout Processing
   *
   * @remarks
   * The `/nativesso/logout` API is supposed to be used to support the concept of "logout from all
   * applications" in the context of [OpenID Connect Native SSO for Mobile Apps
   * 1.0](https://openid.net/specs/openid-connect-native-sso-1_0.html) (Native SSO). This is
   * accomplished by deleting access/refresh token records associated with the specified session ID.
   * In Authlete's implementation, access/refresh token records can be associated with a session ID
   * only through the mechanism introduced by Native SSO.
   *
   * @throws {@link NativeSso.NativeSsoLogoutApiError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nativeSsoLogoutApi(
    request: NativeSso.NativeSsoLogoutApiRequest,
    options?: RequestOptions,
  ): ApiPromise<NativeSsoLogoutResponse, NativeSso.NativeSsoLogoutApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/nativesso/logout"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: nativeSsoLogoutRequestSchema },
      },
      {
        success: { kind: "json", schema: nativeSsoLogoutResponseSchema },
        errorFactory: NativeSso.NativeSsoLogoutApiError,
      },
      options,
    );
  }
}

export namespace NativeSso {
  export type NativeSsoApiRequest = {
    /** A service ID. */
    serviceId: string;
    body: NativeSsoRequest;
  };

  export class NativeSsoApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<NativeSsoApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }

  export type NativeSsoLogoutApiRequest = {
    /** A service ID. */
    serviceId: string;
    body: NativeSsoLogoutRequest;
  };

  export class NativeSsoLogoutApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<NativeSsoLogoutApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
