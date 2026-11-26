import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  environmentsUsedstorageResponseSchema,
  type EnvironmentsUsedstorageResponse,
} from "../models/environments-usedstorage-response.js";
import {
  errorResponseBusinessCentralAdministrationCenterStorageApiSchema,
  type ErrorResponseBusinessCentralAdministrationCenterStorageApi,
} from "../models/error-response-business-central-administration-center-storage-api.js";
import { quotasSchema, type Quotas } from "../models/quotas.js";
import { usedStorageSchema, type UsedStorage } from "../models/used-storage.js";
import type { Servers } from "../servers.js";

/**
 * View storage usage and quotas
 */
export class Storage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Storage Usage for All Environments
   *
   * @remarks
   * Returns storage usage information for all environments.
   *
   * @returns Successfully retrieved storage usage
   *
   * @throws {@link Storage.GetAllEnvironmentsStorageError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getAllEnvironmentsStorage(
    options?: RequestOptions,
  ): ApiPromise<EnvironmentsUsedstorageResponse, Storage.GetAllEnvironmentsStorageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate:
          this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
            "/environments/usedstorage",
          ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: environmentsUsedstorageResponseSchema },
        errorFactory: Storage.GetAllEnvironmentsStorageError,
      },
      options,
    );
  }

  /**
   * Get Environment Storage Usage
   *
   * @remarks
   * Returns used storage information for the specified environment.
   *
   * @returns Successfully retrieved storage usage
   *
   * @throws {@link Storage.GetEnvironmentStorageError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getEnvironmentStorage(
    request: Storage.GetEnvironmentStorageRequest,
    options?: RequestOptions,
  ): ApiPromise<UsedStorage, Storage.GetEnvironmentStorageError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi(
          "/applications/{applicationFamily}/environments/{environmentName}/usedstorage",
        ),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [
          {
            name: "applicationFamily",
            value: request.applicationFamily,
            schema: s.defaulted(s.string(), "BusinessCentral"),
          },
          { name: "environmentName", value: request.environmentName, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: usedStorageSchema },
        errorFactory: Storage.GetEnvironmentStorageError,
      },
      options,
    );
  }

  /**
   * Get Allowed Quotas
   *
   * @remarks
   * Returns the different types of quotas and their limits.
   *
   * @returns Successfully retrieved quotas
   *
   * @throws {@link Storage.GetQuotasError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link Dynamics365BusinessCentralError} when no usable response was produced: a
   * connection failure, a timeout, a body that would not decode, a value that would not encode, or
   * a credential that could not be obtained
   */
  getQuotas(options?: RequestOptions): ApiPromise<Quotas, Storage.GetQuotasError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate:
          this.#servers.defaultBusinessCentralAdministrationCenterAppManagementApi("/environments/quotas"),
        auth: anyAuth(
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
          this.#auth.bearerAuth,
        ),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: quotasSchema },
        errorFactory: Storage.GetQuotasError,
      },
      options,
    );
  }
}

export namespace Storage {
  export class GetAllEnvironmentsStorageError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterStorageApi",
          ErrorResponseBusinessCentralAdministrationCenterStorageApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAllEnvironmentsStorageError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterStorageApi",
        decode: { kind: "json", schema: errorResponseBusinessCentralAdministrationCenterStorageApiSchema },
      },
    ];
  }

  export type GetEnvironmentStorageRequest = {
    /** The application family (e.g., BusinessCentral) @default "BusinessCentral" */
    applicationFamily?: string;
    /** The name of the environment */
    environmentName: string;
  };

  export class GetEnvironmentStorageError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterStorageApi",
          ErrorResponseBusinessCentralAdministrationCenterStorageApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetEnvironmentStorageError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterStorageApi",
        decode: { kind: "json", schema: errorResponseBusinessCentralAdministrationCenterStorageApiSchema },
      },
    ];
  }

  export class GetQuotasError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorResponseBusinessCentralAdministrationCenterStorageApi",
          ErrorResponseBusinessCentralAdministrationCenterStorageApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetQuotasError> = [
      {
        on: 401,
        kind: "errorResponseBusinessCentralAdministrationCenterStorageApi",
        decode: { kind: "json", schema: errorResponseBusinessCentralAdministrationCenterStorageApiSchema },
      },
    ];
  }
}
