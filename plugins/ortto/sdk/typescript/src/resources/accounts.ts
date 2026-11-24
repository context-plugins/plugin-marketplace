import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { accountsMergeRequestSchema, type AccountsMergeRequest } from "../models/accounts-merge-request.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Create, update, retrieve, and manage accounts (organizations).
 */
export class Accounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create or update one or more accounts (merge)
   *
   * @remarks
   * Creates or updates accounts (previously called organizations) using the same merge semantics as
   * people.
   *
   * @returns Accounts created or updated.
   *
   * @throws {@link Accounts.MergeAccountsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link OrttoError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  mergeAccounts(
    request: Accounts.MergeAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Accounts.MergeAccountsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/accounts/merge"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: accountsMergeRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: Accounts.MergeAccountsError,
      },
      options,
    );
  }
}

export namespace Accounts {
  export type MergeAccountsRequest = {
    body: AccountsMergeRequest;
  };

  export class MergeAccountsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<MergeAccountsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
