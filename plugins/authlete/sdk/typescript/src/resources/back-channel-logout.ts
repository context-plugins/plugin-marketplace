import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  backchannelLogoutTokenRequestSchema,
  type BackchannelLogoutTokenRequest,
} from "../models/backchannel-logout-token-request.js";
import {
  backchannelLogoutTokenResponseSchema,
  type BackchannelLogoutTokenResponse,
} from "../models/backchannel-logout-token-response.js";
import { resultSchema, type Result } from "../models/result.js";
import type { Servers } from "../servers.js";

export class BackChannelLogout {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Backchannel Logout Token Issuing
   *
   * @remarks
   * The `/backchannel/logout/token` API issues a logout token for a client application in the
   * context of [OpenID Connect Back-Channel Logout
   * 1.0](https://openid.net/specs/openid-connect-backchannel-1_0.html).
   *
   * @throws {@link BackChannelLogout.BackchannelLogoutTokenApiError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AuthleteApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  backchannelLogoutTokenApi(
    request: BackChannelLogout.BackchannelLogoutTokenApiRequest,
    options?: RequestOptions,
  ): ApiPromise<BackchannelLogoutTokenResponse, BackChannelLogout.BackchannelLogoutTokenApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/{serviceId}/backchannel/logout/token"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "serviceId", value: request.serviceId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: backchannelLogoutTokenRequestSchema },
      },
      {
        success: { kind: "json", schema: backchannelLogoutTokenResponseSchema },
        errorFactory: BackChannelLogout.BackchannelLogoutTokenApiError,
      },
      options,
    );
  }
}

export namespace BackChannelLogout {
  export type BackchannelLogoutTokenApiRequest = {
    /** A service ID. */
    serviceId: string;
    body: BackchannelLogoutTokenRequest;
  };

  export class BackchannelLogoutTokenApiError extends ApiError {
    declare readonly payload:
      | Declared<"result", Result>
      | Declared<"result2", Result>
      | Declared<"result3", Result>
      | Declared<"result4", Result>
      | Declared<"result5", Result>
      | Undeclared;

    static readonly errors: ErrorDecoders<BackchannelLogoutTokenApiError> = [
      { on: 400, kind: "result", decode: { kind: "json", schema: resultSchema } },
      { on: 401, kind: "result2", decode: { kind: "json", schema: resultSchema } },
      { on: 403, kind: "result3", decode: { kind: "json", schema: resultSchema } },
      { on: 429, kind: "result4", decode: { kind: "json", schema: resultSchema } },
      { on: 500, kind: "result5", decode: { kind: "json", schema: resultSchema } },
    ];
  }
}
