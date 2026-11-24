import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { accountListSchema, type AccountList } from "../models/account-list.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Accounts represent authenticated connections to external services and third-party platforms used
 * by automations as action targets.
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
   * Get all accounts
   *
   * @remarks
   * Retrieves all external service account connections configured for the automation project, such
   * as connections to Slack, email services, or other third-party platforms.
   *
   * @returns A list of external service account connections.
   *
   * @throws {@link Accounts.GetAllAccountsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAllAccounts(
    request: Accounts.GetAllAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountList, Accounts.GetAllAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackAutomateManagementAccountsApi(
          "/v1/organizations/{organization_uid}/projects/{project_uid}/accounts",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "project_uid", value: request.projectUid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountListSchema },
        errorFactory: Accounts.GetAllAccountsError,
      },
      options,
    );
  }
}

export namespace Accounts {
  export type GetAllAccountsRequest = {
    /** The unique identifier of the organization. */
    organizationUid: string;
    /** The unique identifier of the automation project. */
    projectUid: string;
  };

  export class GetAllAccountsError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetAllAccountsError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
