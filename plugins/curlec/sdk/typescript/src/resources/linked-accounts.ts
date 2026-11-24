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
import { productConfigurationSchema, type ProductConfiguration } from "../models/product-configuration.js";
import { stakeholderInternalSchema, type Stakeholder } from "../models/stakeholder.js";
import {
  v2AccountsProductsRequestSchema,
  type V2AccountsProductsRequest,
} from "../models/v2-accounts-products-request.js";
import {
  v2AccountsProductsRequest1Schema,
  type V2AccountsProductsRequest1,
} from "../models/v2-accounts-products-request1.js";
import { v2AccountsRequestInternalSchema, type V2AccountsRequest } from "../models/v2-accounts-request.js";
import { v2AccountsRequest1InternalSchema, type V2AccountsRequest1 } from "../models/v2-accounts-request1.js";
import {
  v2AccountsStakeholdersRequestInternalSchema,
  type V2AccountsStakeholdersRequest,
} from "../models/v2-accounts-stakeholders-request.js";
import {
  v2AccountsStakeholdersRequest1InternalSchema,
  type V2AccountsStakeholdersRequest1,
} from "../models/v2-accounts-stakeholders-request1.js";
import type { Servers } from "../servers.js";

/**
 * Sub-merchant accounts (Linked Accounts) created under a Route marketplace. Includes account
 * creation, stakeholder KYC, and Route product activation. Uses /v2/ API base path. Only one
 * stakeholder is allowed per Linked Account. email and business_type cannot be changed after
 * creation.
 */
