import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  sharedPayerAccountMappingListSchema,
  type SharedPayerAccountMappingList,
} from "../models/shared-payer-account-mapping-list.js";
import {
  sharedPayerAccountReassignRequestSchema,
  type SharedPayerAccountReassignRequest,
} from "../models/shared-payer-account-reassign-request.js";
import {
  sharedPayerAccountReassignResultSchema,
  type SharedPayerAccountReassignResult,
} from "../models/shared-payer-account-reassign-result.js";
import { sharedPayerListSchema, type SharedPayerList } from "../models/shared-payer-list.js";
import {
  sharedPayerManagementAccountListSchema,
  type SharedPayerManagementAccountList,
} from "../models/shared-payer-management-account-list.js";
import type { Servers } from "../servers.js";

/**
 * Link and manage shared-payer account mappings for PartnerOps resellers (T2), reassigning AWS
 * accounts under a shared payer to T3 end customers.
 */
export class SharedPayers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * List shared-payer account mappings
   *
   * @remarks
   * Lists the AWS accounts under the reseller's linked shared payers, together with the end
   * customer each is currently mapped to. `{customerId}` (the reseller itself) means the account
   * has not yet been reassigned to an end customer. Each payer's own management account is included
   * alongside its member accounts. Requires the `SharedPayersAdmin` permission and DoiT API access
   * (`platform:externalApi`). User API tokens must include the permission in their scope.
   *
   * @returns OK - Shared-payer account mappings returned.
   *
   * @throws {@link SharedPayers.ListSharedPayerAccountMappingsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSharedPayerAccountMappings(
    request: SharedPayers.ListSharedPayerAccountMappingsRequest,
    options?: RequestOptions,
  ): ApiPromise<SharedPayerAccountMappingList, SharedPayers.ListSharedPayerAccountMappingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/customers/v1/customers/{customerId}/shared-payer-accounts"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [
          { name: "managementAccount", value: request.managementAccount, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sharedPayerAccountMappingListSchema },
        errorFactory: SharedPayers.ListSharedPayerAccountMappingsError,
      },
      options,
    );
  }

  /**
   * List shared-payer management accounts
   *
   * @remarks
   * Lists the reseller's linked shared-payer management (payer) accounts that have completed
   * onboarding, for use in an account picker. Requires the `SharedPayersAdmin` permission and DoiT
   * API access (`platform:externalApi`). User API tokens must include the permission in their
   * scope.
   *
   * @returns OK - Shared-payer management accounts returned.
   *
   * @throws {@link SharedPayers.ListSharedPayerManagementAccountsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSharedPayerManagementAccounts(
    request: SharedPayers.ListSharedPayerManagementAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<SharedPayerManagementAccountList, SharedPayers.ListSharedPayerManagementAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/customers/v1/customers/{customerId}/shared-payer-accounts/management-accounts",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sharedPayerManagementAccountListSchema },
        errorFactory: SharedPayers.ListSharedPayerManagementAccountsError,
      },
      options,
    );
  }

  /**
   * List shared payers with mapping progress
   *
   * @remarks
   * Lists every shared payer linked to the reseller, including ones still mid-onboarding, with
   * per-payer counts of linked and mapped accounts. Requires the `SharedPayersAdmin` permission and
   * DoiT API access (`platform:externalApi`). User API tokens must include the permission in their
   * scope.
   *
   * @returns OK - Shared payers returned.
   *
   * @throws {@link SharedPayers.ListSharedPayersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSharedPayers(
    request: SharedPayers.ListSharedPayersRequest,
    options?: RequestOptions,
  ): ApiPromise<SharedPayerList, SharedPayers.ListSharedPayersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/customers/v1/customers/{customerId}/shared-payer-accounts/payers",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sharedPayerListSchema },
        errorFactory: SharedPayers.ListSharedPayersError,
      },
      options,
    );
  }

  /**
   * Reassign a shared-payer account
   *
   * @remarks
   * Reassigns one AWS account under a linked shared payer - a member account or the payer's own
   * management account - to the reseller itself or to a T3 end customer within its hierarchy.
   * Requires the `SharedPayersAdmin` permission and DoiT API access (`platform:externalApi`). User
   * API tokens must include the permission in their scope.
   *
   * @returns OK - Account reassigned.
   *
   * @throws {@link SharedPayers.ReassignSharedPayerAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  reassignSharedPayerAccount(
    request: SharedPayers.ReassignSharedPayerAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<SharedPayerAccountReassignResult, SharedPayers.ReassignSharedPayerAccountError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/customers/v1/customers/{customerId}/shared-payer-accounts/{assetId}",
        ),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [
          { name: "customerId", value: request.customerId, schema: s.string() },
          { name: "assetId", value: request.assetId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: sharedPayerAccountReassignRequestSchema },
      },
      {
        success: { kind: "json", schema: sharedPayerAccountReassignResultSchema },
        errorFactory: SharedPayers.ReassignSharedPayerAccountError,
      },
      options,
    );
  }
}

export namespace SharedPayers {
  export type ListSharedPayerAccountMappingsRequest = {
    /**
     * Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
     * different customer gets `403`.
     */
    customerId: string;
    /** Restricts the results to accounts under this AWS management (payer) account ID. */
    managementAccount?: string;
  };

  export class ListSharedPayerAccountMappingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSharedPayerAccountMappingsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListSharedPayerManagementAccountsRequest = {
    /**
     * Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
     * different customer gets `403`.
     */
    customerId: string;
  };

  export class ListSharedPayerManagementAccountsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSharedPayerManagementAccountsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListSharedPayersRequest = {
    /**
     * Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
     * different customer gets `403`.
     */
    customerId: string;
  };

  export class ListSharedPayersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSharedPayersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ReassignSharedPayerAccountRequest = {
    /**
     * Customer ID. Must match the customer resolved from the bearer token - a token scoped to a
     * different customer gets `403`.
     */
    customerId: string;
    /** Asset ID of the AWS account to reassign, as returned by `listSharedPayerAccountMappings`. */
    assetId: string;
    body: SharedPayerAccountReassignRequest;
  };

  export class ReassignSharedPayerAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReassignSharedPayerAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
