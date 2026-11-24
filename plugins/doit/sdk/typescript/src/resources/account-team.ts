import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  customersV1AccountTeamResponseSchema,
  type CustomersV1AccountTeamResponse,
} from "../models/customers-v1-account-team-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Find DoiT account managers assigned to your organization.
 */
export class AccountTeam {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List account team
   *
   * @remarks
   * Returns a list of all DoiT account managers assigned to your organization.
   *
   * @returns OK - List of account managers returned.
   *
   * @throws {@link AccountTeam.ListAccountTeamError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAccountTeam(
    options?: RequestOptions,
  ): ApiPromise<CustomersV1AccountTeamResponse, AccountTeam.ListAccountTeamError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/v1/accountTeam"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: customersV1AccountTeamResponseSchema },
        errorFactory: AccountTeam.ListAccountTeamError,
      },
      options,
    );
  }
}

export namespace AccountTeam {
  export class ListAccountTeamError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAccountTeamError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
