import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  authenticationException1Schema,
  type AuthenticationException1,
} from "../models/authentication-exception1.js";
import { ssoAccountResourceSchema, type SsoAccountResource } from "../models/sso-account-resource.js";
import type { Servers } from "../servers.js";

export class SsoAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Sso account
   *
   * @returns `SsoAccountResource`
   *
   * @throws {@link SsoAccounts.SsoAccountError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GivebutterError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  ssoAccount(options?: RequestOptions): ApiPromise<SsoAccountResource, SsoAccounts.SsoAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/sso/v1/account"),
        auth: this.#auth.http,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ssoAccountResourceSchema },
        errorFactory: SsoAccounts.SsoAccountError,
      },
      options,
    );
  }
}

export namespace SsoAccounts {
  export class SsoAccountError extends ApiError {
    declare readonly payload: Declared<"authenticationException1", AuthenticationException1> | Undeclared;

    static readonly errors: ErrorDecoders<SsoAccountError> = [
      {
        on: 401,
        kind: "authenticationException1",
        decode: { kind: "json", schema: authenticationException1Schema },
      },
    ];
  }
}