export class LinkedAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Linked Account
   *
   * @remarks
   * Create a sub-merchant (Linked Account) under a Route marketplace. The account type must be
   * 'route'. Email and business_type cannot be changed after creation. Only one stakeholder is
   * allowed per Linked Account.
   *
   * @returns Linked Account created.
   *
   * @throws {@link LinkedAccounts.CreateLinkedAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLinkedAccount(
    request: LinkedAccounts.CreateLinkedAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkedAccount, LinkedAccounts.CreateLinkedAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/accounts"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v2AccountsRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: linkedAccountInternalSchema },
        errorFactory: LinkedAccounts.CreateLinkedAccountError,
      },
      options,
    );
  }

  /**
   * Create a Stakeholder
   *
   * @remarks
   * Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route
   * Linked Account. PAN 4th character must be 'P' (individual PAN).
   *
   * @returns Stakeholder created.
   *
   * @throws {@link LinkedAccounts.CreateStakeholderError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStakeholder(
    request: LinkedAccounts.CreateStakeholderRequest,
    options?: RequestOptions,
  ): ApiPromise<Stakeholder, LinkedAccounts.CreateStakeholderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/stakeholders"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v2AccountsStakeholdersRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: stakeholderInternalSchema },
        errorFactory: LinkedAccounts.CreateStakeholderError,
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
   * @throws {@link LinkedAccounts.FetchLinkedAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchLinkedAccount(
    request: LinkedAccounts.FetchLinkedAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkedAccount, LinkedAccounts.FetchLinkedAccountError> {
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
        errorFactory: LinkedAccounts.FetchLinkedAccountError,
      },
      options,
    );
  }

  /**
   * Fetch product configuration
   *
   * @remarks
   * Retrieve the current product configuration and activation status for a Linked Account.
   *
   * @returns Product configuration details.
   *
   * @throws {@link LinkedAccounts.FetchProductConfigError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchProductConfig(
    request: LinkedAccounts.FetchProductConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductConfiguration, LinkedAccounts.FetchProductConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/products/{product_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [
          { name: "account_id", value: request.accountId, schema: s.string() },
          { name: "product_id", value: request.productId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productConfigurationSchema },
        errorFactory: LinkedAccounts.FetchProductConfigError,
      },
      options,
    );
  }

  /**
   * Request Route product configuration
   *
   * @remarks
   * Request activation of the Route product for a Linked Account. Submits the account for review
   * and KYC. Activation progresses: requested → under_review → activated.
   *
   * @returns Product configuration created.
   *
   * @throws {@link LinkedAccounts.RequestProductConfigError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  requestProductConfig(
    request: LinkedAccounts.RequestProductConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductConfiguration, LinkedAccounts.RequestProductConfigError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/products"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v2AccountsProductsRequestSchema },
      },
      {
        success: { kind: "json", schema: productConfigurationSchema },
        errorFactory: LinkedAccounts.RequestProductConfigError,
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
   * @throws {@link LinkedAccounts.UpdateLinkedAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLinkedAccount(
    request: LinkedAccounts.UpdateLinkedAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<LinkedAccount, LinkedAccounts.UpdateLinkedAccountError> {
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
        body: { kind: "json", value: request.body, schema: v2AccountsRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: linkedAccountInternalSchema },
        errorFactory: LinkedAccounts.UpdateLinkedAccountError,
      },
      options,
    );
  }

  /**
   * Update product configuration
   *
   * @remarks
   * Update settlement details or other configuration for a Route product on a Linked Account.
   *
   * @returns Product configuration updated.
   *
   * @throws {@link LinkedAccounts.UpdateProductConfigError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateProductConfig(
    request: LinkedAccounts.UpdateProductConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<ProductConfiguration, LinkedAccounts.UpdateProductConfigError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/products/{product_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [
          { name: "account_id", value: request.accountId, schema: s.string() },
          { name: "product_id", value: request.productId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v2AccountsProductsRequest1Schema },
      },
      {
        success: { kind: "json", schema: productConfigurationSchema },
        errorFactory: LinkedAccounts.UpdateProductConfigError,
      },
      options,
    );
  }

  /**
   * Update a Stakeholder
   *
   * @remarks
   * Update stakeholder information for a Linked Account.
   *
   * @returns Stakeholder updated.
   *
   * @throws {@link LinkedAccounts.UpdateStakeholderError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateStakeholder(
    request: LinkedAccounts.UpdateStakeholderRequest,
    options?: RequestOptions,
  ): ApiPromise<Stakeholder, LinkedAccounts.UpdateStakeholderError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [
          { name: "account_id", value: request.accountId, schema: s.string() },
          { name: "stakeholder_id", value: request.stakeholderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v2AccountsStakeholdersRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: stakeholderInternalSchema },
        errorFactory: LinkedAccounts.UpdateStakeholderError,
      },
      options,
    );
  }
}

export namespace LinkedAccounts {
  export type CreateLinkedAccountRequest = {
    body: V2AccountsRequest;
  };

  export class CreateLinkedAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLinkedAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type CreateStakeholderRequest = {
    /** Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). */
    accountId: string;
    body: V2AccountsStakeholdersRequest;
  };

  export class CreateStakeholderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStakeholderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchLinkedAccountRequest = {
    /** Linked Account ID (acc_*). */
    accountId: string;
  };

  export class FetchLinkedAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchLinkedAccountError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchProductConfigRequest = {
    /** Linked Account ID (acc_*). */
    accountId: string;
    /** Product configuration ID (acc_prd_*). */
    productId: string;
  };

  export class FetchProductConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchProductConfigError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RequestProductConfigRequest = {
    /** Linked Account ID (acc_*). */
    accountId: string;
    body: V2AccountsProductsRequest;
  };

  export class RequestProductConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RequestProductConfigError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateLinkedAccountRequest = {
    /** Linked Account ID (acc_*). */
    accountId: string;
    body: V2AccountsRequest1;
  };

  export class UpdateLinkedAccountError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLinkedAccountError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateProductConfigRequest = {
    /** Linked Account ID (acc_*). */
    accountId: string;
    /** Product configuration ID (acc_prd_*). */
    productId: string;
    body: V2AccountsProductsRequest1;
  };

  export class UpdateProductConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProductConfigError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateStakeholderRequest = {
    /** Linked Account ID (acc_*). */
    accountId: string;
    /** Stakeholder ID (sth_*). */
    stakeholderId: string;
    body: V2AccountsStakeholdersRequest1;
  };

  export class UpdateStakeholderError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStakeholderError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
