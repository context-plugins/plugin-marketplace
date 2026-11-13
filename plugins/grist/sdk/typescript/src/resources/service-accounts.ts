import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createServiceAccountSchema, type CreateServiceAccount } from "../models/create-service-account.js";
import { gristErrorSchema, type GristError } from "../models/grist-error.js";
import { serviceAccountBodySchema, type ServiceAccountBody } from "../models/service-account-body.js";
import {
  serviceAccountResultWithApiKeySchema,
  type ServiceAccountResultWithApiKey,
} from "../models/service-account-result-with-api-key.js";
import { serviceAccountResultSchema, type ServiceAccountResult } from "../models/service-account-result.js";
import {
  serviceAccountsApikeyResponseSchema,
  type ServiceAccountsApikeyResponse,
} from "../models/unions/service-accounts-apikey-response.js";
import {
  serviceAccountsResponseSchema,
  type ServiceAccountsResponse,
} from "../models/unions/service-accounts-response.js";
import type { Servers } from "../servers.js";

/**
 * Impersonations to manage grist resources through REST APIs with specific rights.
 */
export class ServiceAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a service account
   *
   * @remarks
   * This creates a new service account with a new API key.
   *
   * @returns The service account created
   *
   * @throws {@link ServiceAccounts.CreateServiceAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createServiceAccount(
    request: ServiceAccounts.CreateServiceAccountRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ServiceAccountResultWithApiKey, ServiceAccounts.CreateServiceAccountError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/service-accounts"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createServiceAccountSchema)),
        },
      },
      {
        success: { kind: "json", schema: serviceAccountResultWithApiKeySchema },
        errorFactory: ServiceAccounts.CreateServiceAccountError,
      },
      options,
    );
  }

  /**
   * Delete a service account
   *
   * @remarks
   * This deletes a given service account.
   *
   * @returns Service account deleted successfully. Returns empty body.
   *
   * @throws {@link ServiceAccounts.DeleteServiceAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteServiceAccount(
    request: ServiceAccounts.DeleteServiceAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceAccountsResponse, ServiceAccounts.DeleteServiceAccountError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/service-accounts/{saId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "saId", value: request.saId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceAccountsResponseSchema },
        errorFactory: ServiceAccounts.DeleteServiceAccountError,
      },
      options,
    );
  }

  /**
   * Delete a service account's api key
   *
   * @remarks
   * Deletes the API key for a service account. The service account will no longer be able to
   * authenticate until a new key is generated.
   *
   * @returns API key deleted successfully. Returns empty body.
   *
   * @throws {@link ServiceAccounts.DeleteServiceAccountApiKeyError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteServiceAccountApiKey(
    request: ServiceAccounts.DeleteServiceAccountApiKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceAccountsApikeyResponse, ServiceAccounts.DeleteServiceAccountApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/service-accounts/{saId}/apikey"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "saId", value: request.saId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceAccountsApikeyResponseSchema },
        errorFactory: ServiceAccounts.DeleteServiceAccountApiKeyError,
      },
      options,
    );
  }

  /**
   * Get a service account's details
   *
   * @remarks
   * This reports the details of a service account.
   *
   * @returns Details of the service account
   *
   * @throws {@link ServiceAccounts.GetServiceAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getServiceAccount(
    request: ServiceAccounts.GetServiceAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceAccountResult, ServiceAccounts.GetServiceAccountError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/service-accounts/{saId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "saId", value: request.saId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceAccountResultSchema },
        errorFactory: ServiceAccounts.GetServiceAccountError,
      },
      options,
    );
  }

  /**
   * Get all your service accounts
   *
   * @remarks
   * This lists all your service accounts with their details.
   *
   * @returns Array of your service accounts
   *
   * @throws {@link ServiceAccounts.ListServiceAccountsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceAccounts(
    options?: RequestOptions,
  ): ApiPromise<ServiceAccountResult[], ServiceAccounts.ListServiceAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/service-accounts"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => serviceAccountResultSchema)) },
        errorFactory: ServiceAccounts.ListServiceAccountsError,
      },
      options,
    );
  }

  /**
   * Modify a service account
   *
   * @remarks
   * This updates a service account's label, description or expiration date.
   *
   * @returns Success (empty body)
   *
   * @throws {@link ServiceAccounts.ModifyServiceAccountError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  modifyServiceAccount(
    request: ServiceAccounts.ModifyServiceAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceAccountsResponse, ServiceAccounts.ModifyServiceAccountError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/service-accounts/{saId}"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "saId", value: request.saId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => serviceAccountBodySchema)),
        },
      },
      {
        success: { kind: "json", schema: serviceAccountsResponseSchema },
        errorFactory: ServiceAccounts.ModifyServiceAccountError,
      },
      options,
    );
  }

  /**
   * Generate a new service account's api key
   *
   * @remarks
   * This renews an api key of a given service account. Useful especially to change the API key when
   * it has been leaked.
   *
   * @returns The service account with the new API key
   *
   * @throws {@link ServiceAccounts.RegenerateServiceAccountApiKeyError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GristApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  regenerateServiceAccountApiKey(
    request: ServiceAccounts.RegenerateServiceAccountApiKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ServiceAccountResultWithApiKey, ServiceAccounts.RegenerateServiceAccountApiKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/service-accounts/{saId}/apikey"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "saId", value: request.saId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: serviceAccountResultWithApiKeySchema },
        errorFactory: ServiceAccounts.RegenerateServiceAccountApiKeyError,
      },
      options,
    );
  }
}

export namespace ServiceAccounts {
  export type CreateServiceAccountRequest = {
    body?: CreateServiceAccount;
  };

  export class CreateServiceAccountError extends ApiError {
    declare readonly payload: Declared<"gristError", GristError> | Undeclared;

    static readonly errors: ErrorDecoders<CreateServiceAccountError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type DeleteServiceAccountRequest = {
    /** A service account id */
    saId: number;
  };

  export class DeleteServiceAccountError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteServiceAccountError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type DeleteServiceAccountApiKeyRequest = {
    /** A service account id */
    saId: number;
  };

  export class DeleteServiceAccountApiKeyError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteServiceAccountApiKeyError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type GetServiceAccountRequest = {
    /** A service account id */
    saId: number;
  };

  export class GetServiceAccountError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetServiceAccountError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export class ListServiceAccountsError extends ApiError {
    declare readonly payload: Declared<"gristError", GristError> | Undeclared;

    static readonly errors: ErrorDecoders<ListServiceAccountsError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type ModifyServiceAccountRequest = {
    /** A service account id */
    saId: number;
    body?: ServiceAccountBody;
  };

  export class ModifyServiceAccountError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<ModifyServiceAccountError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }

  export type RegenerateServiceAccountApiKeyRequest = {
    /** A service account id */
    saId: number;
  };

  export class RegenerateServiceAccountApiKeyError extends ApiError {
    declare readonly payload:
      | Declared<"gristError", GristError>
      | Declared<"gristError2", GristError>
      | Undeclared;

    static readonly errors: ErrorDecoders<RegenerateServiceAccountApiKeyError> = [
      { on: 403, kind: "gristError", decode: { kind: "json", schema: gristErrorSchema } },
      { on: 404, kind: "gristError2", decode: { kind: "json", schema: gristErrorSchema } },
    ];
  }
}
