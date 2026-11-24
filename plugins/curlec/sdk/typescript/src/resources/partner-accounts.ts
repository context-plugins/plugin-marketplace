import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import { linkedAccountInternalSchema, type LinkedAccount } from "../models/linked-account.js";
import {
  v2AccountsRequestRazorpayPartnerAccountsApiInternalSchema,
  type V2AccountsRequestRazorpayPartnerAccountsApi,
} from "../models/v2-accounts-request-razorpay-partner-accounts-api.js";
import { v2AccountsResponseSchema, type V2AccountsResponse } from "../models/v2-accounts-response.js";
import type { Servers } from "../servers.js";

/**
 * Sub-merchant account lifecycle management via Partners API (Aggregator/Platform model). Uses
 * OAuth access_token authentication.
 */
export class PartnerAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete (suspend) a sub-merchant account
   *
   * @remarks
   * Suspend a sub-merchant account created via Partners API. Sets account status to 'suspended' and
   * returns suspended_at timestamp. Authentication: OAuth access_token as username with empty
   * password.
   *
   * @returns Account suspended
   *
   * @throws {@link PartnerAccounts.DeletePartnerAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePartnerAccount(
    request: PartnerAccounts.DeletePartnerAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<V2AccountsResponse, PartnerAccounts.DeletePartnerAccountError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2AccountsResponseSchema },
        errorFactory: PartnerAccounts.DeletePartnerAccountError,
      },
      options,
    );
  }

  /**
   * Fetch a Linked Account
   *
   * @remarks
   * Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch
   * sub-merchant account details (authentication: OAuth access_token).
   *
   * @returns Linked Account details.
   *
   * @throws {@link PartnerAccounts.FetchLinkedAccount2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchLinkedAccount2(
    request: PartnerAccounts.FetchLinkedAccount2Request,
    options?: RequestOptions,
  ): ApiPromise<LinkedAccount, PartnerAccounts.FetchLinkedAccount2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: linkedAccountInternalSchema },
        errorFactory: PartnerAccounts.FetchLinkedAccount2Error,
      },
      options,
    );
  }

  /**
   * Update a Linked Account
   *
   * @remarks
   * Update mutable fields of a Linked Account. email and business_type cannot be changed after
   * creation.
   *
   * @returns Linked Account updated.
   *
   * @throws {@link PartnerAccounts.UpdateLinkedAccount2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLinkedAccount2(
    request: PartnerAccounts.UpdateLinkedAccount2Request,
    options?: RequestOptions,
  ): ApiPromise<LinkedAccount, PartnerAccounts.UpdateLinkedAccount2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: v2AccountsRequestRazorpayPartnerAccountsApiInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: linkedAccountInternalSchema },
        errorFactory: PartnerAccounts.UpdateLinkedAccount2Error,
      },
      options,
    );
  }
}

export namespace PartnerAccounts {
  export type DeletePartnerAccountRequest = {
    /** Account ID with prefix acc_ */
    accountId: string;
  };

  export class DeletePartnerAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletePartnerAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchLinkedAccount2Request = {
    /** Linked Account ID (acc_*). */
    accountId: string;
  };

  export class FetchLinkedAccount2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchLinkedAccount2Error> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateLinkedAccount2Request = {
    /** Linked Account ID (acc_*). */
    accountId: string;
    body: V2AccountsRequestRazorpayPartnerAccountsApi;
  };

  export class UpdateLinkedAccount2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLinkedAccount2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
