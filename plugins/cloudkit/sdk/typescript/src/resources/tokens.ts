import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

export class Tokens {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an APNs token for subscriptions
   *
   * @returns Token created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CloudKitError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createToken(options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tokens/create"),
        auth: anyAuth(this.#auth.cloudKitApiToken, this.#auth.serverToServer),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Register an APNs token
   *
   * @returns Token registered
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link CloudKitError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  registerToken(options?: RequestOptions): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/tokens/register"),
        auth: anyAuth(this.#auth.cloudKitApiToken, this.#auth.serverToServer),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}
