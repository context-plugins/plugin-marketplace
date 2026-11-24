import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { accountEnvelopeInternalSchema, type AccountEnvelope } from "../models/account-envelope.js";
import { errorEnvelopeInternalSchema, type ErrorEnvelope } from "../models/error-envelope.js";
import type { Servers } from "../servers.js";

/**
 * Account, plan and credit balance
 */
export class AccountApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Account, plan, credit balance and rate limit (0 credits)
   *
   * @remarks
   * Programmatic introspection of the authenticated key: credit balance, plan (code/name/status),
   * key env (live | sandbox) and the per-plan rate limit (requests/minute). Works for live and
   * sandbox keys; free and never billed.
   *
   * @returns Success.
   *
   * @throws {@link AccountApi.AccountError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link StayingApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  account(options?: RequestOptions): ApiPromise<AccountEnvelope, AccountApi.AccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/account"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountEnvelopeInternalSchema },
        errorFactory: AccountApi.AccountError,
      },
      options,
    );
  }
}

export namespace AccountApi {
  export class AccountError extends ApiError {
    declare readonly payload:
      | Declared<"errorEnvelope", ErrorEnvelope>
      | Declared<"errorEnvelope2", ErrorEnvelope>
      | Undeclared;

    static readonly errors: ErrorDecoders<AccountError> = [
      { on: 401, kind: "errorEnvelope", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
      { on: 429, kind: "errorEnvelope2", decode: { kind: "json", schema: errorEnvelopeInternalSchema } },
    ];
  }
}
